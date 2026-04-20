import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spring Equipment Rental Kansas City | RPM Equipment Leasing',
  description: 'Rent wheel loaders and skid steers in Kansas City this spring. Grading, landscaping, topsoil, site prep. Long-term spring rates available. CASE equipment maintained and ready.',
};

export default function SpringRentalPage() {
  return (
    <>
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-green-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              Spring Season
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Spring Equipment Rental<br />
              <span className="text-yellow-400">Kansas City</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              When the snow melts, the real work begins. Rent CASE wheel loaders and skid steers
              this spring for grading, landscaping, topsoil work, and site cleanup across the our service area.
            </p>
            <Link href="/quote" className="btn-primary">Get Spring Pricing</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">Top Spring Rental Uses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              'Lot grading and leveling after winter freeze damage',
              'Topsoil spreading for lawn installation',
              'Mulch and landscape material placement',
              'Stormwater and drainage system work',
              'Construction site startup — clearing and prep',
              'Hardscape base preparation',
            ].map((use) => (
              <div key={use} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5 shrink-0" />
                <span className="text-sm text-gray-700">{use}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold mb-3">Book Spring Availability Now</h2>
            <p className="text-gray-400 mb-6">Spring machines book fast. Get a quote to lock in your dates.</p>
            <Link href="/quote" className="btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
