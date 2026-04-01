import { useNavigate } from 'react-router-dom'
import { formatDateRange, useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

function getStatusChipClasses(state) {
  if (state === 'ongoing') {
    return 'bg-primary-fixed-dim/20 text-on-primary-fixed-variant'
  }
  if (state === 'scheduled') {
    return 'bg-surface-container-highest text-on-surface-variant'
  }
  return 'bg-tertiary-container/10 text-tertiary'
}

function getLabelForBooking(booking, index) {
  if (booking.execution.state === 'ongoing') {
    return 'Morning Departure'
  }
  if (booking.execution.state === 'scheduled') {
    return index === 0 ? 'Upcoming Journey' : 'Evening Experience'
  }
  return 'Completed Route'
}

export default function GuideDashboardHome() {
  const navigate = useNavigate()
  const { bookingsWithRelations, liveBooking, selectedGuide } = useVoyagerDemo()
  const assignedBookings = bookingsWithRelations.filter((booking) => booking.guide)
  const primaryBookings = assignedBookings.slice(0, 2)

  const stats = [
    ['Assigned Today', String(primaryBookings.length).padStart(2, '0'), 'assignment_ind', 'text-primary'],
    [
      'Upcoming Tours',
      String(assignedBookings.filter((booking) => booking.execution.state === 'scheduled').length).padStart(2, '0'),
      'calendar_month',
      'text-secondary',
    ],
    [
      'Ongoing Tours',
      String(assignedBookings.filter((booking) => booking.execution.state === 'ongoing').length).padStart(2, '0'),
      'directions_walk',
      'text-primary-container',
    ],
    [
      'Pending Reports',
      String(assignedBookings.filter((booking) => booking.execution.state !== 'completed').length).padStart(2, '0'),
      'report_problem',
      'text-tertiary',
    ],
  ]

  return (
    <PageShell
      title="Voyager AI - Guide Dashboard"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }
      body { font-family: "Inter", sans-serif; }
      h1, h2, h3 { font-family: "Plus Jakarta Sans", sans-serif; }`}
    >
      <div className="bg-surface text-on-surface min-h-screen">
        <main className="p-6 md:p-10 max-w-7xl mx-auto w-full pt-24 pb-24">
          <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface">
                Welcome back, {selectedGuide.name.split(' ').slice(-2).join(' ')}
              </h1>
              <p className="text-on-surface-variant mt-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                {primaryBookings.length} tours ready in your guide workspace
              </p>
            </div>
            <div className="flex gap-3">
              <button
                className="px-5 py-2.5 rounded-xl bg-secondary-container text-on-secondary-container font-semibold text-sm"
                onClick={() => navigate('/pages/assigned-tours-list-guide')}
                type="button"
              >
                Schedule View
              </button>
              <button
                className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-sm shadow-md shadow-primary/10"
                onClick={() => navigate('/pages/guide-live-tour-tracking')}
                type="button"
              >
                Start Shift
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map(([label, value, icon, tone]) => (
              <div
                key={label}
                className="p-6 rounded-xl bg-surface-container-lowest ring-1 ring-outline-variant/10 shadow-sm flex flex-col justify-between h-32"
              >
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                  {label}
                </span>
                <div className="flex items-end justify-between">
                  <span className={`text-3xl font-extrabold ${tone}`}>{value}</span>
                  <span className={`material-symbols-outlined p-2 rounded-lg bg-current/10 ${tone}`}>
                    {icon}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <section className="mb-12">
            <h3 className="text-lg font-bold mb-6 text-on-surface">Quick Operations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                className="flex items-center gap-4 p-5 bg-surface-container-low rounded-xl hover:bg-primary-fixed transition-all group"
                onClick={() => navigate('/pages/assigned-tours-list-guide')}
                type="button"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <span className="font-semibold text-on-surface-variant group-hover:text-primary">
                  View Assigned Tours
                </span>
              </button>
              <button
                className="flex items-center gap-4 p-5 bg-surface-container-low rounded-xl hover:bg-primary-fixed transition-all group"
                onClick={() => navigate('/pages/guide-live-tour-tracking')}
                type="button"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">play_circle</span>
                </div>
                <span className="font-semibold text-on-surface-variant group-hover:text-primary">
                  Start Ongoing Tour
                </span>
              </button>
              <button className="flex items-center gap-4 p-5 bg-surface-container-low rounded-xl hover:bg-primary-fixed transition-all group border border-dashed border-outline-variant/50" type="button">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center group-hover:bg-error group-hover:text-on-error transition-colors">
                  <span className="material-symbols-outlined">history_edu</span>
                </div>
                <span className="font-semibold text-on-surface-variant group-hover:text-on-surface">
                  Submit Incident Report
                </span>
              </button>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-on-surface">Today&apos;s Assigned Tours</h3>
              <button
                className="text-primary font-semibold text-sm hover:underline"
                onClick={() => navigate('/pages/assigned-tours-list-guide')}
                type="button"
              >
                View Full Calendar
              </button>
            </div>
            <div className="space-y-6">
              {primaryBookings.map((booking, index) => {
                const dietaryCount = booking.passengers.filter((passenger) => passenger.dietary.length).length
                const secondaryLabel =
                  booking.execution.state === 'ongoing'
                    ? 'Start Manifest Check'
                    : booking.execution.state === 'scheduled'
                      ? 'Review Special Requests'
                      : 'Open Trip Recap'

                return (
                  <div
                    key={booking.id}
                    className="group relative bg-surface-container-lowest rounded-xl overflow-hidden ring-1 ring-outline-variant/10 transition-all flex flex-col md:flex-row"
                  >
                    <div className="w-full md:w-64 h-48 md:h-auto overflow-hidden">
                      <img
                        alt={booking.tour.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src={booking.tour.cardImage}
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-start mb-4 gap-4">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-tertiary-container/10 text-tertiary text-[10px] font-bold uppercase tracking-wider mb-2">
                            {getLabelForBooking(booking, index)}
                          </span>
                          <h4 className="text-xl font-bold text-on-surface">{booking.tour.name}</h4>
                          <div className="flex items-center gap-4 mt-1 text-on-surface-variant text-sm flex-wrap">
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">location_on</span>
                              {booking.tour.location}
                            </span>
                            <span className="flex items-center gap-1 font-mono font-semibold">
                              #{booking.code}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold uppercase ${getStatusChipClasses(booking.execution.state)}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                            {booking.execution.state}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-8 py-4 border-t border-outline-variant/10">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">
                            Date
                          </span>
                          <span className="text-sm font-semibold">
                            {formatDateRange(booking.startDate, booking.endDate)}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">
                            Passengers
                          </span>
                          <span className="text-sm font-semibold">
                            {booking.groupSize} Travelers
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">
                            Dietary
                          </span>
                          <span className="text-sm font-semibold">
                            {dietaryCount ? `${dietaryCount} special notes` : 'Standard manifest'}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-3 pt-4">
                        <button
                          className={`flex-1 py-2.5 rounded-lg font-bold text-sm ${
                            booking.id === liveBooking.id
                              ? 'bg-primary text-on-primary'
                              : 'border-2 border-primary text-primary'
                          }`}
                          onClick={() =>
                            navigate(
                              booking.id === liveBooking.id
                                ? '/pages/guide-live-tour-tracking'
                                : '/pages/guide-tour-detail-ops',
                            )
                          }
                          type="button"
                        >
                          {secondaryLabel}
                        </button>
                        <button
                          className="px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface-variant font-bold text-sm"
                          onClick={() => navigate('/pages/guide-tour-detail-ops')}
                          type="button"
                        >
                          <span className="material-symbols-outlined align-middle">more_horiz</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </main>
      </div>
    </PageShell>
  )
}
