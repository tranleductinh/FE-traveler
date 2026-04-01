import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  formatCurrency,
  formatDate,
  useVoyagerDemo,
} from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

const REVIEW_BREAKDOWN = [
  { label: '5 stars', percent: 85, widthClass: 'w-[85%]', opacityClass: '' },
  { label: '4 stars', percent: 10, widthClass: 'w-[10%]', opacityClass: 'opacity-60' },
  { label: '3 stars', percent: 3, widthClass: 'w-[3%]', opacityClass: 'opacity-40' },
  { label: '2 stars', percent: 1, widthClass: 'w-[1%]', opacityClass: 'opacity-20' },
  { label: '1 star', percent: 1, widthClass: 'w-[1%]', opacityClass: 'opacity-10' },
]

const REVIEW_GALLERY = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwLBQIZXRDx742QLoG_dba4D1f21uAFp7L8FwjkEGihhEOIj5w5PRb2LHn1iyGq6QHdbdfdi3E70Iv-a0bOpKmvjPlxp2EfiY2cSxYSersnRn8zeb-p0o8W4tGzCoSjIki5bVSqiySFVdfO4XrcXipkZxeJhCBfF3dKE8gdoKOPhfLMpbbM6kxUntNQ7y9lp5CfD8ZE8RvcGcsORLXPSe1sZhoG_r5eLjay-77d5mV_bYsa7P-lpO340ehMKJbVbFRWCdB9xB0qpyy',
    author: 'Maria S.',
    alt: 'Golden Bridge',
    sizeClass: 'min-w-[240px]',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCOcqjHijMLIZdVzszftnSS2LbhvfcFlVO0OkDy1fQ0CVJlydfDAace9fTGyCAoa8QXY3qVzoukfVvLJrjohS0oH8gGqAxeRAxELBCbUb30oqhok7lMQHk7YIZeyUgCTqij8f2S17NK0Mje5sLUQsF5CZ6b1E2tDdyPe4R_cxGvCmnW4n9DIG9p8z9Qni9DZ1tDd7vFKR0WMuL3pCVIfGf-CfcbHK35V2libMuk21FVKQIenUjGgQaL1PVs8tLDSyu40pR9Dr9bn9L4',
    author: 'James L.',
    alt: 'Cable car',
    sizeClass: 'min-w-[200px]',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMVHGMQqvqjPshagiYXLfkg7Dep66GERX8sHF3_8rW3FcEr069XBOr1MViFw4W6FZNtlehK4KWTIV_XFXkX8E2eudvYyeloLkxPNw6XgLWrpyAtIPOkc-vp5sE-ngvmT3UEwMRYqTpboG310j3s6rm9_2XH_qQVlfs2FF6i3NzpE4ZSjxKsQUzhCr5CT3TMhkMH9by2yJGNykSwcW_tV2s--mn1ufTqIKnHsUZhcm6Xz0tcituebybSr_BYH5jId4iakpLGE24oStH',
    author: 'Yuki T.',
    alt: 'Pagoda',
    sizeClass: 'min-w-[200px]',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCAKle9HDMEfUnV8n9M_Tmy0v9AKwK8cuIUXUlYH6qSTh77eMZpVz-w2t7XGzyFJftJN9y8JMxJ8fnLZ4xshzRPXKNEOMa9sbmC3Sr53xTxdw1fRThUt1cFVj2_gszGIsdABC2kQyqOTWDLyDnEAtB-V99ukyvaYXM_cMotpQcOolJIz2DwRG7GExRz2zceZ2zF2_WPL3WamDjqwtlqhRzPan_bJRXAIz_Y_2TOZ4VXYENa9iVTPNzys7EidjsE86vF40GrmiqDcIn6',
    author: 'Olivia R.',
    alt: 'French village',
    sizeClass: 'min-w-[240px]',
  },
]

