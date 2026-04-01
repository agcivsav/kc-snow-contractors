import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fall Equipment Rental Kansas City | KC Snow Contractors',
  description: 'Rent equipment in Kansas City this fall. Lot clearing, final grading, stormwater prep, utility work. CASE wheel loaders and skid steers available before snow season. Long-term rates.',
};

export default function FallRentalPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-amber-700 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              🍂 Fall Season
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Fall Equipment Rental<br />
              <span className="text-yellow-400">Kansas City</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Fall is the last window before winter locks everything down. Finish your grading,
              clear your lots, and wrap up site work before the snow season starts.
              Equipment available now.
            </p>
            <Link href="/quote" className="btn-primary">Check Fall Availability</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">Fall Is the Prep Season</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Smart contractors use fall rentals to get ahead of winter. Final grading and drainage
            work prevents freeze-thaw damage. Lot clearing before snow season means you're ready
            to start plowing immediately. Don't wait until December to prep.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              'Final lot grading before first freeze',
              'Stormwater and drainage system work',
              'Leaf, debris, and brush clearing',
              'Utility and trench work before ground freeze',
              'Stockpile and material storage prep',
              'Pre-snow-season equipment familiarity for operators',
            ].map((use) => (
              <div key={use} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-yellow-500 font-bold mt-0.5">✓</span>
                <span className="text-sm text-gray-700">{use}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold mb-3">Get a Fall Quote</h2>
            <p className="text-gray-400 mb-6">Fall availability books fast — especially heading into snow season. Reserve your dates now.</p>
            <Link href="/quote" className="btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
