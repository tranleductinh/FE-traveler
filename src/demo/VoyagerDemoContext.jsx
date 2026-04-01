import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { createInitialVoyagerDemoState } from './voyagerDemoData'

const STORAGE_KEY = 'voyager-demo-state-v3'
const VoyagerDemoContext = createContext(null)

function cloneState(value) {
  return JSON.parse(JSON.stringify(value))
}

function getFreshState() {
  return cloneState(createInitialVoyagerDemoState())
}

function addDays(dateString, days) {
  const date = new Date(`${dateString}T00:00:00`)
  date.setDate(date.getDate() + days)
  return date.toISOString().slice(0, 10)
}

function createTimeline(itineraryTemplate, startDate, mode = 'scheduled') {
  return itineraryTemplate.map((dayTemplate, index) => ({
    dayNumber: dayTemplate.dayNumber,
    date: addDays(startDate, index),
    title: dayTemplate.title,
    summary: dayTemplate.summary,
    activities: dayTemplate.activities.map((activity) => ({
      ...activity,
      note: activity.note ?? '',
      status: mode === 'completed' ? 'Completed' : 'Pending',
    })),
  }))
}

function loadPersistedState() {
  if (typeof window === 'undefined') {
    return getFreshState()
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return getFreshState()
    }

    const freshState = getFreshState()
    const persistedState = JSON.parse(raw)
    const tours = (persistedState.tours ?? freshState.tours).map((tour) => {
      const freshTour = freshState.tours.find((item) => item.id === tour.id)
      return freshTour ? { ...freshTour, ...tour } : tour
    })
    const toursById = Object.fromEntries(tours.map((tour) => [tour.id, tour]))
    const bookings = (persistedState.bookings ?? freshState.bookings).map((booking) => {
      const tour = toursById[booking.tourId]
      const selectedHotelOption = getOptionById(tour?.hotelOptions, booking.selectedHotelOptionId)
      const selectedTransportOption = getOptionById(
        tour?.transportOptions,
        booking.selectedTransportOptionId,
      )

      return {
        ...booking,
        selectedHotelOptionId: booking.selectedHotelOptionId ?? selectedHotelOption?.id ?? null,
        selectedTransportOptionId:
          booking.selectedTransportOptionId ?? selectedTransportOption?.id ?? null,
        serviceSelectionStatus:
          booking.serviceSelectionStatus ??
          (booking.status === 'confirmed' || booking.status === 'completed'
            ? 'confirmed'
            : 'pending_provider_confirmation'),
        providerServiceNote:
          booking.providerServiceNote ??
          'Selected hotel and transport will be shown here once the provider reviews availability.',
        roomType: booking.roomType ?? selectedHotelOption?.roomType ?? 'Service selection pending',
      }
    })

    return {
      ...freshState,
      ...persistedState,
      tours,
      guides: persistedState.guides ?? freshState.guides,
      bookings,
      planner: {
        ...freshState.planner,
        ...persistedState.planner,
      },
      ui: {
        ...freshState.ui,
        ...persistedState.ui,
      },
    }
  } catch {
    return getFreshState()
  }
}

function findCurrentActivity(booking) {
  if (!booking?.execution?.timelineDays) {
    return null
  }

  for (const day of booking.execution.timelineDays) {
    const ongoing = day.activities.find((activity) => activity.status === 'Ongoing')
    if (ongoing) {
      return { activity: ongoing, day }
    }
  }

  for (const day of booking.execution.timelineDays) {
    const pending = day.activities.find((activity) => activity.status === 'Pending')
    if (pending) {
      return { activity: pending, day }
    }
  }

  return null
}

function getTimelineProgress(timelineDays) {
  const activities = timelineDays?.flatMap((day) => day.activities) ?? []
  const completed = activities.filter((activity) => activity.status === 'Completed').length

  return {
    completed,
    total: activities.length,
    percent: activities.length ? Math.round((completed / activities.length) * 100) : 0,
  }
}

