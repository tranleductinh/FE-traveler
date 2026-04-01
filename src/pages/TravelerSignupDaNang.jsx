import { PageShell } from './PageShell'

export default function TravelerSignupDaNang() {
  return (
    <PageShell
      title="Voyager AI | Create Account"
      styles={`.material-symbols-outlined {
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
      }
      .editorial-shadow {
        box-shadow: 0px 20px 40px rgba(25, 28, 30, 0.06);
      }`}
    >
      <div className="bg-background font-body text-on-background min-h-screen lg:h-screen lg:overflow-hidden selection:bg-primary-fixed selection:text-on-primary-fixed">
        <main className="min-h-screen lg:h-screen flex items-stretch">
          <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-surface-container-highest">
            <div className="absolute inset-0 z-0">
              <img
                alt="Golden Bridge Da Nang"
                className="w-full h-full object-cover"
                data-alt="Cinematic aerial view of the Golden Bridge in Da Nang held by giant stone hands, lush green mountains, morning mist, ethereal light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQVjx1j8ZL2-H0agpTf0Xg-RU1dp1OoNOdmC4EBK4lXOnTvuPC9HAkRfVo7_RuFzZdsGoHF6p6ZsS4P5HylMfBFOCDBsdD1yAYMZX00wwO2m3ZRiSjKNh483RQfzOGywn8lRmAb_noLp9N_dSE9p0X2eI5GBtA1wkGWt2K6o00B9Q_J04o7rdKrCAmcf8jU6JrT8pyj99_8NS0tgLKNNf2b8ZTKs6bfh0hhrP6_YtjweF2xssVmUegbxhON3whDDVZGqeDKIgvR6ku"
              />
            </div>

            <div className="absolute bottom-12 left-12 right-12 z-10">
              <div className="bg-surface/70 backdrop-blur-xl p-8 rounded-3xl border-none editorial-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-fixed text-[10px] font-bold tracking-widest uppercase rounded-full">
                    New Explorer
                  </span>
                  <div className="flex gap-1">
                    <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
                      star
                    </span>
                  </div>
                </div>
                <h2 className="font-headline text-3xl font-extrabold text-on-surface leading-tight mb-2">
                  Your Da Nang story starts now.
                </h2>
                <p className="text-on-surface-variant text-base leading-relaxed max-w-md">
                  Create your traveler account to save curated itineraries, discover local gems, and plan every stop with Voyager AI.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img
                      className="w-10 h-10 rounded-full border-2 border-surface-container-lowest"
                      data-alt="portrait of a smiling traveler in a sun hat"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvgyStYvlVM15wsAfCow9dEzX-U8kpbArHLMMa0UCLNxOUg0xUqGyJDQ_0Wkg0mMHMkyB_V105MTKGX0ol2Sx4dmXFKF0bfi5vIeZVb_QNc4rians5pDM7RWKh8deeZ1TyOQDanlOfl1VRVmjhsoPe7NlzMnbXvOSa-Cy9o7N83hqFFN2SXFox7CHjhSZiEueY1Er2ESrAFF5wF07mYpD6x7qJcelg0juVKrX9eT0jFwhYetERHpy5c_m_awHbCStnz-yPqaCVq2U2"
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-surface-container-lowest"
                      data-alt="portrait of a male traveler with backpack"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQrullhvRplnFeYkAtua-M_bis-hitUvcZwLecCwP-fsZ1qb1w-nMISq8QgyL8PsGYrF8AMA-xkmKykTMDJxlKzCF-6UMcDJNYoJaiH_pqHAfC8Qe751qZrE_SUDmrRut5SbHMphT8QdW1euR-SWEnj3VQA5rZP9yYYUT1yigb2Her9jyG0FANgBJ-WwHz0m3sqxz-ZV5NAakJqhHUSNOzVr6oeCdbUd5an7mCiEDmntB9DUuZWG5TLdQYShOSBa0ppzmI50rhmEkA"
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-surface-container-lowest"
                      data-alt="portrait of a young female traveler outdoors"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn6nmFe4mz9IWimgLSTy8Aqj2n03Qpc1lRWUMnomMEXm1KscrmoddMcWbag8TKDYVEMnaUqv3ynnU7-hR3d7USgHLKQConjSk6ta-5UhDR5paUYyCqEWd1ND93Wga66pK53wBHPfdKKiIwEH_A5JjQazSiw9kCOS5RatE0jzvFpJFM5WBbTit_Ytf-6TDTvUnBgFRYDNj1OE5OGIvweLhCyn17DkxW7XB0SW2qo-X5w3R92VJ7ShXi17FqF4AFpOfp_-M2rgfzEajD"
                    />
                  </div>
                  <span className="text-xs font-semibold text-on-surface-variant">
                    +12k travelers created accounts this month
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-12 left-12 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary" data-icon="travel_explore">
                    travel_explore
                  </span>
                </div>
                <span className="font-headline text-2xl font-bold tracking-tight text-white drop-shadow-md">
                  Voyager AI
                </span>
              </div>
            </div>
          </section>

          <section className="w-full lg:w-1/2 flex items-center justify-center px-8 py-6 lg:py-8 bg-surface">
            <div className="w-full max-w-md space-y-6">
              <div className="lg:hidden flex justify-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary" data-icon="travel_explore">
                      travel_explore
                    </span>
                  </div>
                  <span className="font-headline text-2xl font-bold tracking-tight text-on-surface">
                    Voyager AI
                  </span>
                </div>
              </div>

              <div className="text-left space-y-2">
                <h1 className="font-headline text-[2rem] font-extrabold text-on-surface tracking-tight">
                  Create Your Account
                </h1>
                <p className="text-on-surface-variant font-medium">
                  Start saving itineraries and personalized Da Nang travel plans.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 bg-surface-container-lowest py-3 px-4 rounded-xl editorial-shadow hover:bg-surface-container-low transition-colors duration-200 group">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  <span className="text-sm font-semibold text-on-surface-variant group-hover:text-on-surface">
                    Google
                  </span>
                </button>
                <button className="flex items-center justify-center gap-3 bg-surface-container-lowest py-3 px-4 rounded-xl editorial-shadow hover:bg-surface-container-low transition-colors duration-200 group">
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                  <span className="text-sm font-semibold text-on-surface-variant group-hover:text-on-surface">
                    Facebook
                  </span>
                </button>
              </div>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-outline-variant/20"></div>
                <span className="flex-shrink mx-4 text-on-surface-variant text-xs font-bold tracking-widest uppercase">
                  Or Continue With
                </span>
                <div className="flex-grow border-t border-outline-variant/20"></div>
              </div>

              <form className="space-y-5">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1" htmlFor="fullName">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg" data-icon="person">
                        person
                      </span>
                      <input
                        className="w-full pl-12 pr-4 py-3.5 bg-surface-container-lowest border border-outline-variant/20 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200 text-on-surface"
                        id="fullName"
                        placeholder="Alex Johnson"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg" data-icon="mail">
                        mail
                      </span>
                      <input
                        className="w-full pl-12 pr-4 py-3.5 bg-surface-container-lowest border border-outline-variant/20 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200 text-on-surface"
                        id="email"
                        placeholder="alex@example.com"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1" htmlFor="password">
                      Password
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg" data-icon="lock">
                        lock
                      </span>
                      <input
                        className="w-full pl-12 pr-12 py-3.5 bg-surface-container-lowest border border-outline-variant/20 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200 text-on-surface"
                        id="password"
                        placeholder="••••••••"
                        type="password"
                      />
                      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" type="button">
                        <span className="material-symbols-outlined text-lg" data-icon="visibility">
                          visibility
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg" data-icon="verified_user">
                        verified_user
                      </span>
                      <input
                        className="w-full pl-12 pr-12 py-3.5 bg-surface-container-lowest border border-outline-variant/20 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200 text-on-surface"
                        id="confirmPassword"
                        placeholder="••••••••"
                        type="password"
                      />
                      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" type="button">
                        <span className="material-symbols-outlined text-lg" data-icon="visibility">
                          visibility
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    className="mt-0.5 w-5 h-5 rounded border-outline-variant/40 text-primary focus:ring-primary bg-surface-container-lowest"
                    id="terms"
                    type="checkbox"
                  />
                  <label className="ml-3 text-sm font-medium text-on-surface-variant select-none" htmlFor="terms">
                    I agree to the Terms of Service and Privacy Policy.
                  </label>
                </div>

                <button className="w-full py-3.5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl editorial-shadow hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 text-lg" type="submit">
                  Create Account
                </button>
              </form>

              <div className="text-center">
                <p className="text-sm text-on-surface-variant font-medium">
                  Already have an account?
                  <a className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1" href="#">
                    Log in
                  </a>
                </p>
              </div>

              <div className="pt-6 flex items-center justify-between text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest border-t border-outline-variant/10">
                <span>© 2024 Voyager AI</span>
                <div className="flex gap-4">
                  <a className="hover:text-primary transition-colors" href="#">
                    Privacy
                  </a>
                  <a className="hover:text-primary transition-colors" href="#">
                    Terms
                  </a>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]" data-icon="shield">
                      shield
                    </span>
                    <span>Secure SSL</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageShell>
  )
}
