import { PageShell } from './PageShell'

export default function SystemSettings() {
  return (
    <PageShell
      title="Voyager AI | System Settings"
      styles={`.material-symbols-outlined {
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
      }
      body {
        font-family: "Inter", sans-serif;
      }
      h1,
      h2,
      h3 {
        font-family: "Plus Jakarta Sans", sans-serif;
      }`}
    >
      <div className="bg-surface text-on-surface flex min-h-screen">
        <aside className="h-screen w-64 bg-slate-50 dark:bg-slate-950 flex flex-col py-8 px-4 space-y-2 sticky top-0 shrink-0">
              <div className="px-4 mb-10">
                <h1 className="text-xl font-bold tracking-tight text-teal-800 dark:text-teal-100 font-headline">
                  Voyager AI
                </h1>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">
                  Management Portal
                </p>
              </div>
              <nav className="flex-1 space-y-1">
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-3 font-semibold text-[13px] rounded-xl transition-all duration-200" href="#">
                  <span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
                  Admin Dashboard
                </a>
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-3 font-semibold text-[13px] rounded-xl transition-all duration-200" href="#">
                  <span className="material-symbols-outlined" data-icon="group">group</span>
                  User Management
                </a>
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-3 font-semibold text-[13px] rounded-xl transition-all duration-200" href="#">
                  <span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
                  Provider Approval
                </a>
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-3 font-semibold text-[13px] rounded-xl transition-all duration-200" href="#">
                  <span className="material-symbols-outlined" data-icon="gavel">gavel</span>
                  Content Moderation
                </a>
                
                <a className="bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-xl px-4 py-3 flex items-center gap-3 font-semibold text-[13px]" href="#">
                  <span className="material-symbols-outlined" data-icon="settings_suggest">settings_suggest</span>
                  System Settings
                </a>
              </nav>
              <div className="mt-auto pt-6 px-4">
                <div className="flex items-center gap-3 p-2">
                  <img alt="System Admin Avatar" className="w-10 h-10 rounded-full object-cover" data-alt="close-up portrait of a professional system administrator in a clean modern office, soft lighting, sharp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLsiRPr9X5qbPtKv7-Gk6jp5CWP4tKm3xpE-fIreeEr2y1qLPoWh8y61OTuV5iezEzjGRk_1_Fhfz-4mSnjEPQJh7zvlzJ6WeCaZw2o33X5g2Uy4d-6MzaEawQr8s0CiV1JMQ717ghC8I3pSxBWuETbkzlvFdZhhNX5pMgBprLCWtxkBGL1f0_g5Vj0OIYphx_75_46WSCsZPepGIVG5z07AyOA-ZkAOCcugaaXCL4elmBkCsf7wNg_E9c4y53rI4aJwy1NtgrV5I5" />
                  <div>
                    <p className="text-[13px] font-bold text-on-surface">System Admin</p>
                    <p className="text-[11px] text-on-surface-variant">Root Access</p>
                  </div>
                </div>
              </div>
            </aside>
            
            <main className="flex-1 bg-surface p-8 md:p-12 overflow-y-auto">
              <header className="mb-12">
                <h2 className="text-4xl font-extrabold tracking-tight text-on-surface font-headline mb-2">
                  System Settings
                </h2>
                <p className="text-on-surface-variant max-w-2xl">
                  Configure global parameters, AI logic hooks, and third-party
                  integrations for the Voyager ecosystem.
                </p>
              </header>
              
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                <section className="xl:col-span-2 space-y-6">
                  <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary" data-icon="psychology">psychology</span>
                        <h3 className="text-xl font-bold font-headline">
                          AI Prompt Config
                        </h3>
                      </div>
                      <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-fixed text-[10px] font-bold rounded-full uppercase tracking-tighter">Production Logic</span>
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-on-surface-variant">System Base Instructions</label>
                      <textarea className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 font-mono text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="Enter base AI persona logic here..." rows="12" defaultValue="You are the Voyager AI Digital Concierge. Your tone is professional yet adventurous. Prioritize boutique experiences over mass-market tourism. When generating itineraries, always include one 'hidden gem' and consider seasonal weather patterns retrieved from the OpenWeather API..." />
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-on-surface-variant">
                          Last updated: Oct 24, 2023 by Root
                        </p>
                        <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-xl font-semibold text-sm transition-transform active:scale-95">
                          Update Model
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="material-symbols-outlined text-primary" data-icon="notifications_active">notifications_active</span>
                      <h3 className="text-xl font-bold font-headline">
                        Notification Settings
                      </h3>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                        <div>
                          <p className="font-bold text-on-surface">Global Email Alerts</p>
                          <p className="text-sm text-on-surface-variant">
                            Send system health reports to administrative email list.
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                        <div>
                          <p className="font-bold text-on-surface">
                            Push Notifications (Providers)
                          </p>
                          <p className="text-sm text-on-surface-variant">
                            Broadcast high-priority system updates to all verified
                            providers.
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section className="space-y-6">
                  <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm h-fit">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="material-symbols-outlined text-primary" data-icon="api">api</span>
                      <h3 className="text-xl font-bold font-headline">API Configuration</h3>
                    </div>
                    <div className="space-y-8">
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Google Maps Platform</label>
                          <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            Active
                          </span>
                        </div>
                        <div className="relative">
                          <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-mono outline-none focus:border-primary transition-colors" type="password" defaultValue="AIzaSyA_J89234XkLp0239Zq_mN90" />
                          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span>
                          </button>
                        </div>
                        <p className="text-[11px] text-on-surface-variant">
                          Used for itinerary mapping and geocoding services.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">OpenWeather API</label>
                          <span className="text-[10px] font-bold text-error flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-error rounded-full"></span>
                            Action Required
                          </span>
                        </div>
                        <div className="relative">
                          <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-mono outline-none focus:border-primary transition-colors" placeholder="Enter API Key..." type="text" />
                        </div>
                        <p className="text-[11px] text-on-surface-variant">
                          Required for dynamic weather overlays in trip planning.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-outline-variant/10">
                        <button className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold text-sm hover:bg-secondary/10 transition-colors">
                          Test Integrations
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary to-primary-container rounded-xl p-8 shadow-sm text-on-primary relative overflow-hidden">
                    <div className="relative z-10">
                      <h4 className="text-lg font-bold font-headline mb-1">
                        API Monthly Usage
                      </h4>
                      <p className="text-sm opacity-80 mb-6">74% of quota consumed</p>
                      <div className="w-full bg-white/20 h-2 rounded-full mb-2">
                        <div className="bg-white h-2 rounded-full" style={{ "width": "74%" }}></div>
                      </div>
                      <div className="flex justify-between text-[11px] font-bold">
                        <span>1.2M Requests</span>
                        <span>2.0M Limit</span>
                      </div>
                    </div>
                    
                    <div className="absolute -right-4 -bottom-4 opacity-10">
                      <span className="material-symbols-outlined text-[120px]" data-icon="data_usage">data_usage</span>
                    </div>
                  </div>
                </section>
              </div>
              
              <footer className="mt-12 flex flex-col md:flex-row gap-6 items-center justify-between p-6 bg-surface-container-low rounded-2xl">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                    <span className="text-sm font-semibold">Core Systems Nominal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                    <span className="text-sm font-semibold">Database Latency: 12ms</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
                    Export Logs
                  </button>
                  <button className="text-sm font-bold text-error hover:opacity-80 transition-opacity">
                    Emergency Shutdown
                  </button>
                </div>
              </footer>
            </main>
      </div>
    </PageShell>
  )
}
