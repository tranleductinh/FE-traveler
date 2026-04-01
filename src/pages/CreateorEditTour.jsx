import { PageShell } from './PageShell'

export default function CreateorEditTour() {
  return (
    <PageShell
      title="Voyager AI - Create Tour"
      styles={`.material-symbols-outlined {
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }`}
    >
      <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
        <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
              <div className="flex justify-between items-center h-16 px-6 max-w-[1920px] mx-auto">
                <div className="flex items-center gap-8">
                  <span className="text-xl font-bold tracking-tight text-teal-800 font-headline">Voyager AI</span>
                  <div className="hidden md:flex gap-6 items-center">
                    <a className="text-slate-500 font-['Plus_Jakarta_Sans'] font-medium text-sm hover:text-teal-600 transition-colors" href="#">Marketplace</a>
                    <a className="text-teal-700 font-['Plus_Jakarta_Sans'] font-semibold text-sm" href="#">Manage Tours</a>
                    <a className="text-slate-500 font-['Plus_Jakarta_Sans'] font-medium text-sm hover:text-teal-600 transition-colors" href="#">Analytics</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative group hidden sm:block">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-primary w-64 transition-all" placeholder="Search experiences..." type="text" />
                  </div>
                  <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
                  </button>
                  <img alt="Provider Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaBiLc_aD2ZFtTboTc3GYa8PGa9r4Y5r3Lo8HGyF6pRyPslkR-fSKxxBP7NGyHw2YN8OVUV-UDL9df40bp1-IE7LbNmI4p9qMno9cqwavl13sh6US-HdfgRbj4Et9suxHMTAer9AkV0VUgvNYyERpS7vojOxGFCe9NAJISc4aCwLVZhC6heEVCds2ZZ9RbY-5Zs-Jo_hkfMwioag97X1T8eTyCeEPR-iAI7JUP4HQ0qWNxCoCkMCr8C3PkYVCB0cX7UUy4iRgkPgrc" />
                </div>
              </div>
              <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0"></div>
            </nav>
            <div className="flex min-h-screen pt-16">
              
              <aside className="hidden md:flex flex-col h-[calc(100vh-64px)] w-64 bg-slate-50 py-8 px-4 space-y-2 sticky top-16">
                <div className="flex items-center gap-3 px-4 mb-8">
                  <img alt="Provider Profile" className="w-10 h-10 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKXSLXkiuj_NnTOoZAG-imvetKWfoK6Z-LW4MP05F6e6s0T8QObAX4TWrGW6nYKchq3cydjA1CzgGSeF7dd-63VQdsjHmXYP_NtAePgTbRv3AdaKSgbH_SFskpNKeEWI3ErGdDq0D2KjzpLL6OwzUQSiMckz9CSjZJSOelDgElMSxej1Sz0kSEFXuBnnhlMkuSJzHzTUJZQ4qTMphidp41pKrPos9Pbvo15iyvX9J7OSp9E05UFdm7gbWnZqkfTTJFSZdNtSZEWDdJ" />
                  <div>
                    <h3 className="font-headline font-bold text-sm text-on-surface">
                      Skyline Tours
                    </h3>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">
                      Verified Provider
                    </p>
                  </div>
                </div>
                <a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-xl transition-all duration-200 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                  <span className="material-symbols-outlined">analytics</span> Dashboard
                </a>
                <a className="flex items-center gap-3 bg-teal-50 text-teal-700 px-4 py-3 rounded-xl transition-all duration-200 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                  <span className="material-symbols-outlined">edit_calendar</span> Manage
                  Tours
                </a>
                <a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-xl transition-all duration-200 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                  <span className="material-symbols-outlined">book_online</span> Bookings
                </a>
                <a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-xl transition-all duration-200 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                  <span className="material-symbols-outlined">location_on</span> Tour
                  Tracking
                </a>
                <a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-xl transition-all duration-200 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                  <span className="material-symbols-outlined">forum</span> Messages
                </a>
                <a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-xl transition-all duration-200 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold" href="#">
                  <span className="material-symbols-outlined">settings</span> Settings
                </a>
                <div className="mt-auto pt-8">
                  <div className="bg-primary-container/10 p-4 rounded-2xl">
                    <p className="text-xs text-primary font-bold mb-2">Need help?</p>
                    <p className="text-[11px] text-slate-600 mb-3">
                      Our support team is available 24/7 for tour providers.
                    </p>
                    <button className="w-full py-2 bg-primary text-on-primary rounded-lg text-xs font-bold transition-transform active:scale-95">
                      Contact Support
                    </button>
                  </div>
                </div>
              </aside>
              
              <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto">
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-medium uppercase tracking-widest">
                      <span>Tours</span>
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                      <span className="text-primary">Create New Tour</span>
                    </nav>
                    <h1 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">
                      Craft Your Experience
                    </h1>
                    <p className="text-on-surface-variant mt-2 max-w-lg">
                      Design a journey that travelers will remember. Use high-quality
                      imagery and detailed itinerary points.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-3 rounded-xl border border-outline-variant/30 font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                      Save Draft
                    </button>
                    <button className="px-8 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold shadow-lg hover:opacity-90 transition-all active:scale-95">
                      Publish Tour
                    </button>
                  </div>
                </header>
                <form className="space-y-12">
                  
                  <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Tour Name</label>
                        <input className="w-full bg-surface-container-low border-outline-variant/20 rounded-xl px-4 py-4 text-lg font-headline font-semibold focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="e.g. Hidden Gems of the Amalfi Coast" type="text" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Base Price (USD)</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                          <input className="w-full bg-surface-container-low border-outline-variant/20 rounded-xl pl-8 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="0.00" type="number" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Max Capacity</label>
                        <input className="w-full bg-surface-container-low border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="12" type="number" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Duration (Days)</label>
                        <input className="w-full bg-surface-container-low border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="1" type="number" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Difficulty Level</label>
                        <select className="w-full bg-surface-container-low border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                          <option>Easy</option>
                          <option>Moderate</option>
                          <option>Challenging</option>
                        </select>
                      </div>
                    </div>
                  </section>
                  
                  <section>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-tertiary-container flex items-center justify-center text-on-tertiary-fixed">
                          <span className="material-symbols-outlined">auto_awesome</span>
                        </div>
                        <h2 className="text-2xl font-headline font-bold">
                          ITINERARY BUILDER
                        </h2>
                      </div>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-dashed border-primary/30 text-primary font-bold hover:bg-primary/5 transition-colors" type="button">
                        <span className="material-symbols-outlined">add</span> Add Day
                      </button>
                    </div>
                    
                    <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/20 overflow-hidden">
                      <div className="bg-surface-container-low px-8 py-4 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">1</span>
                          <h3 className="font-headline font-bold text-lg">
                            Day 1: Arrival &amp; Coastal Welcome
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-error transition-colors" type="button">
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                          <button className="p-2 text-slate-400 transition-colors" type="button">
                            <span className="material-symbols-outlined">expand_less</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-8 space-y-8">
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div className="relative group aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 transition-all">
                            <img alt="Morning Activity" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform" data-alt="morning view of luxury hotel balcony overlooking the blue ocean in Italy with breakfast spread" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0z8jmfb6DMwraRTBU-YRFgovPYeQE_UB9LLSSxZokly9VWq1gLx8BsM29hSfxpWsD99f3W12gVlkWMdD2O69eWzybMKV4_a2dlQrIuVQvXG9YrG6shMkgSP_J8kDR4MjxHSSyvipKrBK4QayqZCyLF_Yp9inCMhze9zZYSJ1c3_VKx7V5XcI94jpclNxW5N7vkfnYb6uJBPSZUfwNni7FW58FSBKiHBpMgwTOtuDEbN-zAKfFgV846-rHGfl_9ig9Krteoi_DQKxc" />
                            <div className="relative z-10 text-center p-4">
                              <span className="material-symbols-outlined text-slate-500 mb-2">add_a_photo</span>
                              <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                                Morning Photo
                              </p>
                            </div>
                          </div>
                          <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center gap-2 text-tertiary font-bold text-xs uppercase tracking-widest">
                              <span className="material-symbols-outlined text-sm">wb_sunny</span>
                              Morning
                            </div>
                            <input className="w-full border-none bg-surface-container-low rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary" placeholder="Activity Title (e.g., Sunrise Coffee & Briefing)" type="text" />
                            <textarea className="w-full border-none bg-surface-container-low rounded-xl px-4 py-3 h-24 focus:ring-2 focus:ring-primary" placeholder="Describe the experience in detail..." />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                          <div className="relative group aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 transition-all">
                            <span className="material-symbols-outlined text-slate-500 mb-2">restaurant</span>
                            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                              Lunch Image
                            </p>
                          </div>
                          <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                              <span className="material-symbols-outlined text-sm">restaurant</span>
                              Midday
                            </div>
                            <input className="w-full border-none bg-surface-container-low rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary" placeholder="Lunch location or theme" type="text" />
                            <textarea className="w-full border-none bg-surface-container-low rounded-xl px-4 py-3 h-24 focus:ring-2 focus:ring-primary" placeholder="Menu highlights or activity details..." />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                          <div className="relative group aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 transition-all">
                            <span className="material-symbols-outlined text-slate-500 mb-2">explore</span>
                            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                              Afternoon Image
                            </p>
                          </div>
                          <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest">
                              <span className="material-symbols-outlined text-sm">directions_walk</span>
                              Afternoon
                            </div>
                            <input className="w-full border-none bg-surface-container-low rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary" placeholder="Main adventure of the day" type="text" />
                            <textarea className="w-full border-none bg-surface-container-low rounded-xl px-4 py-3 h-24 focus:ring-2 focus:ring-primary" placeholder="Physical intensity, sights, and hidden gems..." />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                        <span className="material-symbols-outlined">concierge</span>
                      </div>
                      <h2 className="text-2xl font-headline font-bold uppercase tracking-tight">
                        Services &amp; Logistics
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Accommodation</label>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl cursor-pointer hover:bg-primary-container/10 transition-colors border border-transparent hover:border-primary/20">
                            <img alt="Hotel" className="w-12 h-12 rounded-lg object-cover" data-alt="luxury boutique hotel exterior with white marble and flowers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhgnk6Cwn_tY-me5K7_lE9AAwEKzjqkIwMBuMR2GYI51g7BCci6QkA_mEWyhcPU9fgw2ENrpst5koPeZfifIhLe5leajOsuPQ2zogsmOPUejjLoWjXko0-REHhO0Q_oJUF3xdyA4Wp6uzgsJOeFoU1URUioeB8GUpILatjWvz7nAt8mHsAiHGBz126KGKEgDhmeMgZuiu-HuVuhGVfP5ck35b7kGjRg4CiL9UJfWZ0r4m8CSBRY1F-mSuaMhptCKEucvVwvgpThYr4" />
                            <div>
                              <p className="text-sm font-bold">Grand Hotel Ambasciatori</p>
                              <p className="text-[10px] text-slate-500 uppercase font-bold">
                                5 Stars · Selected
                              </p>
                            </div>
                          </div>
                          <button className="w-full py-3 text-sm font-bold text-primary bg-primary/5 rounded-xl border border-dashed border-primary/20" type="button">
                            Change Hotel
                          </button>
                        </div>
                      </div>
                      <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Transport Mode</label>
                        <div className="grid grid-cols-2 gap-3">
                          <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-primary-container text-on-primary-container shadow-md" type="button">
                            <span className="material-symbols-outlined">directions_car</span>
                            <span className="text-xs font-bold">Private Van</span>
                          </button>
                          <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-surface-container-low text-slate-600 hover:bg-slate-200 transition-colors" type="button">
                            <span className="material-symbols-outlined">directions_boat</span>
                            <span className="text-xs font-bold">Speedboat</span>
                          </button>
                        </div>
                      </div>
                      <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Lead Guide</label>
                        <select className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-sm font-semibold">
                          <option>Marco Rossi (Senior Italian Guide)</option>
                          <option>Elena Vitucci (Art Historian)</option>
                          <option>Luca Moretti (Trekking Expert)</option>
                          <option>Assign Later</option>
                        </select>
                        <div className="mt-4 flex items-center gap-3 p-3 bg-tertiary-container/5 rounded-xl">
                          <span className="material-symbols-outlined text-tertiary" style={{ "fontVariationSettings": "\"FILL\" 1" }}>verified_user</span>
                          <p className="text-[11px] text-tertiary-fixed-variant font-medium">
                            All guides are certified and background checked.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                  <section className="bg-surface-container p-8 rounded-3xl">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                      What's Included?
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <label className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full cursor-pointer hover:bg-white transition-all shadow-sm">
                        <input defaultChecked className="rounded text-primary focus:ring-primary border-slate-200" type="checkbox" />
                        <span className="text-sm font-semibold">All Meals</span>
                      </label>
                      <label className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full cursor-pointer hover:bg-white transition-all shadow-sm">
                        <input defaultChecked className="rounded text-primary focus:ring-primary border-slate-200" type="checkbox" />
                        <span className="text-sm font-semibold">Entry Fees</span>
                      </label>
                      <label className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full cursor-pointer hover:bg-white transition-all shadow-sm">
                        <input className="rounded text-primary focus:ring-primary border-slate-200" type="checkbox" />
                        <span className="text-sm font-semibold">Airport Pick-up</span>
                      </label>
                      <label className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full cursor-pointer hover:bg-white transition-all shadow-sm">
                        <input className="rounded text-primary focus:ring-primary border-slate-200" type="checkbox" />
                        <span className="text-sm font-semibold">Equipment Hire</span>
                      </label>
                      <button className="px-4 py-2 rounded-full border border-dashed border-slate-400 text-slate-500 text-sm font-bold hover:bg-slate-200 transition-colors" type="button">
                        + Add Custom
                      </button>
                    </div>
                  </section>
                  
                  <div className="md:hidden pt-12 pb-24">
                    <button className="w-full py-4 rounded-2xl bg-primary text-on-primary font-bold shadow-xl mb-4">
                      Publish Tour
                    </button>
                    <button className="w-full py-4 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold">
                      Save Draft
                    </button>
                  </div>
                </form>
              </main>
            </div>
            
            <div className="md:hidden fixed bottom-0 w-full bg-white/90 backdrop-blur-lg z-50 px-6 py-3">
              <div className="flex justify-between items-center max-w-md mx-auto">
                <button className="flex flex-col items-center gap-1 text-slate-400">
                  <span className="material-symbols-outlined">dashboard</span>
                  <span className="text-[10px] font-bold">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-primary">
                  <span className="material-symbols-outlined" style={{ "fontVariationSettings": "\"FILL\" 1" }}>edit_calendar</span>
                  <span className="text-[10px] font-bold">Manage</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400">
                  <span className="material-symbols-outlined">book_online</span>
                  <span className="text-[10px] font-bold">Bookings</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400">
                  <span className="material-symbols-outlined">forum</span>
                  <span className="text-[10px] font-bold">Messages</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400">
                  <span className="material-symbols-outlined">settings</span>
                  <span className="text-[10px] font-bold">Settings</span>
                </button>
              </div>
            </div>
      </div>
    </PageShell>
  )
}