function buildPlannerOutput(planner) {
  const destination = planner.destination.toLowerCase()

  if (destination.includes('da nang')) {
    return {
      badge: 'AI RECOMMENDED',
      title: 'Da Nang Fastlane',
      accentTitle: 'Heritage',
      routeLabel: '9.6 km Journey',
      weatherLabel: '30°C',
      weatherDescription: 'Humid coastal sun',
      weatherNote: 'Indoor craft session is kept as rain fallback.',
      insight:
        'Lantern workshop slots are usually fullest after 4 PM, so the AI moved it earlier.',
      days: [
        {
          number: 1,
          title: 'Arrival Meets Riverfront',
          items: [
            {
              slot: 'Morning · 08:00',
              slotIcon: 'wb_twilight',
              slotTone: 'text-primary-fixed-variant',
              title: 'Airport pickup and beachfront check-in',
              description:
                'Start with streamlined airport support, luggage drop and a gentle My Khe orientation.',
            },
            {
              slot: 'Lunch · 12:30',
              slotIcon: 'restaurant',
              slotTone: 'text-tertiary',
              title: 'Mi Quang tasting',
              description:
                'Balanced local lunch near Han market with vegetarian alternatives built in.',
            },
            {
              slot: 'Afternoon · 15:30',
              slotIcon: 'temple_buddhist',
              slotTone: 'text-secondary',
              title: 'Marble Mountains overview trail',
              description:
                'Short guided route with manageable elevation for a relaxed first day.',
            },
          ],
        },
        {
          number: 2,
          title: 'Coastal Makers Route',
          preview: 'Non Nuoc stone village, riverside sunset and craft-led storytelling.',
        },
      ],
    }
  }

  if (destination.includes('ha long')) {
    return {
      badge: 'AI RECOMMENDED',
      title: 'Emerald Waters',
      accentTitle: 'Cruise',
      routeLabel: '6.4 km Journey',
      weatherLabel: '26°C',
      weatherDescription: 'Light sea breeze',
      weatherNote: 'Kayaking is preserved; cave visit swaps first if rain intensifies.',
      insight:
        'Sunrise deck time has the strongest visibility window, so the AI brought the lagoon stop forward.',
      days: [
        {
          number: 1,
          title: 'Harbor Transfer & Boarding',
          items: [
            {
              slot: 'Morning · 09:00',
              slotIcon: 'wb_twilight',
              slotTone: 'text-primary-fixed-variant',
              title: 'Private Hanoi transfer',
              description:
                'A direct runway-to-port route avoids downtown congestion and keeps check-in smooth.',
            },
            {
              slot: 'Lunch · 12:30',
              slotIcon: 'restaurant',
              slotTone: 'text-tertiary',
              title: 'Welcome lunch on board',
              description:
                'The first meal is timed after safety briefing to prevent crowding at embarkation.',
            },
            {
              slot: 'Afternoon · 15:00',
              slotIcon: 'temple_buddhist',
              slotTone: 'text-secondary',
              title: 'Cave and floating village route',
              description:
                'The AI keeps the more photogenic grottoes for golden-hour light.',
            },
          ],
        },
        {
          number: 2,
          title: 'Lagoon & deck rituals',
          preview: 'Tai chi, kayaking and reef-side exploration paced around cruise traffic.',
        },
      ],
    }
  }

  return {
    badge: 'AI RECOMMENDED',
    title: 'Kyoto',
    accentTitle: 'Immersion',
    routeLabel: '12.4 km Journey',
    weatherLabel: '22°C',
    weatherDescription: 'Partly Cloudy',
    weatherNote: 'Rain-safe indoor alternatives stay reserved in the same district.',
    insight:
      'The Sagano Scenic Railway is inserted as a low-stress connector between temple and food blocks.',
    days: [
      {
        number: 1,
        title: 'Tradition Meets Zen',
        items: [
          {
            slot: 'Morning · 08:30',
            slotIcon: 'wb_twilight',
            slotTone: 'text-primary-fixed-variant',
            title: 'Arashiyama Bamboo Grove',
            description:
              'Walk the bamboo corridor early to avoid crowd density and capture softer light.',
          },
          {
            slot: 'Lunch · 12:30',
            slotIcon: 'restaurant',
            slotTone: 'text-tertiary',
            title: 'Shigetsu (Zen cuisine)',
            description:
              'Shojin Ryori lunch inside the temple grounds keeps the day compact and calm.',
          },
          {
            slot: 'Afternoon · 14:30',
            slotIcon: 'temple_buddhist',
            slotTone: 'text-secondary',
            title: 'Tenryu-ji Temple',
            description:
              'The AI keeps the garden circuit after lunch for better pacing and fewer transfers.',
          },
        ],
      },
      {
        number: 2,
        title: 'The Crimson Path',
        preview: 'Fushimi Inari, Gion lanes and a food-first evening path near Kiyomizu.',
      },
    ],
  }
}

