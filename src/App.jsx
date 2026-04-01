import { useEffect } from 'react'
import {
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { PAGE_ROUTES } from './pages'

const FONT_ASSETS = [
  {
    href: 'https://fonts.googleapis.com',
    rel: 'preconnect',
  },
  {
    crossOrigin: '',
    href: 'https://fonts.gstatic.com',
    rel: 'preconnect',
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap',
    rel: 'stylesheet',
  },
]

const ROUTE_GROUP_DEFINITIONS = [
  {
    id: 'landing',
    title: 'Landing',
    description: 'Standalone marketing and brand storytelling surface.',
    icon: 'rocket_launch',
    badge: 'Brand Entry',
    routeIds: ['VoyagerAILandingPage'],
  },
  {
    id: 'public',
    title: 'Public',
    description: 'Landing, discovery, and public tracking surfaces.',
    icon: 'travel_explore',
    badge: 'Open Access',
    routeIds: [
      'PublicTrackingLanding',
      'PublicTourTracking',
      'BookingSuccessAndTrackingLink',
    ],
  },
  {
    id: 'traveler',
    title: 'Traveler',
    description: 'Traveler auth, planning, bookings, and personal trip control.',
    icon: 'luggage',
    badge: 'Traveler Suite',
    routeIds: [
      'TravelerLoginDaNang',
      'TravelerSignupDaNang',
      'TravelerDashboard',
      'TourList',
      'TourDetail',
      'AITravelPlanner',
      'ChatorAIAssistant',
      'MyBookingTraveler',
      'TravelerTrackingLinkManagement',
      'TourTracking',
    ],
  },
  {
    id: 'guide',
    title: 'Guide',
    description: 'Guide login, live operations, dashboard views, and assigned tours.',
    icon: 'badge',
    badge: 'Guide Ops',
    routeIds: [
      'GuideStaffLogin',
      'GuidePasswordReset',
      'GuideDashboardHome',
      'AssignedToursListGuide',
      'GuideLiveTourTracking',
      'GuideTourDetailOps',
    ],
  },
  {
    id: 'provider',
    title: 'Provider',
    description: 'Provider dashboards, approvals, tours, guides, and booking operations.',
    icon: 'storefront',
    badge: 'Provider Portal',
    routeIds: [
      'ProviderAndAdminLoginManagement',
      'ProviderDashboard',
      'ManageToursProvider',
      'CreateorEditTour',
      'BookingsManagementProvider',
      'GuideManagementProvider',
    ],
  },
  {
    id: 'admin',
    title: 'Admin',
    description: 'Administrative overview, moderation, user controls, and system settings.',
    icon: 'admin_panel_settings',
    badge: 'Control Center',
    routeIds: [
      'AdminDashboard',
      'UserManagementAdmin',
      'ProviderApproval',
      'ContentModeration',
      'SystemSettings',
    ],
  },
]

const PAGE_ICONS = {
  VoyagerAILandingPage: 'rocket_launch',
  PublicTrackingLanding: 'pin_drop',
  PublicTourTracking: 'location_on',
  BookingSuccessAndTrackingLink: 'confirmation_number',
  TravelerLoginDaNang: 'login',
  TravelerSignupDaNang: 'person_add',
  TravelerDashboard: 'dashboard',
  TourList: 'travel',
  TourDetail: 'landscape',
  AITravelPlanner: 'auto_awesome',
  ChatorAIAssistant: 'forum',
  MyBookingTraveler: 'book_online',
  TravelerTrackingLinkManagement: 'link',
  TourTracking: 'location_on',
  GuideStaffLogin: 'badge',
  GuidePasswordReset: 'lock_reset',
  GuideDashboardHome: 'space_dashboard',
  AssignedToursListGuide: 'assignment',
  GuideLiveTourTracking: 'conversion_path',
  GuideTourDetailOps: 'map_search',
  ProviderAndAdminLoginManagement: 'supervisor_account',
  ProviderApproval: 'verified',
  ProviderDashboard: 'analytics',
  ManageToursProvider: 'edit_calendar',
  CreateorEditTour: 'edit_square',
  BookingsManagementProvider: 'book_online',
  GuideManagementProvider: 'groups',
  CreateGuideAccountModal: 'person_add_alt',
  AdminDashboard: 'monitoring',
  UserManagementAdmin: 'manage_accounts',
  ContentModeration: 'policy',
  SystemSettings: 'settings',
}

const SHELLLESS_ROUTE_IDS = new Set([
  'VoyagerAILandingPage',
  'TravelerLoginDaNang',
  'TravelerSignupDaNang',
  'GuideStaffLogin',
  'GuidePasswordReset',
  'ProviderAndAdminLoginManagement',
])

const routeById = new Map(PAGE_ROUTES.map((route) => [route.id, route]))

const ROUTE_GROUPS = ROUTE_GROUP_DEFINITIONS.map((group) => ({
  ...group,
  routes: group.routeIds.map((routeId) => routeById.get(routeId)).filter(Boolean),
})).filter((group) => group.routes.length > 0)

const ORDERED_ROUTES = ROUTE_GROUPS.flatMap((group) =>
  group.routes.map((route) => ({
    ...route,
    groupId: group.id,
    groupTitle: group.title,
    groupIcon: group.icon,
  })),
)

function getPageIcon(pageId) {
  return PAGE_ICONS[pageId] ?? 'description'
}

function useDesignAssets() {
  useEffect(() => {
    document.documentElement.lang = 'en'
    document.documentElement.classList.add('light')

    for (const asset of FONT_ASSETS) {
      const selector = `link[data-design-asset="${asset.href}"]`

      if (document.head.querySelector(selector)) {
        continue
      }

      const link = document.createElement('link')
      link.setAttribute('data-design-asset', asset.href)
      link.rel = asset.rel
      link.href = asset.href

      if ('crossOrigin' in asset) {
        link.crossOrigin = asset.crossOrigin
      }

      document.head.appendChild(link)
    }
  }, [])
}

function HomePage() {
  useEffect(() => {
    document.title = 'Voyager AI | Role Navigation'
  }, [])

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="sticky top-0 z-40 border-b border-outline-variant/20 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="font-heading text-xl font-extrabold tracking-tight">Voyager AI</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-on-surface-variant">
              Route Catalog
            </p>
          </div>
          <span className="rounded-full bg-surface-container-low px-4 py-2 text-xs font-bold text-on-surface-variant">
            {PAGE_ROUTES.length} pages
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="rounded-[2rem] bg-gradient-to-br from-primary to-primary-container px-8 py-10 text-on-primary shadow-[0px_20px_40px_rgba(25,28,30,0.06)] md:px-12 md:py-14">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex rounded-full bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/90">
              Shared Shell
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl">
              Tour tracking UI is now the shell template for all pages.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/82 md:text-lg">
              Open any route below and it will render inside the same sidebar and glass header pattern inspired by the tour tracking screen.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-8">
          {ROUTE_GROUPS.map((group) => (
            <section key={group.id} className="space-y-4">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-surface-container-low px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface">
                    <span className="material-symbols-outlined text-base">{group.icon}</span>
                    {group.title}
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-on-surface-variant">{group.description}</p>
                </div>
                <span className="rounded-full bg-surface-container-low px-4 py-2 text-xs font-bold text-on-surface-variant">
                  {group.routes.length} routes
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {group.routes.map((page) => (
                  <NavLink
                    key={page.id}
                    className="rounded-[1.5rem] bg-surface-container-low px-5 py-4 text-sm font-semibold text-on-surface shadow-[0px_12px_30px_rgba(25,28,30,0.04)] transition-colors hover:bg-surface-container hover:text-primary"
                    to={page.path}
                  >
                    <span className="flex items-center gap-3 font-heading text-lg font-bold tracking-tight">
                      <span className="material-symbols-outlined text-primary">{getPageIcon(page.id)}</span>
                      {page.label}
                    </span>
                    <span className="mt-2 block text-xs font-medium uppercase tracking-[0.18em] text-on-surface-variant">
                      {page.path}
                    </span>
                  </NavLink>
                ))}
              </div>
            </section>
          ))}
        </section>
      </main>
    </div>
  )
}

