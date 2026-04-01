import { useNavigate } from 'react-router-dom'
import {
  formatCurrency,
  formatDate,
  useVoyagerDemo,
} from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

export default function BookingSuccessAndTrackingLink() {
  const navigate = useNavigate()
  const { selectedBooking } = useVoyagerDemo()
  const trackingUrl = `https://voyager.ai/track/${selectedBooking.trackingToken}`
  const qrCells = [
    1, 1, 0, 1,
    0, 1, 1, 0,
    1, 0, 1, 1,
    1, 1, 0, 1,
  ]

  return (
    <PageShell
      title="Booking Confirmed | Voyager AI"
      styles={`.glass-effect {
        background: rgba(247, 249, 251, 0.7);
        backdrop-filter: blur(12px);
      }
      .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }
      .brand-gradient { background: linear-gradient(135deg, #00685f 0%, #008378 100%); }`}
    >
      <div className="bg-surface font-body text-on-surface antialiased">
        <main className="pt-24 pb-20 px-6 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-8">
              <section className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-fixed text-primary mb-2">
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    check_circle
                  </span>
                </div>
                <h1 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface">
                  Booking Confirmed
                </h1>
                <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
                  Pack your bags. Your journey is officially locked in, and your
                  shared passenger tracking link is ready to send.
                </p>
              </section>

              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_20_40px_rgba(25,28,30,0.04)] space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                      Reservation ID
                    </p>
                    <p className="text-xl font-headline font-bold">#{selectedBooking.code}</p>
                  </div>
                  <div className="px-4 py-1.5 bg-tertiary-container rounded-full text-on-tertiary-fixed font-bold text-xs uppercase tracking-wider">
                    {selectedBooking.status}
                  </div>
                </div>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">calendar_today</span>
                    </div>
                    <div>
                      <p className="text-sm text-on-surface-variant">Departure</p>
                      <p className="font-semibold">
                        {formatDate(selectedBooking.startDate, {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="text-sm text-on-surface-variant">Destination</p>
                      <p className="font-semibold">{selectedBooking.tour.location}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20">
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Total Amount</span>
                    <span className="text-2xl font-headline font-extrabold text-primary">
                      {formatCurrency(selectedBooking.totalAmount)}
                    </span>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20 grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      Hotel requested
                    </p>
                    <p className="font-semibold mt-2">
                      {selectedBooking.selectedHotelOption?.name ?? selectedBooking.roomType}
                    </p>
                    <p className="text-sm text-on-surface-variant mt-1">
                      {selectedBooking.selectedHotelOption?.roomType ?? 'Service request saved'}
                    </p>
                  </div>
                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      Transport requested
                    </p>
                    <p className="font-semibold mt-2">
                      {selectedBooking.selectedTransportOption?.name ?? 'Standard transfer'}
                    </p>
                    <p className="text-sm text-on-surface-variant mt-1">
                      Provider will confirm actual availability after booking review.
                    </p>
                  </div>
                </div>
              </div>

              <section className="bg-surface-container-low rounded-xl p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-container text-on-primary rounded-xl">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-2xl font-headline font-bold">
                      Shared Passenger Tracking Link
                    </h2>
                    <p className="text-on-surface-variant">
                      The tracking token is generated entirely on frontend and reused by
                      the tracking-management and public pages.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative flex-grow">
                      <input
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-4 pr-12 font-mono text-sm"
                        readOnly
                        type="text"
                        value={trackingUrl}
                      />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                        link
                      </span>
                    </div>
                    <button
                      className="brand-gradient text-on-primary font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2"
                      onClick={() => navigator.clipboard?.writeText(trackingUrl)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">content_copy</span>
                      Copy Link
                    </button>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-32 h-32 bg-slate-100 flex items-center justify-center relative overflow-hidden rounded-lg">
                        <div className="grid grid-cols-4 grid-rows-4 gap-1 w-24 h-24 opacity-80">
                          {qrCells.map((cell, index) => (
                            <div
                              key={index}
                              className={cell ? 'bg-slate-800 rounded-[2px]' : 'bg-slate-300 rounded-[2px]'}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 max-w-sm">
                      <h3 className="text-xl font-headline font-bold">Share in seconds</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Group members can scan this code or open the link to follow the
                        trip live without needing an account.
                      </p>
                      <button
                        className="text-primary font-bold text-sm"
                        onClick={() => navigate('/pages/traveler-tracking-link-management')}
                        type="button"
                      >
                        Manage tracking settings
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <div className="relative group rounded-xl overflow-hidden aspect-[4/5]">
                <img
                  alt={selectedBooking.tour.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={selectedBooking.tour.heroImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="material-symbols-outlined text-primary-fixed"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      stars
                    </span>
                    <span className="text-sm font-label uppercase tracking-[0.2em] text-primary-fixed">
                      Voyager Exclusive
                    </span>
                  </div>
                  <h3 className="text-3xl font-headline font-extrabold mb-2">
                    {selectedBooking.tour.name}
                  </h3>
                  <p className="text-white/80 font-medium">
                    {selectedBooking.tour.location} • {selectedBooking.tour.durationDays} Days
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <button
                  className="w-full py-4 bg-secondary-container text-on-secondary-container font-bold rounded-xl"
                  onClick={() => navigate('/pages/my-booking-traveler')}
                  type="button"
                >
                  View My Bookings
                </button>
                <button
                  className="w-full py-4 flex items-center justify-center gap-2 text-primary font-bold rounded-xl"
                  onClick={() => navigate('/pages/public-tour-tracking')}
                  type="button"
                >
                  <span className="material-symbols-outlined">public</span>
                  Open Public Tracking Preview
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageShell>
  )
}
