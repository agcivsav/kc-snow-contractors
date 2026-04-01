import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rent a Wheel Loader in Kansas City | CASE 321F | KC Snow Contractors',
  description: 'Rent a CASE 321F compact wheel loader in Kansas City. 74 HP, 25 mph, hydrostatic. Daily, weekly, monthly rates. Snow removal, grading, and site work. Delivery available across KC metro.',
};

export default function RentWheelLoaderKCPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
            Kansas City
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Wheel Loader Rental<br />
            <span className="text-yellow-400">Kansas City, MO</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Rent a CASE 321F compact wheel loader in KC. 74 HP, hydrostatic transmission,
            25 mph top speed. Available daily, weekly, or monthly. Delivery to your job site.
          </p>
          <Link href="/quote" className="btn-primary">Get a Quote</Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Why Rent a Wheel Loader in Kansas City?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you're a snow removal contractor managing multiple KC lots, a landscaper
            handling spring site prep, or a general contractor moving material — a compact wheel
            loader is one of the most versatile machines on any job site.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            At KC Snow Contractors, we rent CASE 321F wheel loaders exclusively. Tier 4 Final
            engine, articulated steering for tight lot turns, and 1.3–1.7 yd³ bucket capacity
            to move real volume.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Engine', val: '74 HP' },
              { label: 'Top Speed', val: '25 mph' },
              { label: 'Operating Weight', val: '13,633 lb' },
              { label: 'Transmission', val: 'Hydrostatic' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-gray-50 rounded-xl p-4">
                <div className="font-extrabold text-gray-900">{s.val}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-3">Ready to Book?</h2>
            <p className="text-gray-400 mb-6">Request a quote — we respond same day with availability and pricing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary">Request a Quote</Link>
              <Link href="/equipment/compact-wheel-loader" className="btn-secondary text-sm">Full Specs</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
