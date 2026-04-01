import { PageShell } from './PageShell'

export default function ProviderAndAdminLoginManagement() {
  return (
    <PageShell
      title="Voyager AI | Partner Portal Login"
      styles={`.material-symbols-outlined {
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
        vertical-align: middle;
      }
      .glass-panel {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }`}
    >
      <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
            <main className="flex-grow flex items-center justify-center px-4 py-12 relative overflow-hidden">
              
              <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl"></div>
              <div className="w-full max-w-5xl flex flex-col md:flex-row bg-surface-container-lowest rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] overflow-hidden">
                
                <div className="hidden md:flex md:w-1/2 bg-primary p-12 flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" data-alt="high-altitude view of airplane wing over soft white clouds during sunset with warm orange and teal hues" style={{ "backgroundImage": "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBNKtgvvBIAUDrDTbgKg3Tt2sGnYPUbWKwSUA8OIAOsA4Hr9PNXEbGhd1QB4neKwE1cOaSIwh0vwLiuvU5lZPb7oidDTBg6YeUw4tltB5w9YgInnbt7Ji2DjcGKrqgtdXA70meLIvGOth0WnEHQDgdyWrJaM3J2fsdAJprXwZSlrL8sSOB-ffmsLP1AHh9FR_wGWgwoxC6Rc8BwQZYNaW_2LpYGVsG5lJhR37B74sL7SpPueCUqWmteY86IsJ3FRmB6wyqrk5n4--Mi\")", "backgroundSize": "cover", "backgroundPosition": "center" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container/80"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
                      <span className="text-white text-xs font-semibold tracking-widest uppercase">Partner Portal</span>
                    </div>
                    <h1 className="text-4xl font-extrabold text-white font-headline leading-tight tracking-tight mb-4">
                      Manage world-class <br />travel experiences.
                    </h1>
                    <p className="text-white/80 text-lg leading-relaxed max-w-md">
                      Access your professional dashboard to coordinate itineraries,
                      manage bookings, and leverage AI-driven insights for your clients.
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                      <span className="material-symbols-outlined text-white text-sm">shield_person</span>
                    </div>
                    <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Enterprise Grade Security</span>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-on-surface font-headline mb-2">
                      Welcome Back
                    </h2>
                    <p className="text-on-surface-variant">
                      Enter your credentials to access the admin portal.
                    </p>
                  </div>
                  <form className="space-y-6">
                    
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider block ml-1">Access Role</label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className="relative flex items-center justify-center p-3 rounded-xl border border-outline-variant/30 bg-surface-container-low cursor-pointer hover:bg-surface-container-high transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 group">
                          <input defaultChecked className="sr-only" name="role" type="radio" defaultValue="provider" />
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-on-surface-variant group-has-[:checked]:text-primary">person_check</span>
                            <span className="text-sm font-medium text-on-surface-variant group-has-[:checked]:text-primary">Provider</span>
                          </div>
                        </label>
                        <label className="relative flex items-center justify-center p-3 rounded-xl border border-outline-variant/30 bg-surface-container-low cursor-pointer hover:bg-surface-container-high transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 group">
                          <input className="sr-only" name="role" type="radio" defaultValue="admin" />
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-on-surface-variant group-has-[:checked]:text-primary">admin_panel_settings</span>
                            <span className="text-sm font-medium text-on-surface-variant group-has-[:checked]:text-primary">Admin</span>
                          </div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider block ml-1" htmlFor="email">Work Email</label>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">mail</span>
                        <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-transparent rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-on-surface placeholder:text-outline-variant outline-none" id="email" placeholder="name@voyager.ai" type="email" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center ml-1">
                        <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider block" htmlFor="password">Password</label>
                        <a className="text-xs font-medium text-primary hover:underline" href="#">Forgot?</a>
                      </div>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">lock</span>
                        <input className="w-full pl-12 pr-12 py-4 bg-surface-container-low border-transparent rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-on-surface placeholder:text-outline-variant outline-none" id="password" placeholder="••••••••" type="password" />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" type="button">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                      </div>
                    </div>
                    
                    <button className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="button">
                      <span>Sign In</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </form>
                  
                  <div className="mt-8 p-4 bg-secondary-container/30 rounded-xl flex gap-3 items-start border border-secondary-container/50">
                    <span className="material-symbols-outlined text-on-secondary-container text-xl mt-0.5">info</span>
                    <p className="text-sm text-on-secondary-container leading-snug">
                      Contact system administrator for access issues. Your activity is
                      monitored for security purposes.
                    </p>
                  </div>
                </div>
              </div>
            </main>
      </div>
    </PageShell>
  )
}
