import { useNavigate } from 'react-router-dom'
import { formatCurrency, useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

const TOURS = [
  { id: '1', category: 'Luxury', location: 'Positano, Italy', title: 'Amalfi Coast Private Escape', price: '$3,450', rating: '4.9', reviews: '128', left: '6 Days', right: 'Max 8', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgMNykQm49aaH2PYdrq-MAsDIkFRWZjvNIIoR66BY_iQM9DI51IkNCSBGfztuCxrYwqSRo05_5uQAIxZDqzlI-vkBhDU2m6x1NwtbodSwX-TJHdj4jrX714B_74kGo68PYOL-vv80DptMiX8CWEJTk9ZTDgFg7UcAZIyYZS7miU4ZsB_d6gykQSkCuPdWTNbNIr0POQORvtTYJVS2I9lQJmhX1RajuT6cnOF7pPn6D5zO7uBq6zKff3ogizOB3k1NLADfOJ2A3Zp_w' },
  { id: '2', category: 'Adventure', location: 'Zermatt, Switzerland', title: 'Matterhorn Peaks Expedition', price: '$2,890', rating: '4.8', reviews: '92', left: '8 Days', right: 'Moderate', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsbmeJrZtV6s8mhjaokricQZDOJFb3wloNJmmeU6ouenWYXcdBB4MNtmaOTzS6wMCyJJE80NYcyzsMPra-qjys941Gll7RnEyAecY4tcVYiT4ckXE6neAMJ8hTC1S4qlo9OdpoaipOQH2CfPWzgksfdxI1fZ-ZP8zPW9TaU8vTGkCoYfYV6pliXl5rD_8YRPN4SUrf_KQrfyEB5acyEVlK6z4lQc95w8pcrv1HNflxPHCjfQGTCvFY8QjWVhiutDCdVjLIMgDouUjG' },
  { id: '3', category: 'Culture', location: 'Tuscany, Italy', title: 'Renaissance & Vineyards', price: '$1,950', rating: '5.0', reviews: '215', left: '5 Days', right: 'Gastronomy', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYc1Do2kg_t1GZkDXvwlEA0d7ayNFPtX_FAh3dY0ubIxxE_RYegAj0HoQYuD_DrxLeeXcHTgj9YERLokCMbtQTkQYiX2i9OrsoB3NOxcNnsC8jIECKXoHNd-7AJgpv-v0kHLnzHMFEY5EvxpA8k7KV-muNjLi3JyyiNbMNveQnbeMRTaWDups8w5_K0de6lyhxx0IAqZpRafEenbVJoZD18LBBRXSJireyMx9pCEjnH-_BS24n7RjyOBhd8V03r6_0kvwviEM8fDRH' },
  { id: '4', category: 'Nature', location: 'Lofoten, Norway', title: 'Midnight Sun Journey', price: '$4,100', rating: '4.7', reviews: '64', left: '10 Days', right: 'Photography', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVBmRpfNsckSprKoilwVICh2Hp_gGU4yKiLmAt6_XPmQEEK5b1DfXc5jp3qUNd2CxiY78QhdS8dc9SQg0okETpfBwxRNJaa5HN7GB1L3NaxVWBmPDXLfz2gdx6Q6w5F6bBfTBfUQJK7F_Jt2-aJoVhp4bT3aEZh9imCuVSoozwU7KZgH0ntKeMUBxDYxFBB8y27P8GBWTkDaPzhGDPwGI-05Q6DxknTYOLg7IeB1FddaCzSJN9rxJVnbWbGnv2UEviI7oJlBd8tE_6' },
  { id: '5', category: 'History', location: 'Venice, Italy', title: 'Hidden Canals & Craft', price: '$1,250', rating: '4.9', reviews: '342', left: '3 Days', right: 'Boutique Stay', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxW16bLxRTgAmQVudGeTylwDpPw_5D1tfxBW8xrvqaKZ5oBHsgXYt2l1RrMgN87DqsL4mtrxwTION1Shv3mgbd_Wp31YAImuTj9mbPTHog6GNHA6tIfnnhkmzh3ajP3NChS2nkxXN_0bExMezcWQ9F5M2oLijdKFa0zP7ZvQN8K3DdGs6a21rLSuP31D0bd2n04nduQzsKwNDAgnFg3Cn9-XucGtNbXKbyM1vX-oW7bAamPKui1wlzatW7mhGdy8rAxYcXBJVO_yzO' },
]

export default function TourList() {
  const navigate = useNavigate()
  const { actions, state } = useVoyagerDemo()
  const tours = state.tours.filter((tour) => tour.status !== 'draft')

  return (
    <PageShell
      title="TourList"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }
      body { font-family: "Inter", sans-serif; }
      h1, h2, h3 { font-family: "Plus Jakarta Sans", sans-serif; }`}
    >
      <div className="bg-surface text-on-surface">
        <div className="flex pt-16 min-h-screen">
          <aside className="hidden lg:flex flex-col w-72 h-[calc(100vh-64px)] sticky top-16 bg-surface-container-low p-8 overflow-y-auto">
            <div className="mb-8">
              <h2 className="text-lg font-bold text-on-surface mb-2">Filters</h2>
              <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">
                Refine your journey
              </p>
            </div>
            <div className="mb-8 space-y-3">
              {['Mediterranean Coast', 'Swiss Alps', 'Nordic Fjords', 'Tuscan Hills'].map((label, index) => (
                <div key={label} className="flex items-center gap-3">
                  <input className="rounded text-primary focus:ring-primary border-outline-variant/30 h-5 w-5" defaultChecked={index === 0} type="checkbox" />
                  <label className="text-sm text-on-surface-variant">{label}</label>
                </div>
              ))}
            </div>
            <div className="mb-8">
              <label className="block text-sm font-semibold text-on-surface mb-4">Price Range</label>
              <input className="w-full accent-primary h-1 bg-outline-variant/30 rounded-full appearance-none cursor-pointer" type="range" />
              <div className="flex justify-between mt-4">
                <span className="text-xs font-medium text-on-surface-variant">$500</span>
                <span className="text-xs font-bold text-primary">$5,000+</span>
              </div>
            </div>
            <button className="mt-auto w-full py-4 bg-primary text-on-primary rounded-xl font-bold shadow-lg shadow-primary/20">Apply Filters</button>
          </aside>

          <main className="flex-1 p-6 md:p-10 max-w-[1400px]">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-fixed text-[10px] font-bold uppercase tracking-widest rounded-full">
                    AI Curated Selection
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
                  Curated Tours
                </h1>
                <p className="mt-3 text-on-surface-variant max-w-lg leading-relaxed">
                  Discover handcrafted experiences designed by our travel
                  experts and AI planning engine.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-on-surface-variant">Sort by:</span>
                <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-sm font-semibold text-on-surface shadow-sm ring-1 ring-inset ring-outline-variant/10" type="button">
                  Most Popular
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <article key={tour.id} className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img alt={tour.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={tour.cardImage} />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-on-surface text-xs font-bold rounded-full">
                        {tour.category}
                      </span>
                    </div>
                    <button className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-error transition-colors" type="button">
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center gap-2 text-white/90 text-xs font-medium mb-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {tour.location}
                      </div>
                      <h3 className="text-xl font-bold text-white">{tour.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <span className="text-2xl font-extrabold text-primary">{formatCurrency(tour.pricePerPerson)}</span>
                        <span className="text-xs text-on-surface-variant">/ person</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                          star
                        </span>
                        <span className="text-sm font-bold">{tour.rating}</span>
                        <span className="text-xs text-on-surface-variant">({tour.reviews})</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-8 text-on-surface-variant">
                      <div className="flex items-center gap-1.5 text-xs font-medium">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {tour.durationLabel}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium">
                        <span className="material-symbols-outlined text-sm">group</span>
                        Max {tour.maxGroupSize}
                      </div>
                    </div>
                    <button className="w-full py-3 bg-secondary-container text-on-secondary-container font-bold rounded-xl hover:bg-primary hover:text-on-primary transition-all active:scale-95" onClick={() => {
                      actions.selectTour(tour.id)
                      navigate('/pages/tour-detail')
                    }} type="button">
                      View Details
                    </button>
                  </div>
                </article>
              ))}

              <article className="group relative bg-primary-container rounded-xl overflow-hidden shadow-lg p-8 flex flex-col justify-center text-on-primary-container">
                <div className="absolute -top-10 -right-10 h-40 w-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-5xl mb-6">auto_awesome</span>
                  <h3 className="text-2xl font-extrabold mb-4 leading-tight">
                    Can&apos;t find your perfect match?
                  </h3>
                  <p className="text-on-primary-container/80 text-sm mb-8 leading-relaxed">
                    Let our AI Concierge design a bespoke itinerary based on your
                    unique travel style, interests, and budget.
                  </p>
                  <button className="px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all" onClick={() => navigate('/pages/ai-travel-planner')} type="button">
                    Build Custom Trip
                  </button>
                </div>
              </article>
            </div>

            <div className="mt-20 flex flex-col items-center gap-6">
              <button className="px-10 py-4 bg-surface-container-high text-on-surface font-bold rounded-xl hover:bg-outline-variant/20 transition-colors" type="button">
                Show More Adventures
              </button>
              <div className="flex items-center gap-2">
                <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold" type="button">1</button>
                <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface font-semibold" type="button">2</button>
                <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface font-semibold" type="button">3</button>
                <span className="px-2 text-on-surface-variant">...</span>
                <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface font-semibold" type="button">12</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageShell>
  )
}
