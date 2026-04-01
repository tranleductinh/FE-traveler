import { PageShell } from './PageShell'

export default function GuideStaffLogin() {
  return (
    <PageShell
      title="Guide Staff Login | Voyager AI"
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
      }
      .glass-panel {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }
      .brand-gradient {
        background: linear-gradient(135deg, #00685f 0%, #008378 100%);
      }`}
    >
      <div className="bg-surface min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
              <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
              <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px]"></div>
              <img className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none" data-alt="Dreamy landscape of a tropical coastline with turquoise water and soft morning light hitting the sand" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDelbvdu4j3xysr66byczau-nSmiazQJ3JWP49jyv28wd46EZOGXpHFEcgRtpzTwlHBhUBhFgY1itPHabG5yOriDJVawoWACMCflok6JzClcpU0k8BTb81DHE6Alh6pcwJvVwt7mP3AojSPE2X-gvRN_wUUSyHREVsa-K4y1rQAHM3o3gTJwllIbA-Za583tXGtt032pANESl7Q44wc3SG93hVYsVEqm0ZXG12RLjpR8efZgvWVqhehtoXibMM2JcL8PE9cHsCmWJrh" />
            </div>
            <main className="relative z-10 w-full max-w-[480px]">
              <div className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined" style={{ "fontVariationSettings": "\"FILL\" 1" }}>explore</span>
                  </div>
                  <span className="text-2xl font-extrabold tracking-tight text-on-surface">Voyager AI</span>
                </div>
              </div>
              <div className="surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-[0px_20px_40px_rgba(25,28,30,0.06)] ring-1 ring-outline-variant/10">
                <header className="mb-10">
                  <h1 className="text-3xl font-bold text-on-surface tracking-tight mb-3">
                    Guide Staff Login
                  </h1>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    Access your assigned tours and live tour updates
                  </p>
                </header>
                <form className="space-y-6" onsubmit="return false;">
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant px-1" htmlFor="email">Email Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                      </div>
                      <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-0 ring-1 ring-outline-variant/20 rounded-2xl text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200 outline-none" id="email" placeholder="guide@voyager-ai.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant" htmlFor="password">Password</label>
                      <button className="text-xs font-semibold text-primary hover:text-primary-container transition-colors" type="button">
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
                        <span className="material-symbols-outlined text-[20px]">lock</span>
                      </div>
                      <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-0 ring-1 ring-outline-variant/20 rounded-2xl text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200 outline-none" id="password" placeholder="••••••••" type="password" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="w-full py-4 px-6 brand-gradient text-on-primary font-bold rounded-2xl shadow-lg shadow-primary/20 active:scale-[0.98] transform transition-all duration-200 flex items-center justify-center gap-2 group" type="submit">
                      Login to Dashboard
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </form>
                <div className="mt-10 p-5 bg-tertiary-container/10 border-0 rounded-2xl flex gap-4">
                  <div className="text-tertiary-container pt-1">
                    <span className="material-symbols-outlined text-[22px]" style={{ "fontVariationSettings": "\"FILL\" 1" }}>info</span>
                  </div>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    <strong className="text-on-surface block mb-1">Notice</strong>
                    Guide accounts are managed by your company. Please contact your
                    administrator if you cannot access your credentials.
                  </p>
                </div>
              </div>
              <footer className="mt-12 text-center flex flex-col items-center gap-6">
                <div className="flex items-center gap-8">
                  <a className="text-xs font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors" href="#">Terms of Service</a>
                  <a className="text-xs font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors" href="#">Privacy Policy</a>
                  <a className="text-xs font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors" href="#">Help Center</a>
                </div>
                <div className="flex items-center gap-3 py-3 px-5 glass-panel rounded-full ring-1 ring-outline-variant/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">Live System Status: Operational</span>
                </div>
              </footer>
            </main>
            <div className="fixed top-8 right-8 hidden lg:block">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full ring-4 ring-surface-container-lowest overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="Professional portrait of a male tour guide smiling in a mountainous outdoor setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9wu05GWOuObCfupulDQgYOf4E1mtgcre1o5lcmm4X2cuIVO1i7W7j56mFXciXzSDAyzGa2Gv7lZ8RLojUT7EU1g6igKQr2VYjuR90yGwR7vjUVxgaNk_Z7QVOqZCiQZsgXYmlENbfMYvjeKRDAukI4A0DvLErfcY0-MH1X_uzsgaQzjlD2fjpR0vgwdw7fp5HHcab_kuDWFq6Z4om3IF8aoQ1qc08-2cCjXB7XwEkrv1NFDjsF26TQj_Ui7NIjnB15Zz_DTY9TPOl" />
                </div>
                <div className="w-10 h-10 rounded-full ring-4 ring-surface-container-lowest overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="Close-up portrait of a woman with a friendly expression in a sunlit city street" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQv1LhvoGUdPLTEyvTgR8TalZFxj5yYXydfeXa4ACCCP0oMDVdf441B2hOSNqwdoiqZcu3fJHn0ng5dPhSxJ0zLHi7qlurtg9U0HW0Ha2ZbDd_pcQvmzichLvhzhjBkLoeNK-tVWyxSKCbikAYtasC4TlgytCoGrrvySfr-UVp5gCo7cREiGrMdCUz6nUJ5HP9gfNl82v2n9lDhDN_xDvk5GENqwTafnLIkj_zlFElSGPUxy_wwmfB713iVuaNHzrkrq0P2zbMDWzV" />
                </div>
                <div className="w-10 h-10 rounded-full ring-4 ring-surface-container-lowest overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="Middle-aged man wearing sunglasses and casual travel attire with a coastal background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKhMm0Pl35bAvsvFATdd7hNUvHcU7iRP-1hjHPkVAp9z5yIOqDGPCg-Ha6Ym-_zWNhDci2XjmAYTQcQazbES0V4ZBRLh0yL8FMoRx5-o0F-hWwziNUQMLLchiw-8UttE0WfTfnaI00h_zKtab1MOdbU81H6KrMkJewg1RVdWp__vOT-UNbylQ2UaVyebMf9ZMtUQyg_vuD835q4NFfwdeiEv83FwTVFfRAAsDhCEMyHuY5xoKJc78BQv6taSq9F2gAu-nxl5nowebo" />
                </div>
                <div className="w-10 h-10 rounded-full ring-4 ring-surface-container-lowest bg-primary-fixed flex items-center justify-center">
                  <span className="text-[10px] font-bold text-on-primary-fixed-variant">+12k</span>
                </div>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mt-3 text-right">
                Guides Active Now
              </p>
            </div>
      </div>
    </PageShell>
  )
}
