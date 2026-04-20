import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Equipment Rental Works | RPM Equipment Leasing',
  description: 'Simple rental process. Request a quote, confirm dates, get delivery. RPM Equipment Leasing makes heavy equipment rental fast and hassle-free in Kansas City.',
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-3">How It Works</h1>
          <p className="text-gray-400 text-lg">Renting heavy equipment shouldn't be complicated. Here's exactly what happens.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Submit a Quote Request',
                body: 'Fill out our quote form — machine type, dates, delivery needs, and job type. Takes about 2 minutes. No account required.',
              },
              {
                step: '02',
                title: 'We Confirm Availability & Price',
                body: 'We respond same day (usually within the hour) with availability confirmation, pricing breakdown, and any questions. Daily, weekly, and monthly rates available. No hidden fees.',
              },
              {
                step: '03',
                title: 'Sign the Rental Agreement',
                body: 'We send a simple digital rental agreement. No multi-page contracts. Just the machine, the dates, the rate, and a straightforward damage/insurance section.',
              },
              {
                step: '04',
                title: 'Delivery or Pickup',
                body: 'Tell us which you prefer. We deliver to your job site on a flatbed, or you pick up from our yard. We confirm delivery timing so you\'re not waiting around.',
              },
              {
                step: '05',
                title: 'Put It to Work',
                body: 'The machine arrives ready to operate — fuel topped, fluid levels checked. First-time operators get a quick walk-around. Call us anytime if you need support.',
              },
              {
                step: '06',
                title: 'Return When Done',
                body: 'When your rental period ends, return it to our yard or we pick it up. That\'s it. Need to extend? Just let us know — we accommodate extensions whenever the unit is available.',
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-extrabold text-sm">{s.step}</span>
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-2">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-3">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-6">Submit a quote request and we'll handle the rest.</p>
            <Link href="/quote" className="btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
