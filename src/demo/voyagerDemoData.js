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

const COMMON_IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0IqWtySVs7eyZ6ir_HRlgmbP7MrsBGF9r7ZaX_9wExLAxLPBtCO7W9aYS1oGj2j6b4QDVFBQUIq6R1Md18tRbGhqxtXousii7q2SmbH6q0zOlE99xQ9kptRKq7m7MmS5O-4_0CaqC8MS01yGzqJ9GjPdj_A5xNXALzt7j9X_ZJs4ng9ACIaip0Kv1nG0jKDkVgtBgMq1HN5ytqyoNc-zgKonvBJrTh2fFK-I9c6BUAzdGvUJryBV868JbUcMXQ1M4TZ2Fpkj-JUoq',
  card: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS6t51F8tBzGfKatRaZGMBz9c6EWoMtM34PoKd1fW1vskfiUQSfgOtL8BtkGEmTTPPH_2Fz4CYhRjrA4PPLj7m67_RBU6bqHvuORg0t2ufLhhZnVVwfHJXRBaqYf-pK2wdpuWA2bWsVd8LV6X0YqDe_oz8ffqpgTura_qHk-N8spDxp74SzUgts2Xso-wn2vJmf64hvi63oE_1vpPQzfxDsDXrfWAvJUm_ZDKOVkqQlULl83FUWbVXyUwGgQ0X4JsWmnRGtMaFhFeF',
  map: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPMtui2OLB2kvFBCVO5QcyZ3an7WGQE8kaAOwfbK22CM3ZLKl028JjqUWWQkPKKpjyxNl9DIzGcTt2g9A6agBjapBdLR3PkeaS7Y6tGaaXwLw4SW0ZRNRh7pvPpovme-u0oLHw54QtNNYJEaeTFOH9I3K3zm9thWWSp5c5G_GEycLwsvCN-mKWM2OK8hhoe6_G81agnV_v9kTTn40kFsm-AsG4PI0M46A48gfrQQfPMY1KQhgKh_ZhDv0vL-t1FhvT0t8di5JnL7I-',
}

const AVATARS = {
  alex: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC_zlc7Pc3ATNIDM5wW1KXIsuJRmZwzesQsSG_FA6az9HLNjfQQHqyre0AqMUwETzJLFTPfUq9QKkmg3U5Uo_KTE6Nad6zLSpfkrX0wfC5RLzWmi_EB9WhqI3YaKCUzKwa2jfH6wk9yrfe0ijt7WWg_03crFx60sEP7yS7O_xcGOmd1DSZy4BSiiqXfZmyx80ZG9I4CAgsUSGKTGfbEqCNPEw-16CU8CZqefn8pw6tAFqoK7dD3jSHGRVTrVTL6ghH3Ez-8NTVgLuC',
  mia: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx_YrV98skFMZO011p-nMRKeJKDXpbftiN-Zh9tO1zlfOk_znKM61xgfEd9tWLybD9sYwWeWlpl525T1oNvfH11WZ3iZ605VJ7WkhAU5-MN5YnF-kASxthuHmGyRz9emOMyZTg0j8ZlvPlTgUdbLUeU2httbGbpDhw1kqdt11jCRMjO9pgyuSyqYFuJa727YrWEDQNAZEoEOUEMA_qt-M1cuG9DqOnn0Rk940-comU5leQhTB9U32fX26TBUbwkQqgs65o33SwxB9e',
  marcus: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFh3tgNtojKN3KV0ilWZk2rIobYX6kIELbau1C-uCVw-c4fevQpyh-Z6uSLU6wu0JbaPA6a-9eHi8qekfsGCNBoRoNZWGjxCOvsTZGYdFS-DWhikNq0z8Ayea5n2oqztXiR54FedHoyMoTlkFr7a6rtwBcZY3B6TbqivnN2Eqq2vdFPRdWqKDaGVBxXPbKMDLj2ymnKznsKcJmR2VBPsoTYEGcSoIkl9S1zMmEMcQhxg2M65-GYUclFaxx17TJGF7gpelGfTmPCVx7',
  guide1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0BfviMsRmGSM1xnCOiLAjEB-Xdb5zdVkaJer9i8EJDmcHyk3B_cx3NNEUzYZx5eeXLb3knh4GSyKV1fU2pKt6dX7NkkJOM-qqssY1oLkNGpRLgm3AiSVVcnGdAVSqgMJeL-mStHglR2Rc9V12kuRO9iwN7ZjrDqchBTD7BWXOm-mCLk6H7Q8mnXUOH5vIX9avqy2wQ7x_g34-VVu4BanY1QQ1qVm-2_PkEjdf_nz1PHmI3pTuP8jQkRkJa9qDZRvYGjv8ySp5VHSG',
  guide2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmFH0khJGsP3WF6jo0oP4Up6txGVXUjwbxkoBRe2qFZ9NP8n_B-_80zR4xgC-vwZ_xJe2jD3yxC9KW8cyn8HuxuY-m-ekx94ordv9ow5y-sDLRAdBGsB-OC2Uyyau8cibT2F0jzjHlYpzF_nMlW7A_kIkMB_qLguTW_xUfzNx7x_eMdw7YkJmmZ7pgRU7wmfY_PAl3VPBTX6JWkhI3N348TMBzsWN7E0IK29Nx4-CbsyPt-G-lE2US0DWxwyFKjDAQaxsbtZOU1-zk',
  guide3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjmyV2fEdfowObNUQEdEUCUjeAXT79-_C1jZFWRB2e808-3tfGL8OV3UZfpYigH8sBJeWe0C2e3P1qLxDCO3yK0XTt0uNcvOGtejqDTA6iXikPbUpa_Ov0qZ8nEKDCNhqX_NSvoRSK-sQTzgMTEaIeitqPG-OO3E1RqoYPLIMkw8pL0O56WtrqhWKVtkf0K9TxW89oGMhxYUmy8ubas4ZLOLKTQoJw0RZsUtFqYwdXmhDagMfIONiDIwWBhSWQXZB_tYDq7xio3vl6',
}

