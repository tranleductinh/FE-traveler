import { PageShell } from './PageShell'

export default function ChatorAIAssistant() {
  return (
    <PageShell
      title="Voyager AI | AI Assistant"
      styles={`.material-symbols-outlined {
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
      }
      .glass-nav {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
      }
      body {
        font-family: "Inter", sans-serif;
      }
      h1,
      h2,
      h3,
      .brand-font {
        font-family: "Plus Jakarta Sans", sans-serif;
      }`}
    >
      <div className="bg-surface text-on-surface">
        <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm dark:shadow-none">
              <div className="flex justify-between items-center h-16 px-6 max-w-[1920px] mx-auto">
                <div className="flex items-center gap-8">
                  <span className="text-xl font-bold tracking-tight text-teal-800 dark:text-teal-100 brand-font">Voyager AI</span>
                  <div className="hidden md:flex gap-6 font-['Plus_Jakarta_Sans'] font-medium text-sm">
                    <a className="text-slate-500 dark:text-slate-400 hover:text-teal-600 transition-colors" href="#">Dashboard</a>
                    <a className="text-teal-700 dark:text-teal-300 font-semibold" href="#">AI Planner</a>
                    <a className="text-slate-500 dark:text-slate-400 hover:text-teal-600 transition-colors" href="#">Tours</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
                    <input className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface" placeholder="Search experiences..." type="text" />
                  </div>
                  <button className="p-2 text-on-surface-variant">
                    <span className="material-symbols-outlined">notifications</span>
                  </button>
                  <img alt="User profile avatar" className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/10" data-alt="Close-up portrait of a young professional man with a friendly smile, clean-shaven, studio lighting with soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJh6I1d4XSP6xetqT6A9JjPtqEI9D0VwdGCm76fVVf05eKTqacpBf3O5HRS9SRppZB2r4mWmpEt11ochjl33DhHwvViael15ChImQpzGwYqtut3MVcD1Jls24u2E92-yhkBMRCtHdCyrgIoju_2c1d-yVm4jCnx3elvSdZAGp6xPOKVTl7E9GkzD6Vtgd8VsxlF9-rtRatEeZus_vN8MUiIwitn9BBSqpC6QevAoYQAHMdlRDA7kj49R82K-odI6ITNZkQF3zIxdHo" />
                </div>
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-800/50 h-[1px] w-full absolute bottom-0"></div>
            </nav>
            <div className="flex h-screen pt-16">
              
              <aside className="hidden lg:flex flex-col h-full w-64 bg-slate-50 dark:bg-slate-950 py-8 px-4 space-y-2 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold">
                <div className="px-4 mb-8">
                  <div className="flex items-center gap-3 p-2">
                    <img alt="Traveler Profile" className="w-10 h-10 rounded-xl object-cover" data-alt="Professional profile headshot of a man with a slight smile and thoughtful expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVwZEXTvgBcUGuhsTdLBocb7-4NuoiDDOig6iQ1UuvFcjGceGwBtiH57_4QLPGa7V1Jz5zOBG7DwJPUV0qEu3vzKp1wjtIiwFJuO_V8WGBaQ_V-pBtyxewM7Fb3N0ksAx1bjujMhiDyLG54zPICowONmS2Mb6WwP8zl3yW0jKPZbdoYJrLS_jQwFnkT4adcLc_58DeVjR0XGZC1MX57v_hDkfmJKkMMpoQ3VS3m7EWdFNzK8jaaUprJeAf2dgrQxPTYNPqx6NgAjeQ" />
                    <div>
                      <p className="text-on-surface leading-none mb-1">Alex Rivera</p>
                      <p className="text-[11px] text-on-surface-variant font-normal">
                        Premium Traveler
                      </p>
                    </div>
                  </div>
                </div>
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-all duration-200 flex items-center gap-3" href="#">
                  <span className="material-symbols-outlined text-lg">dashboard</span>
                  Dashboard
                </a>
                <a className="bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-xl px-4 py-3 flex items-center gap-3" href="#">
                  <span className="material-symbols-outlined text-lg">auto_awesome</span> AI
                  Planner
                </a>
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-all duration-200 flex items-center gap-3" href="#">
                  <span className="material-symbols-outlined text-lg">explore</span> Tours
                </a>
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-all duration-200 flex items-center gap-3" href="#">
                  <span className="material-symbols-outlined text-lg">confirmation_number</span>
                  Bookings
                </a>
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-all duration-200 flex items-center gap-3" href="#">
                  <span className="material-symbols-outlined text-lg">mail</span> Messages
                </a>
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:translate-x-1 transition-all duration-200 flex items-center gap-3" href="#">
                  <span className="material-symbols-outlined text-lg">settings</span>
                  Settings
                </a>
                <div className="mt-auto px-2">
                  <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined">add</span> Plan New Trip
                  </button>
                </div>
              </aside>
              
              <main className="flex-1 flex overflow-hidden bg-background">
                
                <div className="w-80 border-r-0 bg-surface-container-low flex flex-col h-full overflow-y-auto">
                  <div className="p-6">
                    <h2 className="text-lg font-bold brand-font mb-4">Conversations</h2>
                    <div className="space-y-1">
                      
                      <div className="p-3 bg-surface-container-lowest rounded-xl shadow-sm cursor-pointer border-l-4 border-primary">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-sm">Da Nang Dining</span>
                          <span className="text-[10px] text-on-surface-variant">2m ago</span>
                        </div>
                        <p className="text-xs text-on-surface-variant truncate">
                          Where to eat in Da Nang?
                        </p>
                      </div>
                      
                      <div className="p-3 hover:bg-surface-container rounded-xl cursor-pointer transition-colors">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-sm">Kyoto Itinerary</span>
                          <span className="text-[10px] text-on-surface-variant">Yesterday</span>
                        </div>
                        <p className="text-xs text-on-surface-variant truncate">
                          The Golden Pavilion is best in the morning...
                        </p>
                      </div>
                      
                      <div className="p-3 hover:bg-surface-container rounded-xl cursor-pointer transition-colors">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-sm">Iceland Packing List</span>
                          <span className="text-[10px] text-on-surface-variant">3 days ago</span>
                        </div>
                        <p className="text-xs text-on-surface-variant truncate">
                          You'll need waterproof layers for the waterfalls.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col h-full relative">
                  
                  <div className="flex-1 overflow-y-auto p-8 space-y-8 pb-32">
                    
                    <div className="flex justify-center">
                      <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[10px] uppercase tracking-widest rounded-full font-bold">Today</span>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="max-w-[70%] bg-primary text-on-primary p-4 rounded-2xl rounded-tr-none shadow-sm">
                        <p className="text-sm leading-relaxed">
                          Where to eat in Da Nang? I'm looking for something authentic
                          but with a great view of the Dragon Bridge.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-start items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-sm" data-weight="fill">auto_awesome</span>
                      </div>
                      <div className="max-w-[80%] space-y-4">
                        <div className="bg-surface-container-lowest p-4 rounded-2xl rounded-tl-none shadow-sm text-on-surface">
                          <p className="text-sm leading-relaxed mb-4">
                            Da Nang has a vibrant food scene! For a stunning view of the
                            Dragon Bridge combined with high-end Vietnamese fusion, I
                            highly recommend
                            <span className="font-bold text-primary">The Deckhouse</span> or
                            <span className="font-bold text-primary">Fatfish</span>.
                          </p>
                          <p className="text-sm leading-relaxed">
                            Here is my top recommendation based on your preferences:
                          </p>
                        </div>
                        
                        <div className="group relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-outline-variant/10 max-w-sm">
                          <div className="h-40 overflow-hidden relative">
                            <img alt="Fatfish Restaurant" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Modern upscale restaurant interior with warm lighting, wood accents, and large windows overlooking a city river at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAPxGnIK15hchNvRBzsXGpUsYc3wkjRop19tCmrh906hBUfe9Dk1EkQEACai3s9gXP92lhMSkxI7Fkglm4b0YZlUDsIJl6UG6HeESkkIg8KO0FZS83nK3_OLr9yKkuU-NlnvozBFgea4hMPeiN7ngRzBy7_j6prQwwhFhWSvlM2BxUKVj0apiFlkqcOlymX46VcefDVUYVy836vPLzOWxm7HXcnPWEF1oN4p6anlCmpPxaI5-PgDXuahUugmwtRVd0mf-A61D4IrED" />
                            <div className="absolute top-3 right-3">
                              <span className="px-2 py-1 bg-tertiary-container text-on-tertiary-fixed text-[10px] font-bold rounded-full">AI TOP PICK</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-bold text-base brand-font">
                                Fatfish Restaurant &amp; Bar
                              </h3>
                              <div className="flex items-center text-primary">
                                <span className="material-symbols-outlined text-sm" style={{ "fontVariationSettings": "\"FILL\" 1" }}>star</span>
                                <span className="text-xs font-bold ml-1">4.8</span>
                              </div>
                            </div>
                            <p className="text-xs text-on-surface-variant mb-4 flex items-center">
                              <span className="material-symbols-outlined text-[14px] mr-1">location_on</span>
                              439 Trần Hưng Đạo, Da Nang
                            </p>
                            <div className="flex gap-2">
                              <button className="flex-1 py-2 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-lg hover:bg-secondary-container/80 transition-colors">
                                View Menu
                              </button>
                              <button className="px-3 py-2 bg-primary text-on-primary text-xs font-bold rounded-lg hover:opacity-90 transition-opacity">
                                Book Table
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-start items-center gap-2 text-on-surface-variant/40">
                      <span className="material-symbols-outlined text-sm animate-pulse">more_horiz</span>
                      <span className="text-[10px] font-medium italic">Voyager is checking availability...</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-surface via-surface/95 to-transparent">
                    <div className="max-w-4xl mx-auto flex items-center gap-3 bg-surface-container-lowest p-2 pl-6 rounded-2xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] border border-outline-variant/10">
                      <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 text-on-surface" placeholder="Ask anything about your trip..." type="text" />
                      <div className="flex items-center gap-1 pr-1">
                        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">mic</span>
                        </button>
                        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">image</span>
                        </button>
                        <button className="w-10 h-10 bg-primary text-on-primary rounded-xl flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                          <span className="material-symbols-outlined">send</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            
            <nav className="md:hidden fixed bottom-0 w-full bg-white/70 backdrop-blur-xl flex justify-around items-center h-16 px-6 z-50">
              <button className="flex flex-col items-center gap-1 text-slate-500">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-[10px] font-semibold">Home</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-teal-700">
                <span className="material-symbols-outlined" style={{ "fontVariationSettings": "\"FILL\" 1" }}>auto_awesome</span>
                <span className="text-[10px] font-bold">AI Chat</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-slate-500">
                <span className="material-symbols-outlined">explore</span>
                <span className="text-[10px] font-semibold">Tours</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-slate-500">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-[10px] font-semibold">Settings</span>
              </button>
            </nav>
      </div>
    </PageShell>
  )
}
