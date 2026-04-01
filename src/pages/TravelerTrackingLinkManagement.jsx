import { useNavigate } from 'react-router-dom'
import {
  formatCurrency,
  formatDateRange,
  useVoyagerDemo,
} from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

function getServiceStatusLabel(status) {
  if (status === 'confirmed') return 'Confirmed by provider'
  if (status === 'provider_adjusted') return 'Adjusted by provider'
  return 'Awaiting provider confirmation'
}

export default function TravelerTrackingLinkManagement() {
  const navigate = useNavigate()
  const { actions, selectedBooking } = useVoyagerDemo()
  const trackingUrl = `voyager.ai/track/${selectedBooking.trackingToken}`

  return (
    <PageShell
      title="Booking Details | Voyager AI"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        vertical-align: middle;
      }
      .glass-effect {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
      }
      .cta-gradient { background: linear-gradient(135deg, #00685f 0%, #008378 100%); }`}
    >
      <div className="bg-surface font-body text-on-surface antialiased">
        <main className="pt-24 pb-32 px-6 max-w-screen-xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-4">
              <span>My Tours</span>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-primary font-medium">Booking #{selectedBooking.code}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-on-surface">
              {selectedBooking.tour.name}
            </h1>
            <p className="text-on-surface-variant mt-2 text-lg">
              {selectedBooking.tour.location} •{' '}
              {formatDateRange(selectedBooking.startDate, selectedBooking.endDate)}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_20px_40px_rgba(25,28,30,0.04)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {selectedBooking.status}
                    </span>
                    <h2 className="text-2xl font-bold font-headline mt-4">Booking Overview</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-on-surface-variant">Total Amount</p>
                    <p className="text-2xl font-bold text-primary font-headline">
                      {formatCurrency(selectedBooking.totalAmount)}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                      Lead Traveler
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                        <span className="material-symbols-outlined">person</span>
                      </div>
                      <div>
                        <p className="font-semibold">{selectedBooking.passengers[0]?.name}</p>
                        <p className="text-sm text-on-surface-variant">alex.rivera@voyager.ai</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                      Group Size
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                        <span className="material-symbols-outlined">group</span>
                      </div>
                      <div>
                        <p className="font-semibold">{selectedBooking.groupSize} Travelers</p>
                        <p className="text-sm text-on-surface-variant">
                          {selectedBooking.roomType}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-outline-variant/10">
                  <h3 className="font-headline font-bold text-lg mb-4">
                    Itinerary Highlights
                  </h3>
                  <div className="space-y-4">
                    {selectedBooking.execution.timelineDays
                      .slice(0, 2)
                      .flatMap((day) => day.activities.slice(0, 1))
                      .map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors"
                        >
                          <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              alt={activity.title}
                              className="w-full h-full object-cover"
                              src={selectedBooking.tour.cardImage}
                            />
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold">{activity.title}</p>
                            <p className="text-sm text-on-surface-variant">
                              {activity.time} • {activity.location}
                            </p>
                          </div>
                          <span className="material-symbols-outlined text-primary">
                            check_circle
                          </span>
                        </div>
                    ))}
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-outline-variant/10">
                  <h3 className="font-headline font-bold text-lg mb-4">Booked Services</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-surface-container-low p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-primary">hotel</span>
                        <p className="font-semibold">Hotel</p>
                      </div>
                      <p className="font-bold">{selectedBooking.selectedHotelOption?.name}</p>
                      <p className="text-sm text-on-surface-variant mt-1">
                        {selectedBooking.selectedHotelOption?.roomType}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-surface-container-low p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-primary">
                          airport_shuttle
                        </span>
                        <p className="font-semibold">Transport</p>
                      </div>
                      <p className="font-bold">{selectedBooking.selectedTransportOption?.name}</p>
                      <p className="text-sm text-on-surface-variant mt-1">
                        {selectedBooking.selectedTransportOption?.type}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl bg-secondary-container/25 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      Service Confirmation
                    </p>
                    <p className="font-semibold mt-2">
                      {getServiceStatusLabel(selectedBooking.serviceSelectionStatus)}
                    </p>
                    <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                      {selectedBooking.providerServiceNote ??
                        'The provider will update hotel and transport confirmation details here.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined">shield_with_heart</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">Viewer access notes</h3>
                    <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                      Share the tracking link only with your group. You can regenerate it at
                      any time and toggle phone verification before departure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <section className="bg-surface-container-lowest rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] overflow-hidden">
                <div className="p-8 border-b border-outline-variant/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        share_location
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-headline">
                        Shared Tracking Access
                      </h2>
                      <p className="text-sm text-on-surface-variant">
                        Allow others to follow your journey live
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
                      <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                        Public Tracking Link
                      </p>
                      <div className="flex items-center gap-2">
                        <code className="flex-grow text-sm font-mono truncate text-primary font-bold">
                          {trackingUrl}
                        </code>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {['Family Group', 'Close Friends', 'Travel Coordinator'].map((label) => (
                        <span
                          key={label}
                          className="px-3 py-1.5 rounded-full bg-surface-container-low text-xs font-bold text-on-surface-variant"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button
                        className="flex-grow cta-gradient text-on-primary py-3 px-6 rounded-xl font-bold"
                        onClick={() => navigate('/pages/public-tour-tracking')}
                        type="button"
                      >
                        Open preview
                      </button>
                      <button
                        className="p-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold flex items-center gap-2"
                        onClick={() => actions.regenerateTrackingLink(selectedBooking.id)}
                        type="button"
                      >
                        <span className="material-symbols-outlined">refresh</span>
                        Regenerate
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-surface-container-low/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant">
                        verified_user
                      </span>
                      <div>
                        <p className="font-bold">Require phone verification</p>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          Viewers must verify via SMS to access live tracking data.
                        </p>
                      </div>
                    </div>
                    <button
                      className={`relative inline-flex h-6 w-12 items-center rounded-full ${
                        selectedBooking.phoneVerificationRequired ? 'bg-primary' : 'bg-slate-300'
                      }`}
                      onClick={() => actions.togglePhoneVerification(selectedBooking.id)}
                      type="button"
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                          selectedBooking.phoneVerificationRequired
                            ? 'translate-x-6'
                            : 'translate-x-1'
                        }`}
                      ></span>
                    </button>
                  </div>
                </div>
              </section>

              <section className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/10 shadow-[0px_20px_40px_rgba(25,28,30,0.04)]">
                <h3 className="font-headline font-bold text-lg mb-4">Next live milestone</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined">pace</span>
                  </div>
                  <div>
                    <p className="font-semibold">
                      {selectedBooking.execution.checkpoints.find((item) => item.state === 'current')?.name ??
                        selectedBooking.execution.checkpoints[0]?.name}
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      This checkpoint will be highlighted first on the public tracking page.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </PageShell>
  )
}
