import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Summer Equipment Rental Kansas City | KC Snow Contractors',
  description: 'Rent heavy equipment in Kansas City all summer long. CASE wheel loaders and skid steers for construction, site work, and landscaping. Monthly rates available for multi-month projects.',
};

export default function SummerRentalPage() {
  return (
    <>
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              Summer Season
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Summer Equipment Rental<br />
              <span className="text-yellow-400">Kansas City</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Summer is construction season in KC. Keep your project moving with reliable CASE
              equipment on-site. Monthly rates designed for multi-phase builds and extended projects.
            </p>
            <Link href="/quote" className="btn-primary">Get Summer Pricing</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Built for Summer Construction</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Summer rentals often mean longer projects. We offer monthly pricing that scales
            better than stacked weekly rates — keeping your equipment costs predictable across
            a 3-month build season.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              'Construction site material handling — all season',
              'Road base, aggregate, and fill work',
              'Concrete and masonry project support',
              'Agricultural operations and field work',
              'Commercial development site prep',
              'Multi-month phased construction projects',
            ].map((use) => (
              <div key={use} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5 shrink-0" />
                <span className="text-sm text-gray-700">{use}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold mb-3">Multi-Month Projects Welcome</h2>
            <p className="text-gray-400 mb-6">Monthly rates available. Get a quote for your project timeline.</p>
            <Link href="/quote" className="btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
