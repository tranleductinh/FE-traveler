import { useNavigate } from 'react-router-dom'
import { formatDate, formatDateRange, useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

function getStatePill(state) {
  if (state === 'ongoing') {
    return 'bg-primary text-on-primary'
  }
  if (state === 'scheduled') {
    return 'bg-slate-100 text-slate-700'
  }
  return 'bg-surface-container-highest text-on-surface-variant'
}

export default function AssignedToursListGuide() {
  const navigate = useNavigate()
  const { bookingsWithRelations, liveBooking } = useVoyagerDemo()
  const assignedBookings = bookingsWithRelations.filter((booking) => booking.guide)
  const featuredBooking =
    assignedBookings.find((booking) => booking.id === liveBooking.id) ?? assignedBookings[0]
  const secondaryBooking =
    assignedBookings.find((booking) => booking.id !== featuredBooking?.id) ?? assignedBookings[0]
  const laterBookings = assignedBookings.filter(
    (booking) => booking.id !== featuredBooking?.id && booking.id !== secondaryBooking?.id,
  )

  return (
    <PageShell
      title="Voyager AI - Guide Assigned Tours"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }
      body { font-family: "Inter", sans-serif; background-color: #f7f9fb; }
      .font-headline { font-family: "Plus Jakarta Sans", sans-serif; }`}
    >
      <div className="text-on-surface">
        <main className="pt-24 pb-28 px-6 max-w-screen-2xl mx-auto min-h-screen">
          <section className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface font-headline tracking-tight mb-2">
              My Itineraries
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Curating guide-ready travel experiences across the shared demo workspace. Here
              are your assigned journeys.
            </p>
          </section>

          <section className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {['All', 'Today', 'Upcoming', 'Ongoing', 'Completed'].map((label, index) => (
                <button
                  key={label}
                  className={`px-5 py-2.5 rounded-full text-sm ${
                    index === 0
                      ? 'bg-primary text-on-primary font-semibold shadow-md'
                      : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container font-medium transition-all'
                  }`}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-lowest text-on-surface rounded-xl ring-1 ring-outline-variant/20 text-sm font-medium hover:bg-surface-container transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Filters
              </button>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {featuredBooking ? (
              <div className="lg:col-span-8 group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm h-[500px] flex flex-col">
                  <div className="relative h-2/3 overflow-hidden">
                    <img
                      alt={featuredBooking.tour.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={featuredBooking.tour.cardImage}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-on-primary text-xs font-bold rounded-full uppercase tracking-widest">
                        {featuredBooking.execution.state === 'ongoing' ? 'Ongoing' : 'Scheduled'}
                      </span>
                      <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-fixed text-xs font-bold rounded-full uppercase tracking-widest">
                        Guide View
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl">
                        <span className="text-primary font-bold text-xl">{featuredBooking.code}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h2 className="text-3xl font-bold font-headline text-on-surface mb-2">
                          {featuredBooking.tour.name}
                        </h2>
                        <p className="text-on-surface-variant flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          Pickup: {featuredBooking.tour.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-1">
                          Guide
                        </span>
                        <span className="text-primary font-semibold">
                          {featuredBooking.guide?.name ?? 'Unassigned'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-outline-variant/10">
                      <div className="flex gap-8">
                        <div className="flex flex-col">
                          <span className="text-xs text-on-surface-variant font-medium">
                            Passengers
                          </span>
                          <span className="font-bold text-lg flex items-center gap-1">
                            {featuredBooking.groupSize}
                            <span className="material-symbols-outlined text-sm">group</span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-on-surface-variant font-medium">
                            Duration
                          </span>
                          <span className="font-bold text-lg">
                            {formatDateRange(featuredBooking.startDate, featuredBooking.endDate)}
                          </span>
                        </div>
                      </div>
                      <button
                        className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-primary/20"
                        onClick={() => navigate('/pages/guide-tour-detail-ops')}
                        type="button"
                      >
                        View Full Itinerary
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="lg:col-span-4 flex flex-col gap-6">
              {secondaryBooking ? (
                <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      alt={secondaryBooking.tour.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={secondaryBooking.tour.cardImage}
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm ${getStatePill(
                          secondaryBooking.execution.state,
                        )}`}
                      >
                        {secondaryBooking.execution.state}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase mb-1 block">
                      {secondaryBooking.code}
                    </span>
                    <h3 className="text-xl font-bold font-headline mb-4">
                      {secondaryBooking.tour.name}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-lg">calendar_month</span>
                        <span>{formatDateRange(secondaryBooking.startDate, secondaryBooking.endDate)}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-lg">group</span>
                        <span>{secondaryBooking.groupSize} Passengers</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-lg">pin_drop</span>
                        <span>{secondaryBooking.tour.location}</span>
                      </div>
                    </div>
                    <button
                      className="w-full mt-6 py-3 border border-outline-variant/30 text-primary font-bold rounded-xl hover:bg-primary/5 transition-all active:scale-[0.98]"
                      onClick={() => navigate('/pages/guide-tour-detail-ops')}
                      type="button"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ) : null}

              <div className="bg-primary-container rounded-2xl p-6 text-on-primary shadow-lg shadow-primary-container/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-lg font-bold font-headline mb-2">Live Fleet View</h3>
                  <p className="text-on-primary-container/80 text-sm mb-6">
                    {assignedBookings.filter((booking) => booking.execution.state === 'ongoing').length}{' '}
                    tours currently active in your region.
                  </p>
                  <div className="w-full h-32 bg-white/10 rounded-xl backdrop-blur-md mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-200/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="material-symbols-outlined text-primary-fixed text-4xl"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          location_on
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full py-2 bg-on-primary text-primary-container rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-on-primary-container transition-all"
                    onClick={() => navigate('/pages/guide-live-tour-tracking')}
                    type="button"
                  >
                    Open Tracking
                  </button>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-on-primary/10 rounded-full blur-2xl"></div>
              </div>
            </div>

            <div className="lg:col-span-12 mt-4">
              <h4 className="text-xl font-bold font-headline mb-6 text-on-surface">Later this week</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {laterBookings.slice(0, 2).map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-surface-container-low p-6 rounded-2xl hover:bg-surface-container-high transition-all flex flex-col justify-between border border-transparent hover:border-outline-variant/20"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">
                          {booking.code}
                        </span>
                        <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded uppercase">
                          {booking.execution.state}
                        </span>
                      </div>
                      <h5 className="text-lg font-bold mb-2">{booking.tour.name}</h5>
                      <p className="text-xs text-on-surface-variant mb-4">
                        {formatDate(booking.startDate)} • {booking.groupSize} passengers
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex -space-x-2">
                        {booking.passengers.slice(0, 3).map((passenger) => (
                          <img
                            key={passenger.id}
                            alt={passenger.name}
                            className="w-6 h-6 rounded-full object-cover border border-white"
                            src={passenger.avatar}
                          />
                        ))}
                      </div>
                      <button
                        className="text-xs font-semibold text-primary"
                        onClick={() => navigate('/pages/guide-tour-detail-ops')}
                        type="button"
                      >
                        Manage Tour
                      </button>
                    </div>
                  </div>
                ))}

                <div className="bg-white border-2 border-dashed border-outline-variant/50 p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-teal-50 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">add</span>
                  </div>
                  <h5 className="text-lg font-bold text-on-surface">Propose New Tour</h5>
                  <p className="text-sm text-on-surface-variant">
                    Design a custom route for your next group
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageShell>
  )
}
