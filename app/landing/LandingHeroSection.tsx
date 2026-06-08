import Image from "next/image";
import { LandingForm } from "./LandingForm";

export function LandingHeroSection() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <Image
        src="/images/Off-Season.jpg"
        alt="View from inside a CASE skid steer cab overlooking a job site"
        fill
        priority
        className="object-cover opacity-35"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6">
              Email Exclusive — Kansas City
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Ready to Rent?
              <br />
              <span className="text-yellow-400">Get Your Quote in Minutes.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-xl leading-relaxed">
              You&apos;re in the right place. Request pricing on CASE wheel loaders
              and skid steers — same-day response, flexible rates, and machines
              available year-round across the KC metro.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Same-day quote response — no waiting",
                "Daily, weekly, and monthly rental options",
                "Delivery to your job site or pickup from our yard",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 text-gray-900">
            <h2 className="text-xl font-extrabold text-gray-900 mb-1">
              Request Your Free Quote
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              Takes about 2 minutes. We respond same day.
            </p>
            <LandingForm idPrefix="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
