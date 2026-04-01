import { PageShell } from './PageShell'

export default function GuidePasswordReset() {
  return (
    <PageShell
      title="Voyager AI | Security Update"
      styles={`.material-symbols-outlined {
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
      }
      body {
        font-family: "Inter", sans-serif;
        background-color: #f7f9fb;
      }
      .editorial-shadow {
        box-shadow: 0px 20px 40px rgba(25, 28, 30, 0.06);
      }
      .glass-header {
        background: rgba(247, 249, 251, 0.7);
        backdrop-filter: blur(12px);
      }
      .primary-gradient {
        background: linear-gradient(135deg, #00685f 0%, #008378 100%);
      }`}
    >
      <div className="bg-surface text-on-surface min-h-screen flex flex-col">
            <main className="flex-grow flex items-center justify-center px-6 py-12 relative overflow-hidden">
              
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-fixed opacity-30 rounded-full blur-3xl"></div>
              
              <div className="w-full max-w-xl bg-surface-container-lowest rounded-[2rem] editorial-shadow relative z-10 overflow-hidden flex flex-col md:flex-row">
                
                <div className="hidden md:block w-1/3 relative">
                  <img className="absolute inset-0 w-full h-full object-cover" data-alt="peaceful turquoise ocean horizon with a soft gradient sky at dawn representing new beginnings and security" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIWo9ZQ8PGVnM4FlAuLGZ6_A6ejF1EKWvHXvdioCyYL4k5QED4h108BnM3zjktCHNfZRtIiVPSipdBzLwsz2nz-OOTGoopJqFauHDEdDw_QTLnQcAE9B8aOSZxCY4UhXdvdD2aAi0Me7EIBVRupEORaXd2K0rxxlclsn4vEPWCVPZWttmTYb2CfGF5nYarjMPGJo8qkro6SubODD90gB_o0VPNFfAt4N9Sha-j3RTR858Qt4E7Lq6S5Ex71fbB2I2rQuvT83JlInxK" />
                  <div className="absolute inset-0 bg-primary/20 backdrop-overlay"></div>
                </div>
                <div className="flex-1 p-8 md:p-12">
                  <div className="mb-10">
                    <h1 className="text-3xl font-extrabold font-headline text-on-surface tracking-tight mb-3">
                      Secure Your Horizon
                    </h1>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      To protect your guide account and client data, please update your
                      temporary password before proceeding to the dashboard.
                    </p>
                  </div>
                  <form className="space-y-6">
                    
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Current Temporary Password</label>
                      <div className="relative">
                        <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-outline/50" placeholder="••••••••••••" type="password" />
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline/60 cursor-pointer text-xl">visibility</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">New Secure Password</label>
                      <div className="relative">
                        <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-outline/50" placeholder="Create a strong password" type="password" />
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline/60 cursor-pointer text-xl">lock</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Confirm New Password</label>
                      <div className="relative">
                        <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-outline/50" placeholder="Re-enter password" type="password" />
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline/60 cursor-pointer text-xl">verified_user</span>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/10">
                      <div className="flex items-center gap-2 mb-3 text-primary">
                        <span className="material-symbols-outlined text-lg">info</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Security Requirements</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-[11px] text-on-surface-variant font-medium">
                          <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                          8+ characters
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-on-surface-variant font-medium">
                          <span className="material-symbols-outlined text-sm text-outline-variant/50">circle</span>
                          One uppercase
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-on-surface-variant font-medium">
                          <span className="material-symbols-outlined text-sm text-outline-variant/50">circle</span>
                          One lowercase
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-on-surface-variant font-medium">
                          <span className="material-symbols-outlined text-sm text-outline-variant/50">circle</span>
                          One number
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <button className="w-full primary-gradient text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group" type="submit">
                        Update Password and Continue
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </button>
                    </div>
                  </form>
                  <div className="mt-8 text-center">
                    <button className="text-on-surface-variant text-xs font-medium hover:text-primary transition-colors">
                      Need assistance? Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </main>
      </div>
    </PageShell>
  )
}
