import { useNavigate } from 'react-router-dom'
import { formatDateRange, useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

const LANDING_STOP_IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCnGQjVrA6GRs5ml6aPhQdrXYnGwsyMl-dI_ijNUO7pukN3nJLFJgjJoCRw1_f6uiSt7fA63HxWs1zhfuMR-LVUEG-FBAkJRYoZX58VKYfg2m5T8HMESVlH-cjy74GhwxB7Q1xmni2xzGYFvVky9kl4_GDQ55bgaVTKLAI5Q5ZCJfwA0GKjiFwLAnjSDQ3ZZg-zhqGc2udDfmOXwJucT2MbhXBLti5gMZH_4tZbCfKzbIkb4iHYSWDJ4_BnP5zVutsWU1BPCnqpp8BQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCn7INFkZKF3a_DTUS4rppYdraCEJPyq71TTKMqEAkJYfhsGriys39XHcYsEm8TxZYIkaWs0A1uWRttWKZJB1XFgY3ifocWoV_GACE1cR8CX9EYsvBDBLnWcvwALuTQGTXlD8Jxn7dvsc0t77iP4YCFyX-bIVx_SPUKGegppFcFPIIxtN9fo6SwvtN12Hqt_8LchnB8srJ9B87CC2KQFQWtE0JMyf2BHyts2uBGy2ZjguDMRpwnV4vyS4qzlFBKuQHAvGTf__d6JS3U',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCnchDX0d3dRoxFmS2t6ElWqj9IZ3FQsncoJh4VpQiVqVBxEOn6-LDhS4rOzJi2lh8W-fPerE1gwmbP0FBt9hV9a5cy4hW7GVLf-H6hKzw3nEh37P5UxsCaQsBKHbV5Z2buC5mIHIO50qKfwES4VkX2ddN5BN2I8eOCw3P9QwItHBFiDaeRNAGpy3Y0D5zdLVDCsayB9K90mMsQLqX0ISC4Y4tKiLzqo0ylmaaZoH6HJgYLNbz-cgiReUbI8zKOMG4s_Ke6WA5D1HwJ',
]

function getCheckpointLabel(liveBooking) {
  return (
    liveBooking.execution.checkpoints.find((item) => item.state === 'current')?.name ??
    liveBooking.execution.checkpoints.at(-1)?.name ??
    'En route'
  )
}

