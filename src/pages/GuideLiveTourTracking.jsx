import { formatDateTime, useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

function getActivityIcon(activity) {
  if (activity?.type === 'hotel') return 'hotel'
  if (activity?.type === 'transport') return 'directions_bus'
  if (activity?.type === 'workshop') return 'handyman'
  if (activity?.type === 'meal') return 'restaurant'
  return 'landscape'
}

function getStatusView(activity, currentActivityId) {
  if (!activity) {
    return {
      dotClass: 'bg-surface-container-highest',
      iconBg: 'bg-surface-container-highest text-on-surface-variant',
      cardClass: 'bg-surface-container-low/50 border border-outline-variant/10',
      pillClass: 'bg-surface-container-highest text-on-surface-variant',
      label: 'Scheduled',
      emphasized: false,
    }
  }

  if (activity.id === currentActivityId || activity.status === 'Ongoing') {
    return {
      dotClass: 'bg-tertiary ring-4 ring-tertiary/20',
      iconBg: 'bg-tertiary/10 text-tertiary',
      cardClass:
        'bg-surface-container-lowest border-2 border-primary/20 shadow-[0px_20px_40px_rgba(25,28,30,0.06)]',
      pillClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
      label: 'In Progress',
      emphasized: true,
    }
  }

  if (activity.status === 'Completed') {
    return {
      dotClass: 'bg-primary',
      iconBg: 'bg-primary/10 text-primary',
      cardClass: 'bg-surface-container-lowest border border-outline-variant/10 shadow-sm',
      pillClass: 'bg-primary/10 text-primary',
      label: 'Completed',
      emphasized: true,
    }
  }

  return {
    dotClass: 'bg-surface-container-highest',
    iconBg: 'bg-surface-container-highest text-on-surface-variant',
    cardClass: 'bg-surface-container-low/50 border border-outline-variant/10',
    pillClass: 'bg-surface-container-highest text-on-surface-variant',
    label: 'Scheduled',
    emphasized: false,
  }
}

export default function GuideLiveTourTracking() {
  const { actions, liveBooking, liveCurrent } = useVoyagerDemo()
  const quickMessages = ['We are on the way', 'Arrived at dock', 'Lunch is ready']

  const activities = liveBooking.execution.timelineDays.flatMap((day) =>
    day.activities.map((activity) => ({
      ...activity,
      dayNumber: day.dayNumber,
      dayTitle: day.title,
    })),
  )

  const currentActivity = liveCurrent?.activity ?? activities[0]
  const completedActivity =
    [...activities].reverse().find((activity) => activity.status === 'Completed') ?? activities[0]
  const upcomingActivity =
    activities.find(
      (activity) => activity.id !== currentActivity?.id && activity.status === 'Pending',
    ) ??
    activities.find((activity) => activity.id !== currentActivity?.id) ??
    activities[0]
  const timelineCards = [completedActivity, currentActivity, upcomingActivity]

  return (
    <PageShell
      title="Voyager AI | Guide Live Tracking"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }`}
    >
      <div className="bg-surface font-body text-on-surface">
        <div className="min-h-screen pt-20 pb-32">
          <main className="px-4 md:px-8 py-8 max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="text-teal-600 font-bold tracking-widest text-[10px] uppercase">
                      Execution Mode
                    </span>
                    <h1 className="text-3xl font-headline font-extrabold text-on-surface mt-1">
                      Today&apos;s Live Timeline
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-tertiary-container/10 text-tertiary font-bold text-xs rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
                      LIVE UPDATING
                    </span>
                  </div>
                </div>

                <div className="relative space-y-6 before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-surface-container-highest">
                  {timelineCards.map((activity, index) => {
                    if (!activity) return null
                    const statusView = getStatusView(activity, currentActivity?.id)

                    return (
                      <div key={`${activity.id}-${index}`} className="relative pl-14">
                        <div
                          className={`absolute left-4 top-6 w-4 h-4 rounded-full border-4 border-surface-container-lowest z-10 ${statusView.dotClass}`}
                        ></div>
                        <div className={`p-6 rounded-xl ${statusView.cardClass}`}>
                          <div className="flex justify-between items-start mb-4 gap-4">
                            <div className="flex gap-4">
                              <div
                                className={`w-12 h-12 rounded-xl flex items-center justify-center ${statusView.iconBg}`}
                              >
                                <span
                                  className="material-symbols-outlined"
                                  style={
                                    activity.id === currentActivity?.id
                                      ? { fontVariationSettings: '"FILL" 1' }
                                      : undefined
                                  }
                                >
                                  {getActivityIcon(activity)}
                                </span>
                              </div>
                              <div>
                                <h3 className="font-headline font-bold text-lg text-on-surface">
                                  {activity.title}
                                </h3>
                                <p className="text-sm text-on-surface-variant">
                                  Day {activity.dayNumber}: {activity.location}
                                </p>
                              </div>
                            </div>
                            <span
                              className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${statusView.pillClass}`}
                            >
                              {statusView.label}
                            </span>
                          </div>
                          <div
                            className={`flex items-center gap-4 text-xs font-semibold text-on-surface-variant ${
                              statusView.emphasized ? '' : 'opacity-70'
                            }`}
                          >
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">schedule</span>
                              {activity.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">group</span>
                              {liveBooking.groupSize} Guests
                            </span>
                          </div>
                          {activity.note ? (
                            <p
                              className={`text-sm mt-4 ${
                                statusView.emphasized ? 'text-on-surface-variant' : 'text-slate-400'
                              }`}
                            >
                              {activity.note}
                            </p>
                          ) : null}
                          {activity.id === currentActivity?.id ? (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
                              <button
                                className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-surface-container-low text-primary hover:bg-primary/5 transition-colors"
                                onClick={() => actions.guideAction('start')}
                                type="button"
                              >
                                <span className="material-symbols-outlined text-xl">play_circle</span>
                                <span className="text-[10px] font-bold uppercase">Start</span>
                              </button>
                              <button
                                className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-primary hover:text-white transition-colors"
                                onClick={() => actions.guideAction('complete')}
                                type="button"
                              >
                                <span className="material-symbols-outlined text-xl">check_circle</span>
                                <span className="text-[10px] font-bold uppercase">Mark Done</span>
                              </button>
                              <button
                                className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-error hover:text-white transition-colors"
                                onClick={() => actions.guideAction('delay')}
                                type="button"
                              >
                                <span className="material-symbols-outlined text-xl">timer_off</span>
                                <span className="text-[10px] font-bold uppercase">Delay</span>
                              </button>
                              <button
                                className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-secondary hover:text-white transition-colors"
                                onClick={() => actions.guideAction('note')}
                                type="button"
                              >
                                <span className="material-symbols-outlined text-xl">note_add</span>
                                <span className="text-[10px] font-bold uppercase">Note</span>
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="w-full md:w-[400px] space-y-6">
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
                  <div className="p-4 border-b border-outline-variant/10 flex justify-between items-center">
                    <h3 className="font-headline font-bold text-on-surface">Live Tracking Map</h3>
                    <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                      GPS ACTIVE
                    </span>
                  </div>
                  <div className="h-64 bg-slate-200 relative">
                    <img
                      alt={liveBooking.tour.name}
                      className="w-full h-full object-cover grayscale-[0.2]"
                      src={liveBooking.tour.mapImage}
                    />
                    <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg flex flex-col gap-2">
                      <button className="p-1 hover:bg-slate-100 text-slate-700" type="button">
                        <span className="material-symbols-outlined">add</span>
                      </button>
                      <button className="p-1 hover:bg-slate-100 text-slate-700" type="button">
                        <span className="material-symbols-outlined">remove</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
                  <div className="p-4 border-b border-outline-variant/10">
                    <h3 className="font-headline font-bold text-on-surface">
                      Passenger Notifications
                    </h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {quickMessages.map((message) => (
                        <button
                          key={message}
                          className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold hover:bg-secondary-fixed transition-colors active:scale-95"
                          onClick={() => actions.sendQuickPassengerUpdate(message)}
                          type="button"
                        >
                          {message}
                        </button>
                      ))}
                    </div>
                    <div className="pt-4 mt-4 border-t border-outline-variant/10">
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-3">
                        Emergency Contacts
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-error-container/20 border border-error/10">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center text-error">
                              <span className="material-symbols-outlined text-sm">support_agent</span>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-on-surface">Operations Desk</p>
                              <p className="text-[10px] text-error font-medium">Priority Support</p>
                            </div>
                          </div>
                          <button className="p-2 text-error hover:bg-error/10 rounded-full" type="button">
                            <span className="material-symbols-outlined">call</span>
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low border border-outline-variant/10">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-on-secondary-container/10 flex items-center justify-center text-on-secondary-container">
                              <span className="material-symbols-outlined text-sm">medical_services</span>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-on-surface">Local Medical</p>
                              <p className="text-[10px] text-on-surface-variant font-medium">
                                +84 236 333 5335
                              </p>
                            </div>
                          </div>
                          <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full" type="button">
                            <span className="material-symbols-outlined">call</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-outline-variant/10 space-y-3">
                      {liveBooking.execution.notifications.slice(0, 2).map((notification) => (
                        <div
                          key={notification.id}
                          className="rounded-xl bg-surface-container-low p-4 border border-outline-variant/10"
                        >
                          <div className="flex justify-between gap-4">
                            <p className="font-semibold text-sm">{notification.title}</p>
                            <span className="text-[10px] text-on-surface-variant">
                              {formatDateTime(notification.time)}
                            </span>
                          </div>
                          <p className="text-xs text-on-surface-variant mt-2">
                            {notification.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="fixed bottom-0 left-0 w-full h-20 bg-white/80 backdrop-blur-lg border-t border-slate-200/20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-50 flex items-center px-6">
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <div className="flex -space-x-2">
                  {liveBooking.passengers.slice(0, 2).map((passenger) => (
                    <img
                      key={passenger.id}
                      alt={passenger.name}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      src={passenger.avatar}
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">
                    +{Math.max(liveBooking.passengers.length - 2, 0)}
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  Guests tracking your live link
                </span>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <button
                  className="flex-1 md:flex-none px-6 py-3 rounded-xl border-2 border-outline-variant/30 text-on-surface font-bold text-sm hover:bg-slate-50 transition-colors active:scale-95"
                  onClick={() => actions.guideAction('note')}
                  type="button"
                >
                  Save Progress Update
                </button>
                <button
                  className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-sm shadow-lg shadow-primary/20 hover:translate-y-[-2px] transition-all active:scale-95"
                  onClick={() =>
                    actions.sendQuickPassengerUpdate(liveBooking.execution.latestUpdateMessage)
                  }
                  type="button"
                >
                  Publish to Tracking Link
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </PageShell>
  )
}
