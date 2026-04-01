import { useNavigate } from 'react-router-dom'
import { useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

const PROFILE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAkJu9NL5GX7GiB_LGm68yLMqadlsVTfQc6Km_Sfw1WUw4UR9MOPDDWMXMFaIBNdfOtzgzAgM2bmVzxn8Qatd82UL8FGMLwQ6tWB_IjucIJqTK3wvkNQGQJhlG5b1EED95YUn9gFrPIKudrcErVQNiHCMC4Y0Qoh7M2gFsyw_tx_W_xpxHaVtBGo0Hg3GkeUseN91vWUUcDmcSPyGhEblxxmqgDLDrkaCICUpe-4gk2H1EurL69btfaYtnGqTs2hyoaroZvdpSqGm1o'
const MAP_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAaFRqD0-nVWlSuoJZBa0I3JQv-RzGgZNK0odTsxNrz7bFk7awE_WVnyn6Lg2R4lCR-nb-vOT6QR9ToCBGE-OQ6CtX0Hp0WrCb-K-94JnwcyEUuk0n8obbFKR4TQr2I0iZM3ijU7v5TH6tOlOR5djPSy1-0-Tdm-rSna-mCI1q1rH-01fIu1qLG8tEmuDZro8JZ5Vo_cykpALnChxAhwFxBu6KQPxnDiU87oROUwFjTULA-v9qhMH76WN-qF8efvcDWtANOo5-nNiFF'
const LANDSCAPE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDYCXC5i2Kl9Sl5OfqGcXSSyg4bRbhovYNMdJD9PFLOTNVFpPvb-AsUQBOcSdrOF_DXCJVR2kEurTrwS58qw0NFpRs5fjZKhZK-6JTGUW_B5YIDa-BTFeWD404uE3Ao-EBQj5rvlrfaCqkMGy537kgK8Z6y65pEA5G2eiaGAoIPdrYvjZNa0q3g-T6WJXLMdleRW7yfg7tvGhyhNT_Ks7nSC4J9T7asyJRa2rBuyjD65T6_E_Wp8zjhNVuC1yXRendZ5o0wu2oPQQbr'

const DAY_ONE_ITEMS = [
  {
    slot: 'Morning · 08:30',
    slotIcon: 'wb_twilight',
    slotTone: 'text-primary-fixed-variant',
    title: 'Arashiyama Bamboo Grove',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9GwfO8_Nk63FVKII3QKs3GI116W1awi_Rh4dIZaHxV4otsG_9Ymdgk0FOGkJtNhU2KyVBzvn1LUG7lgGyl4YIKGiyHEeOxcoaxi14477EwX1oggu2d6bYJARC-07UDFMrGI2XjXE-TXrJxOoSj2zzyJ9U9jPl8S1pvub-Zp3KXPQepD6zYv3S9dZrxu0he5yfEX3XfUwzZOGCvIRwhFiAgdzfdweiXK51BA_W8YlAeUrUJw-0Ez_NZhbKgTz-94aYJqSqPlOqdJF_',
    description:
      'Walk through the towering stalks. Best visited early to avoid crowds and catch the light filtering through.',
  },
  {
    slot: 'Lunch · 12:30',
    slotIcon: 'restaurant',
    slotTone: 'text-tertiary',
    title: 'Shigetsu (Zen Cuisine)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsPDoUz8nNjOAIU_nBr4ZnnXsHVXFAyALVzJ0i79bxTBsmTI3XGj1I6QuNl9-ylsCylPULawD2VoxAnBTiHh7E7YTwo8_hvWwHnDmpMjCHt2gh49NOJJDlBmIXhU5qgLrXolwJVepB7c5XOVfZjqlqN1YoJ_j2ZsqU-SFzxJ3HMR2cp2GiOCnXi49cDY12-tmotcFHAMgYuqGrfv-sh2IJ9-QP0HsbeGr2aXaO2iHP5_qQ-qnStT-wY_Pm0-Nr0HP1RU2gpuwB3vFA',
    description:
      'Michelin-recommended Shojin Ryori (Buddhist vegetarian cuisine) inside the Tenryu-ji temple grounds.',
  },
  {
    slot: 'Afternoon · 14:30',
    slotIcon: 'temple_buddhist',
    slotTone: 'text-secondary',
    title: 'Tenryu-ji Temple',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsAKIt49aGi-R_WrGDKVRM35IgXTf4Yaw3bH_j1SIheIC8kIppod397zg8pLGHpZpOtbsnvfONug4gMPFFhDmYYAc7QTq9PJ10USrzLPipRWo9no8pE4XUwjCI60oVaZFvlhT_7CvJR_umhl3A-Zvp75MCpaQGAV0hutwQzvE9u7F-YZUZ8VDIYZEQXRH2dRtQAilV6jGhxqEs91XSCR76vZeER0o0nm7R9Qj_mDRqUd4POoLZQiCqC0YJJoErReWKH_3WsXLQvzAG',
    description:
      'Explore the meticulously curated Zen gardens and the "Cloud Dragon" painting on the ceiling.',
  },
]

const STYLE_OPTIONS = ['Relax', 'Adventure', 'Food', 'Culture']
const COMPANION_OPTIONS = [
  ['solo', 'person', 'SOLO'],
  ['couple', 'group', 'COUPLE'],
  ['family', 'family_restroom', 'FAMILY'],
]

function budgetToSliderValue(budget) {
  if (budget === 'value') return 20
  if (budget === 'luxury') return 90
  return 50
}

function sliderValueToBudget(value) {
  if (value <= 35) return 'value'
  if (value >= 70) return 'luxury'
  return 'premium'
}

export default function AITravelPlanner() {
  const navigate = useNavigate()
  const { actions, plannerOutput, state } = useVoyagerDemo()
  const renderedDayOne = (plannerOutput.days[0]?.items ?? []).map((item, index) => ({
    ...item,
    image: DAY_ONE_ITEMS[index]?.image ?? DAY_ONE_ITEMS[0].image,
  }))
  const dayTwo = plannerOutput.days[1]

  return (
    <PageShell
      title="AI Planner - Voyager AI"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}
    >
      <div className="bg-surface font-body text-on-surface overflow-hidden">
        <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm h-16 flex justify-between items-center px-6 max-w-[1920px] mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tight text-teal-800 font-headline">
              Voyager AI
            </span>
            <div className="hidden md:flex gap-6">
              <button
                className="text-slate-500 font-medium text-sm hover:text-teal-600 transition-colors"
                onClick={() => navigate('/pages/traveler-dashboard')}
                type="button"
              >
                Dashboard
              </button>
              <button
                className="text-teal-700 font-semibold text-sm transition-colors border-b-2 border-teal-600 pb-1"
                type="button"
              >
                AI Planner
              </button>
              <button
                className="text-slate-500 font-medium text-sm hover:text-teal-600 transition-colors"
                onClick={() => navigate('/pages/tour-list')}
                type="button"
              >
                Tours
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                search
              </span>
              <input
                className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary/20"
                placeholder="Search experiences..."
                type="text"
              />
            </div>
            <button className="p-2 text-on-surface-variant" type="button">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
              <img alt="Profile" src={PROFILE_IMAGE} />
            </div>
          </div>
          <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0 left-0"></div>
        </nav>

        <div className="flex h-screen pt-16">
          <aside className="hidden lg:flex flex-col h-full w-64 py-8 px-4 space-y-2 bg-slate-50 border-r-0 font-headline">
            <div className="px-4 mb-6">
              <p className="text-[13px] font-semibold text-teal-700">Alex Rivera</p>
              <p className="text-[11px] text-slate-500">Premium Traveler</p>
            </div>
            <button
              className="text-slate-500 px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-100 transition-all text-[13px] font-semibold text-left"
              onClick={() => navigate('/pages/traveler-dashboard')}
              type="button"
            >
              <span className="material-symbols-outlined">dashboard</span> Dashboard
            </button>
            <button
              className="bg-teal-50 text-teal-700 px-4 py-3 rounded-xl flex items-center gap-3 transition-all text-[13px] font-semibold text-left"
              type="button"
            >
              <span className="material-symbols-outlined">auto_awesome</span> AI Planner
            </button>
            <button
              className="text-slate-500 px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-100 transition-all text-[13px] font-semibold text-left"
              onClick={() => navigate('/pages/tour-list')}
              type="button"
            >
              <span className="material-symbols-outlined">explore</span> Tours
            </button>
            <button className="text-slate-500 px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-100 transition-all text-[13px] font-semibold text-left" type="button">
              <span className="material-symbols-outlined">confirmation_number</span>
              Bookings
            </button>
            <button className="text-slate-500 px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-100 transition-all text-[13px] font-semibold text-left" type="button">
              <span className="material-symbols-outlined">mail</span> Messages
            </button>
            <button className="text-slate-500 px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-100 transition-all text-[13px] font-semibold text-left" type="button">
              <span className="material-symbols-outlined">settings</span> Settings
            </button>
            <div className="mt-auto p-4">
              <button className="w-full bg-primary text-on-primary rounded-xl py-3 font-semibold text-sm shadow-sm hover:scale-105 active:scale-95 transition-all" type="button">
                Plan New Trip
              </button>
            </div>
          </aside>

          <main className="flex-1 flex overflow-hidden">
            <section className="w-full md:w-[400px] xl:w-[450px] h-full overflow-y-auto bg-surface-container-low p-8 scrollbar-hide">
              <div className="max-w-md mx-auto">
                <header className="mb-10">
                  <h1 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight mb-2">
                    Build your dream.
                  </h1>
                  <p className="text-on-surface-variant text-sm">
                    Fill in the details, and our AI concierge will curate a bespoke itinerary just for you.
                  </p>
                </header>

                <form className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">
                      Destination
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                        location_on
                      </span>
                      <input
                        className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-on-surface font-medium transition-all"
                        onChange={(event) =>
                          actions.updatePlanner({ destination: event.target.value })
                        }
                        type="text"
                        value={state.planner.destination}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">
                        Duration
                      </label>
                      <select className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl py-4 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none appearance-none" onChange={(event) => actions.updatePlanner({ durationDays: Number(event.target.value.split(' ')[0]) })} value={`${state.planner.durationDays} Days`}>
                        <option>3 Days</option>
                        <option>5 Days</option>
                        <option>7 Days</option>
                        <option>14 Days</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">
                        Budget
                      </label>
                      <div className="px-1 pt-4">
                        <input className="w-full h-2 bg-secondary-container rounded-lg appearance-none cursor-pointer accent-primary" onChange={(event) => actions.updatePlanner({ budget: sliderValueToBudget(Number(event.target.value)) })} type="range" value={budgetToSliderValue(state.planner.budget)} />
                        <div className="flex justify-between text-[10px] font-bold text-on-surface-variant mt-2">
                          <span>VALUE</span>
                          <span>LUXURY</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">
                      Travel Style
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {STYLE_OPTIONS.map((style) => {
                        const active = state.planner.travelStyles.includes(style)
                        return (
                          <button
                            key={style}
                            className={`px-4 py-2 rounded-full text-xs transition-all ${
                              active
                                ? 'border border-primary bg-primary/5 text-primary font-bold flex items-center gap-1'
                                : 'border border-outline-variant/30 font-semibold hover:border-primary hover:text-primary'
                            }`}
                            onClick={() => {
                              const nextStyles = active
                                ? state.planner.travelStyles.filter((item) => item !== style)
                                : [...state.planner.travelStyles, style]
                              actions.updatePlanner({ travelStyles: nextStyles })
                            }}
                            type="button"
                          >
                            {style}
                            {active ? (
                              <span className="material-symbols-outlined text-[14px]">check</span>
                            ) : null}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">
                      Companions
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {COMPANION_OPTIONS.map(([value, icon, label]) => {
                        const active = state.planner.companions === value
                        return (
                          <button className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${active ? 'border-2 border-primary bg-primary/5' : 'border border-outline-variant/30 hover:border-primary'}`} key={value} onClick={() => actions.updatePlanner({ companions: value })} type="button">
                            <span className={`material-symbols-outlined ${active ? 'text-primary' : 'text-on-surface-variant'}`}>{icon}</span>
                            <span className={`text-[10px] font-bold ${active ? 'text-primary' : ''}`}>{label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-secondary-container to-blue-100 p-5 rounded-3xl relative overflow-hidden group">
                    <div className="relative z-10 flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-on-secondary-container/60 uppercase">Expected Weather</p>
                        <h3 className="text-2xl font-headline font-bold text-on-secondary-container">
                          {plannerOutput.weatherLabel}{' '}
                          <span className="text-sm font-medium">{plannerOutput.weatherDescription}</span>
                        </h3>
                        <p className="text-[11px] text-on-secondary-container/80 mt-1 italic">
                          Note: {plannerOutput.weatherNote}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-4xl text-on-secondary-container opacity-40 group-hover:scale-110 transition-transform">
                        partly_cloudy_day
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-2xl font-headline font-bold text-lg shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3" onClick={() => actions.generatePlanner()} type="button">
                    Generate Plan with AI
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </button>
                </form>
              </div>
            </section>

            <section className="flex-1 h-full overflow-y-auto bg-surface p-8 scrollbar-hide relative">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-tertiary-container text-on-tertiary-fixed text-[10px] font-bold px-3 py-1 rounded-full">
                      {plannerOutput.badge}
                    </span>
                  </div>
                  <h2 className="text-5xl font-headline font-extrabold text-on-surface leading-tight">
                    {plannerOutput.title} <br />
                    <span className="text-primary">{plannerOutput.accentTitle}</span>
                  </h2>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-primary font-bold text-sm bg-white px-6 py-3 rounded-full shadow-sm" type="button">
                    <span className="material-symbols-outlined text-sm">share</span>
                    Share
                  </button>
                  <button
                    className="flex items-center gap-2 bg-on-surface text-surface px-6 py-3 rounded-full shadow-md font-bold text-sm"
                    onClick={() => {
                      actions.generatePlanner()
                      navigate('/pages/tour-tracking')
                    }}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                      bookmark
                    </span>
                    Save Trip
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                <div className="space-y-12">
                  <div className="relative pl-8 border-l-2 border-dashed border-outline-variant/30">
                    <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-4 border-surface">
                      <span className="text-[10px] font-bold text-on-primary">1</span>
                    </div>
                    <h3 className="text-xl font-headline font-bold mb-6">Day 1: Tradition Meets Zen</h3>
                    <div className="space-y-6">
                      {renderedDayOne.map((item) => (
                        <div key={item.title} className="group cursor-pointer">
                          <div className="flex gap-4 p-4 rounded-2xl transition-all hover:bg-surface-container-low">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                              <img alt={item.title} className="w-full h-full object-cover" src={item.image} />
                            </div>
                            <div>
                              <div className={`flex items-center gap-2 text-[10px] font-bold uppercase mb-1 ${item.slotTone}`}>
                                <span className="material-symbols-outlined text-sm">{item.slotIcon}</span>
                                {item.slot}
                              </div>
                              <h4 className="font-bold text-on-surface">{item.title}</h4>
                              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative pl-8 border-l-2 border-dashed border-outline-variant/30 opacity-50">
                    <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-outline-variant flex items-center justify-center border-4 border-surface text-[10px] font-bold text-white">
                      2
                    </div>
                    <h3 className="text-xl font-headline font-bold mb-2">Day 2: {dayTwo?.title ?? 'The Crimson Path'}</h3>
                    <p className="text-xs">{dayTwo?.preview ?? 'Fushimi Inari Shrine & Gion District Explorations...'}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-surface-container-lowest rounded-[2rem] p-2 shadow-sm relative group">
                    <div className="aspect-[4/5] rounded-[1.75rem] overflow-hidden bg-slate-200 relative">
                      <img alt="Map" className="w-full h-full object-cover grayscale brightness-50 contrast-125" src={MAP_IMAGE} />
                      <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                      <div className="absolute top-6 left-6 right-6 flex justify-between">
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white">
                          <p className="text-[10px] font-bold text-on-surface-variant uppercase">Total Route</p>
                          <p className="text-sm font-bold">{plannerOutput.routeLabel}</p>
                        </div>
                        <button className="bg-white/90 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center shadow-xl" type="button">
                          <span className="material-symbols-outlined text-primary">my_location</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-[2rem] overflow-hidden aspect-video group">
                    <img alt="Landscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={LANDSCAPE_IMAGE} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Local Secret</p>
                      <h4 className="text-white text-xl font-bold">The Sagano Scenic Railway</h4>
                      <p className="text-white/80 text-[11px] mt-1 italic">
                        Suggested: &quot;{plannerOutput.insight}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-20"></div>
            </section>
          </main>
        </div>

        <nav className="md:hidden fixed bottom-0 w-full bg-white/90 backdrop-blur-xl h-16 flex justify-around items-center px-6 z-50 border-t border-slate-100">
          <button className="flex flex-col items-center gap-1 text-slate-400" onClick={() => navigate('/pages/traveler-dashboard')} type="button">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-bold">DASHBOARD</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-teal-700" type="button">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="text-[10px] font-bold">PLANNER</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400" onClick={() => navigate('/pages/tour-list')} type="button">
            <span className="material-symbols-outlined">explore</span>
            <span className="text-[10px] font-bold">TOURS</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400" type="button">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-bold">PROFILE</span>
          </button>
        </nav>
      </div>
    </PageShell>
  )
}
