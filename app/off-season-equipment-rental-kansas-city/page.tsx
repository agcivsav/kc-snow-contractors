import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Off-Season Equipment Rental Kansas City | RPM Equipment Leasing',
  description: 'Rent heavy equipment in Kansas City year-round — not just winter. Long-term off-season rates on CASE wheel loaders and skid steers. Spring, summer, fall availability.',
};

const seasons = [
  { season: 'Spring', jobs: ['Site grading and leveling', 'Topsoil and mulch placement', 'Drainage and stormwater prep', 'Landscape installation', 'Lot cleanup and clearing'] },
  { season: 'Summer', jobs: ['Construction site support', 'Concrete and masonry work', 'Multi-month project phases', 'Agricultural material handling', 'Road base and aggregate work'] },
  { season: 'Fall', jobs: ['Pre-winter site prep', 'Leaf and debris cleanup', 'Final grading before frost', 'Utility and trench work', 'Stockpile and storage prep'] },
  { season: 'Winter', jobs: ['Commercial lot snow removal', 'Municipal snow management', 'Parking structure clearing', 'Multi-site contractor fleets', 'Emergency storm response'] },
];

export default function OffSeasonPage() {
  return (
    <>
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/off-season-snow.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              Year-Round Rentals
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Off-Season Equipment Rental<br />
              <span className="text-yellow-400">Kansas City</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Most heavy equipment rental companies are built around snow season. We're not.
              Our fleet is available spring, summer, and fall — with long-term rates that make
              off-season projects economical.
            </p>
            <Link href="/quote" className="btn-primary">Check Availability</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-10 text-center">What You Can Do Off-Season</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {seasons.map((s) => (
              <div key={s.season} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 text-lg border-b border-gray-200 pb-2">{s.season}</h3>
                <ul className="space-y-1 mt-3">
                  {s.jobs.map((j) => (
                    <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0" /> {j}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-3">Long-Term Rates Available</h2>
            <p className="text-gray-400 mb-6">Monthly pricing makes off-season projects cost-effective. Get in touch and we'll send over rates.</p>
            <Link href="/quote" className="btn-primary">Get Off-Season Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
