import { PageShell } from './PageShell'

export default function ProviderApproval() {
  return (
    <PageShell
      title="Provider Approval | Voyager AI Admin"
      styles={`body {
        font-family: "Inter", sans-serif;
      }
      h1,
      h2,
      h3,
      .font-headline {
        font-family: "Plus Jakarta Sans", sans-serif;
      }
      .material-symbols-outlined {
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
        vertical-align: middle;
      }
      .glass-header {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
      }`}
    >
      <div className="bg-background text-on-surface min-h-screen flex">
        <aside className="h-screen w-64 bg-slate-50 flex flex-col py-8 px-4 space-y-2 sticky top-0">
              <div className="mb-8 px-4">
                <h1 className="text-xl font-bold tracking-tight text-teal-800">
                  Voyager AI
                </h1>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-bold">
                  Admin Console
                </p>
              </div>
              <nav className="flex-1 space-y-1">
                <a className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center gap-3 transition-all duration-200 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                  <span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
                  Admin Dashboard
                </a>
                <a className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center gap-3 transition-all duration-200 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                  <span className="material-symbols-outlined" data-icon="group">group</span>
                  User Management
                </a>
                <a className="bg-teal-50 text-teal-700 rounded-xl px-4 py-3 flex items-center gap-3 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                  <span className="material-symbols-outlined" data-icon="verified_user" style={{ "fontVariationSettings": "\"FILL\" 1" }}>verified_user</span>
                  Provider Approval
                </a>
                <a className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center gap-3 transition-all duration-200 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                  <span className="material-symbols-outlined" data-icon="gavel">gavel</span>
                  Content Moderation
                </a>
                <a className="text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center gap-3 transition-all duration-200 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                  <span className="material-symbols-outlined" data-icon="settings_suggest">settings_suggest</span>
                  System Settings
                </a>
              </nav>
              <div className="pt-6 mt-6 border-t border-slate-200/60">
                <div className="flex items-center gap-3 px-4">
                  <img alt="Admin Avatar" className="w-10 h-10 rounded-full bg-teal-100" data-alt="professional portrait of a high-level system administrator in a minimal modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvyJe6Hr6XvKtwOzBCB1I7eTOYklSDAwkSul70-MKgA0tpMDXZZq1xIOUBybiQhwY1RGtftpSJrxhxEWoWL0QNO_gdLVC4UltpXOH9KSVUnEjZRfPWiitrpcIvQ1LFhDfaImZDjpC-q_dE9f5hDnPXyCEZAyvFwxvSyEiDC8Uw4zi0Cjf_9OsP__rTXpeHlcMPg2k4eb4k_CdTZFHuuSvj0iDAOOji-9YHInimUW4eYdedlYsN6a5-dP3p2Hx1yCQIYIVOCBrmCBdI" />
                  <div>
                    <p className="text-[13px] font-bold text-on-surface">System Admin</p>
                    <p className="text-[11px] text-slate-500">Root Access</p>
                  </div>
                </div>
              </div>
            </aside>
            
            <main className="flex-1 min-w-0 flex flex-col">
              
              <header className="fixed top-0 right-0 left-64 z-50 glass-header h-16 px-8 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-bold font-headline text-teal-800">
                    Provider Approval
                  </h2>
                  <span className="bg-tertiary-container text-on-tertiary-fixed text-[10px] px-2 py-0.5 rounded-full font-bold">4 PENDING</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <span className="material-symbols-outlined text-slate-500" data-icon="notifications">notifications</span>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
                  </div>
                  <div className="h-8 w-[1px] bg-slate-200"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-600">Search Applications</span>
                    <span className="material-symbols-outlined text-slate-400" data-icon="search">search</span>
                  </div>
                </div>
                <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0 left-0"></div>
              </header>
              
              <div className="mt-16 p-8 space-y-12">
                
                <section>
                  <h3 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface">
                    Review New Partnerships
                  </h3>
                  <p className="text-on-surface-variant mt-2 max-w-2xl">
                    Examine business credentials and verification documents for
                    providers requesting access to the Voyager AI marketplace.
                  </p>
                </section>
                
                <section className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                  
                  <div className="xl:col-span-8 space-y-6">
                    
                    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-outline-variant/10 hover:ring-primary/20 transition-all group">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-20 h-20 rounded-xl bg-slate-50 flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-100">
                          <img alt="Skyline Tours Logo" className="object-contain p-2" data-alt="modern minimalist company logo for an alpine tour company with mountain silhouette and teal accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_SaGAk79jB4iPaIILNisKZHe3NoIeLNXN2ha1eR1tk7QFencsbo3JNDYx2j1Isdc2FMRxGw9u-SeYxwJR9FXARahUXVaXzbFwq6GSg71HiPR1I0YPcHz9BWrPwJuXLEHzKy-jxDa1wDz5z5LaXFbfrud-GJ_AXxUTMjb-Y5VKTJEBjfZ-hAH7HDJ8r_pjOxnP64KDyqSdbif_MteWMtdazuE1djydDaG8yVQQ88ZtbDUVSLvIWQ9yw2oPTAFydL4qfNa5IpD3N4Mj" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                                Skyline Alpine Expeditions
                              </h4>
                              <p className="text-sm text-on-surface-variant mt-1">
                                Specializing in high-altitude trekking and luxury
                                basecamp experiences across the Swiss Alps.
                              </p>
                            </div>
                            <span className="bg-secondary-container text-on-secondary-container text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">New Application</span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-sm" data-icon="description">description</span>
                              <span className="text-xs font-semibold text-on-surface-variant">Business_License.pdf</span>
                              <span className="material-symbols-outlined text-teal-500 text-xs" data-icon="check_circle" style={{ "fontVariationSettings": "\"FILL\" 1" }}>check_circle</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-sm" data-icon="policy">policy</span>
                              <span className="text-xs font-semibold text-on-surface-variant">Insurance_Cert.pdf</span>
                              <span className="material-symbols-outlined text-teal-500 text-xs" data-icon="check_circle" style={{ "fontVariationSettings": "\"FILL\" 1" }}>check_circle</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-slate-400 text-sm" data-icon="history_edu">history_edu</span>
                              <span className="text-xs font-semibold text-on-surface-variant">Tax_ID_Verification</span>
                              <span className="text-[10px] text-error font-bold italic">Pending</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all">
                              Approve
                            </button>
                            <button className="bg-surface-container-high text-on-surface-variant px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-error-container hover:text-on-error-container transition-all">
                              Reject
                            </button>
                            <button className="text-primary text-sm font-bold px-4 py-2 hover:underline ml-auto">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-outline-variant/10 hover:ring-primary/20 transition-all group">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-20 h-20 rounded-xl bg-slate-50 flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-100">
                          <img alt="Oceanic Charters Logo" className="object-contain p-2" data-alt="sophisticated navy blue nautical brand identity logo with abstract wave and anchor symbols" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfqMHhXRIm_qAefyf2KTf66IKp9T5V6EGcfh_TixkeMLHJJLrH17OsVOwXdHKH7FejURnAnNRcd7kd6hmwGSNuzEjH0LUn63HtTUg9ZaJt3_onQCqoyD9IIqJX7TXI9mY6Oir_HIo9chyyjaCL3kU-a9SMmsuXS8Q0QSNYRFrvv_oFI4lRsfABkaM008Pw32SKM2lHBzPsunPkRW37gCZt6u_9jZgZO1NL6-LTF7IDUhW9FyAf-u3Vv-SklNKGCB1HMyEZe3V0nUej" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                                Oceanic Yacht Charters
                              </h4>
                              <p className="text-sm text-on-surface-variant mt-1">
                                Premium Mediterranean yacht rentals with fully-staffed
                                crews and bespoke coastal itineraries.
                              </p>
                            </div>
                            <span className="bg-tertiary-container text-on-tertiary-container text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Urgent Review</span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-sm" data-icon="description">description</span>
                              <span className="text-xs font-semibold text-on-surface-variant">Maritime_Ops.pdf</span>
                              <span className="material-symbols-outlined text-teal-500 text-xs" data-icon="check_circle" style={{ "fontVariationSettings": "\"FILL\" 1" }}>check_circle</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-sm" data-icon="verified">verified</span>
                              <span className="text-xs font-semibold text-on-surface-variant">Safety_Audit_2024</span>
                              <span className="material-symbols-outlined text-teal-500 text-xs" data-icon="check_circle" style={{ "fontVariationSettings": "\"FILL\" 1" }}>check_circle</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all">
                              Approve
                            </button>
                            <button className="bg-surface-container-high text-on-surface-variant px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-error-container hover:text-on-error-container transition-all">
                              Reject
                            </button>
                            <button className="text-primary text-sm font-bold px-4 py-2 hover:underline ml-auto">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="xl:col-span-4 space-y-6">
                    <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                      
                      <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500/20 blur-[80px] rounded-full"></div>
                      <h5 className="text-sm font-bold tracking-widest uppercase opacity-60 mb-6">
                        Approval Metrics
                      </h5>
                      <div className="space-y-8 relative z-10">
                        <div>
                          <p className="text-4xl font-extrabold font-headline">88%</p>
                          <p className="text-sm opacity-70 mt-1">
                            Provider Approval Rate (MTD)
                          </p>
                          <div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
                            <div className="bg-teal-400 h-full w-[88%]"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <p className="text-2xl font-bold font-headline">12</p>
                            <p className="text-[10px] opacity-60 font-bold uppercase mt-1">
                              New This Week
                            </p>
                          </div>
                          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <p className="text-2xl font-bold font-headline">4.2d</p>
                            <p className="text-[10px] opacity-60 font-bold uppercase mt-1">
                              Avg. Review Time
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container-low rounded-2xl p-6">
                      <h5 className="font-bold text-on-surface mb-4">
                        Verification Guidelines
                      </h5>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold flex-shrink-0">1</span>
                          <p className="text-xs text-on-surface-variant leading-relaxed">
                            Verify that the Business License is valid for the current
                            fiscal year and region of operation.
                          </p>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold flex-shrink-0">2</span>
                          <p className="text-xs text-on-surface-variant leading-relaxed">
                            Ensure all insurance certificates explicitly list "Public
                            Liability" coverage of at least $5M.
                          </p>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold flex-shrink-0">3</span>
                          <p className="text-xs text-on-surface-variant leading-relaxed">
                            Cross-reference provider logos with registered trademark
                            databases to prevent fraud.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                <section className="space-y-6 pt-10">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <h4 className="text-lg font-bold text-on-surface font-headline">
                      Recently Processed
                    </h4>
                    <button className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                      View Audit Log
                      <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
                    </button>
                  </div>
                  <div className="overflow-hidden rounded-xl bg-surface-container-lowest ring-1 ring-slate-200">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Provider Name
                          </th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Submission Date
                          </th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Action Status
                          </th>
                          <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 text-right">
                            Reviewer
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-primary font-bold text-[10px]">
                                DT
                              </div>
                              <span className="text-sm font-semibold">Desert Treks UAE</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500">Oct 24, 2023</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <span className="w-1 h-1 rounded-full bg-green-600"></span>
                              Approved
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-right text-slate-400">
                            admin_martha
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-[10px]">
                                BB
                              </div>
                              <span className="text-sm font-semibold">Berlin Bike Tours</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500">Oct 23, 2023</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              <span className="w-1 h-1 rounded-full bg-red-600"></span>
                              Rejected
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-right text-slate-400">
                            admin_james
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
              
              <div className="h-20"></div>
            </main>
      </div>
    </PageShell>
  )
}
