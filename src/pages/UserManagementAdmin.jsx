import { PageShell } from './PageShell'

export default function UserManagementAdmin() {
  return (
    <PageShell
      title="User Management | Voyager AI Admin"
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
      .tonal-shift-bg-surface-container-low {
        background-color: #f2f4f6;
      }`}
    >
      <div className="bg-surface text-on-surface flex min-h-screen overflow-hidden">
        <aside className="h-screen w-64 bg-slate-50 dark:bg-slate-950 flex flex-col py-8 px-4 space-y-2 shrink-0 border-r-0">
              <div className="px-4 mb-8">
                <h1 className="font-headline text-xl font-bold tracking-tight text-teal-800 dark:text-teal-100">
                  Voyager AI
                </h1>
              </div>
              <nav className="flex-1 space-y-1">
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-3 transition-all duration-200 hover:translate-x-1 rounded-xl" href="#">
                  <span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-semibold">Admin Dashboard</span>
                </a>
                <a className="bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-200" href="#">
                  <span className="material-symbols-outlined" data-icon="group">group</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-semibold">User Management</span>
                </a>
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-3 transition-all duration-200 hover:translate-x-1 rounded-xl" href="#">
                  <span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-semibold">Provider Approval</span>
                </a>
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-3 transition-all duration-200 hover:translate-x-1 rounded-xl" href="#">
                  <span className="material-symbols-outlined" data-icon="gavel">gavel</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-semibold">Content Moderation</span>
                </a>
                <a className="text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-3 transition-all duration-200 hover:translate-x-1 rounded-xl" href="#">
                  <span className="material-symbols-outlined" data-icon="settings_suggest">settings_suggest</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-semibold">System Settings</span>
                </a>
              </nav>
              <div className="mt-auto pt-6 px-4 flex items-center gap-3 border-t border-outline-variant/20">
                <div className="w-10 h-10 rounded-full bg-primary overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="System Administrator portrait with professional lighting in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaqPOqFnWeXuQ5PiXxeETrzNU-souPXMQK9mLducaUIB14-B2ihzCLvkc8cTNAOgqP5zLR3bmaTYsn7C4amv8xelNhuOxo28W8yilzl4RGtrytIG_IStJCUibb0WM3K4HMvhDsbyEJJfBPyZb--Z-mi9mAM4Jcvl8uYL-xmOJbeaaRSjyOdoe7OWp0CiQ3LSGcoiIwgMjkynzbvlUOZC00mJOy8nyUlFx0D9MCzsCfkaPfXn9dBblA8SQB1jHKOY3TLie8JJunF89h" />
                </div>
                <div>
                  <p className="font-headline text-sm font-bold text-on-surface">
                    System Admin
                  </p>
                  <p className="text-[11px] text-on-surface-variant font-medium">
                    Root Access
                  </p>
                </div>
              </div>
            </aside>
            
            <main className="flex-1 h-screen overflow-y-auto relative bg-surface">
              
              <header className="fixed top-0 right-0 left-64 z-50 bg-white/70 backdrop-blur-xl h-16 px-8 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">
                    User Management
                  </h2>
                  <div className="h-6 w-[1px] bg-outline-variant/30 mx-2"></div>
                  <div className="flex gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">1,248 Total Users</span>
                    <span className="bg-tertiary-container text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold">12 Pending Approval</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <input className="w-72 bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:outline-none transition-all" placeholder="Search users, emails, or IDs..." type="text" />
                    <span className="material-symbols-outlined absolute right-3 top-2 text-on-surface-variant text-xl" data-icon="search">search</span>
                  </div>
                  <button className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-100/50"></div>
              </header>
              
              <div className="pt-24 pb-12 px-8 max-w-[1400px] mx-auto">
                
                <div className="flex flex-col md:flex-row gap-6 mb-8 items-end">
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant px-1">Filter by Role</label>
                      <select className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/40 focus:outline-none">
                        <option>All Roles</option>
                        <option>Traveler</option>
                        <option>Provider</option>
                        <option>Admin</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant px-1">Filter by Status</label>
                      <select className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/40 focus:outline-none">
                        <option>All Statuses</option>
                        <option>Active</option>
                        <option>Pending</option>
                        <option>Banned</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant px-1">Joined Date Range</label>
                      <div className="flex items-center gap-2 bg-surface-container-lowest ring-1 ring-outline-variant/20 rounded-xl px-4 py-3 text-sm font-medium">
                        <span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="calendar_today">calendar_today</span>
                        <span>Last 30 Days</span>
                        <span className="material-symbols-outlined ml-auto text-on-surface-variant" data-icon="expand_more">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <button className="h-12 px-6 bg-primary text-on-primary font-headline font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 whitespace-nowrap">
                    <span className="material-symbols-outlined text-lg" data-icon="person_add">person_add</span>
                    Create New User
                  </button>
                </div>
                
                <div className="bg-surface-container-lowest rounded-3xl overflow-hidden ring-1 ring-outline-variant/10 shadow-[0px_20px_40px_rgba(25,28,30,0.04)]">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low/50">
                        <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                          User Name
                        </th>
                        <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                          Role
                        </th>
                        <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                          Status
                        </th>
                        <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                          Date Joined
                        </th>
                        <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10">
                      
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-secondary-fixed overflow-hidden ring-2 ring-white">
                              <img className="w-full h-full object-cover" data-alt="Portrait of a smiling young woman with dark hair in a bright, modern studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACxN4w0Rte3WFyQXfczPeS_GVCqKCno1C4X28PUA4NFGwEFv8coag8oy85PbhrzLT71CPJEDwMyKjgOIQjwSx4BXA4it6U3GiLaO5MOBT-OXa5ozy-GJRJe5AlPBImruz1ePEa3lvItHvzz29aqlZx5n7vOlLcNG6PJ-zUDpg1LgbGWPh-vFMun6b3QqDDrxCmKp99AHUV5LXC5EmLJwzSqZ5BVMiuzoDBntUilHbYjeU_0jMlbYPDvwMyUeSbl6cbxkR70RB_4M6E" />
                            </div>
                            <div>
                              <div className="font-bold text-on-surface">
                                Elena Rodriguez
                              </div>
                              <div className="text-xs text-on-surface-variant">
                                elena.rodriguez@example.com
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-bold">Traveler</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-primary">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span className="text-sm font-semibold">Active</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-on-surface-variant">
                          Oct 24, 2023
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-primary-container/10 rounded-lg" title="Edit Permissions">
                              <span className="material-symbols-outlined text-xl" data-icon="lock_open">lock_open</span>
                            </button>
                            <button className="p-2 text-on-surface-variant hover:text-error transition-colors hover:bg-error-container/20 rounded-lg" title="Ban User">
                              <span className="material-symbols-outlined text-xl" data-icon="block">block</span>
                            </button>
                            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg">
                              <span className="material-symbols-outlined text-xl" data-icon="more_vert">more_vert</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-tertiary-fixed overflow-hidden ring-2 ring-white">
                              <img className="w-full h-full object-cover" data-alt="Portrait of a professional man with glasses in a soft outdoor natural light setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVEP3x9cWfobPB6CGLhyfowINEsyCYHM6h6Vt7nAc5JRPXGFthH3Yu6zPY846Vnegs7IbN2vCaru85vMV9nPDhp0QeNLlfEa62uAwV1d9ou-W-Qd6hpqsUNOuzcpzW0mNHPU_mbHEi6CP0c_0Ur1KM8D8hLjjx5XI4_2u7EaUZppaNLBI_H24qSPV2OZOf9ayZFZu8kdhf9Zc7veP0Jv_ImLWfQ7-4Jd17oyg-9jzq50r40Gs8shuHSwy8j8TX4YCqSK73xlWyLAKC" />
                            </div>
                            <div>
                              <div className="font-bold text-on-surface">Marco Valenti</div>
                              <div className="text-xs text-on-surface-variant">
                                marco@skylinetours.com
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[11px] font-bold">Provider</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-on-surface-variant">
                            <span className="w-2 h-2 rounded-full bg-on-surface-variant/40"></span>
                            <span className="text-sm font-semibold text-on-surface-variant/70">Pending</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-on-surface-variant">
                          Nov 12, 2023
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-3">
                            <button className="px-4 py-1.5 bg-primary/10 text-primary text-[11px] font-bold rounded-full hover:bg-primary hover:text-white transition-all">
                              Activate
                            </button>
                            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg">
                              <span className="material-symbols-outlined text-xl" data-icon="more_vert">more_vert</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-outline-variant overflow-hidden ring-2 ring-white grayscale">
                              <img className="w-full h-full object-cover opacity-60" data-alt="Middle-aged man looking directly at camera with neutral expression in professional headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADKps97TefsMcbCIZW4uCBfQPvdnrmVhr5Je-l1jLLXLWUmIummnK1weVWtRpJiVOSCN05cwSJGni-Eok-EHDBBP_io7N6O6A9eGGg5J2jSy_yuvQnJlWXVHWiSVK2cOuyp33MRUItJVMbQ8qSjdYwL0iubz1kAXGHaKG777WVwX-ou6zHiUEkZn12iJsu89AJ3WYVOloiKrRqZPaqpNCD1bpcG6Erk1KWQQ5P5xisv1rlO50RwGZ5AD-pCNFhTTPo32qBjNI38xRB" />
                            </div>
                            <div>
                              <div className="font-bold text-on-surface-variant line-through">
                                Thomas K.
                              </div>
                              <div className="text-xs text-on-surface-variant">
                                thomas.k@junkmail.net
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-bold">Traveler</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-error">
                            <span className="material-symbols-outlined text-sm" data-icon="error">error</span>
                            <span className="text-sm font-semibold">Banned</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-on-surface-variant">
                          Aug 05, 2023
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-primary hover:bg-primary/10 transition-colors rounded-lg" title="Unban User">
                              <span className="material-symbols-outlined text-xl" data-icon="settings_backup_restore">settings_backup_restore</span>
                            </button>
                            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg">
                              <span className="material-symbols-outlined text-xl" data-icon="more_vert">more_vert</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-secondary-fixed overflow-hidden ring-2 ring-white">
                              <img className="w-full h-full object-cover" data-alt="Portrait of a young man with a beard and stylish clothing in a clean architectural environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYDY9E5J8_8l7x3ZlZWcz0DQKpGun-uCOsnIb8UNmBI243HtWVm6hXTLGX74UmXnrrYKSAAe2GDu7uEvdaeuzxpa9Nb4wvS1-AvrL-8YZibp7QGX_jsTzO1YUAq-DNWSKP3K4eGDVw7HIMzvXE0WiXRIXhlZAphUhXRbqsGQMj2p-AxuKUw4GYYOLnE3p3so7IVfHm-2T4JdEPhxsu-opHFlMD4yrh7Sm0-51kum6Zj2HjkpGVCBiX63mB2BJXl2wKq2SVJtoq4uHs" />
                            </div>
                            <div>
                              <div className="font-bold text-on-surface">Alex Rivera</div>
                              <div className="text-xs text-on-surface-variant">
                                alex.rivera@premium.com
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[11px] font-bold">Admin</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-primary">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span className="text-sm font-semibold">Active</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-on-surface-variant">
                          Jan 10, 2023
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-primary-container/10 rounded-lg">
                              <span className="material-symbols-outlined text-xl" data-icon="lock_open">lock_open</span>
                            </button>
                            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg">
                              <span className="material-symbols-outlined text-xl" data-icon="more_vert">more_vert</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="px-6 py-4 bg-surface-container-low/30 flex items-center justify-between">
                    <span className="text-sm text-on-surface-variant">Showing 1 to 10 of 1,248 users</span>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-surface-container transition-colors disabled:opacity-50" disabled>
                        <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-primary text-on-primary text-sm font-bold">
                        1
                      </button>
                      <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-sm font-bold transition-colors">
                        2
                      </button>
                      <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-sm font-bold transition-colors">
                        3
                      </button>
                      <span className="px-1">...</span>
                      <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-sm font-bold transition-colors">
                        125
                      </button>
                      <button className="p-2 rounded-lg hover:bg-surface-container transition-colors">
                        <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-primary-container/20 p-6 rounded-3xl ring-1 ring-primary/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary" data-icon="trending_up">trending_up</span>
                      <h3 className="font-headline text-sm font-bold text-primary tracking-tight">
                        User Growth
                      </h3>
                    </div>
                    <p className="text-3xl font-extrabold text-on-primary-fixed mb-1">
                      +24%
                    </p>
                    <p className="text-xs font-medium text-on-primary-fixed-variant">
                      More signups than last month
                    </p>
                  </div>
                  <div className="bg-secondary-container/20 p-6 rounded-3xl ring-1 ring-secondary/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary" data-icon="security">security</span>
                      <h3 className="font-headline text-sm font-bold text-secondary tracking-tight">
                        Suspicious Logs
                      </h3>
                    </div>
                    <p className="text-3xl font-extrabold text-on-secondary-fixed mb-1">
                      12
                    </p>
                    <p className="text-xs font-medium text-on-secondary-fixed-variant">
                      Pending security reviews
                    </p>
                  </div>
                  <div className="bg-tertiary-container/10 p-6 rounded-3xl ring-1 ring-tertiary/10 md:col-span-2 flex items-center justify-between overflow-hidden relative">
                    <div className="relative z-10">
                      <h3 className="font-headline text-sm font-bold text-tertiary tracking-tight mb-2">
                        Automated Moderation
                      </h3>
                      <p className="text-xl font-bold text-on-tertiary-fixed mb-4">
                        Voyager AI Guard Active
                      </p>
                      <button className="bg-tertiary text-on-tertiary px-4 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity">
                        Adjust AI Sensitivity
                      </button>
                    </div>
                    <span className="material-symbols-outlined text-[120px] absolute -right-6 top-1/2 -translate-y-1/2 opacity-10 text-tertiary rotate-12" data-icon="auto_awesome">auto_awesome</span>
                  </div>
                </div>
              </div>
            </main>
      </div>
    </PageShell>
  )
}
