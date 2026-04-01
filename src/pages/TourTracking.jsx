import { useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

const PROVIDER_PROFILE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCqqDr_RmNOQ0hEbT6RNKjWnA0pcSq6fXFesDvOGcIEvgukKqr56b69c8CU4iV9kDhdQredXD39zBufbONSOsNpepfntOIBFs-Zx-74P8aE-6uavRArJdB8qWDaExDljDLbdQ0KuM8kcaT9lG0wKuBZzbxJBNxpF2PFb_reBUiHWIAeQDRcn8RRaRt-xccDzN5r5OTlq4dC-fkIieBh5gOC5r71_3LkHH-y_jJif4iE7XyXqBpOi3ngIroJT78iQF75-ya04t_hUtFO'
const USER_PROFILE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDiHCEPJm0UvhokXWQdhf_U7NTdd4O_u7KNF60NMitf5cokYPyePmJh5AinUruLjvhb_q5CE7Q6jViY3Q4pIGT6FhXwdsZSbUOFZt7twqqEYJoSkylWRy8A1X7gwGC6u7in5zmgtNlcLzH_yMGJ85JaRYaiBnqntSxK8bsFvx2TSUqcLwOuc73tjXxoNuwPyUEg-Am8yg87raOb-0-QxYcwdEUOT-kZmgYHed8fG2rjOF2X8n5179jl57xGy1c3T8w3ARcaVvYyEKNV'
const MAP_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBPMtui2OLB2kvFBCVO5QcyZ3an7WGQE8kaAOwfbK22CM3ZLKl028JjqUWWQkPKKpjyxNl9DIzGcTt2g9A6agBjapBdLR3PkeaS7Y6tGaaXwLw4SW0ZRNRh7pvPpovme-u0oLHw54QtNNYJEaeTFOH9I3K3zm9thWWSp5c5G_GEycLwsvCN-mKWM2OK8hhoe6_G81agnV_v9kTTn40kFsm-AsG4PI0M46A48gfrQQfPMY1KQhgKh_ZhDv0vL-t1FhvT0t8di5JnL7I-'

const TIMELINE = [
  {
    id: '1',
    time: '08:00 AM - 11:30 AM',
    title: 'Gimmelwald Morning Ascent',
    description:
      'Moderate hiking trail from Stechelberg to Gimmelwald. Photography stop at the traditional dairy farm.',
    status: 'Completed',
  },
  {
    id: '2',
    time: '12:00 PM - 14:30 PM',
    title: 'Panoramic Swiss Lunch',
    description:
      'Seated lunch at Restaurant Aegerten with valley views. Local cheese tasting included.',
    status: 'Ongoing',
  },
  {
    id: '3',
    time: '15:30 PM - 17:00 PM',
    title: 'Staubbach Falls Expedition',
    description:
      'Walk behind the highest free-falling waterfall in Switzerland. Sturdy footwear required.',
    status: 'Scheduled',
  },
]

const TRAVELERS = [
  {
    id: '1',
    name: 'Robert Chen',
    status: 'Checked-in: 11:45 AM',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvI4ulYntqPZIdhlEwpAi8TIAbHLa3bOxz7wC3CoIpCgjiuZIALyxvIAvTf0DflhRGT2ZFnash-fW00OeXqFzGFMR-yBIK9-gZMvU3AceKh0Bi74Qjy4-xbdblsJES2hPklC5JATEURIVuoLkmB4ZL7YYc2o_YcCQ2GHOSHlyH3jwATaOtuIPyA7KwzSaBczEYMh6nZykMtmxmCuZeb_Y867zyWWKjr0ubJIGRsTS6dNCtvvzPaqWN2uUTfAhs57UAxMS03Do7VQ7G',
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    status: 'Checked-in: 11:52 AM',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBP1SdaZZabc67AihSdRfTsDTpOsMwHI6Drk2IsTfar9uQP7-EDlG7pTO5v4J82EyfiHZZfdflfhxuE4ZXV6eOGkCO4nb7CoeoVsWaG9X1CDvVQ2FqVhpPe7MWuzTvvYOvruSIl8OTuTW1djEXfhhwnRMWKFAP8aLUV0KSNjvehjFODKQQaTMxOyT9iUP33uHBt1OL6oUp4SvSNMiP94PHOs6HQgFGTnVtJdKCrNXKMm3pUCZgUfx5Y-D7tDIX1VBzZUhFXg64OEq5a',
  },
  {
    id: '3',
    name: "James O'Connell",
    status: 'High Heart Rate Alert',
    alert: true,
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFBmIvvZYJSegWGBRzZ_GHOei6I9hoMDo8tTglppqPt5P2UzXvT7oBldOlEkOxjQd3g2wRWvJ-K2NfcaBRMMk5uylvDlQGvLaD2aJKOY5KVfhv1y3p6aSvkPAb0Uo04Zzolc4fjQx2WyMBqNuis28wFBvaXkZqcs2RlG0luIcLytukCQFbOIv9pobkpDIzQb-f5rbsODyk2AWxie38faypYtaCbf37-FU-NWiH22ci4nDx4skW0j0y4t40jGPvjKP_ZuB9winmU3Yw',
  },
  {
    id: '4',
    name: 'Liam Van Der Berg',
    status: 'Checked-in: 12:05 PM',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBE94WReX2kg4TRc7D9PHAgG80kFbZZ7uqhLhyMetn7l8KH0pXojFAGgV7GNeaGvIo1UuNGf46egcgkTUrnuCgdLvJIWS8_v6DertTy3hiW5bVlPxDWt4OaApXwkzwqmwpWf3HPN0ASUSFkWB-w-5e-NGHhApO8y5Jc5UBnKh3u62YXF8yJ6lpn1rTiV2Oj_M4XjglhUFjABj7Mnk7SofqZpMpzTAgDq60fI2qVIc7_9UZMv5_0ASIC5zk_bqI1HmJNT1KLSefFpWyw',
  },
]

export default function TourTracking() {
  const { personalTrip, personalTripCurrent, personalTripProgress, state } = useVoyagerDemo()
  const todayActivities =
    personalTrip.timelineDays[personalTrip.currentDay - 1]?.activities ?? personalTrip.timelineDays[0]?.activities ?? []
  const travelerPulse =
    state.bookings[0]?.passengers.slice(
      0,
      state.planner.companions === 'solo' ? 1 : state.planner.companions === 'couple' ? 2 : 4,
    ) ?? []

  return (
    <PageShell
      title="Tour Tracking | Voyager AI"
      styles={`.glass-header {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
      }
      .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        vertical-align: middle;
      }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}
    >
      <div className="bg-surface font-body text-on-surface antialiased">
        <div className="flex min-h-screen">
          <aside className="hidden md:flex flex-col h-screen w-64 bg-slate-50 py-8 px-4 space-y-2 fixed left-0 top-0 z-40">
            <div className="px-4 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <img alt="Provider Profile" className="w-10 h-10 rounded-full" src={PROVIDER_PROFILE_IMAGE} />
                <div>
                  <h3 className="font-headline font-bold text-sm text-on-surface">Skyline Tours</h3>
                  <p className="text-[11px] text-on-surface-variant uppercase tracking-wider">
                    Verified Provider
                  </p>
                </div>
              </div>
            </div>
            <nav className="flex-1 space-y-1">
              <button className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center space-x-3 transition-all duration-200 group w-full text-left" type="button">
                <span className="material-symbols-outlined text-xl">analytics</span>
                <span className="font-headline text-[13px] font-semibold">Dashboard</span>
              </button>
              <button className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center space-x-3 transition-all duration-200 group w-full text-left" type="button">
                <span className="material-symbols-outlined text-xl">edit_calendar</span>
                <span className="font-headline text-[13px] font-semibold">Manage Tours</span>
              </button>
              <button className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center space-x-3 transition-all duration-200 group w-full text-left" type="button">
                <span className="material-symbols-outlined text-xl">book_online</span>
                <span className="font-headline text-[13px] font-semibold">Bookings</span>
              </button>
              <button className="bg-teal-50 text-teal-700 rounded-xl px-4 py-3 flex items-center space-x-3 transition-all duration-200 w-full text-left" type="button">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                  location_on
                </span>
                <span className="font-headline text-[13px] font-semibold">Tour Tracking</span>
              </button>
              <button className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center space-x-3 transition-all duration-200 group w-full text-left" type="button">
                <span className="material-symbols-outlined text-xl">forum</span>
                <span className="font-headline text-[13px] font-semibold">Messages</span>
              </button>
              <button className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center space-x-3 transition-all duration-200 group w-full text-left" type="button">
                <span className="material-symbols-outlined text-xl">settings</span>
                <span className="font-headline text-[13px] font-semibold">Settings</span>
              </button>
            </nav>
          </aside>

          <main className="flex-1 md:ml-64 min-h-screen">
            <header className="fixed top-0 right-0 left-0 md:left-64 z-50 glass-header shadow-sm h-16 px-6">
              <div className="flex justify-between items-center h-full max-w-[1920px] mx-auto">
                <div className="flex items-center space-x-4">
                  <h1 className="font-headline text-xl font-bold tracking-tight text-teal-800">
                    Voyager AI
                  </h1>
                  <div className="hidden lg:flex items-center space-x-2 text-on-surface-variant font-headline text-sm font-medium">
                    <span>/</span>
                    <span>Tour Tracking</span>
                    <span>/</span>
                    <span className="text-teal-700">Alpine Explorer Day 4</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="hidden sm:block relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                      search
                    </span>
                    <input
                      className="pl-10 pr-4 py-1.5 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 w-64"
                      placeholder="Search tours or travelers..."
                      type="text"
                    />
                  </div>
                  <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors relative" type="button">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
                  </button>
                  <img alt="User profile avatar" className="w-8 h-8 rounded-full border border-outline-variant/30" src={USER_PROFILE_IMAGE} />
                </div>
              </div>
              <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0"></div>
            </header>

            <div className="pt-24 px-6 pb-12 max-w-[1400px] mx-auto space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                    Ongoing Now
                  </div>
                  <h2 className="font-headline text-4xl font-extrabold text-on-surface leading-tight">
                    {personalTrip.title}
                  </h2>
                  <p className="text-on-surface-variant font-medium flex items-center">
                    <span className="material-symbols-outlined text-sm mr-1">location_on</span>
                    {personalTrip.destination} • Self-guided itinerary
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center px-5 py-3 bg-surface-container-lowest text-on-surface font-semibold rounded-xl border border-outline-variant/20 hover:bg-surface-container transition-all" type="button">
                    <span className="material-symbols-outlined mr-2">contact_emergency</span>
                    Emergency Protocol
                  </button>
                  <button className="flex items-center px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all" type="button">
                    <span className="material-symbols-outlined mr-2">send_to_mobile</span>
                    Broadcast Update
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-8">
                  <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8">
                      <div className="text-right">
                        <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-1">
                          Local Time
                        </span>
                        <span className="text-2xl font-headline font-extrabold text-teal-800">
                          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                    <div className="relative z-10 space-y-10">
                      <div className="flex items-center space-x-6">
                        <div className="bg-tertiary-container/10 p-4 rounded-2xl">
                          <span className="material-symbols-outlined text-3xl text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>
                            timer
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            Tour Progress: Day {personalTrip.currentDay} of {personalTrip.timelineDays.length}
                          </h3>
                          <p className="text-on-surface-variant">{personalTrip.latestUpdateMessage}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                          {todayActivities.slice(0, 4).map((activity) => (
                            <span key={activity.id}>{activity.title}</span>
                          ))}
                        </div>
                        <div className="h-3 bg-surface-container rounded-full overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-400 to-primary rounded-full" style={{ width: `${personalTripProgress.percent}%` }}></div>
                          <div className="absolute top-0 -ml-2 w-4 h-4 bg-white border-2 border-primary rounded-full -top-0.5 shadow-md" style={{ left: `${personalTripProgress.percent}%` }}></div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="flex items-center space-x-2 text-primary">
                            <span className="material-symbols-outlined text-base">check_circle</span>
                            <span className="text-sm font-semibold">
                              Completed: {todayActivities.find((activity) => activity.status === 'Completed')?.title ?? 'Planner ready'}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-on-surface-variant">
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                            <span className="text-sm font-semibold">
                              Next: {personalTripCurrent?.activity?.title ?? todayActivities.find((activity) => activity.status !== 'Completed')?.title ?? 'Continue route'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="font-headline text-lg font-bold flex items-center">
                      <span className="material-symbols-outlined mr-2">event_repeat</span>
                      Today's Detailed Itinerary
                    </h4>
                    <div className="space-y-0 relative">
                      <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-outline-variant/30"></div>
                      {todayActivities.map((activity) => (
                        <div key={activity.id} className={`flex items-start space-x-8 relative pb-8 group ${activity.status === 'Scheduled' ? 'opacity-60' : ''}`}>
                          <div className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center relative z-10 ${
                            activity.status === 'Completed'
                              ? 'bg-teal-100'
                              : activity.status === 'Ongoing'
                                ? 'bg-primary text-white'
                                : 'bg-surface-container-high'
                          }`}>
                            <span className={`material-symbols-outlined ${
                              activity.status === 'Completed'
                                ? 'text-teal-700'
                                : activity.status === 'Ongoing'
                                  ? 'text-white'
                                  : 'text-on-surface-variant'
                            }`}>
                              {activity.status === 'Completed'
                                ? 'check'
                                : activity.status === 'Ongoing'
                                  ? 'tour'
                                  : 'schedule'}
                            </span>
                          </div>
                          <div className={`flex-1 rounded-2xl hover:translate-x-1 transition-all ${
                            activity.status === 'Ongoing'
                              ? 'flex-1 bg-white p-6 rounded-2xl shadow-md ring-2 ring-primary/10'
                              : 'flex-1 bg-surface-container-lowest p-6 rounded-2xl'
                          }`}>
                            <div className="flex justify-between items-start mb-2">
                              <span className={`text-xs font-bold uppercase ${activity.status === 'Ongoing' ? 'text-primary' : 'text-on-surface-variant'}`}>
                                {activity.time}
                              </span>
                              <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase ${
                                activity.status === 'Completed'
                                  ? 'bg-teal-50 text-teal-700'
                                  : activity.status === 'Ongoing'
                                    ? 'bg-primary text-white animate-pulse'
                                    : 'bg-surface-container text-on-surface-variant'
                              }`}>
                                {activity.status}
                              </span>
                            </div>
                            <h5 className="text-lg font-bold mb-2">{activity.title}</h5>
                            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{activity.location}</p>
                            {activity.status === 'Ongoing' ? (
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2 bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/10">
                                  <span className="material-symbols-outlined text-primary text-sm">restaurant</span>
                                  <span className="text-xs font-bold text-on-surface">Activity in progress</span>
                                </div>
                                <button className="text-primary text-xs font-bold hover:underline" type="button">
                                  Follow route
                                </button>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-8">
                  <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm aspect-square relative border border-outline-variant/10">
                    <div className="absolute inset-0 bg-slate-200">
                      <img className="w-full h-full object-cover opacity-80" src={MAP_IMAGE} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="bg-primary text-white p-2 rounded-full shadow-xl ring-4 ring-primary/20 animate-bounce">
                          <span className="material-symbols-outlined">person_pin_circle</span>
                        </div>
                        <span className="mt-2 bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">Group Alpha</span>
                        <span className="mt-2 bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                          {state.planner.companions.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur px-4 py-3 rounded-xl flex justify-between items-center shadow-lg">
                      <div className="flex items-center space-x-2">
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                          signal_cellular_alt
                        </span>
                        <span className="text-[11px] font-bold">GPS: Signal Strong</span>
                      </div>
                      <button className="text-[10px] font-bold text-primary uppercase" type="button">
                        Expand Map
                      </button>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm space-y-6">
                    <div className="flex justify-between items-center">
                      <h4 className="font-headline text-lg font-bold">Traveler Pulse</h4>
                      <div className="flex items-center text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">
                        {travelerPulse.length}/{travelerPulse.length} Present
                      </div>
                    </div>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
                      {travelerPulse.map((traveler) => (
                        <div key={traveler.id} className="flex items-center justify-between group">
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <img className="w-10 h-10 rounded-full" src={traveler.avatar} />
                              <span className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-teal-500"></span>
                            </div>
                            <div>
                              <p className="text-sm font-bold">{traveler.name}</p>
                              <p className="text-[10px] font-medium text-on-surface-variant">
                                {traveler.role ?? 'Traveler'}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant" type="button">
                              <span className="material-symbols-outlined text-lg">chat_bubble</span>
                            </button>
                            <button className="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant" type="button">
                              <span className="material-symbols-outlined text-lg">info</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-4 border-2 border-dashed border-outline-variant rounded-2xl text-on-surface-variant text-sm font-semibold hover:bg-surface-container-low transition-colors" type="button">
                      View Full Attendance Sheet
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-secondary-container/30 p-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:bg-secondary-container/50 cursor-pointer transition-all" type="button">
                      <span className="material-symbols-outlined text-on-secondary-container text-2xl">receipt_long</span>
                      <span className="text-xs font-bold text-on-secondary-container uppercase">Expenses</span>
                    </button>
                    <button className="bg-tertiary-container/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:bg-tertiary-container/20 cursor-pointer transition-all" type="button">
                      <span className="material-symbols-outlined text-tertiary-container text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                        medical_services
                      </span>
                      <span className="text-xs font-bold text-tertiary-container uppercase">First Aid</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-header z-50 px-6 py-3 flex justify-between items-center shadow-2xl">
          <button className="flex flex-col items-center text-slate-500" type="button">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-headline mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-slate-500" type="button">
            <span className="material-symbols-outlined">edit_calendar</span>
            <span className="text-[10px] font-headline mt-1">Tours</span>
          </button>
          <button className="flex flex-col items-center text-teal-700 font-bold" type="button">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
              location_on
            </span>
            <span className="text-[10px] font-headline mt-1">Track</span>
          </button>
          <button className="flex flex-col items-center text-slate-500" type="button">
            <span className="material-symbols-outlined">forum</span>
            <span className="text-[10px] font-headline mt-1">Messages</span>
          </button>
          <button className="flex flex-col items-center text-slate-500" type="button">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-headline mt-1">More</span>
          </button>
        </nav>
      </div>
    </PageShell>
  )
}