const daNangItinerary = [
  {
    dayNumber: 1,
    title: 'Arrival, Han River & Dragon Bridge',
    summary: 'Airport transfer, hotel check-in and welcome dinner by the river.',
    activities: [
      {
        id: 'dn-day1-pickup',
        time: '07:30',
        title: 'Airport pickup',
        location: 'Da Nang International Airport',
        type: 'transport',
      },
      {
        id: 'dn-day1-checkin',
        time: '10:30',
        title: 'Hotel check-in',
        location: 'My Khe Beach Resort',
        type: 'hotel',
      },
      {
        id: 'dn-day1-dinner',
        time: '18:00',
        title: 'Welcome seafood dinner',
        location: 'Han River promenade',
        type: 'meal',
      },
    ],
  },
  {
    dayNumber: 2,
    title: 'Coastal Gems & Local Flavor',
    summary:
      'Marble Mountains, Non Nuoc artisan village, local lunch and evening riverfront walk.',
    activities: [
      {
        id: 'dn-day2-marble',
        time: '08:30',
        title: 'Marble Mountains Spiritual Hike',
        location: 'Huyen Khong Cave & Linh Ung Pagoda',
        type: 'sightseeing',
        note: 'All guests checked in and completed the cave trail safely.',
      },
      {
        id: 'dn-day2-artisan',
        time: '11:00',
        title: 'Local Artisan Stone Carving Workshop',
        location: 'Non Nuoc Stone Village',
        type: 'workshop',
        note: 'Guide is coordinating the hands-on session with local craftsmen.',
      },
      {
        id: 'dn-day2-lunch',
        time: '13:00',
        title: 'Lunch: Mi Quang Specialty House',
        location: 'Mi Quang Ba Mua',
        type: 'meal',
        note: 'Vegetarian and nut-free portions have been pre-ordered.',
      },
      {
        id: 'dn-day2-river',
        time: '18:00',
        title: 'Dragon Bridge riverside walk',
        location: 'Han River waterfront',
        type: 'sightseeing',
      },
    ],
  },
  {
    dayNumber: 3,
    title: 'Hoi An Lantern Finale',
    summary:
      'Transfer to Hoi An, lantern workshop, old town stroll and departure support.',
    activities: [
      {
        id: 'dn-day3-transfer',
        time: '09:00',
        title: 'Transfer to Hoi An',
        location: 'Da Nang to Hoi An',
        type: 'transport',
      },
      {
        id: 'dn-day3-lantern',
        time: '11:30',
        title: 'Lantern-making workshop',
        location: 'Hoi An Ancient Town',
        type: 'workshop',
      },
      {
        id: 'dn-day3-farewell',
        time: '17:00',
        title: 'Farewell dinner and airport support',
        location: 'Hoi An Riverside',
        type: 'meal',
      },
    ],
  },
]