export default function PublicTrackingLanding() {
  const navigate = useNavigate()
  const { liveBooking } = useVoyagerDemo()
  const currentDay =
    liveBooking.execution.timelineDays[liveBooking.execution.currentDay - 1] ??
    liveBooking.execution.timelineDays[0]
  const plannedStops = currentDay?.activities.slice(0, 3) ?? []

  return (
    <PageShell
      title="Tour Progress Tracking | Voyager AI"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        vertical-align: middle;
      }
      .glass-header { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); }`}
    >
      <div className="bg-surface font-body text-on-surface">
        <main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
          <header className="mb-10 text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2">
              Tour Progress Tracking
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-3 justify-center md:justify-start">
              <p className="text-on-surface-variant text-lg">Live updates from your guide</p>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <div className="inline-flex items-center gap-1.5 bg-primary-fixed px-3 py-1 rounded-full self-center md:self-auto">
                <span
                  className="material-symbols-outlined text-[16px] text-on-primary-fixed-variant"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  sensors
                </span>
                <span className="text-[11px] font-bold text-on-primary-fixed-variant uppercase tracking-wider">
                  Live Signal
                </span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <section className="lg:col-span-8 space-y-6">
              <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0px_20px_40px_rgba(25,28,30,0.06)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                    <div>
                      <span className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1 block">
                        Active Expedition
                      </span>
                      <h2 className="font-headline text-3xl font-bold text-on-surface">
                        {liveBooking.tour.name}
                      </h2>
                    </div>
                    <div className="bg-surface-container-high px-6 py-3 rounded-2xl">
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase block">
                        Booking Code
                      </span>
                      <span className="text-xl font-mono font-bold tracking-wider text-on-surface">
                        {liveBooking.code}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="space-y-1">
                      <span className="text-xs font-medium text-on-surface-variant">Provider</span>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm">
                          corporate_fare
                        </span>
                        <span className="font-semibold">Voyager AI Provider</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-medium text-on-surface-variant">Dates</span>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm">
                          calendar_today
                        </span>
                        <span className="font-semibold">
                          {formatDateRange(liveBooking.startDate, liveBooking.endDate)}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-medium text-on-surface-variant">Status</span>
                      <div className="flex items-center gap-2 text-primary">
                        <span
                          className="material-symbols-outlined text-sm"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          play_circle
                        </span>
                        <span className="font-bold capitalize">{liveBooking.execution.state}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-medium text-on-surface-variant">Vibe</span>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm">
                          wb_sunny
                        </span>
                        <span className="font-semibold">{liveBooking.tour.vibe ?? 'Scenic'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-64 rounded-2xl overflow-hidden relative group">
                    <img
                      alt="Live Map Location"
                      className="w-full h-full object-cover grayscale-[0.2] brightness-95 group-hover:scale-105 transition-transform duration-700"
                      src={liveBooking.tour.mapImage}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                      <span className="text-sm font-bold text-on-surface">
                        Current Location: {getCheckpointLabel(liveBooking)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-secondary-container/50 border border-outline-variant/20 p-5 rounded-2xl">
                <span className="material-symbols-outlined text-secondary">info</span>
                <p className="text-sm font-medium text-on-secondary-container leading-relaxed">
                  This is a shared tracking link for passengers. <span className="font-bold">No account required.</span>{' '}
                  Bookmark this page to stay updated on your group&apos;s movement and itinerary changes.
                </p>
              </div>
            </section>

            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-surface-container-low rounded-3xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    alt={liveBooking.guide?.name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-md"
                    src={liveBooking.guide?.avatar}
                  />
                  <div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block">
                      Lead Guide
                    </span>
                    <h3 className="font-headline font-bold text-lg">{liveBooking.guide?.name}</h3>
                    <div className="flex items-center gap-1 text-primary">
                      <span
                        className="material-symbols-outlined text-xs"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        star
                      </span>
                      <span className="text-xs font-bold">4.9 Explorer Score</span>
                    </div>
                  </div>
                </div>
                <button
                  className="w-full bg-surface-container-lowest py-3 rounded-xl font-bold text-sm text-on-surface hover:bg-white border border-outline-variant/10 transition-colors flex items-center justify-center gap-2"
                  onClick={() => navigate('/pages/public-tour-tracking')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  Message Guide Group
                </button>
              </div>

              <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
                <h3 className="font-headline font-bold text-lg mb-6 flex items-center justify-between">
                  Recent Updates
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                    Auto-Refreshing
                  </span>
                </h3>
                <div className="space-y-8 relative">
                  <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-surface-container-highest"></div>
                  {liveBooking.execution.notifications.slice(0, 3).map((notification, index) => (
                    <div key={notification.id} className="relative pl-8">
                      <div
                        className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-surface-container-lowest ${
                          index === 0
                            ? 'bg-primary-fixed'
                            : 'bg-surface-container-highest'
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[14px] ${
                            index === 0 ? 'text-primary' : 'text-on-surface-variant'
                          }`}
                          style={index === 0 ? { fontVariationSettings: '"FILL" 1' } : undefined}
                        >
                          {index === 0 ? 'location_on' : index === 1 ? 'directions_boat' : 'restaurant'}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-on-surface-variant">
                          {notification.time.slice(11, 16)}
                        </span>
                        <p className={`text-sm ${index === 0 ? 'font-bold' : 'font-semibold'}`}>
                          {notification.title}
                        </p>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <section className="mt-12">
            <h3 className="font-headline text-2xl font-bold mb-8">Planned Itinerary Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plannedStops.map((activity, index) => (
                <div
                  key={activity.id}
                  className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-transparent hover:border-primary/10 transition-all"
                >
                  <div className="h-48 relative">
                    <img
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={LANDING_STOP_IMAGES[index] ?? liveBooking.tour.cardImage}
                    />
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full ${
                        activity.status === 'Ongoing' ? 'bg-primary' : 'bg-surface-dim'
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest ${
                          activity.status === 'Ongoing'
                            ? 'text-on-primary'
                            : 'text-on-surface-variant'
                        }`}
                      >
                        {activity.status === 'Completed'
                          ? 'Completed'
                          : activity.status === 'Ongoing'
                            ? 'Current'
                            : 'Planned'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-on-surface-variant">{activity.time}</span>
                      {index === 0 ? (
                        <span className="bg-tertiary-container text-[10px] font-bold text-on-tertiary-fixed px-2 py-0.5 rounded">
                          Guide Pick
                        </span>
                      ) : null}
                    </div>
                    <h4 className="font-headline font-bold text-lg mb-2">{activity.title}</h4>
                    <p className="text-sm text-on-surface-variant">
                      {activity.note || activity.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </PageShell>
  )
}