const REVIEW_ENTRIES = [
  {
    id: 'review-1',
    name: 'Sarah Jenkins',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDU7YwwRvUOBXLYQjN_cM1YWy09AbSm03jXIOg3q3WcekEqtIyyPVwY41_4fkcqIJfq-qUP6nGitJSII0KXqEpAJ1lLdsm2fkp2RyDHAV-dtSTNwf2sIdFaSfMjcGgK4Hg7vduHPdVnHdsKwL8g5foEEREl8qm0hykb9eNtpo-A8Gfp9pF5nRHRUgCoJEhqCZZWuNxcK0270R9gZDvsyH-AHdBGRHw4qE6NkM38BoalfWWuBIwdt_02QJVOSNHki_1_Wup76Y8ioWQz',
    travelerType: 'Solo Traveler',
    traveledOn: 'Traveled Sept 2023',
    timeAgo: '2 weeks ago',
    title: 'Magical morning and incredibly smooth pacing',
    body:
      'We arrived early enough to enjoy the signature viewpoints without feeling rushed. The guide handled timing beautifully, gave local context throughout the route, and even helped with photos. The included meal stop was better than expected and the whole experience felt polished from pickup to drop-off.',
    helpfulCount: 42,
    photos: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDO8WbZSFaCSe_YnZbTJgXk-wdy4T2hnmFB990njBIhYns7yzMlsmqpWvmMwMr5dCTtJ3XBPRsr-p6fx2cf_9pdYEV5QwAE8BLgVqyZDmGQBvs80LPD4ccF4WeN-XoJlISFJ3QbpYj_x7afRFytc8uYszWHdO0HDFgqTycIn8KargSBcTr4TY3ejYpXFBzrfS4mS__9KC5AQY2yzKFoqtZ6dQ1Ok5hgzATtPodZCdH8rCY8a-NnkgumagTW-cbHqIOrF6ebjRrLuWRA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBFWDIyHFwvDlYkT22fC0ogK5UWnmPAcQtyddXvWJ4xDODtCAkxhPros2bZ9szNkYKDU8Bvg6sKpWU-9-hjnGl1cYsADgjbbqt8R_S9nqdky36_rWdCuIJXSOtui6vYXO1Z30C3Xi8KEDZgKpFpCDQBCShcXBH11LI04mNa2gzR8aCRnS4tl3FOhYS9YxEMIzzpC9nzsxpSiw8CuVwpSVxJcuZ63dP3mJBQRWiv9gIYLPu2tcZ_RUt2dGO-BV3ehpI_foo0FcYcZcNc',
    ],
    rating: 5,
  },
  {
    id: 'review-2',
    name: 'Marcus Thompson',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWTcwySFLGvX2Lm7ZATrrlUVXj2iXb00eRLLlUe5Lz-ptg4ViE4CoflTIKwWc6VV-UR7444XXzjus2JSAaQU3aFi2eupFuV1maAtEsOnSYrjEZKKiPdKU6khzg9EfcLzqzuGj_471AEL59wMvmArMn8Wmbi7G6GvDse9iwTzhAG5FbL5oU-Md199SsGYE51Cnqok_9Jc4LRkuniULhOwdcnbT1KCZBKMcv-GV3SDq-ZcUzcLvZfO2DzcKj1LLbwuB1Cw8VMYmruaT0',
    travelerType: 'Couple Trip',
    traveledOn: 'Traveled Aug 2023',
    timeAgo: '1 month ago',
    title: 'Beautiful route, best on a quieter day',
    body:
      'The scenery absolutely lives up to the hype and the transport logistics were effortless. Some portions felt busy during peak hours, so I would still recommend a weekday departure if possible. Even then, the overall route quality, comfort level and guide communication were excellent.',
    helpfulCount: 15,
    rating: 4,
    response:
      "Thank you for the thoughtful feedback. We are refining departure windows and timed check-ins on busier operating days so guests can enjoy a smoother flow throughout the route.",
  },
  {
    id: 'review-3',
    name: 'Elena Rodriguez',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBB1CIW0lgj3-GXGbmcicwtZ7Na0WpLDOLJzYDYIsnmjzn0eX4D4mXGV4l3mNt255gfH3nkITPVstCFT3-A0d1MSocMoJMgyJ-zFw-zxxLvocjLNaja_nx5--VO0eRCTR69sBAVlkobOIdX8e9RDWtsWfA1Am7q3Rhp88v54cKK0CLl8tingFN4LqAnYVFyZWqKnursXvC0nfL7ctO-6KTM0_Zj5fsqxUloU5FCMi11Rukj2H4e0DRb-jTMJEviZCvQRszFLlB1JZOt',
    travelerType: 'Family of 4',
    traveledOn: 'Traveled July 2023',
    timeAgo: '2 months ago',
    title: 'Very easy for families to enjoy together',
    body:
      'What stood out most was how family-friendly the pacing felt. We had enough structure to keep the day smooth, but never felt pushed. Our guide was patient, helped us navigate meal choices for the kids, and made the stops feel engaging for adults and children alike.',
    helpfulCount: 28,
    rating: 5,
  },
]

