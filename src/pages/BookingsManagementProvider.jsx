import { formatDate, useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

function getServiceStatusClasses(status) {
  if (status === 'confirmed') {
    return 'bg-emerald-100 text-emerald-700'
  }

  if (status === 'provider_adjusted') {
    return 'bg-sky-100 text-sky-700'
  }

  return 'bg-amber-100 text-amber-700'
}

export default function BookingsManagementProvider() {
  const { actions, bookingsWithRelations } = useVoyagerDemo()

  return (
    <PageShell
      title="Bookings Management | Voyager AI"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }
      body { font-family: "Inter", sans-serif; }
      h1, h2, h3 { font-family: "Plus Jakarta Sans", sans-serif; }`}
    >
      <div className="bg-surface text-on-surface">
        <main className="pt-24 px-6 pb-12 max-w-7xl mx-auto">
          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,30,0.04)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="py-5 px-8 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                      Traveler
                    </th>
                    <th className="py-5 px-8 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                      Tour Details
                    </th>
                    <th className="py-5 px-8 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-center">
                      Date
                    </th>
                    <th className="py-5 px-8 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-center">
                      Status
                    </th>
                    <th className="py-5 px-8 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y-0">
                  {bookingsWithRelations.map((booking) => (
                    <tr
                      key={booking.id}
                      className="group hover:bg-surface-container-low transition-colors"
                    >
                      <td className="py-6 px-8">
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-11 rounded-xl overflow-hidden shadow-sm">
                            <img
                              alt={booking.passengers[0]?.name}
                              className="w-full h-full object-cover"
                              src={booking.passengers[0]?.avatar}
                            />
                          </div>
                          <div>
                            <p className="font-headline font-bold text-on-surface">
                              {booking.passengers[0]?.name}
                            </p>
                            <p className="text-xs text-on-surface-variant">Frontend traveler</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <p className="font-bold text-on-surface">{booking.tour.name}</p>
                        <p className="text-xs text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">group</span>
                          {booking.groupSize} Travelers
                        </p>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                            <span className="material-symbols-outlined text-[14px]">
                              hotel
                            </span>
                            <span>{booking.selectedHotelOption?.name ?? booking.roomType}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                            <span className="material-symbols-outlined text-[14px]">
                              airport_shuttle
                            </span>
                            <span>{booking.selectedTransportOption?.name ?? 'Standard transfer'}</span>
                          </div>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tighter ${getServiceStatusClasses(
                              booking.serviceSelectionStatus,
                            )}`}
                          >
                            {booking.serviceSelectionStatus?.replaceAll('_', ' ') ??
                              'pending provider confirmation'}
                          </span>
                        </div>
                      </td>
                      <td className="py-6 px-8 text-center">
                        <p className="font-semibold text-on-surface">
                          {formatDate(booking.startDate, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </td>
                      <td className="py-6 px-8 text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700 uppercase tracking-tighter">
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-6 px-8">
                        <div className="flex justify-end gap-3">
                          {booking.status === 'pending' ? (
                            <>
                              <button
                                className="bg-primary text-on-primary px-4 py-2 rounded-xl text-xs font-bold shadow-sm"
                                onClick={() => actions.approveBooking(booking.id)}
                                type="button"
                              >
                                Accept
                              </button>
                              <button
                                className="bg-error-container text-on-error-container px-4 py-2 rounded-xl text-xs font-bold"
                                onClick={() => actions.rejectBooking(booking.id)}
                                type="button"
                              >
                                Reject
                              </button>
                            </>
                          ) : null}
                          {booking.status !== 'pending' &&
                          booking.status !== 'cancelled' &&
                          booking.serviceSelectionStatus !== 'confirmed' ? (
                            <button
                              className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-xl text-xs font-bold"
                              onClick={() => actions.confirmBookingServices(booking.id)}
                              type="button"
                            >
                              Confirm Services
                            </button>
                          ) : null}
                          {booking.status !== 'pending' &&
                          booking.status !== 'cancelled' &&
                          booking.serviceSelectionStatus !== 'confirmed' ? (
                            <button
                              className="bg-surface-container-high px-4 py-2 rounded-xl text-xs font-bold text-on-surface"
                              onClick={() => actions.replaceBookingServices(booking.id)}
                              type="button"
                            >
                              Use Backup Set
                            </button>
                          ) : null}
                          <button
                            className="bg-surface-container-low px-4 py-2 rounded-xl text-xs font-bold"
                            onClick={() => actions.selectBooking(booking.id)}
                            type="button"
                          >
                            Focus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </PageShell>
  )
}
