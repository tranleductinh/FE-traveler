export default function CreateGuideAccountModal({ open = false, onClose }) {
  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-on-surface/20 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface-container-lowest shadow-[0px_20px_40px_rgba(25,28,30,0.12)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="hidden md:flex md:w-1/3 bg-primary text-on-primary p-10 flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl" data-icon="badge">
                badge
              </span>
              <span className="font-bold tracking-widest uppercase text-xs">Partner Program</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight mb-4">Onboard New Guide</h2>
            <p className="text-primary-fixed/80 text-sm leading-relaxed">
              Expand your horizon by adding a certified expert to the Voyager AI fleet. High-quality profiles increase booking conversion by 40%.
            </p>
          </div>
          <div className="relative z-10">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <p className="text-xs font-medium opacity-70 mb-1">PRO TIP</p>
              <p className="text-sm italic">
                "Multilingual guides with Food specializations are currently in high demand for the summer season."
              </p>
            </div>
          </div>

          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-container rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="flex-1 p-8 md:p-12">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Create Guide Account
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-on-surface">
                New Guide Profile
              </h3>
            </div>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant transition-colors hover:bg-surface-container"
              onClick={onClose}
              type="button"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-3xl bg-surface-container overflow-hidden group border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant group-hover:text-primary">
                    <span className="material-symbols-outlined text-3xl mb-1" data-icon="add_a_photo">
                      add_a_photo
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Upload Photo</span>
                  </div>
                  <img
                    alt="Profile Image"
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-10"
                    data-alt="minimalist studio portrait of a friendly travel guide smiling, soft natural lighting, high-end editorial style"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ19t04kSZn0w-2c7Jy9Nf11JUcwopeM-d7cNtjulTy6i270P8fapsfPQx8Ceh1vSHeRJouXKlqOvopJ1-2j-NF2ZadyRg1tmKaPM-G3lw-g17BPmV3rBT-eD6M26g3dWZRQsC2Q5fK6vIpitDCLYMWyQl92S-hFxs7p8-9BaWzrUUGteJyMq81F1fL8KAoKaVDpdtyb6zJR_xEnqDPW6NxOxXmwnLIROMklsQTA__be98XZGqydPWnofbcngjL5fucaHwAuYbLkT4"
                  />
                </div>
                <p className="mt-3 text-[10px] text-on-surface-variant font-medium uppercase tracking-widest">
                  Profile Image
                </p>
              </div>
              <div className="md:col-span-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                      Full Name
                    </label>
                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-on-surface-variant/40" placeholder="e.g. Elena Rodriguez" type="text" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                      Email
                    </label>
                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-on-surface-variant/40" placeholder="elena.r@voyager.ai" type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                      Phone
                    </label>
                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-on-surface-variant/40" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                      Temporary Password
                    </label>
                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-sm" defaultValue="••••••••" type="password" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-px bg-outline-variant/20"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg" data-icon="trending_up">
                      trending_up
                    </span>
                    Experience Level
                  </h3>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-3 p-3 rounded-xl border border-outline-variant/30 hover:bg-surface-container-low cursor-pointer transition-all">
                      <input className="text-primary focus:ring-primary" name="exp" type="radio" />
                      <span className="text-sm font-medium">Junior</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl border border-primary/40 bg-primary/5 cursor-pointer transition-all">
                      <input defaultChecked className="text-primary focus:ring-primary" name="exp" type="radio" />
                      <span className="text-sm font-semibold text-primary">Mid</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl border border-outline-variant/30 hover:bg-surface-container-low cursor-pointer transition-all">
                      <input className="text-primary focus:ring-primary" name="exp" type="radio" />
                      <span className="text-sm font-medium">Senior</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg" data-icon="translate">
                      translate
                    </span>
                    Language Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low cursor-pointer">
                      <input defaultChecked className="rounded-md text-primary focus:ring-primary" type="checkbox" />
                      <span className="text-xs font-bold">VN</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low cursor-pointer">
                      <input defaultChecked className="rounded-md text-primary focus:ring-primary" type="checkbox" />
                      <span className="text-xs font-bold">EN</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low cursor-pointer">
                      <input className="rounded-md text-primary focus:ring-primary" type="checkbox" />
                      <span className="text-xs font-bold">KR</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low cursor-pointer">
                      <input className="rounded-md text-primary focus:ring-primary" type="checkbox" />
                      <span className="text-xs font-bold">CN</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg" data-icon="verified">
                      verified
                    </span>
                    Specialization
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 rounded-full border border-primary text-primary text-[11px] font-bold uppercase tracking-wider" type="button">
                      City
                    </button>
                    <button className="px-4 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-[11px] font-bold uppercase tracking-wider hover:bg-primary/10 transition-colors" type="button">
                      Food
                    </button>
                    <button className="px-4 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-[11px] font-bold uppercase tracking-wider hover:bg-primary/10 transition-colors" type="button">
                      Adventure
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-surface-container-low rounded-2xl space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-on-surface-variant">
                System Permissions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                <label className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-medium text-on-surface/80 group-hover:text-on-surface transition-colors">
                    View assigned tours
                  </span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-9 h-5 bg-outline-variant/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </div>
                </label>
                <label className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-medium text-on-surface/80 group-hover:text-on-surface transition-colors">
                    Update progress
                  </span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-9 h-5 bg-outline-variant/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </div>
                </label>
                <label className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-medium text-on-surface/80 group-hover:text-on-surface transition-colors">
                    Report issues
                  </span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-9 h-5 bg-outline-variant/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </div>
                </label>
                <label className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-medium text-on-surface/80 group-hover:text-on-surface transition-colors">
                    Send notifications
                  </span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="w-9 h-5 bg-outline-variant/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4">
              <button
                className="px-8 py-3 rounded-xl text-on-surface-variant font-bold text-sm hover:bg-surface-container-high transition-colors active:scale-95"
                onClick={onClose}
                type="button"
              >
                Cancel
              </button>
              <button className="px-10 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-sm shadow-lg shadow-primary/20 active:scale-95 transition-transform" type="submit">
                Save Guide Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
