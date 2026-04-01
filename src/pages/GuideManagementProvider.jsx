import { useVoyagerDemo } from '../demo/VoyagerDemoContext.jsx'
import { PageShell } from './PageShell'

export default function GuideManagementProvider() {
  const { actions, bookingsWithRelations, state } = useVoyagerDemo()
  const activeBookings = bookingsWithRelations.filter((booking) => booking.status === 'confirmed')

  return (
    <PageShell
      title="Guide Management | Voyager AI"
      styles={`.material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }
      body { font-family: "Inter", sans-serif; background-color: #f7f9fb; }`}
    >
      <div className="bg-surface text-on-surface flex min-h-screen">
        <main className="flex-1 flex flex-col min-w-0 bg-surface">
          <section className="px-8 pt-24 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                  Total Guides
                </p>
                <span className="text-3xl font-extrabold text-on-surface font-headline">
                  {state.guides.length}
                </span>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                  Active Now
                </p>
                <span className="text-3xl font-extrabold text-on-surface font-headline">
                  {state.guides.filter((guide) => guide.status === 'active').length}
                </span>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                  Assigned Bookings
                </p>
                <span className="text-3xl font-extrabold text-on-surface font-headline">
                  {activeBookings.length}
                </span>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                  Avg Rating
                </p>
                <span className="text-3xl font-extrabold text-on-surface font-headline">
                  4.8
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                      Guide
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                      Contact Info
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                      Assigned Booking
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                      Status
                    </th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-variant/30">
                  {state.guides.map((guide, index) => {
                    const assignedBooking = activeBookings[index % Math.max(activeBookings.length, 1)]
                    return (
                      <tr key={guide.id} className="hover:bg-surface-container-low transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl overflow-hidden">
                              <img alt={guide.name} className="w-full h-full object-cover" src={guide.avatar} />
                            </div>
                            <div>
                              <p className="font-bold text-on-surface font-headline">{guide.name}</p>
                              <p className="text-xs text-on-surface-variant">{guide.specialty}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-sm">
                            <p className="text-on-surface">{guide.email}</p>
                            <p className="text-on-surface-variant text-xs mt-1">{guide.phone}</p>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-sm">
                            <p className="font-semibold text-on-surface">
                              {assignedBooking?.tour?.name ?? 'No active booking'}
                            </p>
                            <p className="text-on-surface-variant text-xs mt-1">
                              {assignedBooking?.code ?? 'Unassigned'}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100 capitalize">
                            {guide.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          {assignedBooking ? (
                            <button
                              className="px-4 py-2 rounded-lg bg-surface-container-low font-semibold text-sm"
                              onClick={() => actions.assignGuideToBooking(assignedBooking.id, guide.id)}
                              type="button"
                            >
                              Assign Here
                            </button>
                          ) : null}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </PageShell>
  )
}
