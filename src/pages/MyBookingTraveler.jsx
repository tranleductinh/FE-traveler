import { useNavigate } from 'react-router-dom'
import {
  formatCurrency,
  formatDate,
  useVoyagerDemo,
} from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

function getStatusBadgeClass(status) {
  if (status === 'confirmed') {
    return 'bg-primary/10 text-primary'
  }

  if (status === 'pending') {
    return 'bg-tertiary-container/10 text-tertiary-container'
  }

  if (status === 'completed') {
    return 'bg-secondary-container/30 text-secondary'
  }

  return 'bg-error-container text-on-error-container'
}

function getPaymentBadgeClass(paymentStatus) {
  if (paymentStatus === 'paid') {
    return 'bg-teal-50 text-teal-700'
  }

  if (paymentStatus === 'partially-paid' || paymentStatus === 'deposit-requested') {
    return 'bg-surface-container-high text-on-surface-variant'
  }

  return 'bg-error-container text-on-error-container'
}

export default function MyBookingTraveler() {
  const navigate = useNavigate()
  const { actions, bookingStats, bookingsWithRelations } = useVoyagerDemo()

  return (
    <PageShell
      title="My Bookings - Voyager AI"
      styles={`body {
        font-family: "Inter", sans-serif;
      }
      h1, h2, h3, .brand-font {
        font-family: "Plus Jakarta Sans", sans-serif;
      }
      .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        vertical-align: middle;
      }`}
    >
      <div className="bg-surface text-on-surface flex min-h-screen">
        <main className="flex-1 flex flex-col min-w-0 bg-surface overflow-hidden relative">
          <div className="pt-24 pb-12 px-6 md:px-10 max-w-7xl mx-auto w-full">
            <div className="mb-10">
              <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2 brand-font">
                Manage your journey.
              </h2>
              <p className="text-on-surface-variant text-lg max-w-2xl font-body">
                Review your upcoming adventures, track payments, and manage your
                travel schedule in one place.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/5 shadow-[0px_20px_40px_rgba(25,28,30,0.04)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-on-surface-variant font-medium">Confirmed</span>
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
                <div className="text-3xl font-bold brand-font">{bookingStats.confirmed}</div>
                <p className="text-xs text-on-surface-variant mt-1">Upcoming experiences</p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/5 shadow-[0px_20px_40px_rgba(25,28,30,0.04)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-on-surface-variant font-medium">Pending</span>
                  <span className="material-symbols-outlined text-tertiary">
                    hourglass_empty
                  </span>
                </div>
                <div className="text-3xl font-bold brand-font">{bookingStats.pending}</div>
                <p className="text-xs text-on-surface-variant mt-1">
                  Awaiting provider confirmation
                </p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/5 shadow-[0px_20px_40px_rgba(25,28,30,0.04)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-on-surface-variant font-medium">Total Spent</span>
                  <span className="material-symbols-outlined text-teal-600">
                    account_balance_wallet
                  </span>
                </div>
                <div className="text-3xl font-bold brand-font">
                  {formatCurrency(bookingStats.totalSpent)}
                </div>
                <p className="text-xs text-on-surface-variant mt-1">Across paid bookings</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,30,0.06)] border border-outline-variant/5">
              <div className="p-6 border-b border-surface-container flex items-center justify-between">
                <h3 className="text-lg font-bold brand-font">Active Bookings</h3>
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg text-sm font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
                  onClick={() => navigate('/pages/tour-list')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                  New Booking
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-surface-container-low text-on-surface-variant text-[11px] uppercase tracking-wider font-bold">
                    <tr>
                      <th className="px-6 py-4">Tour Name</th>
                      <th className="px-6 py-4">Booking Date</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Payment</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    {bookingsWithRelations.map((booking) => (
                      <tr
                        key={booking.id}
                        className="group hover:bg-surface-container-low/30 transition-colors"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                alt={booking.tour.name}
                                className="w-full h-full object-cover"
                                src={booking.tour.cardImage}
                              />
                            </div>
                            <div>
                              <p className="font-bold text-on-surface text-sm brand-font">
                                {booking.tour.name}
                              </p>
                              <p className="text-xs text-on-surface-variant font-body">
                                {booking.tour.location}
                              </p>
                              <p className="text-[11px] text-on-surface-variant font-body mt-1">
                                {booking.selectedHotelOption?.name ?? booking.roomType} •{' '}
                                {booking.selectedTransportOption?.name ?? 'Standard transfer'}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm font-medium text-on-surface">
                          {formatDate(booking.bookingDate, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </td>
                        <td className="px-6 py-5">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold capitalize ${getStatusBadgeClass(
                              booking.status,
                            )}`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold capitalize ${getPaymentBadgeClass(
                              booking.paymentStatus,
                            )}`}
                          >
                            {booking.paymentStatus}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right space-x-3">
                          <button
                            className="text-[12px] font-bold text-primary uppercase tracking-tight"
                            onClick={() => {
                              actions.selectBooking(booking.id)
                              actions.selectTour(booking.tour.id)
                              navigate('/pages/traveler-tracking-link-management')
                            }}
                            type="button"
                          >
                            View Detail
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-surface-container-low rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined">travel_explore</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold brand-font text-on-surface">
                      Need another itinerary?
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-2 max-w-xl">
                      Browse curated tours or generate a new AI plan, then manage every
                      reservation from the same traveler workspace.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-3xl p-8 text-left shadow-lg shadow-primary/20"
                onClick={() => navigate('/pages/ai-travel-planner')}
                type="button"
              >
                <span className="material-symbols-outlined text-4xl mb-6">auto_awesome</span>
                <h3 className="text-xl font-bold brand-font mb-2">Plan New Trip</h3>
                <p className="text-sm text-on-primary/80">
                  Generate a fresh itinerary tailored to your pace and budget.
                </p>
              </button>
            </div>
          </div>
        </main>
      </div>
    </PageShell>
  )
}
