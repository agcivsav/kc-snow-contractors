import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rent a Skid Steer in Kansas City | CASE SV280B | RPM Equipment Leasing',
  description: 'Rent a CASE SV280B skid steer loader in Kansas City. Vertical lift, high-flow hydraulics, 2,800 lb rated capacity. Snow relocation, landscaping, site work. Daily/weekly/monthly rates.',
};

export default function RentSkidSteerKCPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              Kansas City
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Skid Steer Rental<br />
              <span className="text-yellow-400">Kansas City, MO</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Rent a CASE SV280B skid steer in Kansas City. Vertical lift design, 2,800 lb rated
              capacity, high-flow hydraulics. Snow relocation, landscaping, site prep. Delivery available.
            </p>
            <Link href="/quote" className="btn-primary">Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">The Right Skid Steer for the Job</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The CASE SV280B is a vertical-lift skid steer — meaning maximum reach and dump height
            compared to radial lift machines. For snow relocation into trucks, or precise material
            placement at height, vertical lift is the right call.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            High-flow hydraulic output (40+ gpm) powers demanding attachments — snow blowers,
            cold planers, hydraulic breakers. Universal quick-attach means swapping is fast.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Lift Path', val: 'Vertical' },
              { label: 'Rated Capacity', val: '2,800 lb' },
              { label: 'Net Power', val: '90 HP' },
              { label: 'High-Flow', val: '40.2 gpm' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-gray-50 rounded-xl p-4">
                <div className="font-extrabold text-gray-900">{s.val}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-3">Book the SV280B</h2>
            <p className="text-gray-400 mb-6">Daily, weekly, monthly rates. Same-day response on quote requests.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary">Request a Quote</Link>
              <Link href="/equipment/skid-steer" className="btn-secondary text-sm">Full Specs</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
