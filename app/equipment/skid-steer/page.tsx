import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rent CASE SV280B Skid Steer Loader | Kansas City',
  description:
    'Rent the CASE SV280B Skid Steer Loader in Kansas City. Vertical lift, high-flow hydraulics, universal attachment compatibility. Perfect for snow relocation, site work, and landscaping.',
};

const specs = [
  { label: 'Lift Path', value: 'Vertical' },
  { label: 'Rated Operating Capacity', value: '2,800 lb (1,270 kg)' },
  { label: 'Tipping Load', value: '8,000 lb (3,628 kg)' },
  { label: 'Operating Weight', value: '8,465 lb (3,840 kg)' },
  { label: 'Net Horsepower', value: '90 HP (67 kW)' },
  { label: 'Hydraulic Flow (Std)', value: '24.7 gpm (93.5 L/min)' },
  { label: 'Hydraulic Flow (High)', value: '40.2 gpm (152.1 L/min)' },
  { label: 'Ground Speed', value: '12.1 mph (19.5 km/h)' },
  { label: 'Dump Height', value: '122 in (3,099 mm)' },
  { label: 'Reach at Dump Height', value: '31.1 in (789 mm)' },
  { label: 'Bucket Width', value: '72 in (1,829 mm) std' },
  { label: 'Fuel Tank', value: '26.4 gal (100 L)' },
];

export default function SkidSteerPage() {
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
            <span className="text-white">CASE SV280B Skid Steer</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
                Available Now
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                CASE SV280B<br />
                <span className="text-yellow-400">Skid Steer Loader</span>
              </h1>
              <p className="text-gray-300 leading-relaxed mb-6">
                2,800 lb rated capacity. Vertical lift design for maximum reach at full height.
                High-flow hydraulics power everything from snow blowers to augers. Universal
                quick-attach makes swapping tools fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-primary">Request a Quote</Link>
                <Link href="/rent-skid-steer-kansas-city" className="btn-secondary text-sm">
                  Rental Info
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl h-72 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-3">🏗️</div>
                <div className="text-white font-bold">CASE SV280B</div>
                <div className="text-yellow-400 text-sm">90 HP · 2,800 lb ROC · Vertical Lift</div>
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
              { num: '90 HP', label: 'Net Power' },
              { num: '2,800 lb', label: 'Rated Capacity' },
              { num: 'Vertical', label: 'Lift Path' },
              { num: '40.2 gpm', label: 'High-Flow Hydraulics' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-black">{s.num}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-black/70 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications + Specs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">What It's Used For</h2>
              <div className="space-y-4">
                {[
                  { title: '❄️ Snow Relocation', desc: 'Vertical lift gives max reach into snow trucks. High-flow runs snow blower attachments hard.' },
                  { title: '🌱 Landscaping', desc: 'Grade, spread topsoil, install sod. Tight turning radius handles residential and commercial sites.' },
                  { title: '🏗️ Site Demolition', desc: 'Bucket, hydraulic breaker, or auger — swap attachments in minutes.' },
                  { title: '📦 Loading & Moving', desc: 'At 2,800 lb rated capacity, this machine handles heavy aggregate loads all day.' },
                  { title: '🚿 Utility Work', desc: 'Trench digging, backfilling, material stockpiling — versatile for utility and infrastructure jobs.' },
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
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Rent the SV280B?</h2>
          <p className="text-gray-400 mb-8">Daily, weekly, and monthly rates. Attachment packages available.</p>
          <Link href="/quote" className="btn-primary text-sm">Get a Quote Now</Link>
        </div>
      </section>
    </>
  );
}