const serviceCatalogs = {
  daNang: {
    hotelOptions: [
      {
        id: 'dn-hotel-boutique',
        name: 'My Khe Boutique Deluxe',
        roomType: 'Boutique Deluxe Room',
        tier: 'Included',
        description: 'Beachfront boutique stay within a short transfer from the first-day route.',
        surchargePerGroup: 0,
      },
      {
        id: 'dn-hotel-coastal-suite',
        name: 'Premium Coastal Suite',
        roomType: 'Premium Coastal Suite',
        tier: 'Upgrade',
        description: 'Larger sea-view suite with priority early check-in support.',
        surchargePerGroup: 160,
      },
    ],
    transportOptions: [
      {
        id: 'dn-transport-shared-van',
        name: 'Shared Premium Van',
        type: 'Shared transfer',
        description: 'Provider-managed airport pickup and intercity transfers with the group.',
        surchargePerGroup: 0,
      },
      {
        id: 'dn-transport-private-suv',
        name: 'Private SUV',
        type: 'Private transfer',
        description: 'Dedicated driver, flexible pickup windows and private luggage handling.',
        surchargePerGroup: 140,
      },
    ],
  },
  hoiAn: {
    hotelOptions: [
      {
        id: 'ha-hotel-day-use',
        name: 'No overnight stay',
        roomType: 'Day-trip arrangement',
        tier: 'Included',
        description: 'This itinerary is operated as a day trip and does not require hotel booking.',
        surchargePerGroup: 0,
      },
      {
        id: 'ha-hotel-riverside-lounge',
        name: 'Riverside Day Lounge',
        roomType: 'Day-use suite',
        tier: 'Add-on',
        description: 'Private refresh suite for shower, rest and luggage between activities.',
        surchargePerGroup: 90,
      },
    ],
    transportOptions: [
      {
        id: 'ha-transport-shared-shuttle',
        name: 'Shared Shuttle',
        type: 'Shared transfer',
        description: 'Scheduled pickup from Da Nang hotels with small-group routing.',
        surchargePerGroup: 0,
      },
      {
        id: 'ha-transport-private-sedan',
        name: 'Private Sedan',
        type: 'Private transfer',
        description: 'Direct round-trip vehicle for a more flexible old-town schedule.',
        surchargePerGroup: 85,
      },
    ],
  },
  haLong: {
    hotelOptions: [
      {
        id: 'hl-hotel-premium-cabin',
        name: 'Premium Bay Cabin',
        roomType: 'Premium Bay Cabin',
        tier: 'Included',
        description: 'Well-appointed cruise cabin with panoramic windows on the main deck.',
        surchargePerGroup: 0,
      },
      {
        id: 'hl-hotel-signature-suite',
        name: 'Signature Cruise Suite',
        roomType: 'Signature Suite',
        tier: 'Upgrade',
        description: 'Expanded suite with private balcony and upgraded dining privileges.',
        surchargePerGroup: 220,
      },
    ],
    transportOptions: [
      {
        id: 'hl-transport-limo-bus',
        name: 'Luxury Limousine Bus',
        type: 'Shared transfer',
        description: 'Scheduled Hanoi to port transfer with provider host assistance.',
        surchargePerGroup: 0,
      },
      {
        id: 'hl-transport-private-limo',
        name: 'Private Limousine',
        type: 'Private transfer',
        description: 'Door-to-port premium car with rest-stop flexibility.',
        surchargePerGroup: 180,
      },
    ],
  },
  santorini: {
    hotelOptions: [
      {
        id: 'az-hotel-boutique-suite',
        name: 'Boutique Caldera Suite',
        roomType: 'Private Suite Tier',
        tier: 'Included',
        description: 'Caldera-view boutique suite paired with concierge check-in.',
        surchargePerGroup: 0,
      },
      {
        id: 'az-hotel-sunset-villa',
        name: 'Sunset Cliff Villa',
        roomType: 'Sunset Cliff Villa',
        tier: 'Upgrade',
        description: 'Private villa with plunge pool and a wider sea-view terrace.',
        surchargePerGroup: 320,
      },
    ],
    transportOptions: [
      {
        id: 'az-transport-concierge-van',
        name: 'Concierge Van',
        type: 'Shared premium transfer',
        description: 'Provider-managed airport and marina transfers with shared coordination.',
        surchargePerGroup: 0,
      },
      {
        id: 'az-transport-private-mercedes',
        name: 'Private Mercedes Van',
        type: 'Private transfer',
        description: 'Dedicated chauffeur with flexible pickup windows across the island.',
        surchargePerGroup: 210,
      },
    ],
  },
  kyoto: {
    hotelOptions: [
      {
        id: 'ky-hotel-business',
        name: 'Central Business Hotel',
        roomType: 'Compact Twin Room',
        tier: 'Value',
        description: 'Efficient city-center base close to rail and food streets.',
        surchargePerGroup: 0,
      },
      {
        id: 'ky-hotel-machiya',
        name: 'Machiya Stay Upgrade',
        roomType: 'Machiya Townhouse Suite',
        tier: 'Premium',
        description: 'Private townhouse-style stay for a more atmospheric Kyoto route.',
        surchargePerGroup: 190,
      },
    ],
    transportOptions: [
      {
        id: 'ky-transport-rail-pass',
        name: 'Rail + Metro Pass',
        type: 'Public transport',
        description: 'AI plan optimized for rail usage and walking transfers.',
        surchargePerGroup: 0,
      },
      {
        id: 'ky-transport-private-taxi',
        name: 'Private Taxi Blocks',
        type: 'Private transfer',
        description: 'Reserved taxi windows for temple-to-dinner transfers.',
        surchargePerGroup: 150,
      },
    ],
  },
}

