import { PageShell } from './PageShell'

export default function VoyagerAILandingPage() {
  return (
    <PageShell
      title="Voyager AI | Your Personal AI Concierge for Da Nang"
      styles={`body {
        font-family: "Inter", sans-serif;
        background-color: #f7f9fb;
      }
      .font-headline {
        font-family: "Plus Jakarta Sans", sans-serif;
      }
      .material-symbols-outlined {
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
      .tonal-transition {
        transition: background-color 0.3s ease;
      }
      .ambient-shadow {
        box-shadow: 0px 20px 40px rgba(25, 28, 30, 0.06);
      }`}
    >
      <div className="text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
              <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                <div className="text-xl font-bold tracking-tighter text-slate-900 font-headline">
                  Voyager AI
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <a className="text-teal-600 font-semibold font-headline text-sm tracking-tight transition-colors duration-300" href="#">Explore</a>
                  <a className="text-slate-600 font-medium font-headline text-sm tracking-tight hover:text-teal-500 transition-colors duration-300" href="#">Itineraries</a>
                  <a className="text-slate-600 font-medium font-headline text-sm tracking-tight hover:text-teal-500 transition-colors duration-300" href="#">Providers</a>
                  <a className="text-slate-600 font-medium font-headline text-sm tracking-tight hover:text-teal-500 transition-colors duration-300" href="#">Support</a>
                </div>
                <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-headline font-semibold text-sm scale-95 active:opacity-80 transition-all">
                  Get Started
                </button>
              </div>
            </nav>
            
            <header className="relative pt-32 pb-20 overflow-hidden min-h-[921px] flex items-center">
              <div className="absolute inset-0 z-0">
                <img alt="Dragon Bridge Da Nang" className="w-full h-full object-cover" data-alt="Cinematic wide shot of the Dragon Bridge in Da Nang at twilight, glowing gold against a deep blue sky and reflective water" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOeaU7jtsNUXmlsU5Cl8bCLtTZq06N6UY5__2bHqB22EvLolXcq1KF_OW-13DiMhoBcHybJ4G_goChKI2YONX8EAXDGYnb19GFv1rgmjNBGKpMxojrD2FlJxph-xMNyaHlKP42BbAG2hwYVj4blFt7zkvJpDJz7zaDldG-1J_kHEdvKxFq4rSSLM_Rj66w_5AXd4UYByhYmzPBa5PiVnPgz26SoLsbDxBLPlkgA17rBK97U7-eIWjsQPA-jqJx4FFt7EyoUBq4fg69" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
              </div>
              <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl">
                  <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-container/10 text-primary font-headline font-bold text-xs uppercase tracking-widest">Premium Discovery</span>
                  <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-on-surface leading-[1.1] mb-8 tracking-tight">
                    Your Personal
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">AI Concierge</span>
                    for Da Nang
                  </h1>
                  
                  <div className="bg-surface-container-lowest p-2 rounded-2xl ambient-shadow flex flex-col md:flex-row gap-2 max-w-xl">
                    <div className="flex-1 flex items-center px-4 py-3 bg-surface-container-low rounded-xl">
                      <span className="material-symbols-outlined text-outline mr-3" data-icon="location_on">location_on</span>
                      <input className="bg-transparent border-none focus:ring-0 w-full text-sm font-body" placeholder="Where to?" type="text" defaultValue="Da Nang, Vietnam" />
                    </div>
                    <div className="flex-1 flex items-center px-4 py-3 bg-surface-container-low rounded-xl">
                      <span className="material-symbols-outlined text-outline mr-3" data-icon="calendar_month">calendar_month</span>
                      <input className="bg-transparent border-none focus:ring-0 w-full text-sm font-body" placeholder="When?" type="text" />
                    </div>
                    <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-sm hover:opacity-90 transition-all whitespace-nowrap">
                      Start Planning
                    </button>
                  </div>
                </div>
              </div>
            </header>
            
            <section className="py-24 bg-surface">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl" data-icon="auto_awesome">auto_awesome</span>
                    </div>
                    <h3 className="text-xl font-bold font-headline text-on-surface">
                      Personalized Itineraries
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      Our AI learns your travel style to craft minute-by-minute plans
                      perfectly balanced between hidden gems and landmarks.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl" data-icon="pedometer">fitness_tracker</span>
                    </div>
                    <h3 className="text-xl font-bold font-headline text-on-surface">
                      Live Guide Tracking
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      Stay connected with verified local experts in real-time. Safety
                      and local insight, just a tap away.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl" data-icon="sell">sell</span>
                    </div>
                    <h3 className="text-xl font-bold font-headline text-on-surface">
                      Best Local Rates
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      Skip the tourist traps. We negotiate directly with Da Nang
                      providers to bring you authentic pricing.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-24 bg-surface-container-low overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2 space-y-8">
                    <h2 className="text-4xl font-extrabold font-headline text-on-surface leading-tight">
                      Watch AI craft your <br />perfect Da Nang day.
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">1</span>
                        <div>
                          <h4 className="font-bold text-on-surface mb-1">
                            Select Preferences
                          </h4>
                          <p className="text-sm text-on-surface-variant">
                            Choose "Foodie", "Culture seeker", or "Relaxed pace".
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">2</span>
                        <div>
                          <h4 className="font-bold text-on-surface mb-1">
                            AI Optimization
                          </h4>
                          <p className="text-sm text-on-surface-variant">
                            Our engine calculates the best routes and opening hours.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">3</span>
                        <div>
                          <h4 className="font-bold text-on-surface mb-1">
                            One-Tap Booking
                          </h4>
                          <p className="text-sm text-on-surface-variant">
                            Instantly book tickets for Marble Mountains or Ba Na Hills.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 relative">
                    <div className="bg-surface-container-lowest rounded-[2rem] p-6 ambient-shadow max-w-md mx-auto border border-outline-variant/20">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-xl" data-icon="smart_toy">smart_toy</span>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-primary">VOYAGER AI</p>
                            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                              Active Assistant
                            </p>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline" data-icon="more_vert">more_vert</span>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-surface-container p-4 rounded-2xl rounded-tl-none text-sm text-on-surface">
                          "Based on your love for photography, I've added a sunrise
                          visit to Marble Mountains at 6:00 AM to catch the best light.
                          Would you like to book a local guide?"
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-primary text-on-primary text-xs font-bold rounded-full">
                            Yes, book guide
                          </button>
                          <button className="px-4 py-2 border border-outline-variant text-on-surface-variant text-xs font-bold rounded-full">
                            Show alternatives
                          </button>
                        </div>
                        <div className="pt-4 border-t border-outline-variant/20">
                          <p className="text-[10px] font-bold text-on-surface-variant mb-3">
                            UPCOMING ITINERARY
                          </p>
                          <div className="bg-surface-container-low p-3 rounded-xl flex items-center gap-4">
                            <img className="w-12 h-12 rounded-lg object-cover" data-alt="Golden Bridge hands at Ba Na Hills in Vietnam" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfaUXoFBvgl5VK-76LRyFDkTUX1mEDkGC302TB6zrJ9jloVC5NXwDC4ZhkftT0lVK1zN9k1AT3_Ddh310Ae7pag0gg2ONl05LEjHvbI81ywAG23Ql8qag37Eo5zyztRKrCRs0oVhFKQZjASOLIOb85UHSDlKZtWPf1hECJSbFUt0kInwv2hOXT6vPFhUs45i5TMec7pg-HnZMECTrX_t67UbOS9EiKjDw25Z53i22-sxpLz5j22O4-902OFgCHvbzZo96zaxc6c7io" />
                            <div>
                              <p className="text-xs font-bold">Ba Na Hills Excursion</p>
                              <p className="text-[10px] text-on-surface-variant">
                                Starts at 09:30 AM
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-24 bg-surface">
              <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <h2 className="text-4xl font-extrabold font-headline text-on-surface mb-4">
                      Da Nang Essentials
                    </h2>
                    <p className="text-on-surface-variant">
                      Hand-picked experiences by our AI and local experts.
                    </p>
                  </div>
                  <button className="text-primary font-bold font-headline flex items-center gap-2 group hover:gap-3 transition-all">
                    View all destinations
                    <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                  </button>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  
                  <div className="group cursor-pointer">
                    <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close up of the giant stone hands holding the Golden Bridge in Ba Na Hills, Da Nang" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL9pR0zY4kSNnBk3xZO68-GXolb9prvqajKTOANTaU8RkCPgGYxp6tUcsjtN69RRGorRd8ob2U_kSkKdlFePyVv9qC5n4zrFuhfz1gYizSioRYpmYqXy0AZ6yX5ohYe4xP9icnTUUKIjjNFX0YPDFpEG9xtp8O039wAT366heEU4SEw_QKByCKTRI_FYb3ufpkKqMqpoRM71tJpOpcyMQKVfWCe3OT4ShiRL2B4Ix4vXO7uHJPQNgHzcvtFzQx-eF7-EJEbpJECEfq" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-tighter shadow-sm">
                        AI Recommended
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-headline text-on-surface mb-2">
                      Ba Na Hills &amp; Golden Bridge
                    </h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2">
                      Experience the mountain resort and the world-famous "Hands of God"
                      bridge with priority cable car access.
                    </p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Colorful lanterns glowing at night in the ancient town of Hoi An near Da Nang" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0IkcrDFeYfI0ZJiU-g4sCwLt54ckkHmPq9CYnMBKNZa1DHmWSXco79pyzSgC4gssRGMpTwoYGiJcjp506oVvPfnpZp9DQeRD3v6q4XiipuD2edDK98LPi-N-J7Z0C-JcjJZv2PxwBBCa2rNQPpiN9S0qbzq46nYanYtlpPjG44FjfvS1RrkSYSWNkLYk43bwJvjOLv2ciZYHFZ7KoHMsQqzgUyf-0XaUpU---KfqTOdsHKfpO2F8FEYv77RnPWZQXuizVlBV8KGjP" />
                    </div>
                    <h3 className="text-xl font-bold font-headline text-on-surface mb-2">
                      Hoi An Ancient Food Tour
                    </h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2">
                      A dusk walk through the lantern-lit streets, tasting the best Cao
                      Lau and Banh Mi in the region.
                    </p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Linh Ung Pagoda statue overlooking the coastline of Son Tra Peninsula in Da Nang" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbVkUw1OfwMyGmGHXDLL7l_QMuAyEa7RyvhP3YJTsOhu-sKM0zPuBbT4RJ1f5lrf4D8zCYIpT3iAT_Av35iZ89fj3T4rkDQh2ewDLiTtxKvhUtyLObf7Wlm2Dd1-RJz_NerFuf1mdk0PDCA5ooKFr9xiKcSR_VCoIxUW1r5u7E7012Usuid4WGn8EMAzwa8VDuYM_FO9W6LjF3rd8tMiSxSdLAhFtJC-SIjUaNnSwQClAEMCHIHErq_EeMpkLE_uEYWZPhDHaHSWKw" />
                    </div>
                    <h3 className="text-xl font-bold font-headline text-on-surface mb-2">
                      Son Tra Peninsula Discovery
                    </h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2">
                      Explore the "Monkey Mountain," the giant Lady Buddha statue, and
                      secluded beaches with crystal clear water.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-24 bg-surface-container-low">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-surface-container-lowest p-10 rounded-2xl ambient-shadow">
                    <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center text-primary mb-6">
                      <span className="material-symbols-outlined" data-icon="flight_takeoff">flight_takeoff</span>
                    </div>
                    <h3 className="text-2xl font-bold font-headline mb-4">For Travelers</h3>
                    <p className="text-on-surface-variant mb-8">
                      Unlock the ultimate Da Nang experience. Explore like a local,
                      track your itinerary in real-time, and get AI-powered insights on
                      every corner.
                    </p>
                    <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                      Explore as Traveler
                      <span className="material-symbols-outlined" data-icon="east">east</span>
                    </button>
                  </div>
                  <div className="bg-primary p-10 rounded-2xl ambient-shadow text-on-primary">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
                      <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
                    </div>
                    <h3 className="text-2xl font-bold font-headline mb-4">For Providers</h3>
                    <p className="text-white/80 mb-8">
                      List your tours, cafes, or stays. Use our AI tools to manage
                      bookings and reach thousands of international travelers daily.
                    </p>
                    <button className="text-white font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                      Join Provider Portal
                      <span className="material-symbols-outlined" data-icon="east">east</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-20 bg-surface">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
                  <div>
                    <p className="text-5xl font-extrabold font-headline text-primary mb-2">
                      10,000+
                    </p>
                    <p className="text-sm text-on-surface-variant font-medium tracking-wide uppercase">
                      Trips Planned
                    </p>
                  </div>
                  <div>
                    <p className="text-5xl font-extrabold font-headline text-primary mb-2">
                      500+
                    </p>
                    <p className="text-sm text-on-surface-variant font-medium tracking-wide uppercase">
                      Local Guides
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <p className="text-5xl font-extrabold font-headline text-primary mb-2">
                      4.9/5
                    </p>
                    <p className="text-sm text-on-surface-variant font-medium tracking-wide uppercase">
                      Average Rating
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-24 bg-surface">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold font-headline text-center mb-16">
                  Loved by Travelers
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-surface-container-low p-8 rounded-2xl italic text-on-surface-variant relative">
                    <span className="material-symbols-outlined text-primary/20 text-6xl absolute -top-4 -left-2" data-icon="format_quote">format_quote</span>
                    <p className="relative z-10 mb-6">
                      "The AI planner found a local seafood place in Da Nang that wasn't
                      on any blog. It was the highlight of our trip!"
                    </p>
                    <div className="flex items-center gap-4 not-italic">
                      <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                        <img alt="Profile" data-alt="Portrait of a smiling young woman with glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7jqZVXIVoME0giMh4SDX7OFY-4iZ3iYOfOuHA7CFfvi81-2FimNhe6k8DUYHNFOpZxL6YeAVJrD-BYbAECYHOZI7ivv0yegIDWYAltPsYXkD-ze-XlKIuvp4dSTO0xAPlc9zHtcdo532QXIC8iGYrur0fVP-oAHJ14HI4WSD9xmWSkNiSTCD0peuD-9p6nKSRxPQ46dTX7bk3fJ77ebQi1mah5b3mxLXkouAax39i3h_mKH-G2RIvsrcJyAKbwwRxF1_IvtjXt0yk" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">Sarah J.</p>
                        <p className="text-xs">United Kingdom</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-8 rounded-2xl italic text-on-surface-variant relative">
                    <span className="material-symbols-outlined text-primary/20 text-6xl absolute -top-4 -left-2" data-icon="format_quote">format_quote</span>
                    <p className="relative z-10 mb-6">
                      "I was skeptical about AI travel but Voyager AI actually saved us
                      hours of transport planning between Da Nang and Hoi An."
                    </p>
                    <div className="flex items-center gap-4 not-italic">
                      <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                        <img alt="Profile" data-alt="Portrait of a bearded man smiling outdoors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsbD-ki1I-R4yMYB3ls1RGRUqShVqMwWfa-wFGi-OLQ7wmcE7yO0bu8XLsCellyPCG4EAZl6Imp2UkTLDkzNutvFAETyeeW6cDvFIjDCA9i026z5vHQ1z0ibndjhtj7TFahijCVHJ4AxJI3Rd_-Qgrzh9DKbby_YwnDKNiFw5kYt2E0t38glXtFonsBl3Qkxd0LrDCVwmrJb-Eb5WgtPrOQtU0t01Ljko7yg7vo9S-QBkrf_0_NgFhnigeN4nOioGyvCDPVG2AJ8IN" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">Markus T.</p>
                        <p className="text-xs">Germany</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-8 rounded-2xl italic text-on-surface-variant relative">
                    <span className="material-symbols-outlined text-primary/20 text-6xl absolute -top-4 -left-2" data-icon="format_quote">format_quote</span>
                    <p className="relative z-10 mb-6">
                      "The real-time guide tracking gave me so much peace of mind as a
                      solo traveler. Highly recommended!"
                    </p>
                    <div className="flex items-center gap-4 not-italic">
                      <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                        <img alt="Profile" data-alt="Portrait of a young woman with a friendly smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtKv1764CA7Hkz-dVYhiqBO7WZncXHP5G7aiulCfTGzVhxYY4srcsB7BuB1m-1ZPYoI14T1apGrV5LB1IGZAveTo8jJ-gLjeeTGdGFFoxn0SjSQiMI94luuXlm2XiEnuOcGW1QTLRGxBv9gQ_sz696u0rmu-ObFh8_ZGJ3WA_cliGk6ZWPJZGEkYZjSu54fhzE12GWJrZddlWq6yVZroidLdL9eQCJlFHGmuiFl3prp5J2XBauI1ExjIOoQiZn-rAuonzlHnJ8AY1q" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">Elena L.</p>
                        <p className="text-xs">Australia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-24 container mx-auto px-6">
              <div className="bg-gradient-to-br from-primary to-primary-container rounded-[3rem] p-12 md:p-20 text-center text-on-primary overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                  <img className="w-full h-full object-cover" data-alt="Abstract aerial pattern of Marble Mountains in Da Nang" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtIIDw7y5vCwJ14FkPLHWXwxDyO1KDwOvbF5kjPe-gGe5jhdZ00W729Dj75g1ldvdFf58AXZGuTM7eeC2TsgCAGJ2-QN0S1XATFoHZyq06OfEsXZgffwUfIDcW_WamL77JRBwdw2_QpzCE7Mcn5gnwVr3jw09cFYOvNOxzE60e-sQEjFKznUnJ1qmHnE29VuVIU5DOYn_vmKUimXlMYnNeBzkCuec1mGXjr3MLLQbOgKmeQ4Xxmv228wPxJIm8UrNGNIh_wa5KEiCB" />
                </div>
                <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-8 leading-tight">
                    Ready for your Da Nang adventure?
                  </h2>
                  <p className="text-lg text-white/80 mb-10">
                    Create your AI plan for free and experience the coast of Vietnam
                    like never before.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-headline font-bold text-lg hover:scale-105 transition-transform">
                      Plan My Trip Now
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-headline font-bold text-lg hover:bg-white/20 transition-all">
                      View Demo Itinerary
                    </button>
                  </div>
                </div>
              </div>
            </section>
            
            <footer className="bg-slate-50 pt-20 pb-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto font-['Inter'] text-sm leading-relaxed">
                <div className="col-span-2 md:col-span-1">
                  <span className="text-lg font-bold text-slate-900 mb-4 block font-headline">Voyager AI</span>
                  <p className="text-slate-500 max-w-xs">
                    Pioneering the future of editorial travel through intelligent AI
                    orchestration.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 font-headline">Explore</h4>
                  <ul className="space-y-3">
                    <li>
                      <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Destinations</a>
                    </li>
                    <li>
                      <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">AI Planner</a>
                    </li>
                    <li>
                      <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Live Tracking</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 font-headline">Solutions</h4>
                  <ul className="space-y-3">
                    <li>
                      <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Provider Portal</a>
                    </li>
                    <li>
                      <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Partner Tools</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 font-headline">Company</h4>
                  <ul className="space-y-3">
                    <li>
                      <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">About Us</a>
                    </li>
                    <li>
                      <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Careers</a>
                    </li>
                    <li>
                      <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-20 border-t border-slate-200 pt-10 text-center text-slate-400 text-xs">
                © 2024 The Editorial Voyager. All rights reserved.
              </div>
            </footer>
      </div>
    </PageShell>
  )
}
