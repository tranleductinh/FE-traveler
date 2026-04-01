import { useNavigate } from 'react-router-dom'
import { formatDate, formatDateRange, useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

function getStatusPill(status) {
  if (status === 'Completed') {
    return 'bg-teal-50 text-teal-700'
  }
  if (status === 'Ongoing') {
    return 'bg-orange-50 text-orange-700'
  }
  return 'bg-slate-100 text-slate-500'
}

export default function GuideTourDetailOps() {
  const navigate = useNavigate()
  const { liveBooking } = useVoyagerDemo()
  const activeDay =
    liveBooking.execution.timelineDays.find(
      (day) => day.dayNumber === liveBooking.execution.currentDay,
    ) ?? liveBooking.execution.timelineDays[0]
  const manifestPreview = liveBooking.passengers.slice(0, 3)

  return (
    <PageShell
      title="GuideTourDetailOps"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        vertical-align: middle;
      }
      body { font-family: "Inter", sans-serif; background-color: #f7f9fb; color: #191c1e; }
      h1, h2, h3, h4 { font-family: "Plus Jakarta Sans", sans-serif; }
      .no-scrollbar::-webkit-scrollbar { display: none; }`}
    >
      <div className="bg-surface text-on-surface antialiased">
        <main className="pt-20 pb-24 max-w-screen-2xl mx-auto px-4 md:px-8">
          <header className="relative rounded-3xl overflow-hidden h-[300px] mb-8 group">
            <img
              alt={liveBooking.tour.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={liveBooking.tour.heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="bg-primary-container text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Active Tour
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30 uppercase tracking-wider">
                  Guide Operations
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
                {liveBooking.tour.name}
              </h1>
              <div className="flex items-center gap-6 text-white/90 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-sm font-medium">{liveBooking.tour.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span className="text-sm font-medium">
                    {formatDateRange(liveBooking.startDate, liveBooking.endDate)}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar pb-2">
            {[
              ['Overview', false],
              ['Itinerary', true],
              ['Passengers', false],
              ['Services', false],
              ['Updates', false],
              ['Issues', false],
            ].map(([label, active]) => (
              <button
                key={label}
                className={`whitespace-nowrap px-6 py-3 rounded-2xl font-semibold ${
                  active
                    ? 'bg-primary text-on-primary shadow-lg shadow-primary/20 flex items-center gap-2'
                    : 'bg-white border border-outline-variant/10 shadow-sm text-slate-500 hover:text-primary transition-all'
                }`}
                type="button"
              >
                {label === 'Itinerary' && active ? (
                  <span className="material-symbols-outlined text-xl">route</span>
                ) : null}
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between mb-2 gap-4 flex-wrap">
                <h2 className="text-2xl font-extrabold text-on-surface tracking-tight">
                  Day {activeDay.dayNumber}: {activeDay.title}
                </h2>
                <span className="text-sm font-bold text-primary bg-primary-fixed px-3 py-1 rounded-lg tracking-tight">
                  {formatDate(activeDay.date, {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>

              <div className="relative pl-8 space-y-10 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                {activeDay.activities.map((activity) => (
                  <div key={activity.id} className="relative">
                    <div
                      className={`absolute -left-[30px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-sm z-10 ${
                        activity.status === 'Completed'
                          ? 'bg-primary'
                          : activity.status === 'Ongoing'
                            ? 'bg-primary ring-4 ring-primary-fixed'
                            : 'bg-slate-200'
                      }`}
                    ></div>
                    <div
                      className={`rounded-3xl p-6 ${
                        activity.status === 'Completed'
                          ? 'bg-white shadow-[0_20_40_rgba(25,28,30,0.04)] border border-outline-variant/5'
                          : activity.status === 'Ongoing'
                            ? 'bg-white shadow-[0_20_40_rgba(25,28,30,0.06)] border-2 border-primary/10'
                            : 'bg-white/50 border border-dashed border-outline-variant/40'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4 gap-4">
                        <div>
                          <span
                            className={`text-xs font-bold uppercase tracking-widest block mb-1 ${
                              activity.status === 'Ongoing' ? 'text-primary' : 'text-slate-400'
                            }`}
                          >
                            {activity.time}
                          </span>
                          <h3
                            className={`text-xl font-bold ${
                              activity.status === 'Pending' ? 'text-slate-400 italic' : 'text-on-surface'
                            }`}
                          >
                            {activity.title}
                          </h3>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${getStatusPill(
                            activity.status,
                          )}`}
                        >
                          {activity.status === 'Pending' ? 'Upcoming' : activity.status}
                        </span>
                      </div>
                      <p
                        className={`text-sm leading-relaxed mb-4 ${
                          activity.status === 'Pending' ? 'text-slate-400' : 'text-on-surface-variant'
                        }`}
                      >
                        {activity.note || activity.location}
                      </p>
                      {activity.status !== 'Pending' ? (
                        <div className="flex items-center gap-4">
                          <button className="text-xs font-bold text-primary flex items-center gap-1" type="button">
                            <span className="material-symbols-outlined text-base">description</span>
                            View Notes
                          </button>
                          <button className="text-xs font-bold text-primary flex items-center gap-1" type="button">
                            <span className="material-symbols-outlined text-base">photo_library</span>
                            Activity Details
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-[0_20_40_rgba(25,28,30,0.04)] border border-outline-variant/5">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-on-surface">
                    Passengers ({liveBooking.passengers.length})
                  </h2>
                  <button className="text-primary font-bold text-xs uppercase tracking-widest" type="button">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {manifestPreview.map((passenger) => (
                    <div
                      key={passenger.id}
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors"
                    >
                      <img
                        alt={passenger.name}
                        className="w-12 h-12 rounded-xl object-cover"
                        src={passenger.avatar}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-on-surface">{passenger.name}</h4>
                          <span className="text-[10px] font-bold text-slate-500">
                            Age {passenger.age}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          {[...passenger.dietary, ...passenger.mobility].length ? (
                            [...passenger.dietary, ...passenger.mobility].map((tag) => (
                              <span
                                key={tag}
                                className="bg-tertiary-fixed text-on-tertiary-fixed text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter"
                              >
                                {tag}
                              </span>
                            ))
                          ) : (
                            <span className="bg-secondary-container text-on-secondary-container text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                              Standard
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full mt-6 py-4 bg-slate-50 text-slate-600 font-bold text-sm rounded-2xl border border-slate-100 hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                  onClick={() => navigate('/pages/guide-live-tour-tracking')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg">group_add</span>
                  Manage Manifest
                </button>
              </div>

              <div className="bg-primary p-6 rounded-3xl text-white shadow-xl shadow-primary/20">
                <h3 className="text-lg font-bold mb-4">Support &amp; Coordination</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['emergency', 'Emergency'],
                    ['support_agent', 'Hub Sync'],
                    ['restaurant', 'Meals'],
                    ['local_taxi', 'Logistics'],
                  ].map(([icon, label]) => (
                    <button
                      key={label}
                      className="flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-2xl">{icon}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageShell>
  )
}