export default function TourDetail() {
  const navigate = useNavigate()
  const { actions, selectedGuide, selectedTour, state } = useVoyagerDemo()
  const [travelers, setTravelers] = useState(2)
  const [selectedHotelOptionId, setSelectedHotelOptionId] = useState(
    selectedTour.hotelOptions?.[0]?.id ?? '',
  )
  const [selectedTransportOptionId, setSelectedTransportOptionId] = useState(
    selectedTour.transportOptions?.[0]?.id ?? '',
  )

  useEffect(() => {
    setSelectedHotelOptionId(selectedTour.hotelOptions?.[0]?.id ?? '')
    setSelectedTransportOptionId(selectedTour.transportOptions?.[0]?.id ?? '')
  }, [selectedTour.id])

  const selectedHotelOption =
    selectedTour.hotelOptions?.find((option) => option.id === selectedHotelOptionId) ??
    selectedTour.hotelOptions?.[0]
  const selectedTransportOption =
    selectedTour.transportOptions?.find((option) => option.id === selectedTransportOptionId) ??
    selectedTour.transportOptions?.[0]
  const serviceFee = 120
  const subtotal = selectedTour.pricePerPerson * travelers
  const hotelSelectionFee = selectedHotelOption?.surchargePerGroup ?? 0
  const transportSelectionFee = selectedTransportOption?.surchargePerGroup ?? 0
  const total = subtotal + serviceFee + hotelSelectionFee + transportSelectionFee

  return (
    <PageShell
      title="Voyager AI - Tour Details"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        vertical-align: middle;
      }
      .editorial-gradient { background: linear-gradient(135deg, #00685f 0%, #008378 100%); }
      .hero-scrim {
        background: linear-gradient(to bottom, rgba(25, 28, 30, 0.4) 0%, rgba(25, 28, 30, 0) 30%, rgba(25, 28, 30, 0) 70%, rgba(25, 28, 30, 0.8) 100%);
      }
      .hide-scrollbar::-webkit-scrollbar { display: none; }
      .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}
    >
      <div className="bg-surface font-body text-on-surface">
        <main className="pt-16 min-h-screen">
          <section className="relative h-[716px] w-full overflow-hidden">
            <img
              alt={selectedTour.name}
              className="w-full h-full object-cover"
              src={selectedTour.heroImage}
            />
            <div className="absolute inset-0 hero-scrim"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
              <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-fixed text-xs font-semibold tracking-wide uppercase">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      auto_awesome
                    </span>
                    AI Recommended
                  </div>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white font-headline leading-tight tracking-tight">
                    {selectedTour.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-white/90 font-medium">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary-fixed">
                        location_on
                      </span>
                      {selectedTour.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary-fixed">
                        schedule
                      </span>
                      {selectedTour.durationDays} Days, {selectedTour.nights} Nights
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary-fixed">star</span>
                      {selectedTour.rating} ({selectedTour.reviews} Reviews)
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-white/20">
                  <p className="text-sm opacity-80 mb-1 font-medium">Starting from</p>
                  <p className="text-3xl font-bold font-headline">
                    {formatCurrency(selectedTour.pricePerPerson)}
                    <span className="text-lg font-normal opacity-80">/person</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-16">
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold font-headline text-on-surface">
                    Experience Overview
                  </h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed max-w-3xl">
                    {selectedTour.summary}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {selectedTour.highlights.map((highlight) => (
                      <div
                        key={highlight.title}
                        className="p-6 rounded-2xl bg-surface-container-low flex flex-col items-center text-center gap-3"
                      >
                        <span className="material-symbols-outlined text-primary text-3xl">
                          {highlight.icon}
                        </span>
                        <span className="font-bold text-on-surface text-sm">
                          {highlight.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold font-headline text-on-surface">
                      Journey Timeline
                    </h2>
                    <button className="text-primary font-bold text-sm hover:underline">
                      Frontend Demo
                    </button>
                  </div>
                  <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-4 before:w-[2px] before:bg-outline-variant/30">
                    {selectedTour.itineraryTemplate.map((day) => (
                      <div key={day.dayNumber} className="relative pl-12">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs ring-4 ring-surface">
                          {day.dayNumber}
                        </div>
                        <h3 className="text-xl font-bold font-headline mb-2">{day.title}</h3>
                        <p className="text-on-surface-variant mb-4">{day.summary}</p>
                        <div className="grid gap-4 md:grid-cols-2">
                          {day.activities.map((activity) => (
                            <div
                              key={activity.id}
                              className="p-4 rounded-xl bg-surface-container-low"
                            >
                              <p className="font-bold text-xs text-primary mb-1 uppercase tracking-wider">
                                {activity.time}
                              </p>
                              <p className="text-sm">{activity.title}</p>
                              <p className="text-xs text-on-surface-variant mt-1">
                                {activity.location}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="p-8 rounded-3xl bg-secondary-container/30 space-y-6">
                  <h2 className="text-2xl font-bold font-headline text-on-surface">
                    Included Services
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {selectedTour.includedServices.map((service) => (
                      <div key={service.title} className="flex gap-4">
                        <span className="material-symbols-outlined text-primary">
                          check_circle
                        </span>
                        <div>
                          <p className="font-bold text-on-surface">{service.title}</p>
                          <p className="text-sm text-on-surface-variant">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-2xl shadow-on-surface/5 border border-outline-variant/10">
                    <h3 className="text-2xl font-bold font-headline mb-6">
                      Book This Experience
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                          Select Date
                        </label>
                        <div className="flex items-center justify-between p-4 rounded-xl border border-outline-variant/30">
                          <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-on-surface-variant">
                              calendar_today
                            </span>
                            <span className="font-medium">
                              {formatDate(selectedTour.nextDeparture, {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                          <span className="material-symbols-outlined text-on-surface-variant">
                            expand_more
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                          Travelers
                        </label>
                        <div className="flex items-center justify-between p-2 rounded-xl border border-outline-variant/30">
                          <button
                            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors"
                            onClick={() => setTravelers((count) => Math.max(1, count - 1))}
                            type="button"
                          >
                            <span className="material-symbols-outlined">remove</span>
                          </button>
                          <span className="text-lg font-bold">{travelers} Persons</span>
                          <button
                            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors"
                            onClick={() => setTravelers((count) => count + 1)}
                            type="button"
                          >
                            <span className="material-symbols-outlined">add</span>
                          </button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                          Hotel Preference
                        </label>
                        <div className="space-y-3">
                          {selectedTour.hotelOptions?.map((option) => (
                            <button
                              key={option.id}
                              className={`w-full rounded-2xl border p-4 text-left transition-colors ${
                                selectedHotelOptionId === option.id
                                  ? 'border-primary bg-primary/5'
                                  : 'border-outline-variant/30 hover:bg-surface-container-low'
                              }`}
                              onClick={() => setSelectedHotelOptionId(option.id)}
                              type="button"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <p className="font-bold text-sm">{option.name}</p>
                                  <p className="text-xs text-on-surface-variant mt-1">
                                    {option.roomType} • {option.tier}
                                  </p>
                                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                                    {option.description}
                                  </p>
                                </div>
                                <span className="text-sm font-bold text-primary whitespace-nowrap">
                                  {option.surchargePerGroup > 0
                                    ? `+${formatCurrency(option.surchargePerGroup)}`
                                    : 'Included'}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                          Transport Preference
                        </label>
                        <div className="space-y-3">
                          {selectedTour.transportOptions?.map((option) => (
                            <button
                              key={option.id}
                              className={`w-full rounded-2xl border p-4 text-left transition-colors ${
                                selectedTransportOptionId === option.id
                                  ? 'border-primary bg-primary/5'
                                  : 'border-outline-variant/30 hover:bg-surface-container-low'
                              }`}
                              onClick={() => setSelectedTransportOptionId(option.id)}
                              type="button"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <p className="font-bold text-sm">{option.name}</p>
                                  <p className="text-xs text-on-surface-variant mt-1">
                                    {option.type}
                                  </p>
                                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                                    {option.description}
                                  </p>
                                </div>
                                <span className="text-sm font-bold text-primary whitespace-nowrap">
                                  {option.surchargePerGroup > 0
                                    ? `+${formatCurrency(option.surchargePerGroup)}`
                                    : 'Included'}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 space-y-3 border-t border-outline-variant/20">
                        <div className="flex justify-between text-on-surface-variant">
                          <span>
                            {formatCurrency(selectedTour.pricePerPerson)} x {travelers}
                          </span>
                          <span>{formatCurrency(subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-on-surface-variant">
                          <span>Service Fee</span>
                          <span>{formatCurrency(serviceFee)}</span>
                        </div>
                        <div className="flex justify-between text-on-surface-variant">
                          <span>Hotel Selection</span>
                          <span>
                            {hotelSelectionFee > 0
                              ? formatCurrency(hotelSelectionFee)
                              : 'Included'}
                          </span>
                        </div>
                        <div className="flex justify-between text-on-surface-variant">
                          <span>Transport Selection</span>
                          <span>
                            {transportSelectionFee > 0
                              ? formatCurrency(transportSelectionFee)
                              : 'Included'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="font-bold text-xl">Total</span>
                          <span className="font-bold text-2xl text-primary">
                            {formatCurrency(total)}
                          </span>
                        </div>
                      </div>
                      <button
                        className="w-full py-4 rounded-xl editorial-gradient text-white font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        onClick={() => {
                          actions.confirmSelectedTourBooking({
                            travelers,
                            hotelOptionId: selectedHotelOption?.id,
                            transportOptionId: selectedTransportOption?.id,
                          })
                          navigate('/pages/booking-success-and-tracking-link')
                        }}
                        type="button"
                      >
                        Confirm Booking
                      </button>
                      <p className="text-center text-xs text-on-surface-variant px-4">
                        Your reservation will appear in traveler bookings and unlock
                        the shared tracking flow for your group.
                      </p>
                      <p className="text-center text-xs text-on-surface-variant px-4">
                        Hotel and transport selections are sent as service requests first.
                        The provider confirms the real availability after booking.
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-container-low rounded-3xl p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <img
                        alt={selectedGuide.name}
                        className="w-full h-full object-cover"
                        src={selectedGuide.avatar}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-primary uppercase">Suggested Guide</p>
                      <p className="font-bold">{selectedGuide.name}</p>
                      <p className="text-xs text-on-surface-variant">
                        {selectedGuide.specialty} • {selectedGuide.rating}★
                      </p>
                    </div>
                    <button className="p-2 hover:bg-surface-container-highest rounded-full transition-colors">
                      <span className="material-symbols-outlined text-on-surface-variant">
                        chat
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-16 lg:mt-24 space-y-8">
              <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Traveler Feedback
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-on-surface">
                  Reviews & Ratings
                </h2>
                <p className="text-on-surface-variant max-w-3xl leading-relaxed">
                  Social proof sits best after the itinerary and booking panel, so this
                  section adapts the standalone reviews page into the tour detail flow
                  without changing the rest of the screen.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
                  <div className="text-center mb-8">
                    <div className="text-6xl font-headline font-black text-on-surface mb-2">
                      {selectedTour.rating}
                    </div>
                    <div className="flex justify-center gap-1 mb-2">
                      {Array.from({ length: 5 }, (_, index) => (
                        <span
                          key={index}
                          className="material-symbols-outlined text-tertiary text-2xl"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-on-surface-variant font-medium">
                      {selectedTour.reviews.toLocaleString('en-US')} authentic reviews
                    </p>
                  </div>
                  <div className="space-y-3 mb-8">
                    {REVIEW_BREAKDOWN.map((item) => (
                      <div key={item.label} className="flex items-center gap-3 text-xs font-medium">
                        <span className="w-12">{item.label}</span>
                        <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                          <div
                            className={`bg-primary h-full rounded-full ${item.widthClass} ${item.opacityClass}`}
                          ></div>
                        </div>
                        <span className="w-8 text-right">{item.percent}%</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Smooth logistics', 'Excellent guide', 'Great pacing'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-tertiary-container/10 text-on-tertiary-fixed-variant rounded-full text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-8 bg-surface-container-low rounded-2xl p-8 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-6 gap-4">
                    <h3 className="text-xl font-headline font-bold text-on-surface">
                      Traveler Memories
                    </h3>
                    <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline transition-all">
                      View all 450 photos
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                  <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                    {REVIEW_GALLERY.map((item) => (
                      <div
                        key={item.image}
                        className={`${item.sizeClass} h-[320px] rounded-2xl overflow-hidden relative group`}
                      >
                        <img
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          src={item.image}
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-xs font-medium opacity-80">By {item.author}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {REVIEW_ENTRIES.map((review) => (
                  <article
                    key={review.id}
                    className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-48 shrink-0">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-200">
                            <img
                              alt={review.name}
                              className="w-full h-full object-cover"
                              src={review.avatar}
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-on-surface text-sm">{review.name}</h4>
                            <div className="flex items-center gap-1 text-[10px] text-teal-600 font-bold uppercase tracking-wider">
                              <span
                                className="material-symbols-outlined text-xs"
                                style={{ fontVariationSettings: '"FILL" 1' }}
                              >
                                verified
                              </span>
                              Verified
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-on-surface-variant mb-1">
                          {review.traveledOn}
                        </p>
                        <p className="text-xs text-on-surface-variant">{review.travelerType}</p>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex gap-0.5">
                            {Array.from({ length: 5 }, (_, index) => (
                              <span
                                key={index}
                                className="material-symbols-outlined text-tertiary text-sm"
                                style={{
                                  fontVariationSettings:
                                    index < review.rating ? '"FILL" 1' : '"FILL" 0',
                                }}
                              >
                                star
                              </span>
                            ))}
                          </div>
                          <time className="text-xs text-on-surface-variant">
                            {review.timeAgo}
                          </time>
                        </div>
                        <h3 className="text-lg font-headline font-bold text-on-surface mb-3">
                          {review.title}
                        </h3>
                        <p className="text-on-surface-variant leading-relaxed mb-6">
                          {review.body}
                        </p>

                        {review.photos ? (
                          <div className="flex gap-3 mb-6 overflow-x-auto hide-scrollbar">
                            {review.photos.map((photo) => (
                              <div
                                key={photo}
                                className="h-24 w-32 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                              >
                                <img className="w-full h-full object-cover" src={photo} />
                              </div>
                            ))}
                          </div>
                        ) : null}

                        {review.response ? (
                          <div className="bg-surface-container-low rounded-xl p-6 mb-6">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="material-symbols-outlined text-primary text-lg">
                                reply
                              </span>
                              <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider">
                                Response from {state.provider.name}
                              </h4>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed italic">
                              "{review.response}"
                            </p>
                          </div>
                        ) : null}

                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                          <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
                              <span className="material-symbols-outlined text-lg">thumb_up</span>
                              Helpful ({review.helpfulCount})
                            </button>
                            <button className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
                              <span className="material-symbols-outlined text-lg">share</span>
                              Share
                            </button>
                          </div>
                          <button className="text-xs font-bold text-on-surface-variant hover:text-error transition-colors flex items-center gap-1">
                            <span className="material-symbols-outlined text-lg">flag</span>
                            Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 flex justify-center items-center gap-4">
                <button
                  className="p-2 border border-outline-variant/20 rounded-xl hover:bg-surface-container transition-colors disabled:opacity-30"
                  disabled
                  type="button"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <div className="flex items-center gap-2">
                  <button
                    className="w-10 h-10 rounded-xl bg-primary text-on-primary font-bold text-sm"
                    type="button"
                  >
                    1
                  </button>
                  <button
                    className="w-10 h-10 rounded-xl hover:bg-surface-container font-semibold text-sm"
                    type="button"
                  >
                    2
                  </button>
                  <button
                    className="w-10 h-10 rounded-xl hover:bg-surface-container font-semibold text-sm"
                    type="button"
                  >
                    3
                  </button>
                  <span className="px-2 text-on-surface-variant">...</span>
                  <button
                    className="w-10 h-10 rounded-xl hover:bg-surface-container font-semibold text-sm"
                    type="button"
                  >
                    42
                  </button>
                </div>
                <button
                  className="p-2 border border-outline-variant/20 rounded-xl hover:bg-surface-container transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </PageShell>
  )
}