const tours = [
  {
    id: 'tour-dn-coastal-elegance',
    name: 'Da Nang 3D2N: Coastal Elegance',
    shortName: 'Coastal Elegance',
    providerId: 'provider-azure-horizon',
    location: 'Da Nang, Vietnam',
    region: 'Central Vietnam',
    category: 'Culture',
    vibe: 'Coastal',
    durationDays: 3,
    nights: 2,
    durationLabel: '3 Days',
    pricePerPerson: 289,
    rating: 4.9,
    reviews: 128,
    maxGroupSize: 12,
    status: 'active',
    nextDeparture: '2026-04-12',
    heroImage: COMMON_IMAGES.hero,
    cardImage: COMMON_IMAGES.card,
    mapImage: COMMON_IMAGES.map,
    summary:
      'A premium Da Nang itinerary blending airport support, landmark visits, local food and passenger tracking.',
    highlights: [
      { icon: 'temple_buddhist', title: 'Marble Mountains' },
      { icon: 'restaurant', title: 'Curated local meals' },
      { icon: 'location_on', title: 'Realtime checkpoints' },
      { icon: 'badge', title: 'Dedicated guide' },
    ],
    includedServices: [
      {
        title: 'Accommodation',
        description: '2 nights in a beachfront boutique property.',
      },
      {
        title: 'Transport',
        description: 'Airport pickup, intercity transfers and guide support.',
      },
      {
        title: 'Meals',
        description: 'Breakfast daily plus 2 curated local dining experiences.',
      },
      {
        title: 'Activities',
        description: 'Entry tickets, workshop fees and guided sightseeing.',
      },
    ],
    hotelOptions: serviceCatalogs.daNang.hotelOptions,
    transportOptions: serviceCatalogs.daNang.transportOptions,
    itineraryTemplate: daNangItinerary,
  },
  {
    id: 'tour-hoi-an-soul',
    name: 'Hoi An Ancient Soul Day Trip',
    shortName: 'Hoi An Day Trip',
    providerId: 'provider-azure-horizon',
    location: 'Hoi An, Vietnam',
    region: 'Central Vietnam',
    category: 'Culture',
    vibe: 'Lanterns',
    durationDays: 1,
    nights: 0,
    durationLabel: '1 Day',
    pricePerPerson: 148,
    rating: 4.8,
    reviews: 96,
    maxGroupSize: 8,
    status: 'active',
    nextDeparture: '2026-04-05',
    heroImage: COMMON_IMAGES.hero,
    cardImage: COMMON_IMAGES.card,
    mapImage: COMMON_IMAGES.map,
    summary:
      'Private pickup, old town storytelling and a premium lantern workshop in Hoi An.',
    highlights: [
      { icon: 'temple_buddhist', title: 'Old town heritage' },
      { icon: 'light', title: 'Lantern workshop' },
      { icon: 'restaurant', title: 'Chef-led tasting' },
      { icon: 'camera_alt', title: 'Photo stops' },
    ],
    includedServices: [
      {
        title: 'Private transfer',
        description: 'Door-to-door transport from Da Nang hotels.',
      },
      {
        title: 'Guide support',
        description: 'English-speaking local storyteller throughout the route.',
      },
    ],
    hotelOptions: serviceCatalogs.hoiAn.hotelOptions,
    transportOptions: serviceCatalogs.hoiAn.transportOptions,
    itineraryTemplate: [
      {
        dayNumber: 1,
        title: 'Hoi An old town circuit',
        summary: 'Lobby pickup, walking tour, riverside lunch and lantern craft session.',
        activities: [
          {
            id: 'ha-pickup',
            time: '08:00',
            title: 'Hotel lobby pickup',
            location: 'Da Nang city center',
            type: 'transport',
          },
          {
            id: 'ha-walk',
            time: '10:00',
            title: 'Ancient town heritage walk',
            location: 'Hoi An Old Town',
            type: 'sightseeing',
          },
          {
            id: 'ha-lantern',
            time: '14:00',
            title: 'Lantern-making workshop',
            location: 'An Hoi Quarter',
            type: 'workshop',
          },
        ],
      },
    ],
  },
  {
    id: 'tour-ha-long-premium',
    name: 'Emerald Waters & Ancient Karsts',
    shortName: 'Ha Long Premium',
    providerId: 'provider-azure-horizon',
    location: 'Ha Long Bay, Vietnam',
    region: 'Northern Vietnam',
    category: 'Luxury',
    vibe: 'Cruise',
    durationDays: 5,
    nights: 4,
    durationLabel: '5 Days',
    pricePerPerson: 1249,
    rating: 4.9,
    reviews: 1200,
    maxGroupSize: 16,
    status: 'active',
    nextDeparture: '2026-05-20',
    heroImage: COMMON_IMAGES.hero,
    cardImage: COMMON_IMAGES.card,
    mapImage: COMMON_IMAGES.map,
    summary:
      'Luxury cruise through Ha Long Bay with curated caves, lagoons and cultural immersion.',
    highlights: [
      { icon: 'directions_boat', title: 'Luxury cruise' },
      { icon: 'restaurant', title: 'All meals included' },
      { icon: 'badge', title: 'Local expert guide' },
      { icon: 'location_on', title: 'Dynamic checkpoints' },
    ],
    includedServices: [
      {
        title: 'Cruise suite',
        description: '4 nights in a premium bay-view cabin.',
      },
      {
        title: 'Transfers',
        description: 'Round-trip Hanoi transfer and port support.',
      },
    ],
    hotelOptions: serviceCatalogs.haLong.hotelOptions,
    transportOptions: serviceCatalogs.haLong.transportOptions,
    itineraryTemplate: [
      {
        dayNumber: 1,
        title: 'Hanoi arrival & transfer',
        summary: 'Airport greeting and scenic drive to Ha Long gateway.',
        activities: [
          {
            id: 'hl-transfer',
            time: '09:00',
            title: 'Airport transfer',
            location: 'Noi Bai to Ha Long',
            type: 'transport',
          },
        ],
      },
      {
        dayNumber: 2,
        title: 'Hidden grottoes cruise',
        summary: 'Boarding, cave kayaking and floating village visit.',
        activities: [
          {
            id: 'hl-board',
            time: '08:00',
            title: 'Luxury cruise boarding',
            location: 'Lan Ha Bay dock',
            type: 'transport',
          },
        ],
      },
    ],
  },
  {
    id: 'tour-santorini-horizon',
    name: 'Azure Horizon Expedition',
    shortName: 'Azure Horizon',
    providerId: 'provider-azure-horizon',
    location: 'Santorini, Greece',
    region: 'Mediterranean',
    category: 'Luxury',
    vibe: 'Sunset',
    durationDays: 7,
    nights: 6,
    durationLabel: '7 Days',
    pricePerPerson: 1060,
    rating: 4.9,
    reviews: 215,
    maxGroupSize: 6,
    status: 'active',
    nextDeparture: '2026-06-12',
    heroImage: COMMON_IMAGES.hero,
    cardImage: COMMON_IMAGES.card,
    mapImage: COMMON_IMAGES.map,
    summary:
      'Private-caldera sailing, heritage walks and curated tracking access for group travel.',
    highlights: [
      { icon: 'directions_boat', title: 'Private sunset cruise' },
      { icon: 'villa', title: 'Boutique stays' },
      { icon: 'share_location', title: 'Passenger tracking link' },
      { icon: 'restaurant', title: 'Fine dining' },
    ],
    includedServices: [
      {
        title: 'Boutique hotel',
        description: '6 nights with caldera-view breakfast.',
      },
      {
        title: 'Concierge',
        description: 'Provider support and private airport transfer.',
      },
    ],
    hotelOptions: serviceCatalogs.santorini.hotelOptions,
    transportOptions: serviceCatalogs.santorini.transportOptions,
    itineraryTemplate: [
      {
        dayNumber: 1,
        title: 'Arrival & caldera welcome',
        summary: 'Airport transfer, suite check-in and sunset briefing.',
        activities: [
          {
            id: 'az-arrival',
            time: '14:00',
            title: 'Airport pickup',
            location: 'Santorini Airport',
            type: 'transport',
          },
        ],
      },
      {
        dayNumber: 2,
        title: 'Sunset sail & heritage walk',
        summary: 'Morning Oia walk and afternoon private catamaran.',
        activities: [
          {
            id: 'az-oia',
            time: '09:00',
            title: 'Oia heritage walk',
            location: 'Oia Village',
            type: 'sightseeing',
          },
        ],
      },
    ],
  },
  {
    id: 'tour-kyoto-immersion',
    name: 'Kyoto Immersion',
    shortName: 'Kyoto Immersion',
    providerId: 'provider-azure-horizon',
    location: 'Kyoto, Japan',
    region: 'Japan',
    category: 'Culture',
    vibe: 'Zen',
    durationDays: 5,
    nights: 4,
    durationLabel: '5 Days',
    pricePerPerson: 960,
    rating: 4.8,
    reviews: 188,
    maxGroupSize: 10,
    status: 'draft',
    nextDeparture: '2026-07-08',
    heroImage: COMMON_IMAGES.hero,
    cardImage: COMMON_IMAGES.card,
    mapImage: COMMON_IMAGES.map,
    summary:
      'An AI-assisted Kyoto route balancing temples, food discoveries and quiet scenic corridors.',
    highlights: [
      { icon: 'temple_buddhist', title: 'Temple circuit' },
      { icon: 'restaurant', title: 'Shojin lunch' },
      { icon: 'explore', title: 'Neighborhood routes' },
      { icon: 'auto_awesome', title: 'AI-optimized pacing' },
    ],
    includedServices: [
      {
        title: 'Itinerary support',
        description: 'Editable AI-generated route with local suggestions.',
      },
    ],
    hotelOptions: serviceCatalogs.kyoto.hotelOptions,
    transportOptions: serviceCatalogs.kyoto.transportOptions,
    itineraryTemplate: [
      {
        dayNumber: 1,
        title: 'Tradition meets zen',
        summary: 'Arashiyama, temple lunch and garden walk.',
        activities: [
          {
            id: 'ky-1',
            time: '08:30',
            title: 'Arashiyama Bamboo Grove',
            location: 'Arashiyama',
            type: 'sightseeing',
          },
        ],
      },
    ],
  },
]

