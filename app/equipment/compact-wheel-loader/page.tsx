import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rent CASE 321F Compact Wheel Loader | Kansas City',
  description:
    'Rent the CASE 321F Compact Wheel Loader in Kansas City. 74 HP, 25 mph, hydrostatic transmission. Perfect for snow removal, grading, and material handling. Daily, weekly, monthly rates.',
};

const specs = [
  { label: 'Engine', value: 'FPT F5HFL463A*F003, Tier 4 Final' },
  { label: 'Net Power', value: '74 HP (55.2 kW)' },
  { label: 'Operating Weight', value: '13,633 lb (6,183 kg)' },
  { label: 'Top Speed', value: '25 mph (40 km/h)' },
  { label: 'Transmission', value: 'Hydrostatic, 2-speed' },
  { label: 'Steering', value: 'Articulated, center-pivot' },
  { label: 'Bucket Capacity', value: '1.3–1.7 yd³ (1.0–1.3 m³)' },
  { label: 'Tipping Load', value: '9,006 lb (4,085 kg) straight' },
  { label: 'Breakout Force', value: '14,991 lb (6,800 kg)' },
  { label: 'Fuel Tank', value: '23.8 gal (90 L)' },
  { label: 'ROPS/FOPS', value: 'Enclosed cab standard' },
  { label: 'Hydraulic Flow', value: 'Standard & High-Flow available' },
];

export default function WheelLoaderPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span>/</span>
            <span>Equipment</span>
            <span>/</span>
            <span className="text-white">CASE 321F Wheel Loader</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
                Available Now
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                CASE 321F<br />
                <span className="text-yellow-400">Compact Wheel Loader</span>
              </h1>
              <p className="text-gray-300 leading-relaxed mb-6">
                74 HP of articulated power. Hydrostatic transmission for smooth, operator-friendly
                operation. At 25 mph, it gets between job zones fast. The right machine for snow
                removal, grading, and heavy material handling.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-primary">Request a Quote</Link>
                <Link href="/rent-wheel-loader-kansas-city" className="btn-secondary text-sm">
                  Rental Info
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl h-72 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-3">🚜</div>
                <div className="text-white font-bold">CASE 321F</div>
                <div className="text-yellow-400 text-sm">74 HP · 13,633 lb · 25 mph</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-yellow-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '74 HP', label: 'Net Power' },
              { num: '25 mph', label: 'Top Speed' },
              { num: '13,633 lb', label: 'Operating Weight' },
              { num: '2-Speed', label: 'Hydrostatic Trans.' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-black">{s.num}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-black/70 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">What It's Used For</h2>
              <div className="space-y-4">
                {[
                  { title: '❄️ Snow Removal', desc: 'Articulated steering handles tight lot turns. Fast road speed means more lots per shift.' },
                  { title: '🏗️ Site Preparation', desc: 'Powerful breakout force for grading, backfilling, and moving heavy aggregate.' },
                  { title: '📦 Material Handling', desc: '1.3–1.7 yd³ bucket capacity. Handles mulch, gravel, topsoil, and fill material.' },
                  { title: '🏡 Landscaping', desc: 'Precise hydrostatic controls for finish grading and landscape installation.' },
                  { title: '🏢 Construction Support', desc: 'Multi-month rentals available — ideal for phased construction projects.' },
                ].map((a) => (
                  <div key={a.title} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl mt-0.5">{a.title.split(' ')[0]}</div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{a.title.slice(2)}</div>
                      <div className="text-gray-600 text-sm mt-0.5">{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Spec Sheet */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Full Specifications</h2>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map((s, i) => (
                      <tr key={s.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 font-medium text-gray-700 w-44">{s.label}</td>
                        <td className="px-4 py-3 text-gray-900 font-semibold">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Rent the 321F?</h2>
          <p className="text-gray-400 mb-8">Daily, weekly, and monthly rates. Delivery available across the KC metro.</p>
          <Link href="/quote" className="btn-primary text-sm">Get a Quote Now</Link>
        </div>
      </section>
    </>
  );
}
