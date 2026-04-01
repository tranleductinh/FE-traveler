import { PageShell } from './PageShell'

export default function AdminDashboard() {
  return (
    <PageShell
      title="AdminDashboard"
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
      h3,
      .font-headline {
        font-family: "Plus Jakarta Sans", sans-serif;
      }`}
    >
      <div className="bg-surface text-on-surface">
        <div className="flex min-h-screen">
              
              <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-slate-50 dark:bg-slate-950 py-8 px-4 space-y-2 border-r-0 z-40">
                <div className="px-4 mb-10 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined" style={{ "fontVariationSettings": "\"FILL\" 1" }}>travel_explore</span>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-teal-800 dark:text-teal-100">Voyager AI</span>
                </div>
                <nav className="flex-1 space-y-1">
                  <a className="flex items-center space-x-3 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-xl px-4 py-3 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold transition-all active:scale-98" href="#">
                    <span className="material-symbols-outlined">admin_panel_settings</span>
                    <span>Admin Dashboard</span>
                  </a>
                  <a className="flex items-center space-x-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-semibold hover:translate-x-1 transition-all" href="#">
                    <span className="material-symbols-outlined">group</span>
                    <span>User Management</span>
                  </a>
                  <a className="flex items-center space-x-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-semibold hover:translate-x-1 transition-all" href="#">
                    <span className="material-symbols-outlined">verified_user</span>
                    <span>Provider Approval</span>
                  </a>
                  <a className="flex items-center space-x-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-semibold hover:translate-x-1 transition-all" href="#">
                    <span className="material-symbols-outlined">gavel</span>
                    <span>Content Moderation</span>
                  </a>
                  <a className="flex items-center space-x-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-semibold hover:translate-x-1 transition-all" href="#">
                    <span className="material-symbols-outlined">settings_suggest</span>
                    <span>System Settings</span>
                  </a>
                </nav>
                <div className="mt-auto pt-6 px-4">
                  <div className="flex items-center space-x-3">
                    <img className="w-10 h-10 rounded-full object-cover" data-alt="close-up portrait of a professional man with glasses smiling in a corporate setting with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYYlYq5Gk5T9CM8i4beNujoE4uy8E2RvXddeW3whvqnZp_Xdzekk7LZryrgjPfomOYI0V-tEcTI-fIv_FtVWtQXTSqQq5_qKJ2sp0bBE0yE2yW7ejNnbOBLripm5-RQQ_mqOZAFib2hb_RrLXbPE3SXvgFgtRIargqPc6sRlrpqizK5H0uomxVII4-8YvyWw1hkhcDuykK97QZ_OQ8TnqkTd80LiOtKYLALkNCLxQLgFIIkoAle9XtqaBpFPjh31mEbk_7UE8mn8sh" />
                    <div>
                      <p className="text-[13px] font-bold text-on-surface">System Admin</p>
                      <p className="text-[11px] text-on-surface-variant">Root Access</p>
                    </div>
                  </div>
                </div>
              </aside>
              
              <main className="flex-1 md:ml-64 bg-surface min-h-screen pb-20">
                
                <header className="h-16 flex justify-between items-center px-8 bg-white/70 backdrop-blur-xl sticky top-0 z-30">
                  <div>
                    <h1 className="text-xl font-bold tracking-tight text-on-surface">
                      Platform Overview
                    </h1>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">notifications</span>
                      <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">search</span>
                    </div>
                  </div>
                </header>
                <div className="px-8 pt-8 max-w-[1400px] mx-auto space-y-8">
                  
                  <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    
                    <div className="md:col-span-2 bg-primary p-8 rounded-2xl text-on-primary flex flex-col justify-between relative overflow-hidden group">
                      <div className="z-10">
                        <p className="text-primary-fixed/80 font-medium text-sm tracking-wide">
                          TOTAL REVENUE (MTD)
                        </p>
                        <h2 className="text-4xl font-extrabold mt-2 tracking-tighter">
                          $1,284,592.00
                        </h2>
                        <div className="mt-4 inline-flex items-center bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">
                          <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                          +12.4% from last month
                        </div>
                      </div>
                      <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                        <span className="material-symbols-outlined text-[180px]">payments</span>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border-0 flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-primary mb-6">
                          <span className="material-symbols-outlined">group</span>
                        </div>
                        <p className="text-on-surface-variant text-sm font-semibold">
                          Total Users
                        </p>
                        <h2 className="text-2xl font-bold text-on-surface mt-1">482.9k</h2>
                      </div>
                      <div className="mt-4 h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-3/4"></div>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border-0 flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary mb-6">
                          <span className="material-symbols-outlined">confirmation_number</span>
                        </div>
                        <p className="text-on-surface-variant text-sm font-semibold">
                          Total Bookings
                        </p>
                        <h2 className="text-2xl font-bold text-on-surface mt-1">12,481</h2>
                      </div>
                      <div className="flex items-center text-error text-xs font-bold mt-4">
                        <span className="material-symbols-outlined text-xs mr-1">trending_down</span>
                        -2.1% spike
                      </div>
                    </div>
                  </section>
                  
                  <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-on-surface">
                          Global Activity Feed
                        </h3>
                        <button className="text-primary text-sm font-semibold hover:underline">
                          View All
                        </button>
                      </div>
                      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm">
                        <div className="divide-y divide-surface-container/50">
                          
                          <div className="p-6 flex items-start space-x-4 hover:bg-surface-container-low transition-colors">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                              <img className="object-cover w-full h-full" data-alt="close-up portrait of a woman in a bright studio with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGz6dtJJ6pt8L8DFZgHAstBWGkGlOezpWCB1ZzJlZnR5o8kFZu-A75gmDmujUI7eifTGqkj87NHxExcPwUBE4kH5Lrl_4UMceZmMXzyKOpHkPWzZ-lApJpVqZ2dsQxyXrYiSPM4Vj6b8rV102xyMSS7YI5XFn694ZOCS9qwvi4gmlCNkN02gujOf4EWXM-FTtA9QG878bWHbQqiQPJh7rPRgcVD1TwCXYZQtLPS4IUtfbub3qhzb08-dML-sf_XAeKIVR2b3qRNj92" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-on-surface">
                                <span className="font-bold">Emma Wilson</span> booked a
                                private tour:
                                <span className="text-primary font-medium">Santorini Sunset Sail</span>
                              </p>
                              <p className="text-xs text-on-surface-variant mt-1">
                                2 minutes ago • Booking ID: #BK-9281
                              </p>
                            </div>
                            <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                              PENDING
                            </div>
                          </div>
                          
                          <div className="p-6 flex items-start space-x-4 hover:bg-surface-container-low transition-colors">
                            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                              <span className="material-symbols-outlined text-primary">storefront</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-on-surface">
                                <span className="font-bold">Skyline Tours</span> submitted a
                                new listing for approval.
                              </p>
                              <p className="text-xs text-on-surface-variant mt-1">
                                15 minutes ago • Verification Queue
                              </p>
                            </div>
                            <div className="text-xs font-bold text-tertiary bg-tertiary-container/10 px-2 py-1 rounded">
                              REVIEW
                            </div>
                          </div>
                          
                          <div className="p-6 flex items-start space-x-4 hover:bg-surface-container-low transition-colors">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                              <img className="object-cover w-full h-full" data-alt="portrait of a bearded man smiling warmly in a casual outdoor setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGEt35LAwsOODKE_4618dGD5fpUf9FTa09Ouav0NV1LiRUTBOHIo4PQNTo04etMWQUWCBMFNWETmVKC5FvqaXXqCdidMXXQy9MBPR1Vgf7iruPoRSCyXbCyPFflMKpYIiQpELiVwewRMo4F66NZvGQSX4XdOsLH2lEfy6RaC_geV0nsD45VPdGqtnwogImR5PmEkrQ5xFVir8sHpzqCTU7IH9WWQNo4gOL9zSoXfOdNq49H_YM27v3rrQHhggv3fAoGNOt2mu_9sYF" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-on-surface">
                                <span className="font-bold">Marcus Chen</span> upgraded to
                                Premium Membership.
                              </p>
                              <p className="text-xs text-on-surface-variant mt-1">
                                1 hour ago • Subscription Event
                              </p>
                            </div>
                            <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                              SUCCESS
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold text-on-surface">System Health</h3>
                      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-8">
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-end">
                            <span className="text-sm font-semibold text-on-surface">API Latency</span>
                            <span className="text-xs font-bold text-primary">24ms (Optimal)</span>
                          </div>
                          <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[20%]"></div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-end">
                            <span className="text-sm font-semibold text-on-surface">Server Load</span>
                            <span className="text-xs font-bold text-on-tertiary-fixed-variant">42% (Normal)</span>
                          </div>
                          <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-tertiary-container w-[42%]"></div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-end">
                            <span className="text-sm font-semibold text-on-surface">Storage Capacity</span>
                            <span className="text-xs font-bold text-on-surface-variant">88% (Critical)</span>
                          </div>
                          <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-error w-[88%]"></div>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-surface-container-high">
                          <div className="flex items-center space-x-3 text-on-surface-variant">
                            <span className="material-symbols-outlined text-green-500" style={{ "fontVariationSettings": "\"FILL\" 1" }}>check_circle</span>
                            <span className="text-xs font-medium">All 14 regions operating normally</span>
                          </div>
                          <button className="w-full mt-6 py-3 rounded-xl bg-secondary-container text-on-secondary-container text-sm font-bold hover:opacity-90 transition-opacity">
                            Access System Logs
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-tertiary-container p-6 rounded-2xl text-on-tertiary-container relative overflow-hidden group">
                        <h4 className="font-bold text-lg leading-tight relative z-10">
                          Moderation Pending
                        </h4>
                        <p className="text-sm mt-2 opacity-90 relative z-10">
                          14 listings require manual verification.
                        </p>
                        <button className="mt-4 bg-on-tertiary-container text-tertiary font-bold px-4 py-2 rounded-lg text-xs hover:scale-105 transition-transform relative z-10">
                          Review Now
                        </button>
                        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                          <span className="material-symbols-outlined text-8xl">policy</span>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </main>
            </div>
            
            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl z-50 px-6 py-3 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col items-center text-primary">
                <span className="material-symbols-outlined">admin_panel_settings</span>
                <span className="text-[10px] mt-1 font-bold">Admin</span>
              </div>
              <div className="flex flex-col items-center text-on-surface-variant">
                <span className="material-symbols-outlined">group</span>
                <span className="text-[10px] mt-1">Users</span>
              </div>
              <div className="flex flex-col items-center text-on-surface-variant">
                <span className="material-symbols-outlined">verified_user</span>
                <span className="text-[10px] mt-1">Providers</span>
              </div>
              <div className="flex flex-col items-center text-on-surface-variant">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-[10px] mt-1">Settings</span>
              </div>
            </nav>
      </div>
    </PageShell>
  )
}