const guides = [
  {
    id: 'guide-chau',
    name: 'Tran Thi Mai Chau',
    email: 'chau.tran@voyager.vn',
    phone: '+84 905 987 654',
    specialty: 'Coastal & culture operations',
    location: 'Da Nang',
    rating: 4.9,
    status: 'active',
    avatar: AVATARS.guide1,
    lastLoginLabel: 'Just now',
  },
  {
    id: 'guide-linh',
    name: 'Pham My Linh',
    email: 'linh.pham@voyager.vn',
    phone: '+84 905 000 111',
    specialty: 'Food & luxury guest care',
    location: 'Hoi An',
    rating: 4.8,
    status: 'active',
    avatar: AVATARS.guide2,
    lastLoginLabel: 'Today, 09:15 AM',
  },
  {
    id: 'guide-nam',
    name: 'Le Hoang Nam',
    email: 'nam.le@voyager.vn',
    phone: '+84 912 345 678',
    specialty: 'Adventure transfers',
    location: 'Da Nang',
    rating: 4.6,
    status: 'inactive',
    avatar: AVATARS.guide3,
    lastLoginLabel: '4 days ago',
  },
]

const liveTimeline = createTimeline(daNangItinerary, '2026-03-29')
liveTimeline[0].activities = liveTimeline[0].activities.map((activity) => ({
  ...activity,
  status: 'Completed',
}))
liveTimeline[1].activities[0].status = 'Completed'
liveTimeline[1].activities[1].status = 'Ongoing'