function buildPersonalTripFromPlanner(planner) {
  const plannerOutput = buildPlannerOutput(planner)
  const startDate = new Date().toISOString().slice(0, 10)
  let assigned = false

  return {
    title: `${plannerOutput.title} ${plannerOutput.accentTitle}`.trim(),
    destination: planner.destination,
    latestUpdateAt: planner.generatedAt,
    latestUpdateMessage:
      'This is a self-guided AI itinerary. You follow the route personally and handle payments directly at each stop.',
    currentDay: 1,
    timelineDays: plannerOutput.days.map((day, dayIndex) => ({
      dayNumber: day.number,
      date: addDays(startDate, dayIndex),
      title: day.title,
      summary: day.preview ?? day.items?.map((item) => item.title).join(', '),
      activities: (day.items ?? []).map((item, itemIndex) => {
        const status = assigned ? 'Pending' : 'Ongoing'
        assigned = true
        return {
          id: `personal-${day.number}-${itemIndex + 1}`,
          time: item.slot,
          title: item.title,
          location: item.description,
          status,
          note: '',
        }
      }),
    })),
    journal: [
      {
        id: 'personal-note-1',
        time: planner.generatedAt,
        title: 'Plan generated',
        message: 'AI itinerary saved as a personal trip.',
      },
    ],
  }
}

function formatActivityStatus(type) {
  if (type === 'completed') return 'Completed'
  if (type === 'ongoing') return 'Ongoing'
  if (type === 'delayed') return 'Delayed'
  if (type === 'changed') return 'Changed'
  if (type === 'skipped') return 'Skipped'
  return 'Pending'
}

function generateBookingCode() {
  const now = new Date()
  const yy = String(now.getFullYear()).slice(-2)
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const dd = String(now.getDate()).padStart(2, '0')
  const suffix = Math.random().toString(36).slice(2, 5).toUpperCase()
  return `VGR-${yy}${mm}${dd}-${suffix}`
}

