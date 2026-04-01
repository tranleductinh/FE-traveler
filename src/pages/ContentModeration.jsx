import { PageShell } from './PageShell'

export default function ContentModeration() {
  return (
    <PageShell
      title="Content Moderation - Voyager AI"
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
      <div className="bg-surface text-on-surface">
        <div className="flex min-h-screen">
              
              <aside className="hidden md:flex flex-col h-screen w-64 py-8 px-4 space-y-2 bg-slate-50 dark:bg-slate-950 sticky top-0">
                <div className="px-4 mb-8">
                  <span className="text-xl font-bold tracking-tight text-teal-800 dark:text-teal-100 font-headline">Voyager AI</span>
                </div>
                <nav className="flex-1 space-y-1">
                  <a className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all duration-200 hover:translate-x-1 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                    <span className="material-symbols-outlined">admin_panel_settings</span>
                    Admin Dashboard
                  </a>
                  <a className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all duration-200 hover:translate-x-1 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                    <span className="material-symbols-outlined">group</span> User Management
                  </a>
                  <a className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all duration-200 hover:translate-x-1 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                    <span className="material-symbols-outlined">verified_user</span>
                    Provider Approval
                  </a>
                  <a className="flex items-center gap-3 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-xl px-4 py-3 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                    <span className="material-symbols-outlined">gavel</span> Content
                    Moderation
                  </a>
                  <a className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all duration-200 hover:translate-x-1 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                    <span className="material-symbols-outlined">settings_suggest</span>
                    System Settings
                  </a>
                </nav>
                <div className="mt-auto p-4 flex items-center gap-3 bg-surface-container-low rounded-xl">
                  <img alt="Admin Avatar" className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Close-up portrait of a professional man in a tech office setting with soft natural lighting and neutral colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRATkXpw1HkB6bNs4rq_PtXh8gdY3RarFc9OJdXnCx55t0XAmTPFkjpx_SH-gUWq1PGRcoIcct_UjKzcHMLDVQtNtq6wN7n4-PNfrBJyVdVr87-O1SLG-i-UdmfkAl3zwOWyxdz2qKH3_UtId3-xjNsQzGpiDj_4gD6Z8IDJKky6MGJWc1tBz-oro7tw-CS_TzgcDtEHFDyPTouHFXZfY1XEF2SgnoESkkY8LdnAK3OOT050rkDzb2IAFKiIXasC63DOTXnxh1dEfW" />
                  <div className="overflow-hidden">
                    <p className="text-[13px] font-bold truncate">System Admin</p>
                    <p className="text-[11px] text-on-surface-variant truncate">
                      Root Access
                    </p>
                  </div>
                </div>
              </aside>
              
              <main className="flex-1 min-w-0 pb-20">
                
                <header className="fixed top-0 right-0 left-0 md:left-64 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-100/50 dark:border-slate-800/50">
                  <div className="flex justify-between items-center h-16 px-6 max-w-[1920px] mx-auto">
                    <h2 className="text-xl font-bold tracking-tight text-teal-800 dark:text-teal-100 font-headline">
                      Content Moderation
                    </h2>
                    <div className="flex items-center gap-4">
                      <div className="relative hidden sm:block">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                        <input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-1.5 text-sm focus:ring-2 focus:ring-primary/20 w-64 transition-all" placeholder="Search flagged items..." type="text" />
                      </div>
                      <button className="relative p-2 text-slate-500 hover:text-teal-600 transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
                      </button>
                    </div>
                  </div>
                </header>
                <div className="mt-20 px-6 max-w-7xl mx-auto space-y-8">
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
                      <p className="text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                        Pending Reports
                      </p>
                      <h3 className="text-3xl font-extrabold text-teal-800">124</h3>
                      <div className="mt-2 flex items-center gap-1 text-xs text-error font-medium">
                        <span className="material-symbols-outlined text-xs">trending_up</span>
                        +12% from yesterday
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
                      <p className="text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                        Avg Response Time
                      </p>
                      <h3 className="text-3xl font-extrabold text-teal-800">42m</h3>
                      <div className="mt-2 flex items-center gap-1 text-xs text-primary font-medium">
                        <span className="material-symbols-outlined text-xs">timer</span>
                        Within SLA target
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
                      <p className="text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                        Automated Filters
                      </p>
                      <h3 className="text-3xl font-extrabold text-teal-800">89%</h3>
                      <div className="mt-2 flex items-center gap-1 text-xs text-on-surface-variant font-medium">
                        <span className="material-symbols-outlined text-xs">auto_awesome</span>
                        1.2k flags auto-dismissed
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-on-surface">Action Queue</h4>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 rounded-lg bg-surface-container text-xs font-semibold hover:bg-surface-container-high transition-colors">
                          All Types
                        </button>
                        <button className="px-3 py-1.5 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
                          Reviews Only
                        </button>
                        <button className="px-3 py-1.5 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
                          Listings Only
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container text-[10px] font-bold uppercase tracking-tight">Review Flag</span>
                            <span className="text-xs text-on-surface-variant font-medium flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">schedule</span>
                              2 hours ago
                            </span>
                          </div>
                          <h5 className="font-bold text-on-surface mb-2">
                            "Absolute scam. The guide never showed up and the boat was
                            leaking."
                          </h5>
                          <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                            Reported for:
                            <span className="text-error font-semibold">Harassment / Misinformation</span>. Review ID: #REV-90221. Against:
                            <a className="text-primary hover:underline" href="#">Sunset Amalfi Cruise</a>.
                          </p>
                          <div className="flex items-center gap-3">
                            <img alt="Submitter" className="w-6 h-6 rounded-full object-cover shadow-sm" data-alt="Professional close-up headshot of a middle aged man with a clean beard and friendly expression in soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbaJCWai7Xn64QQNa18VH12mpcrGeWOaAsTBy-nOA6RGc8LnHwLdb-r9s8_UStUPwlwNSdJFxvhDQt_3MZnJc09D-NRRwWdJ1AKhuTogtoMIu37mXg-JLBIphhiuZOwzINXx_jQRezZ8r3psSGMPdk4y7Z0Z2DmFueQFpfbBCyQAk1gJBI48Fr2-EkfhayorMQdSiDXc1IbINNBEezo-Dyv3PFYhqoonNdHi5NG8Zkaz9l0yVN1ybNr1SPTAwSBAx78vQMvITYEgfE" />
                            <span className="text-xs font-medium">Marc J. (Silver Tier Member)</span>
                          </div>
                        </div>
                        <div className="lg:w-48 flex lg:flex-col justify-end gap-2">
                          <button className="flex-1 py-2 px-4 rounded-xl bg-primary text-on-primary text-xs font-bold shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">check_circle</span>
                            Approve
                          </button>
                          <button className="flex-1 py-2 px-4 rounded-xl bg-surface-container-high text-on-surface text-xs font-bold hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">block</span>
                            Delete
                          </button>
                          <button className="flex-1 py-2 px-4 rounded-xl text-on-surface-variant text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="flex flex-col lg:flex-row gap-6">
                        
                        <div className="w-full lg:w-40 h-24 rounded-lg overflow-hidden shrink-0">
                          <img alt="Listing Preview" className="w-full h-full object-cover" data-alt="Modern architectural detail of a glass building reflecting a blue sky with sharp geometric lines and cool lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy9CK6fAoEkB863cLbcJCmosez0OrtDiffeh9OuZb5bC0rTeZ7kjazMjHE80hqFFLQxLbjnngXEdTf5TF04vq4f9h8YKvmyW53pbKIzWxVrPEsC_T2bzOCkZ_HUMSpjqz_Jrit-Jsrw1Wa0ZGVG4ln64-mAQeb6Qm5kgpDGLYIvv4zBihQ7ovYYffNbKDKfu-_B3QeFiTUkoejcQL67yXnnTGKwcE_ZpVd9-IOIM_O1oKJzpiSFoBeDaxYvsnc2GP6vT0nnmsgA_54" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-2.5 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-tight">Listing Flag</span>
                            <span className="text-xs text-on-surface-variant font-medium flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">schedule</span>
                              4 hours ago
                            </span>
                          </div>
                          <h5 className="font-bold text-on-surface mb-1 uppercase tracking-tight">
                            Luxury Sky Loft Penthouse
                          </h5>
                          <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                            Reported for:
                            <span className="text-error font-semibold">Duplicate Content</span>. Detected 94% similarity with listing #LUX-0012 in Paris.
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                              <span className="material-symbols-outlined text-xs text-teal-800">smart_toy</span>
                            </div>
                            <span className="text-xs font-medium">Auto-Flagged by AI Vision</span>
                          </div>
                        </div>
                        <div className="lg:w-48 flex lg:flex-col justify-end gap-2">
                          <button className="flex-1 py-2 px-4 rounded-xl bg-primary text-on-primary text-xs font-bold shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">check_circle</span>
                            Approve
                          </button>
                          <button className="flex-1 py-2 px-4 rounded-xl bg-surface-container-high text-on-surface text-xs font-bold hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">block</span>
                            Delete
                          </button>
                          <button className="flex-1 py-2 px-4 rounded-xl text-on-surface-variant text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-2.5 py-1 rounded-full bg-on-tertiary-fixed-variant text-white text-[10px] font-bold uppercase tracking-tight">User Report</span>
                            <span className="text-xs text-on-surface-variant font-medium flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">schedule</span>
                              6 hours ago
                            </span>
                          </div>
                          <h5 className="font-bold text-on-surface mb-2">
                            Account "JetSet_Joe" mass-messaging providers.
                          </h5>
                          <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                            Reported for:
                            <span className="text-error font-semibold">Spam / Phishing Link</span>. Sent 45 identical messages in 10 minutes containing
                            external payment links.
                          </p>
                          <div className="flex items-center gap-3">
                            <img alt="Submitter" className="w-6 h-6 rounded-full object-cover shadow-sm" data-alt="Headshot of a smiling young man in a casual t-shirt with clean bright studio lighting and a vibrant personality" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4i0UIvDCWyff8raDoqkw4s-ENRcIFHbZWVJ0AqlUEGxMQJVoxZyJi9LIZSx-7Eb5FOP5Uvmt4jcn-40bvv2DwYTjy2UMvQXOfVqdzkDF6ZO1WHVz8sagPrLuq4_K_9qU2WKycHo_AmExti8jR1LZDxATYec_VcZ70Ja0mbN92uMqZUcasDEiVpYPmT8QRyLQx5CUVAc1j_bB-Li7O7bRZ7wJ7Aj-WTKiBQz_zGBPJTDbAnou9j03zVvVZKV4LziUgyX6hi1A75VzU" />
                            <span className="text-xs font-medium">Provider Support (Internal)</span>
                          </div>
                        </div>
                        <div className="lg:w-48 flex lg:flex-col justify-end gap-2">
                          <button className="flex-1 py-2 px-4 rounded-xl bg-primary text-on-primary text-xs font-bold shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">check_circle</span>
                            Approve
                          </button>
                          <button className="flex-1 py-2 px-4 rounded-xl bg-surface-container-high text-on-surface text-xs font-bold hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">block</span>
                            Delete
                          </button>
                          <button className="flex-1 py-2 px-4 rounded-xl text-on-surface-variant text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-20 flex flex-col items-center">
                    <button className="px-8 py-3 rounded-full border border-outline-variant/30 text-on-surface font-semibold text-sm hover:bg-surface-container transition-all">
                      Load More Flagged Content
                    </button>
                    <p className="mt-4 text-xs text-on-surface-variant">
                      Showing 3 of 124 pending items
                    </p>
                  </div>
                </div>
              </main>
            </div>
            
            <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-container text-white shadow-xl hover:scale-105 transition-transform flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ "fontVariationSettings": "\"FILL\" 1" }}>auto_awesome</span>
            </button>
      </div>
    </PageShell>
  )
}
