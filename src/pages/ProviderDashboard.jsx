import { useNavigate } from 'react-router-dom'
import {
  formatCurrency,
  formatDateTime,
  useVoyagerDemo,
} from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

const MONTH_BARS = [
  { label: 'JAN', height: '40%' },
  { label: 'FEB', height: '55%' },
  { label: 'MAR', height: '75%' },
  { label: 'APR', height: '90%', active: true },
  { label: 'MAY', height: '65%' },
  { label: 'JUN', height: '85%' },
]

export default function ProviderDashboard() {
  const navigate = useNavigate()
  const { providerStats, state } = useVoyagerDemo()

  return (
    <PageShell
      title="Provider Dashboard | Voyager AI"
      styles={`body {
        font-family: "Inter", sans-serif;
        background-color: #f7f9fb;
      }
      .headline { font-family: "Plus Jakarta Sans", sans-serif; }
      .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }
      .no-scrollbar::-webkit-scrollbar { display: none; }`}
    >
      <div className="text-on-surface">
        <div className="flex min-h-screen bg-surface">
          <aside className="hidden md:flex flex-col h-screen w-64 bg-slate-50 border-r-0 py-8 px-4 space-y-2 fixed left-0 top-0 overflow-y-auto">
            <div className="px-4 mb-8">
              <h1 className="text-xl font-bold tracking-tight text-teal-800 headline">
                Voyager AI
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-semibold">
                Provider Console
              </p>
            </div>
            <nav className="flex-1 space-y-2">
              <button
                className="flex items-center space-x-3 bg-teal-50 text-teal-700 rounded-xl px-4 py-3 transition-all duration-200 headline text-[13px] font-semibold w-full text-left"
                type="button"
              >
                <span className="material-symbols-outlined">analytics</span>
                <span>Dashboard</span>
              </button>
              <button
                className="flex items-center space-x-3 text-slate-500 px-4 py-3 hover:bg-slate-100 hover:translate-x-1 transition-all headline text-[13px] font-semibold w-full text-left"
                onClick={() => navigate('/pages/manage-tours-provider')}
                type="button"
              >
                <span className="material-symbols-outlined">edit_calendar</span>
                <span>Manage Tours</span>
              </button>
              <button
                className="flex items-center space-x-3 text-slate-500 px-4 py-3 hover:bg-slate-100 hover:translate-x-1 transition-all headline text-[13px] font-semibold w-full text-left"
                onClick={() => navigate('/pages/bookings-management-provider')}
                type="button"
              >
                <span className="material-symbols-outlined">book_online</span>
                <span>Bookings</span>
              </button>
              <button
                className="flex items-center space-x-3 text-slate-500 px-4 py-3 hover:bg-slate-100 hover:translate-x-1 transition-all headline text-[13px] font-semibold w-full text-left"
                onClick={() => navigate('/pages/public-tour-tracking')}
                type="button"
              >
                <span className="material-symbols-outlined">location_on</span>
                <span>Tour Tracking</span>
              </button>
              <button
                className="flex items-center space-x-3 text-slate-500 px-4 py-3 hover:bg-slate-100 hover:translate-x-1 transition-all headline text-[13px] font-semibold w-full text-left"
                type="button"
              >
                <span className="material-symbols-outlined">forum</span>
                <span>Messages</span>
              </button>
              <button
                className="flex items-center space-x-3 text-slate-500 px-4 py-3 hover:bg-slate-100 hover:translate-x-1 transition-all headline text-[13px] font-semibold w-full text-left"
                type="button"
              >
                <span className="material-symbols-outlined">settings</span>
                <span>Settings</span>
              </button>
            </nav>
            <div className="mt-auto pt-6 border-t border-slate-200/50">
              <div className="flex items-center space-x-3 px-4">
                <img alt={state.provider.name} className="w-10 h-10 rounded-full object-cover" src={state.guides[0]?.avatar} />
                <div>
                  <p className="text-[13px] font-bold headline text-on-surface">
                    {state.provider.name}
                  </p>
                  <p className="text-[11px] text-on-surface-variant">{state.provider.label}</p>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 md:ml-64 p-6 md:p-10">
            <header className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl font-extrabold headline text-on-surface tracking-tight">
                  Performance Overview
                </h2>
                <p className="text-on-surface-variant font-medium mt-1">
                  Welcome back, Skyline. Here is what's happening today.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
                  <button className="p-2.5 bg-surface-container-lowest rounded-full text-on-surface-variant hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined">notifications</span>
                  </button>
                </div>
                <button
                  className="flex items-center space-x-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-xl font-semibold headline shadow-sm hover:opacity-90 transition-all active:scale-95"
                  onClick={() => navigate('/pages/manage-tours-provider')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>New Tour</span>
                </button>
              </div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-surface-container-lowest p-6 rounded-3xl group hover:bg-teal-50/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-secondary-container rounded-2xl text-on-secondary-container">
                    <span className="material-symbols-outlined">confirmation_number</span>
                  </div>
                  <span className="text-primary font-bold text-sm bg-primary/10 px-2.5 py-1 rounded-full">
                    +12%
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm font-semibold headline">
                  Total Bookings
                </p>
                <h3 className="text-3xl font-extrabold headline mt-1">
                  {providerStats.totalBookings}
                </h3>
                <p className="text-slate-400 text-xs mt-4">
                  Across {providerStats.activeTours} active packages
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-3xl group hover:bg-teal-50/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-tertiary-fixed rounded-2xl text-on-tertiary-fixed">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <span className="text-tertiary font-bold text-sm bg-tertiary/10 px-2.5 py-1 rounded-full">
                    +8.4%
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm font-semibold headline">
                  Monthly Revenue
                </p>
                <h3 className="text-3xl font-extrabold headline mt-1">
                  {formatCurrency(providerStats.monthlyRevenue)}
                </h3>
                <p className="text-slate-400 text-xs mt-4">
                  Current month projection: {formatCurrency(providerStats.monthlyRevenue + 8000)}
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-3xl group hover:bg-teal-50/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary-fixed rounded-2xl text-on-primary-fixed">
                    <span className="material-symbols-outlined">explore</span>
                  </div>
                  <span className="text-slate-500 font-bold text-sm bg-slate-100 px-2.5 py-1 rounded-full">
                    Steady
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm font-semibold headline">
                  Active Tours
                </p>
                <h3 className="text-3xl font-extrabold headline mt-1">
                  {providerStats.activeTours}
                </h3>
                <p className="text-slate-400 text-xs mt-4">3 pending AI optimization</p>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-surface-container-lowest rounded-3xl p-8 relative overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h4 className="text-lg font-bold headline">Revenue Analysis</h4>
                    <p className="text-on-surface-variant text-sm">
                      Monthly earnings for 2024
                    </p>
                  </div>
                  <select className="bg-surface-container-low border-0 rounded-xl text-sm font-semibold headline focus:ring-primary">
                    <option>Last 6 Months</option>
                    <option>Year to Date</option>
                  </select>
                </div>
                <div className="h-64 flex items-end justify-between space-x-2 pt-10 px-4">
                  {MONTH_BARS.map((item) => (
                    <div key={item.label} className="flex-1 flex flex-col items-center group">
                      <div
                        className={`w-full rounded-t-xl transition-all duration-300 ${
                          item.active
                            ? 'bg-primary shadow-lg shadow-primary/20'
                            : 'bg-slate-100 group-hover:bg-primary-fixed-dim'
                        }`}
                        style={{ height: item.height }}
                      ></div>
                      <span
                        className={`text-[10px] font-bold mt-3 headline ${
                          item.active ? 'text-primary' : 'text-slate-400'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-3xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-bold headline">Recent Activity</h4>
                  <button className="text-primary text-xs font-bold headline hover:underline" type="button">
                    View All
                  </button>
                </div>
                <div className="space-y-6">
                  {state.activityFeed.slice(0, 4).map((item, index) => (
                    <div key={item.id} className="flex space-x-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          index === 0
                            ? 'overflow-hidden'
                            : index === 1
                              ? 'bg-secondary-container text-on-secondary-container'
                              : index === 2
                                ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                                : 'bg-primary-fixed text-on-primary-fixed'
                        }`}
                      >
                        {index === 0 ? (
                          <img alt={item.title} className="w-full h-full object-cover" src={state.traveler.avatar} />
                        ) : (
                          <span className="material-symbols-outlined text-[20px]">
                            {index === 1 ? 'mail' : index === 2 ? 'star' : 'auto_awesome'}
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="text-sm font-bold text-on-surface">{item.title}</p>
                          <span className="text-[10px] text-slate-400">
                            {formatDateTime(item.time)}
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <section className="mt-8">
              <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-[2rem] p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
                <div className="relative z-10 max-w-lg">
                  <span className="bg-primary-container/20 text-primary-fixed px-3 py-1 rounded-full text-[10px] font-bold headline uppercase tracking-widest">
                    Voyager Insights
                  </span>
                  <h4 className="text-2xl font-bold headline mt-4">
                    Boost your bookings this summer with AI-driven pricing.
                  </h4>
                  <p className="text-teal-100/70 mt-2">
                    Our latest model predicts a 20% surge in demand for cultural
                    tours. Adjust your availability now.
                  </p>
                  <button
                    className="mt-6 bg-white text-teal-900 px-6 py-2.5 rounded-xl font-bold headline text-sm hover:bg-teal-50 transition-colors"
                    onClick={() => navigate('/pages/manage-tours-provider')}
                    type="button"
                  >
                    Apply Optimization
                  </button>
                </div>
                <div className="mt-8 md:mt-0 relative">
                  <div className="w-48 h-48 bg-primary/20 rounded-full blur-3xl absolute -top-10 -right-10"></div>
                  <span className="material-symbols-outlined text-[120px] opacity-10">
                    insights
                  </span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </PageShell>
  )
}
