import { useNavigate } from 'react-router-dom'
import { formatDateRange, useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

const HERO_BANNER_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAjug0rjpQvNyHvAXHEiHKWHnUdEPrhdBwUJuhwJBGlI1QeWCRPCy3cksvK9FP7g9MddP_gdt0bynj_iDwpW7dvGryTu4qalljCJ0gCoz5zFIb09IeOm-z0FifRkSGwWB1kldB6Txg_q1ECP5iYxLDsBiO0vGd-23E7Q8uwAzlAk5elBRtAcZcW0PqmWzXTMlAdanR_DCxIdmfEVYR6hzTD5xg8FUrYcerpHITQA2I5jq3omZSBOSO9vCBtTYTxNPLemWPvlH591k-M'
const WORLD_MAP_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDECaoI9tXgXJWH0Czo6xE5fWe0KDdhvqLWdB7qiySRNB2o3ztqA9xYxwbFq_vQmMeoHQ4riKeccYEH8YUhkKxMlNA6zrxl9dt7h45K9hSSqucO0QWkFvPy8o-qbF5Knv3EVGTO37wvzjldSH4h6_8Ez2y_BziLB2WDvfJjWMstvWK_bcq82c01iba3iORoHKTxJfczZl3Q47q-GedL2v5v8e4o1sQoTU5S2pHdAmFXvJHdHRYzrtNKCe-AAbZGva90XYwPt8tPOfLd'

const UPCOMING_TRIPS = [
  {
    id: '1',
    title: 'Kyoto, Japan',
    date: 'Oct 12 - 20',
    status: 'Ongoing',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALjl5dW-MtCqhnIqT7tsH5egkh4n8nRd2nS1in1WR-ZnH5RC_0LCjruU4lxHnRqq_a1ClhjnDr4RSqWcalS9ApLE9aoDtTnzhKGt9badv9SJGoUlz3N2PNuPrw2XXzWHwouDvlfMpgtfQymxm1fI6CgsU3KXPYmxVjP0qXM2SUTTUSYLLRn3y2dTiiRrUw3G2ttzTR0mq-PB2vV90sOk1R4-3bORjEOpekb082UYnGmk7vhiE9y1jBGVeDh0RCNVPH82t4goo2B02A',
  },
  {
    id: '2',
    title: 'Santorini, Greece',
    date: 'Nov 05 - 12',
    status: 'Upcoming',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAiApQNSprTtVJQTkmx5BRAB5Rz1ZpiRYaF3-sLSRPfYRGYuMW03VUEou5ntEsB2UEi6iV0Xi-dcLHBw7ZOr283YiMNqNDNQUmSBDPK4-43jOZENO7ABl6v2mhoZx_jUncUMlHTyBzsRGuQ0zQYf3tEN6Kdgjzf-jn_FvUK4WbnWglgMkxSINdWy8F-LRwumaiE9VceP6cpQNX5zwUN_QHx1_ErAqEOl43KagdkhACsTDmuBljliVQjO6xKkxYtzqEe25Oy2sU97jWa',
  },
]

const RECOMMENDATIONS = [
  {
    id: '1',
    icon: 'wb_sunny',
    title: 'Amalfi Coast',
    description: "Stunning cliffs and turquoise waters await in Italy's gem.",
    meta: 'est. $1,200',
    weather: '24°C',
  },
  {
    id: '2',
    icon: 'landscape',
    title: 'Swiss Alps',
    description: 'Experience the luxury of high-altitude retreats and hiking.',
    meta: 'est. $2,400',
    weather: '12°C',
  },
  {
    id: '3',
    icon: 'nightlife',
    title: 'Barcelona',
    description: 'Gothic quarters, beach clubs, and incredible architecture.',
    meta: 'est. $950',
    weather: '21°C',
  },
]

export default function TravelerDashboard() {
  const navigate = useNavigate()
  const { actions, bookingsWithRelations, state } = useVoyagerDemo()
  const upcomingTrips = bookingsWithRelations
    .filter((booking) => booking.status !== 'completed')
    .slice(0, 2)
    .map((booking) => ({
      id: booking.id,
      title: booking.tour.location,
      date: formatDateRange(booking.startDate, booking.endDate),
      status: booking.execution.state === 'ongoing' ? 'Ongoing' : 'Upcoming',
      image: booking.tour.cardImage,
      tourId: booking.tour.id,
    }))
  const recommendations = state.tours
    .filter((tour) => tour.status === 'active')
    .slice(0, 3)
    .map((tour) => ({
      id: tour.id,
      icon: tour.highlights[0]?.icon ?? 'travel_explore',
      title: tour.location,
      description: tour.summary,
      meta: `est. ${tour.pricePerPerson ? `$${tour.pricePerPerson}` : '$1,000'}`,
      weather: tour.vibe,
    }))

  return (
    <PageShell
      title="Voyager AI - Dashboard"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}
    >
      <div className="bg-surface font-body text-on-surface">
        <div className="flex pt-16 min-h-screen">
          <main className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-12">
                <section className="relative h-[320px] rounded-[2rem] overflow-hidden bg-slate-900 group">
                  <img
                    alt="Paradise beach"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                    src={HERO_BANNER_IMAGE}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-end p-10 space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-headline font-extrabold text-white leading-tight">
                      Plan your next
                      <br />
                      trip with AI
                    </h1>
                    <p className="text-slate-200 text-lg max-w-md">
                      Our concierge creates bespoke itineraries based on your mood,
                      budget, and style.
                    </p>
                    <div className="pt-4">
                      <button
                        className="bg-white text-primary px-8 py-3.5 rounded-full font-bold text-sm shadow-xl hover:bg-teal-50 transition-colors flex items-center space-x-2"
                        onClick={() => navigate('/pages/ai-travel-planner')}
                        type="button"
                      >
                        <span
                          className="material-symbols-outlined text-sm"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          auto_awesome
                        </span>
                        <span>Generate Plan</span>
                      </button>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-headline font-bold text-on-surface">
                      Upcoming Trips
                    </h2>
                    <button className="text-primary text-sm font-semibold hover:underline" type="button">
                      View all
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {upcomingTrips.map((trip) => (
                      <button
                        key={trip.id}
                        className="group bg-surface-container-lowest p-4 rounded-3xl text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        onClick={() => {
                          actions.selectBooking(trip.id)
                          actions.selectTour(trip.tourId)
                          navigate('/pages/traveler-tracking-link-management')
                        }}
                        type="button"
                      >
                        <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                          <img alt={trip.title} className="w-full h-full object-cover" src={trip.image} />
                          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-teal-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {trip.status}
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-headline font-bold text-lg">{trip.title}</h3>
                            <span className="material-symbols-outlined text-slate-400">more_horiz</span>
                          </div>
                          <div className="flex items-center text-slate-500 text-sm space-x-4">
                            <div className="flex items-center space-x-1">
                              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                              <span>{trip.date}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-headline font-bold text-on-surface">
                        Recommended for You
                      </h2>
                      <p className="text-on-surface-variant text-sm">
                        Based on your recent interest in coastal cities
                      </p>
                    </div>
                  </div>
                  <div className="flex overflow-x-auto space-x-6 pb-6 no-scrollbar -mx-2 px-2">
                    {recommendations.map((tour) => (
                      <button
                        key={tour.id}
                        className="flex-shrink-0 w-72 bg-surface-container-low rounded-[2rem] p-5 text-left hover:bg-surface-container-high transition-colors cursor-pointer"
                        onClick={() => {
                          actions.selectTour(tour.id)
                          navigate('/pages/tour-detail')
                        }}
                        type="button"
                      >
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                          <span className="material-symbols-outlined text-teal-600 text-3xl">
                            {tour.icon}
                          </span>
                        </div>
                        <h4 className="font-headline font-bold text-xl mb-1">{tour.title}</h4>
                        <p className="text-sm text-slate-500 mb-6 line-clamp-2">{tour.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-semibold text-on-surface-variant bg-white px-3 py-1.5 rounded-full">
                            {tour.meta}
                          </div>
                          <div className="flex items-center text-teal-700 text-xs font-bold">
                            {tour.weather}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              <div className="lg:col-span-4 space-y-8">
                <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm">
                  <h3 className="text-lg font-headline font-bold mb-6">Quick Actions</h3>
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-teal-50 text-teal-800 hover:bg-teal-100 transition-all group" onClick={() => navigate('/pages/ai-travel-planner')} type="button">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                          <span className="material-symbols-outlined">auto_awesome</span>
                        </div>
                        <span className="font-bold text-sm">Generate AI Plan</span>
                      </div>
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-secondary-container text-on-secondary-container hover:opacity-80 transition-all group" onClick={() => navigate('/pages/tour-list')} type="button">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                          <span className="material-symbols-outlined">explore</span>
                        </div>
                        <span className="font-bold text-sm">Browse Tours</span>
                      </div>
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-all group" onClick={() => navigate('/pages/my-booking-traveler')} type="button">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-teal-600">
                          <span className="material-symbols-outlined">book_online</span>
                        </div>
                        <span className="font-bold text-sm">My Bookings</span>
                      </div>
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
                    </button>
                  </div>
                </div>

                <div className="bg-surface-container-lowest overflow-hidden rounded-[2rem] shadow-sm relative group">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-sm">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Total Countries
                      </p>
                      <p className="text-2xl font-headline font-extrabold text-teal-800">
                        {state.traveler.countryCount}
                      </p>
                    </div>
                  </div>
                  <img alt="World Map" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" src={WORLD_MAP_IMAGE} />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-xs font-bold text-primary mb-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span>LIVE TRAVEL MAP</span>
                    </div>
                    <h4 className="font-headline font-bold text-on-surface">Explore your footprint</h4>
                    <p className="text-sm text-on-surface-variant mt-1">
                      See all the places you&apos;ve visited and share your map with
                      friends.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-tertiary-container to-tertiary rounded-[2rem] p-8 text-on-tertiary shadow-xl">
                  <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-white">magic_button</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2">Smart Budgeting</h3>
                  <p className="text-on-tertiary/80 text-sm mb-6 leading-relaxed">
                    Let Voyager AI track your expenses in real-time and suggest
                    local hidden gems that fit your daily budget.
                  </p>
                  <button className="w-full py-3 bg-white text-tertiary-container rounded-xl font-bold text-sm hover:bg-slate-50 active:scale-95 transition-all" type="button">
                    Activate Smart Tracker
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageShell>
  )
}