function generateTrackingToken() {
  return `trk-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
}

function getOptionById(options, optionId) {
  if (!Array.isArray(options) || options.length === 0) {
    return null
  }

  return options.find((option) => option.id === optionId) ?? options[0]
}

function calculateBookingPricing({ tour, travelers, hotelOption, transportOption, serviceFee = 120 }) {
  const baseTourAmount = tour.pricePerPerson * travelers
  const hotelSelectionFee = hotelOption?.surchargePerGroup ?? 0
  const transportSelectionFee = transportOption?.surchargePerGroup ?? 0
  const totalAmount = baseTourAmount + serviceFee + hotelSelectionFee + transportSelectionFee

  return {
    baseTourAmount,
    serviceFee,
    hotelSelectionFee,
    transportSelectionFee,
    totalAmount,
  }
}

function prependNotification(execution, title, message, time = new Date().toISOString()) {
  execution.notifications = [
    {
      id: `note-${Date.now().toString(36)}`,
      time,
      title,
      message,
    },
    ...execution.notifications,
  ]
  execution.latestUpdateAt = time
  execution.latestUpdateMessage = message
}

function updateCheckpointProgress(execution) {
  const currentIndex = execution.checkpoints.findIndex((checkpoint) => checkpoint.state === 'current')

  if (currentIndex === -1) {
    return
  }

  execution.checkpoints = execution.checkpoints.map((checkpoint, index) => {
    if (index < currentIndex) return { ...checkpoint, state: 'completed' }
    if (index === currentIndex) return { ...checkpoint, state: 'completed' }
    if (index === currentIndex + 1) return { ...checkpoint, state: 'current' }
    return { ...checkpoint, state: 'upcoming' }
  })
}

function ensureTimelineStarted(booking) {
  if (booking.execution.currentDay > 0) {
    return
  }

  booking.execution.currentDay = 1
  const firstDay = booking.execution.timelineDays[0]
  if (firstDay?.activities[0]) {
    firstDay.activities[0].status = 'Ongoing'
  }
}

function moveToNextActivity(execution) {
  const allActivities = execution.timelineDays.flatMap((day) =>
    day.activities.map((activity) => ({ activity, day })),
  )
  const nextPending = allActivities.find(({ activity }) => activity.status === 'Pending')

  if (!nextPending) {
    execution.state = 'completed'
    execution.currentDay = execution.timelineDays.length
    return null
  }

  nextPending.activity.status = 'Ongoing'
  execution.currentDay = nextPending.day.dayNumber
  return nextPending.activity
}

function withBooking(state, bookingId, updater) {
  const booking = state.bookings.find((item) => item.id === bookingId)
  if (!booking) {
    return state
  }

  updater(booking, state)
  return state
}

function reducer(state, action) {
  const nextState = cloneState(state)

  switch (action.type) {
    case 'reset_demo':
      return getFreshState()
    case 'select_tour':
      nextState.ui.selectedTourId = action.payload
      return nextState
    case 'select_booking': {
      const booking = nextState.bookings.find((item) => item.id === action.payload)
      if (!booking) return state
      nextState.ui.selectedBookingId = booking.id
      nextState.ui.selectedTourId = booking.tourId
      nextState.ui.liveBookingId = booking.id
      if (booking.guideId) {
        nextState.ui.selectedGuideId = booking.guideId
      }
      return nextState
    }
    case 'select_guide':
      nextState.ui.selectedGuideId = action.payload
      return nextState
    case 'update_planner':
      nextState.planner = {
        ...nextState.planner,
        ...action.payload,
      }
      return nextState
    case 'generate_planner':
      nextState.planner.generatedAt = new Date().toISOString()
      return nextState
    case 'confirm_selected_tour_booking': {
      const tour = nextState.tours.find((item) => item.id === nextState.ui.selectedTourId) ?? nextState.tours[0]
      const payload =
        typeof action.payload === 'object' && action.payload !== null
          ? action.payload
          : { travelers: action.payload ?? 2 }
      const travelers = payload.travelers ?? 2
      const hotelOption = getOptionById(tour.hotelOptions, payload.hotelOptionId)
      const transportOption = getOptionById(tour.transportOptions, payload.transportOptionId)
      const startDate = tour.nextDeparture
      const endDate = addDays(startDate, Math.max(tour.durationDays - 1, 0))
      const pricingBreakdown = calculateBookingPricing({
        tour,
        travelers,
        hotelOption,
        transportOption,
      })
      const booking = {
        id: `booking-${Date.now().toString(36)}`,
        code: generateBookingCode(),
        travelerId: nextState.traveler.id,
        providerId: tour.providerId,
        guideId: null,
        tourId: tour.id,
        bookingDate: new Date().toISOString().slice(0, 10),
        startDate,
        endDate,
        status: 'pending',
        paymentStatus: 'deposit-requested',
        groupSize: travelers,
        selectedHotelOptionId: hotelOption?.id ?? null,
        selectedTransportOptionId: transportOption?.id ?? null,
        serviceSelectionStatus: 'pending_provider_confirmation',
        providerServiceNote:
          'Selected hotel and transport options were submitted with the booking and are pending provider confirmation.',
        roomType: hotelOption?.roomType ?? (travelers > 2 ? 'Private Group Tier' : 'Premium Couple Suite'),
        pricingBreakdown,
        totalAmount: pricingBreakdown.totalAmount,
        amountPaid: Math.round(pricingBreakdown.totalAmount * 0.25),
        trackingToken: generateTrackingToken(),
        phoneVerificationRequired: false,
        passengers: Array.from({ length: travelers }, (_, index) => ({
          id: `psg-${Date.now().toString(36)}-${index + 1}`,
          name:
            index === 0
              ? nextState.traveler.name
              : ['Mia Lopez', 'Jamie Clark', 'Sophia Vu', 'Luke Torres'][index - 1] ??
                `Traveler ${index + 1}`,
          role: index === 0 ? 'Lead traveler' : 'Passenger',
          age: [31, 29, 30, 28, 34][index] ?? 30,
          dietary: index === 1 ? ['Vegetarian'] : [],
          mobility: [],
          avatar:
            index === 0
              ? nextState.traveler.avatar
              : nextState.bookings[0]?.passengers[index]?.avatar ?? nextState.traveler.avatar,
        })),
        execution: {
          state: 'scheduled',
          currentDay: 0,
          latestUpdateAt: new Date().toISOString(),
          latestUpdateMessage:
            `Booking created with ${hotelOption?.name ?? 'the selected hotel'} and ${
              transportOption?.name ?? 'the selected transport'
            }. The provider will confirm service availability next.`,
          latestUpdateType: 'booking',
          notifications: [
            {
              id: `note-${Date.now().toString(36)}`,
              time: new Date().toISOString(),
              title: 'Booking created',
              message:
                'Your booking was created successfully. The provider will review your requested hotel and transport before assigning a guide.',
            },
          ],
          checkpoints: [
            { id: `cp-${Date.now().toString(36)}-1`, name: 'Provider review', state: 'current' },
            { id: `cp-${Date.now().toString(36)}-2`, name: 'Guide assignment', state: 'upcoming' },
            { id: `cp-${Date.now().toString(36)}-3`, name: 'Departure day', state: 'upcoming' },
          ],
          timelineDays: createTimeline(tour.itineraryTemplate, startDate),
        },
      }
      nextState.bookings = [booking, ...nextState.bookings]
      nextState.ui.selectedBookingId = booking.id
      nextState.ui.selectedTourId = booking.tourId
      nextState.ui.liveBookingId = booking.id
      return nextState
    }
    case 'approve_booking':
      return withBooking(nextState, action.payload, (booking, draft) => {
        booking.status = 'confirmed'
        booking.execution.state = 'scheduled'
        booking.execution.currentDay = 0
        booking.execution.checkpoints = booking.execution.checkpoints.map((checkpoint, index) => ({
          ...checkpoint,
          state: index === 0 ? 'completed' : index === 1 ? 'current' : 'upcoming',
        }))
        prependNotification(
          booking.execution,
          'Booking approved',
          'The provider approved your booking. Guide assignment is now in progress.',
        )
        draft.ui.selectedBookingId = booking.id
        draft.ui.liveBookingId = booking.id
      })
    case 'reject_booking':
      return withBooking(nextState, action.payload, (booking) => {
        booking.status = 'cancelled'
        booking.execution.state = 'cancelled'
        prependNotification(
          booking.execution,
          'Booking cancelled',
          'The provider declined this booking request. Please contact support or choose another tour.',
        )
      })
    case 'assign_guide_to_booking':
      return withBooking(nextState, action.payload.bookingId, (booking, draft) => {
        booking.guideId = action.payload.guideId
        booking.status = 'confirmed'
        booking.execution.checkpoints = booking.execution.checkpoints.map((checkpoint, index) => ({
          ...checkpoint,
          state: index < 2 ? 'completed' : index === 2 ? 'current' : 'upcoming',
        }))
        prependNotification(
          booking.execution,
          'Guide assigned',
          'A guide has been assigned to your booking and is preparing the itinerary handoff.',
        )
        draft.ui.selectedGuideId = action.payload.guideId
        draft.ui.selectedBookingId = booking.id
        draft.ui.liveBookingId = booking.id
      })
    case 'confirm_booking_services':
      return withBooking(nextState, action.payload, (booking) => {
        booking.serviceSelectionStatus = 'confirmed'
        booking.providerServiceNote =
          'Provider inventory review completed. Requested hotel and transport are now confirmed.'
        prependNotification(
          booking.execution,
          'Services confirmed',
          'Your selected hotel and transport were confirmed by the provider.',
        )
      })
    case 'replace_booking_services':
      return withBooking(nextState, action.payload, (booking, draft) => {
        const tour = draft.tours.find((item) => item.id === booking.tourId)
        if (!tour) return

        const nextHotel =
          tour.hotelOptions?.find((option) => option.id !== booking.selectedHotelOptionId) ??
          getOptionById(tour.hotelOptions, booking.selectedHotelOptionId)
        const nextTransport =
          tour.transportOptions?.find((option) => option.id !== booking.selectedTransportOptionId) ??
          getOptionById(tour.transportOptions, booking.selectedTransportOptionId)

        booking.selectedHotelOptionId = nextHotel?.id ?? null
        booking.selectedTransportOptionId = nextTransport?.id ?? null
        booking.roomType = nextHotel?.roomType ?? booking.roomType
        booking.serviceSelectionStatus = 'provider_adjusted'
        booking.providerServiceNote =
          'Provider switched this booking to the backup hotel and transport set to match current availability.'
        booking.pricingBreakdown = calculateBookingPricing({
          tour,
          travelers: booking.groupSize,
          hotelOption: nextHotel,
          transportOption: nextTransport,
          serviceFee: booking.pricingBreakdown?.serviceFee ?? 120,
        })
        booking.totalAmount = booking.pricingBreakdown.totalAmount
        prependNotification(
          booking.execution,
          'Services adjusted',
          `The provider updated the service setup to ${nextHotel?.name ?? 'a backup hotel'} and ${
            nextTransport?.name ?? 'a backup transport option'
          } due to availability.`,
        )
      })
    case 'toggle_phone_verification':
      return withBooking(nextState, action.payload, (booking) => {
        booking.phoneVerificationRequired = !booking.phoneVerificationRequired
      })
    case 'regenerate_tracking_link':
      return withBooking(nextState, action.payload, (booking) => {
        booking.trackingToken = generateTrackingToken()
        prependNotification(
          booking.execution,
          'Tracking link regenerated',
          'A new tracking token was generated for this booking. Share only the latest link.',
        )
      })
    case 'guide_action':
      return withBooking(nextState, nextState.ui.liveBookingId, (booking) => {
        ensureTimelineStarted(booking)
        const current = findCurrentActivity(booking)
        const activity = current?.activity
        if (!activity) return

        if (action.payload === 'start') {
          activity.status = 'Ongoing'
          booking.execution.state = 'ongoing'
          prependNotification(
            booking.execution,
            'Activity started',
            `${activity.title} is now in progress.`,
          )
          return
        }

        if (action.payload === 'complete') {
          activity.status = 'Completed'
          updateCheckpointProgress(booking.execution)
          const nextActivity = moveToNextActivity(booking.execution)
          const nextMessage = nextActivity
            ? `${activity.title} completed. Next up: ${nextActivity.title}.`
            : `${activity.title} completed. The tour has finished successfully.`
          prependNotification(booking.execution, 'Activity completed', nextMessage)
          return
        }

        if (action.payload === 'delay') {
          activity.status = 'Delayed'
          activity.note = 'Guide marked this activity as delayed due to live conditions.'
          prependNotification(
            booking.execution,
            'Schedule delayed',
            `${activity.title} has been delayed. The guide is updating the group with revised timing.`,
          )
          return
        }

        if (action.payload === 'note') {
          activity.note = 'Guide added an on-the-ground note for passengers.'
          prependNotification(
            booking.execution,
            'Guide note',
            `New note for ${activity.title}: ${activity.note}`,
          )
          return
        }

        if (action.payload === 'change') {
          activity.status = 'Changed'
          activity.note = 'Activity details were adjusted by the guide.'
          prependNotification(
            booking.execution,
            'Activity changed',
            `${activity.title} was updated. Please review the revised checkpoint details.`,
          )
          return
        }

        if (action.payload === 'skip') {
          activity.status = 'Skipped'
          updateCheckpointProgress(booking.execution)
          const nextActivity = moveToNextActivity(booking.execution)
          prependNotification(
            booking.execution,
            'Activity skipped',
            nextActivity
              ? `${activity.title} was skipped. Next stop: ${nextActivity.title}.`
              : `${activity.title} was skipped and the itinerary has no further stops today.`,
          )
        }
      })
    case 'send_quick_passenger_update':
      return withBooking(nextState, nextState.ui.liveBookingId, (booking) => {
        prependNotification(booking.execution, 'Guide update', action.payload)
      })
    default:
      return state
  }
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(dateString, options = { month: 'short', day: 'numeric' }) {
  return new Intl.DateTimeFormat('en-US', options).format(
    new Date(`${dateString}T00:00:00`),
  )
}

export function formatDateRange(startDate, endDate) {
  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}

export function formatDateTime(dateTime) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(dateTime))
}

export function VoyagerDemoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadPersistedState)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }
  }, [state])

  const value = useMemo(() => {
    const toursById = Object.fromEntries(state.tours.map((tour) => [tour.id, tour]))
    const guidesById = Object.fromEntries(state.guides.map((guide) => [guide.id, guide]))
    const bookingsWithRelations = state.bookings.map((booking) => ({
      ...booking,
      tour: toursById[booking.tourId],
      guide: booking.guideId ? guidesById[booking.guideId] : null,
      selectedHotelOption: getOptionById(
        toursById[booking.tourId]?.hotelOptions,
        booking.selectedHotelOptionId,
      ),
      selectedTransportOption: getOptionById(
        toursById[booking.tourId]?.transportOptions,
        booking.selectedTransportOptionId,
      ),
    }))
    const selectedBooking =
      bookingsWithRelations.find((booking) => booking.id === state.ui.selectedBookingId) ??
      bookingsWithRelations[0]
    const liveBooking =
      bookingsWithRelations.find((booking) => booking.id === state.ui.liveBookingId) ??
      selectedBooking
    const selectedTour =
      state.tours.find((tour) => tour.id === state.ui.selectedTourId) ??
      toursById[selectedBooking?.tourId]
    const selectedGuide =
      state.guides.find((guide) => guide.id === state.ui.selectedGuideId) ??
      liveBooking?.guide ??
      state.guides[0]
    const plannerOutput = buildPlannerOutput(state.planner)
    const personalTrip = buildPersonalTripFromPlanner(state.planner)

    return {
      state,
      actions: {
        resetDemo: () => dispatch({ type: 'reset_demo' }),
        selectTour: (tourId) => dispatch({ type: 'select_tour', payload: tourId }),
        selectBooking: (bookingId) => dispatch({ type: 'select_booking', payload: bookingId }),
        selectGuide: (guideId) => dispatch({ type: 'select_guide', payload: guideId }),
        updatePlanner: (payload) => dispatch({ type: 'update_planner', payload }),
        generatePlanner: () => dispatch({ type: 'generate_planner' }),
        personalTripAction: () => dispatch({ type: 'generate_planner' }),
        confirmSelectedTourBooking: (travelers) =>
          dispatch({ type: 'confirm_selected_tour_booking', payload: travelers }),
        approveBooking: (bookingId) => dispatch({ type: 'approve_booking', payload: bookingId }),
        rejectBooking: (bookingId) => dispatch({ type: 'reject_booking', payload: bookingId }),
        assignGuideToBooking: (bookingId, guideId) =>
          dispatch({ type: 'assign_guide_to_booking', payload: { bookingId, guideId } }),
        confirmBookingServices: (bookingId) =>
          dispatch({ type: 'confirm_booking_services', payload: bookingId }),
        replaceBookingServices: (bookingId) =>
          dispatch({ type: 'replace_booking_services', payload: bookingId }),
        togglePhoneVerification: (bookingId) =>
          dispatch({ type: 'toggle_phone_verification', payload: bookingId }),
        regenerateTrackingLink: (bookingId) =>
          dispatch({ type: 'regenerate_tracking_link', payload: bookingId }),
        guideAction: (kind) => dispatch({ type: 'guide_action', payload: kind }),
        sendQuickPassengerUpdate: (message) =>
          dispatch({ type: 'send_quick_passenger_update', payload: message }),
      },
      selectedTour,
      selectedBooking,
      liveBooking,
      selectedGuide,
      plannerOutput,
      personalTrip,
      bookingsWithRelations,
      liveCurrent: findCurrentActivity(liveBooking),
      liveProgress: getTimelineProgress(liveBooking?.execution?.timelineDays),
      personalTripCurrent: findCurrentActivity({ execution: { timelineDays: personalTrip.timelineDays } }),
      personalTripProgress: getTimelineProgress(personalTrip.timelineDays),
      bookingStats: {
        confirmed: state.bookings.filter((booking) => booking.status === 'confirmed').length,
        pending: state.bookings.filter((booking) => booking.status === 'pending').length,
        completed: state.bookings.filter((booking) => booking.status === 'completed').length,
        totalSpent: state.bookings
          .filter((booking) => booking.paymentStatus === 'paid')
          .reduce((sum, booking) => sum + booking.totalAmount, 0),
      },
      providerStats: {
        totalBookings: state.bookings.length,
        activeTours: state.tours.filter((tour) => tour.status === 'active').length,
        monthlyRevenue: state.bookings
          .filter((booking) => booking.paymentStatus === 'paid')
          .reduce((sum, booking) => sum + booking.amountPaid, 0),
      },
    }
  }, [state])

  return <VoyagerDemoContext.Provider value={value}>{children}</VoyagerDemoContext.Provider>
}

export function useVoyagerDemo() {
  const context = useContext(VoyagerDemoContext)

  if (!context) {
    throw new Error('useVoyagerDemo must be used within VoyagerDemoProvider')
  }

  return context
}