function RoleSidebar({ currentPathname, group }) {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 bg-white py-8 px-4 space-y-2 fixed left-0 top-0 z-40 border-r border-outline-variant/20 shadow-[8px_0px_30px_rgba(25,28,30,0.04)]">
      <div className="px-4 mb-8">
        <Link className="flex items-center space-x-3 mb-6" to="/">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-xl">{group.icon}</span>
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm text-on-surface">Voyager AI</h3>
            <p className="text-[11px] text-on-surface-variant uppercase tracking-wider">
              {group.badge}
            </p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1">
        {group.routes.map((page) => (
          <NavLink
            key={page.id}
            className={({ isActive }) =>
              isActive
                ? 'bg-teal-50 text-teal-700 rounded-xl px-4 py-3 flex items-center space-x-3 transition-all duration-200'
                : 'text-slate-500 px-4 py-3 hover:bg-slate-100 flex items-center space-x-3 transition-all duration-200 group'
            }
            to={page.path}
          >
            <span
              className="material-symbols-outlined text-xl"
              style={
                currentPathname === page.path
                  ? { fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }
                  : undefined
              }
            >
              {getPageIcon(page.id)}
            </span>
            <span className="font-heading text-[13px] font-semibold">{page.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

function PublicTopNav({ currentPathname, group }) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/92 backdrop-blur-xl shadow-sm h-16 px-6 border-b border-outline-variant/20">
      <div className="flex items-center justify-between h-full max-w-[1400px] mx-auto gap-6">
        <Link className="flex items-center gap-3 shrink-0" to="/">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-xl">{group.icon}</span>
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm text-on-surface">Voyager AI</h3>
            <p className="text-[11px] text-on-surface-variant uppercase tracking-wider">
              {group.badge}
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2 overflow-x-auto no-scrollbar">
          {group.routes.map((page) => (
            <NavLink
              key={page.id}
              className={({ isActive }) =>
                isActive
                  ? 'bg-teal-50 text-teal-700 rounded-full px-4 py-2 flex items-center space-x-2 text-sm font-semibold transition-all'
                  : 'text-slate-500 hover:bg-slate-100 rounded-full px-4 py-2 flex items-center space-x-2 text-sm font-semibold transition-all'
              }
              to={page.path}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={
                  currentPathname === page.path
                    ? { fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }
                    : undefined
                }
              >
                {getPageIcon(page.id)}
              </span>
              <span>{page.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-low text-xs font-bold text-teal-800">
          {group.title.slice(0, 1)}
        </div>
      </div>
      <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0"></div>
    </header>
  )
}

function RoleHeader({ currentRoute, group }) {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-50 h-16 border-b border-outline-variant/20 bg-white/92 px-7 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between gap-6">
        <div className="flex min-w-0 items-center gap-3">
          <h1 className="shrink-0 font-heading text-[1.05rem] font-extrabold tracking-tight text-teal-800">
            Voyager AI
          </h1>
          <div className="hidden min-w-0 items-center gap-2 text-sm font-medium text-on-surface-variant lg:flex">
            <span>/</span>
            <span>{group.title}</span>
            <span>/</span>
            <span className="truncate text-teal-700">{currentRoute?.label ?? group.title}</span>
          </div>
          <div className="min-w-0 lg:hidden">
            <p className="truncate text-sm font-semibold text-teal-700">
              {currentRoute?.label ?? group.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">
              search
            </span>
            <input
              className="h-11 w-72 rounded-full border border-outline-variant/30 bg-surface-container-low px-11 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary/25 focus:ring-2 focus:ring-primary/15"
              placeholder={`Search in ${group.title.toLowerCase()} pages...`}
              type="text"
            />
          </div>

          <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-low">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute right-[11px] top-[10px] h-2 w-2 rounded-full bg-error"></span>
          </button>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-low text-xs font-bold text-teal-800">
            {group.title.slice(0, 1)}
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileRoleNav({ currentPathname, group }) {
  const mobileRoutes = group.routes.slice(0, 5)

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/92 backdrop-blur-xl z-50 px-6 py-3 flex justify-between items-center shadow-2xl border-t border-outline-variant/20">
      {mobileRoutes.map((page) => {
        const active = currentPathname === page.path

        return (
          <NavLink
            key={page.id}
            className={`flex flex-col items-center ${active ? 'text-teal-700 font-bold' : 'text-slate-500'}`}
            to={page.path}
          >
            <span
              className="material-symbols-outlined"
              style={
                active
                  ? { fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }
                  : undefined
              }
            >
              {getPageIcon(page.id)}
            </span>
            <span className="mt-1 max-w-[58px] truncate text-[10px] font-heading">
              {page.label.split(' ')[0]}
            </span>
          </NavLink>
        )
      })}
    </nav>
  )
}

function RoleLayout({ group }) {
  const location = useLocation()
  const currentRoute =
    group.routes.find((route) => route.path === location.pathname) ?? group.routes[0] ?? null
  const isPublicGroup = group.id === 'public'
  const isShelllessRoute = currentRoute ? SHELLLESS_ROUTE_IDS.has(currentRoute.id) : false

  useEffect(() => {
    if (currentRoute) {
      document.title = `Voyager AI | ${currentRoute.label}`
    }
  }, [currentRoute])

  if (isShelllessRoute) {
    return (
      <div className="min-h-screen bg-surface font-sans text-on-surface antialiased">
        <Outlet />
      </div>
    )
  }

  return (
    <div className="bg-transparent font-sans text-on-surface antialiased">
      <div className="flex min-h-screen">
        {isPublicGroup ? null : <RoleSidebar currentPathname={location.pathname} group={group} />}

        <main className={`flex-1 min-h-screen ${isPublicGroup ? '' : 'md:ml-64'}`}>
          {isPublicGroup ? (
            <PublicTopNav currentPathname={location.pathname} group={group} />
          ) : (
            <RoleHeader currentRoute={currentRoute} group={group} />
          )}

          <div className="app-shell-page w-full pt-22 px-3 pb-24 md:px-4 md:pb-8 lg:px-5">
            <Outlet />
          </div>
        </main>
      </div>

      <MobileRoleNav currentPathname={location.pathname} group={group} />
    </div>
  )
}

function PageViewport({ Component }) {
  return <Component />
}

export default function App() {
  useDesignAssets()

  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      {ROUTE_GROUPS.map((group) => (
        <Route key={group.id} element={<RoleLayout group={group} />}>
          {group.routes.map(({ id, path, Component }) => (
            <Route key={id} element={<PageViewport Component={Component} />} path={path} />
          ))}
        </Route>
      ))}
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  )
}
