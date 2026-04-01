import { formatDateTime, useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

function getActivityTone(status) {
  if (status === 'Completed') {
    return {
      dot: 'bg-primary',
      icon: 'check',
      chip: 'text-primary-container bg-primary-fixed',
      extra: '',
      activePulse: false,
    }
  }
  if (status === 'Ongoing') {
    return {
      dot: 'bg-surface-container-lowest border-2 border-primary',
      icon: '',
      chip: 'text-on-tertiary-fixed bg-tertiary-fixed',
      extra: '',
      activePulse: true,
    }
  }
  return {
    dot: 'bg-outline-variant',
    icon: '',
    chip: 'text-secondary bg-secondary-container',
    extra: 'opacity-60',
    activePulse: false,
  }
}

export default function PublicTourTracking() {
  const { liveBooking, liveProgress } = useVoyagerDemo()
  const currentCheckpoint = liveBooking.execution.checkpoints.find(
    (checkpoint) => checkpoint.state === 'current',
  )
  const todayActivities =
    liveBooking.execution.timelineDays[liveBooking.execution.currentDay - 1]?.activities ?? []

  return (
    <PageShell
      title="Voyager AI - Tour Tracking"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        vertical-align: middle;
      }
      body { font-family: "Inter", sans-serif; }
      h1, h2, h3 { font-family: "Plus Jakarta Sans", sans-serif; }`}
    >
      <div className="bg-surface text-on-surface min-h-screen pb-24 md:pb-0">
        <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <section className="bg-surface-container-lowest rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="w-full md:w-1/3 aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <img
                  alt={liveBooking.tour.name}
                  className="w-full h-full object-cover"
                  src={liveBooking.tour.cardImage}
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-primary mb-1 block">
                      {liveBooking.tour.shortName}
                    </span>
                    <h1 className="text-3xl font-extrabold text-on-surface">
                      {liveBooking.tour.name}
                    </h1>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 capitalize">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    {liveBooking.execution.state}
                  </span>
                </div>
                <div className="flex items-center gap-4 py-2 border-y border-outline-variant/20">
                  <img
                    alt={liveBooking.guide?.name}
                    className="w-10 h-10 rounded-full"
                    src={liveBooking.guide?.avatar}
                  />
                  <div>
                    <p className="text-xs text-on-surface-variant font-medium">Professional Guide</p>
                    <p className="font-bold text-on-surface">{liveBooking.guide?.name}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-bold text-on-surface">
                      Day {liveBooking.execution.currentDay} of{' '}
                      {liveBooking.execution.timelineDays.length}
                    </span>
                    <span className="text-xs font-medium text-on-surface-variant">
                      {liveProgress.percent}% Completed
                    </span>
                  </div>
                  <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full"
                      style={{ width: `${liveProgress.percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm aspect-video md:aspect-auto md:h-[400px] relative">
              <div className="absolute top-4 left-4 z-10 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-3 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="text-sm font-bold">
                  Current Location: {currentCheckpoint?.name}
                </span>
              </div>
              <img
                alt="Tracking map"
                className="w-full h-full object-cover opacity-60 grayscale"
                src={liveBooking.tour.mapImage}
              />
            </section>

            <section className="bg-primary text-on-primary rounded-xl p-6 shadow-lg shadow-primary/20 relative overflow-hidden">
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10">
                campaign
              </span>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined">campaign</span>
                <h2 className="font-bold tracking-tight">LATEST UPDATE</h2>
                <span className="text-xs opacity-70 ml-auto">
                  {formatDateTime(liveBooking.execution.latestUpdateAt)}
                </span>
              </div>
              <p className="text-lg font-medium leading-relaxed">
                {liveBooking.execution.latestUpdateMessage}
              </p>
            </section>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            <section className="bg-surface-container-low rounded-xl p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Today&apos;s Activities
              </h3>
              <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-outline-variant/40">
                {todayActivities.map((activity) => {
                  const tone = getActivityTone(activity.status)
                  return (
                    <div key={activity.id} className="relative pl-8">
                      <div
                        className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-surface-container-low ${tone.dot}`}
                      >
                        {tone.activePulse ? (
                          <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                        ) : tone.icon ? (
                          <span className="material-symbols-outlined text-xs text-on-primary">
                            {tone.icon}
                          </span>
                        ) : null}
                      </div>
                      <div className={tone.extra}>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${tone.chip}`}
                        >
                          {activity.status === 'Ongoing' ? 'Current' : activity.status}
                        </span>
                        <h4 className="font-bold text-on-surface mt-1">{activity.title}</h4>
                        <p className="text-xs text-on-surface-variant">{activity.time}</p>
                        {activity.status === 'Ongoing' && activity.note ? (
                          <div className="mt-3 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/10 text-xs italic text-on-surface-variant">
                            {activity.note}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="bg-surface-container-lowest rounded-xl p-6 border border-error/10">
              <h3 className="text-sm font-bold text-error mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">emergency_home</span>
                Emergency Assistance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-error-container/30 rounded-xl">
                  <div>
                    <p className="text-[10px] font-bold text-on-error-container opacity-70 uppercase tracking-tighter">
                      Support Line
                    </p>
                    <p className="font-bold text-on-error-container">+84 236 234 5678</p>
                  </div>
                  <span className="material-symbols-outlined text-error">call</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant opacity-70 uppercase tracking-tighter">
                      Logistics Desk
                    </p>
                    <p className="font-bold text-on-surface">help@voyagerai.travel</p>
                  </div>
                  <span className="material-symbols-outlined text-secondary">mail</span>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </PageShell>
  )
}
