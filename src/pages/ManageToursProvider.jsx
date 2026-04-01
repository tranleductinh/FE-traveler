import { useNavigate } from 'react-router-dom'
import { formatCurrency, useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

export default function ManageToursProvider() {
  const navigate = useNavigate()
  const { actions, state } = useVoyagerDemo()

  return (
    <PageShell
      title="Manage Tours - Voyager AI"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        vertical-align: middle;
      }
      body { font-family: "Inter", sans-serif; }
      h1, h2, h3, .headline { font-family: "Plus Jakarta Sans", sans-serif; }`}
    >
      <div className="bg-surface text-on-surface antialiased">
        <div className="flex min-h-screen">
          <aside className="hidden md:flex flex-col h-screen w-64 bg-slate-50 py-8 px-4 space-y-2 sticky top-0">
            <div className="px-4 mb-10">
              <span className="text-xl font-bold tracking-tight text-teal-800 font-headline">
                Voyager AI
              </span>
            </div>
            <nav className="flex-1 space-y-1">
              <button
                className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center gap-3 rounded-xl transition-all duration-200 hover:translate-x-1 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold w-full text-left"
                onClick={() => navigate('/pages/provider-dashboard')}
                type="button"
              >
                <span className="material-symbols-outlined">analytics</span>
                Dashboard
              </button>
              <button
                className="bg-teal-50 text-teal-700 rounded-xl px-4 py-3 flex items-center gap-3 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold w-full text-left"
                type="button"
              >
                <span className="material-symbols-outlined">edit_calendar</span>
                Manage Tours
              </button>
              <button
                className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center gap-3 rounded-xl transition-all duration-200 hover:translate-x-1 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold w-full text-left"
                onClick={() => navigate('/pages/bookings-management-provider')}
                type="button"
              >
                <span className="material-symbols-outlined">book_online</span>
                Bookings
              </button>
              <button
                className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center gap-3 rounded-xl transition-all duration-200 hover:translate-x-1 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold w-full text-left"
                onClick={() => navigate('/pages/public-tour-tracking')}
                type="button"
              >
                <span className="material-symbols-outlined">location_on</span>
                Tour Tracking
              </button>
              <button className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center gap-3 rounded-xl transition-all duration-200 hover:translate-x-1 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold w-full text-left" type="button">
                <span className="material-symbols-outlined">forum</span>
                Messages
              </button>
              <button className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center gap-3 rounded-xl transition-all duration-200 hover:translate-x-1 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold w-full text-left" type="button">
                <span className="material-symbols-outlined">settings</span>
                Settings
              </button>
            </nav>
            <div className="mt-auto pt-6 border-t border-slate-200/50 px-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                  <img className="w-full h-full object-cover" src={state.guides[0]?.avatar} />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">{state.provider.name}</p>
                  <p className="text-[11px] text-on-surface-variant font-medium">
                    {state.provider.label}
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <header className="fixed top-0 right-0 left-0 md:left-64 z-50 bg-white/70 backdrop-blur-xl shadow-sm h-16 flex justify-between items-center px-6">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative w-full max-w-md group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                    search
                  </span>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/60 transition-all"
                    placeholder="Search tours, bookings, or locations..."
                    type="text"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 transition-colors" type="button">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                  <img className="w-full h-full object-cover" src={state.guides[0]?.avatar} />
                </div>
              </div>
              <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0 left-0"></div>
            </header>

            <div className="pt-24 pb-12 px-8 max-w-[1400px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <p className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2">
                    Inventory Overview
                  </p>
                  <h1 className="text-4xl font-extrabold tracking-tight text-on-surface font-headline leading-tight">
                    Manage Your{' '}
                    <span className="text-primary-container bg-primary/5 px-2 rounded-lg italic">
                      Experiences
                    </span>
                  </h1>
                  <p className="text-on-surface-variant mt-2 max-w-xl">
                    Curate, update, and monitor your tour performance across global
                    markets from a single editorial dashboard.
                  </p>
                </div>
                <button
                  className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3.5 rounded-xl font-headline font-bold text-sm shadow-xl shadow-primary/10 hover:scale-[0.98] transition-transform flex items-center gap-2"
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                  Create Tour
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between">
                  <span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">
                    Total Revenue
                  </span>
                  <div className="mt-4">
                    <span className="text-3xl font-bold font-headline">
                      {formatCurrency(
                        state.bookings.reduce((sum, booking) => sum + booking.amountPaid, 0),
                      )}
                    </span>
                    <span className="text-xs text-teal-600 block mt-1 font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span>
                      +12.4%
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between">
                  <span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">
                    Active Tours
                  </span>
                  <div className="mt-4">
                    <span className="text-3xl font-bold font-headline">
                      {state.tours.filter((tour) => tour.status === 'active').length}
                    </span>
                    <span className="text-xs text-on-surface-variant block mt-1">
                      Currently listed
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between">
                  <span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">
                    Booking Rate
                  </span>
                  <div className="mt-4">
                    <span className="text-3xl font-bold font-headline">84%</span>
                    <div className="w-full bg-slate-100 h-1 rounded-full mt-3">
                      <div className="bg-primary h-1 rounded-full w-[84%]"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between border border-primary/10">
                  <span className="text-primary text-[11px] font-bold uppercase tracking-wider">
                    AI Insight
                  </span>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-2 italic">
                    "Luxury Amalfi Coast tours are trending. Consider adding a
                    'Sunset Private Boat' option."
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-t-xl p-4 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white text-on-surface text-xs font-bold rounded-lg shadow-sm" type="button">
                    All Tours
                  </button>
                  <button className="px-4 py-2 text-on-surface-variant text-xs font-semibold hover:bg-slate-200 transition-colors rounded-lg" type="button">
                    Active
                  </button>
                  <button className="px-4 py-2 text-on-surface-variant text-xs font-semibold hover:bg-slate-200 transition-colors rounded-lg" type="button">
                    Drafts
                  </button>
                  <button className="px-4 py-2 text-on-surface-variant text-xs font-semibold hover:bg-slate-200 transition-colors rounded-lg" type="button">
                    Archived
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-lg shadow-sm cursor-pointer border border-transparent hover:border-outline-variant/20 transition-all">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">
                      filter_list
                    </span>
                    <span className="text-xs font-semibold text-on-surface">Filter By Price</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-lg shadow-sm cursor-pointer border border-transparent hover:border-outline-variant/20 transition-all">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">sort</span>
                    <span className="text-xs font-semibold text-on-surface">Sort: Latest</span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest shadow-sm overflow-hidden mb-8">
                <table className="w-full text-left">
                  <thead className="bg-slate-50/50 border-b border-outline-variant/10">
                    <tr>
                      <th className="py-4 px-6 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                        Tour Details
                      </th>
                      <th className="py-4 px-6 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                        Price (USD)
                      </th>
                      <th className="py-4 px-6 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                        Booking Status
                      </th>
                      <th className="py-4 px-6 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {state.tours.map((tour) => (
                      <tr key={tour.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="py-6 px-6">
                          <div className={`flex items-center gap-4 ${tour.status !== 'active' ? 'opacity-70' : ''}`}>
                            <div className={`w-16 h-16 rounded-xl overflow-hidden shadow-sm flex-shrink-0 ${tour.status === 'draft' ? 'grayscale' : ''}`}>
                              <img className="w-full h-full object-cover" src={tour.cardImage} />
                            </div>
                            <div>
                              <h4 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                                {tour.name}
                              </h4>
                              <p className="text-[11px] text-on-surface-variant mt-1 flex items-center gap-1 uppercase tracking-tight">
                                <span className="material-symbols-outlined text-[14px]">place</span>
                                {tour.location}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-6 px-6">
                          <span className={`font-headline font-bold text-lg ${tour.status !== 'active' ? 'text-on-surface-variant' : ''}`}>
                            {formatCurrency(tour.pricePerPerson)}
                          </span>
                          <span className="text-[10px] text-on-surface-variant block">
                            Per Person
                          </span>
                        </td>
                        <td className="py-6 px-6">
                          <span
                            className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block ${
                              tour.status === 'active'
                                ? 'bg-teal-50 text-teal-700'
                                : tour.status === 'draft'
                                  ? 'bg-slate-100 text-slate-500'
                                  : 'bg-error-container text-on-error-container'
                            }`}
                          >
                            {tour.status}
                          </span>
                        </td>
                        <td className="py-6 px-6 text-right">
                          <div className="flex justify-end gap-2">
                            <button
                              className="w-9 h-9 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-slate-100 transition-colors"
                              onClick={() => {
                                actions.selectTour(tour.id)
                                navigate('/pages/tour-detail')
                              }}
                              type="button"
                            >
                              <span className="material-symbols-outlined text-lg">edit</span>
                            </button>
                            <button className="w-9 h-9 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-slate-100 transition-colors" type="button">
                              <span className="material-symbols-outlined text-lg">more_vert</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between px-6 py-4 bg-surface-container-low rounded-xl">
                <p className="text-xs text-on-surface-variant font-medium">
                  Showing <span className="text-on-surface font-bold">1 - {state.tours.length}</span>{' '}
                  of {state.tours.length} tours
                </p>
                <div className="flex gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 bg-white text-on-surface-variant hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary text-xs font-bold" type="button">
                    1
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 bg-white text-on-surface text-xs font-bold hover:bg-slate-50" type="button">
                    2
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 bg-white text-on-surface text-xs font-bold hover:bg-slate-50" type="button">
                    3
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 bg-white text-on-surface-variant hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
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