export function createInitialVoyagerDemoState() {
  const bookings = [
    {
      id: 'booking-live-da-nang',
      code: 'VGR-240330-DN',
      travelerId: 'traveler-alex',
      providerId: 'provider-azure-horizon',
      guideId: 'guide-chau',
      tourId: 'tour-dn-coastal-elegance',
      bookingDate: '2026-03-18',
      startDate: '2026-03-29',
      endDate: '2026-03-31',
      status: 'confirmed',
      paymentStatus: 'paid',
      groupSize: 4,
      selectedHotelOptionId: 'dn-hotel-coastal-suite',
      selectedTransportOptionId: 'dn-transport-private-suv',
      serviceSelectionStatus: 'confirmed',
      providerServiceNote:
        'Premium suite and private SUV were locked in before arrival because the group booked early.',
      roomType: 'Premium Coastal Suite',
      totalAmount: 1240,
      amountPaid: 1240,
      trackingToken: 'dn-240330-live',
      phoneVerificationRequired: false,
      passengers: [
        {
          id: 'psg-alex',
          name: 'Alex Rivera',
          role: 'Lead traveler',
          age: 31,
          dietary: [],
          mobility: [],
          avatar: AVATARS.alex,
        },
        {
          id: 'psg-mia',
          name: 'Mia Lopez',
          role: 'Passenger',
          age: 29,
          dietary: ['Vegetarian'],
          mobility: [],
          avatar: AVATARS.mia,
        },
        {
          id: 'psg-marcus',
          name: 'Marcus Wright',
          role: 'Passenger',
          age: 42,
          dietary: [],
          mobility: ['Nut-free'],
          avatar: AVATARS.marcus,
        },
        {
          id: 'psg-ella',
          name: 'Ella Nguyen',
          role: 'Passenger',
          age: 34,
          dietary: [],
          mobility: [],
          avatar: AVATARS.mia,
        },
      ],
      execution: {
        state: 'ongoing',
        currentDay: 2,
        latestUpdateAt: '2026-03-30T11:05:00+07:00',
        latestUpdateMessage:
          'The group has started the stone carving workshop at Non Nuoc Village. Lunch remains on schedule for 1:00 PM.',
        latestUpdateType: 'schedule',
        notifications: [
          {
            id: 'note-live-1',
            time: '2026-03-30T08:45:00+07:00',
            title: 'Morning hike completed',
            message:
              'All 4 passengers completed the Marble Mountains trail and regrouped at the exit gate.',
          },
          {
            id: 'note-live-2',
            time: '2026-03-30T11:05:00+07:00',
            title: 'Workshop started',
            message:
              'The guide has checked in at Non Nuoc Stone Village and is supervising the hands-on carving session.',
          },
        ],
        checkpoints: [
          { id: 'cp-airport', name: 'Airport pickup', state: 'completed' },
          { id: 'cp-marble', name: 'Marble Mountains', state: 'completed' },
          { id: 'cp-village', name: 'Stone village', state: 'current' },
          { id: 'cp-lunch', name: 'Lunch stop', state: 'upcoming' },
        ],
        timelineDays: liveTimeline,
      },
    },
    {
      id: 'booking-santorini-upcoming',
      code: 'VGR-260612-AZ',
      travelerId: 'traveler-alex',
      providerId: 'provider-azure-horizon',
      guideId: 'guide-linh',
      tourId: 'tour-santorini-horizon',
      bookingDate: '2026-03-22',
      startDate: '2026-06-12',
      endDate: '2026-06-18',
      status: 'pending',
      paymentStatus: 'partially-paid',
      groupSize: 4,
      selectedHotelOptionId: 'az-hotel-boutique-suite',
      selectedTransportOptionId: 'az-transport-concierge-van',
      serviceSelectionStatus: 'pending_provider_confirmation',
      providerServiceNote:
        'Requested services are reserved tentatively and will be finalized after inventory review.',
      roomType: 'Private Suite Tier',
      totalAmount: 4250,
      amountPaid: 1200,
      trackingToken: 'azh-260612-x9f2',
      phoneVerificationRequired: true,
      passengers: [
        {
          id: 'psg-alex-upcoming',
          name: 'Alex Rivera',
          role: 'Lead traveler',
          age: 31,
          dietary: [],
          mobility: [],
          avatar: AVATARS.alex,
        },
        {
          id: 'psg-noa',
          name: 'Noa Kim',
          role: 'Passenger',
          age: 30,
          dietary: ['Vegan'],
          mobility: [],
          avatar: AVATARS.mia,
        },
        {
          id: 'psg-luke',
          name: 'Luke Torres',
          role: 'Passenger',
          age: 35,
          dietary: [],
          mobility: [],
          avatar: AVATARS.marcus,
        },
        {
          id: 'psg-sophia',
          name: 'Sophia Vu',
          role: 'Passenger',
          age: 29,
          dietary: [],
          mobility: [],
          avatar: AVATARS.mia,
        },
      ],
      execution: {
        state: 'scheduled',
        currentDay: 0,
        latestUpdateAt: '2026-03-22T16:00:00+07:00',
        latestUpdateMessage:
          'Booking created and awaiting provider confirmation. Tracking link is already available for your group.',
        latestUpdateType: 'booking',
        notifications: [
          {
            id: 'note-upcoming-1',
            time: '2026-03-22T16:00:00+07:00',
            title: 'Booking created',
            message:
              'Your Santorini itinerary has been received and is pending provider confirmation.',
          },
        ],
        checkpoints: [
          { id: 'cp-az-1', name: 'Provider review', state: 'current' },
          { id: 'cp-az-2', name: 'Guide assignment', state: 'upcoming' },
          { id: 'cp-az-3', name: 'Departure day', state: 'upcoming' },
        ],
        timelineDays: createTimeline(tours[3].itineraryTemplate, '2026-06-12'),
      },
    },
    {
      id: 'booking-halong-completed',
      code: 'VGR-260110-HL',
      travelerId: 'traveler-alex',
      providerId: 'provider-azure-horizon',
      guideId: 'guide-nam',
      tourId: 'tour-ha-long-premium',
      bookingDate: '2025-12-18',
      startDate: '2026-01-10',
      endDate: '2026-01-14',
      status: 'completed',
      paymentStatus: 'paid',
      groupSize: 2,
      selectedHotelOptionId: 'hl-hotel-signature-suite',
      selectedTransportOptionId: 'hl-transport-private-limo',
      serviceSelectionStatus: 'confirmed',
      providerServiceNote:
        'Signature suite and private limousine were confirmed as part of the final sailing manifest.',
      roomType: 'Signature Suite',
      totalAmount: 2618,
      amountPaid: 2618,
      trackingToken: 'halong-260110-complete',
      phoneVerificationRequired: false,
      passengers: [
        {
          id: 'psg-alex-hl',
          name: 'Alex Rivera',
          role: 'Lead traveler',
          age: 31,
          dietary: [],
          mobility: [],
          avatar: AVATARS.alex,
        },
        {
          id: 'psg-jamie-hl',
          name: 'Jamie Clark',
          role: 'Passenger',
          age: 30,
          dietary: [],
          mobility: [],
          avatar: AVATARS.marcus,
        },
      ],
      execution: {
        state: 'completed',
        currentDay: 5,
        latestUpdateAt: '2026-01-14T20:10:00+07:00',
        latestUpdateMessage:
          'Farewell transfer completed. Thank you for traveling with Voyager AI.',
        latestUpdateType: 'completion',
        notifications: [
          {
            id: 'note-hl-1',
            time: '2026-01-14T20:10:00+07:00',
            title: 'Trip completed',
            message:
              'The Ha Long premium itinerary has finished successfully and all travelers were transferred back to Hanoi.',
          },
        ],
        checkpoints: [
          { id: 'cp-hl-1', name: 'Transfer', state: 'completed' },
          { id: 'cp-hl-2', name: 'Cruise', state: 'completed' },
          { id: 'cp-hl-3', name: 'Return', state: 'completed' },
        ],
        timelineDays: createTimeline(tours[2].itineraryTemplate, '2026-01-10', 'completed'),
      },
    },
  ]

  return {
    traveler: {
      id: 'traveler-alex',
      name: 'Alex Rivera',
      email: 'alex.rivera@voyager.ai',
      tier: 'Premium Traveler',
      avatar: AVATARS.alex,
      countryCount: 24,
    },
    provider: {
      id: 'provider-azure-horizon',
      name: 'Azure Horizon Elite',
      label: 'Verified Provider',
      supportEmail: 'ops@azurehorizon.travel',
      hotline: '+84 236 777 9000',
    },
    guides,
    tours,
    bookings,
    planner: {
      destination: 'Kyoto, Japan',
      durationDays: 5,
      budget: 'premium',
      travelStyles: ['Adventure', 'Food'],
      companions: 'couple',
      generatedAt: '2026-03-30T10:00:00+07:00',
    },
    activityFeed: [
      {
        id: 'feed-1',
        time: '2026-03-30T11:05:00+07:00',
        type: 'guide',
        title: 'Guide update published',
        description:
          'Tran Thi Mai Chau updated the Da Nang live timeline from Non Nuoc Stone Village.',
      },
      {
        id: 'feed-2',
        time: '2026-03-30T09:15:00+07:00',
        type: 'booking',
        title: 'Traveler booking pending',
        description:
          'Azure Horizon Expedition is waiting for provider confirmation and guide assignment.',
      },
      {
        id: 'feed-3',
        time: '2026-03-29T18:10:00+07:00',
        type: 'tracking',
        title: 'Tracking link viewed',
        description:
          'Passengers opened the public link 6 times during the Da Nang arrival day.',
      },
    ],
    ui: {
      selectedTourId: 'tour-dn-coastal-elegance',
      selectedBookingId: 'booking-live-da-nang',
      liveBookingId: 'booking-live-da-nang',
      selectedGuideId: 'guide-chau',
    },
  }
}
