import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contractor Rental Program | RPM Equipment Leasing Kansas City',
  description: 'Dedicated contractor rental program in Kansas City. Multi-unit discounts, priority availability, Net-30 billing, and dedicated account management for landscapers, snow companies, and general contractors.',
};

const benefits = [
  { title: 'Multi-Unit Discounts', desc: 'Renting more than one machine at a time? Volume pricing kicks in automatically for contractor accounts.' },
  { title: 'Priority Availability', desc: 'During peak snow season, contractor accounts get first call on machines. No scrambling when the storm hits.' },
  { title: 'Net-30 Billing', desc: 'Qualified contractor accounts can invoice and pay Net-30. Better cash flow management for your business.' },
  { title: 'Dedicated Account Manager', desc: 'One point of contact for every rental. No call queues, no starting over with a new rep every time.' },
  { title: 'Recurring Rental Setup', desc: 'Run the same job every year? We can pre-book machines for your seasonal schedule automatically.' },
  { title: 'Attachment Packages', desc: 'Contractor accounts get access to full attachment packages — snow blowers, augers, forks, and more — at preferred rates.' },
];

const audiences = [
  { title: 'Snow Removal Companies', desc: 'Multi-site operators who need reliable fleet backup or supplemental equipment during heavy snow events.' },
  { title: 'Landscaping Contractors', desc: 'Spring through fall — grading, topsoil, hardscape, planting. Year-round off-season rates make projects profitable.' },
  { title: 'General Contractors', desc: 'Site prep, demolition, backfill — ongoing needs throughout the build season. Keep machines on site without ownership overhead.' },
  { title: 'Property Management Companies', desc: 'Managing multiple properties means unpredictable equipment needs. We flex with you.' },
];

export default function ContractorProgramPage() {
  return (
    <>
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              For Contractors
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              The RPM Contractor<br />
              <span className="text-yellow-400">Rental Program</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Purpose-built for landscapers, snow removal companies, and general contractors
              who need machines on a regular basis — with pricing and terms that reflect that relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">What You Get as a Contractor Account</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 border-l-4 border-l-yellow-400">
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Who the Program Is Built For</h2>
              <div className="space-y-4">
                {audiences.map((a) => (
                  <div key={a.title} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-100">
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{a.title}</div>
                      <div className="text-gray-600 text-sm mt-0.5">{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-xl font-extrabold mb-6 text-yellow-400">Get Set Up as a Contractor Account</h3>
              <div className="space-y-3 text-sm text-gray-300 mb-8">
                <p>1. Submit a quote or contact us directly</p>
                <p>2. Tell us your business name and typical rental volume</p>
                <p>3. We set up your account — usually same day</p>
                <p>4. Start renting under contractor pricing immediately</p>
              </div>
              <Link href="/quote" className="btn-primary block text-center text-sm">
                Apply for Contractor Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-500 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-black mb-3">Questions About the Program?</h2>
          <p className="text-black/70 mb-6">We're happy to walk through it. Reach out directly.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-bold rounded-md text-sm hover:bg-gray-900 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
