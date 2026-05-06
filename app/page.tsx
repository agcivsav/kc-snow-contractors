import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RPM Equipment Leasing | Heavy Equipment Rental – Kansas City",
  description:
    "Rent CASE 321F wheel loaders and CASE SV280B skid steers in Kansas City. Year-round availability — snow season and off-season. Daily, weekly, and long-term rates for contractors and direct renters.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <Image
          src="/images/skid-steer-cab-hero.jpg"
          alt="View from inside a CASE skid steer cab overlooking a job site"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6">
              Kansas City Heavy Equipment
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              The Equipment You Need.
              <br />
              <span className="text-yellow-400">When You Need It.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              CASE wheel loaders and skid steers — available year-round. Snow
              season, spring, summer, fall. Large inventory. Long-term rates
              that make sense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary text-sm">
                Get a Quote
              </Link>
              <Link
                href="/equipment/compact-wheel-loader"
                className="btn-secondary text-sm"
              >
                View Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-yellow-500 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "2", label: "Machine Types" },
              { num: "Large", label: "Fleet Inventory" },
              { num: "4", label: "Seasons Available" },
              { num: "KC Metro", label: "Service Area" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-black">
                  {s.num}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-black/70 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MACHINES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">
              Two Machines. Every Job Covered.
            </h2>
            <p className="section-subheading mx-auto">
              We run CASE equipment exclusively — proven, powerful, and
              purpose-built for demanding work sites.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 321F */}
            <div className="card group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/case-321f-wheel-loader.jpg"
                  alt="CASE 321F Compact Wheel Loader"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-bold text-lg">CASE 321F</div>
                  <div className="text-yellow-400 text-sm">
                    Compact Wheel Loader
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  CASE 321F Compact Wheel Loader
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  74 hp — 25 mph top speed — Hydrostatic transmission — 13,633
                  lb operating weight. Built for productivity in tight spaces —
                  snow, grading, and material handling.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Horsepower", val: "74 HP" },
                    { label: "Top Speed", val: "25 mph" },
                    { label: "Op. Weight", val: "13,633 lb" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="text-center bg-gray-50 rounded-lg p-2"
                    >
                      <div className="font-extrabold text-gray-900 text-sm">
                        {s.val}
                      </div>
                      <div className="text-xs text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/equipment/compact-wheel-loader"
                  className="btn-primary w-full text-center text-xs py-2.5"
                >
                  View Specs & Rent
                </Link>
              </div>
            </div>
            <div className="card group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/case-sv280b-skid-steer.jpg"
                  alt="CASE 521F Wheel Loader"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-bold text-lg">CASE 521F</div>
                  <div className="text-yellow-400 text-sm">Wheel Loader</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  CASE 521F Wheel Loader
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  121 hp — Powershift transmission — 19,500+ lb operating weight
                  — 2.5–3.5 yd³ bucket. Built for high-production loading and
                  snow management at larger sites.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center bg-gray-50 rounded-lg p-2">
                    <div className="font-extrabold text-gray-900 text-sm">
                      121 HP
                    </div>
                    <div className="text-xs text-gray-500">Horsepower</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-2">
                    <div className="font-extrabold text-gray-900 text-sm">
                      2.5–3.5 yd³
                    </div>
                    <div className="text-xs text-gray-500">Bucket</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-2">
                    <div className="font-extrabold text-gray-900 text-sm">
                      19,500 lb
                    </div>
                    <div className="text-xs text-gray-500">Op. Weight</div>
                  </div>
                </div>
                <a
                  className="btn-primary w-full text-center text-xs py-2.5"
                  href="/equipment/521f/"
                >
                  View Specs &amp; Rent
                </a>
              </div>
            </div>
            {/* SV280B */}
            <div className="card group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/case-sv280b-skid-steer.jpg"
                  alt="CASE SV280B Skid Steer Loader"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-bold text-lg">
                    CASE SV280B
                  </div>
                  <div className="text-yellow-400 text-sm">
                    Skid Steer Loader
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  CASE SV280B Skid Steer Loader
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Vertical lift design — High-flow hydraulics — All-around
                  visibility — Universal attachment compatibility. The go-to
                  machine for snow relocation, site prep, and landscaping.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Lift Type", val: "Vertical" },
                    { label: "Hydraulics", val: "High-Flow" },
                    { label: "Attachments", val: "Universal" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="text-center bg-gray-50 rounded-lg p-2"
                    >
                      <div className="font-extrabold text-gray-900 text-sm">
                        {s.val}
                      </div>
                      <div className="text-xs text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/equipment/skid-steer"
                  className="btn-primary w-full text-center text-xs py-2.5"
                >
                  View Specs & Rent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFF-SEASON ADVANTAGE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
                Unique Advantage
              </div>
              <h2 className="section-heading mb-4">
                Most Rentals Stop at Winter.
                <br />
                <span className="text-yellow-500">We Don't.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our fleet doesn't hibernate. Spring, summer, and fall — our
                equipment is available for long-term rentals at rates that beat
                daily/weekly pricing. Ideal for landscaping, grading,
                excavation, and multi-month construction projects.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  {
                    season: "Spring",
                    use: "Site grading, topsoil, landscaping, cleanup",
                  },
                  {
                    season: "Summer",
                    use: "Construction, excavation, multi-month projects",
                  },
                  {
                    season: "Fall",
                    use: "Prep work, lot clearing, stormwater management",
                  },
                  {
                    season: "Winter",
                    use: "Snow removal, ice management, plowing",
                  },
                ].map((s) => (
                  <li key={s.season} className="flex items-start gap-3">
                    <span className="inline-block bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded mt-0.5 w-14 text-center shrink-0">
                      {s.season}
                    </span>
                    <span className="text-gray-600 text-sm">{s.use}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/off-season-equipment-rental-kansas-city"
                className="btn-primary"
              >
                Learn About Off-Season Rates
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Long-Term Rates",
                  desc: "Monthly pricing that makes off-season projects economical",
                },
                {
                  title: "Large Fleet",
                  desc: "High availability — rarely a waitlist even in peak season",
                },
                {
                  title: "KC-Based",
                  desc: "Local company, local support, no out-of-town logistics delays",
                },
                {
                  title: "Contractor Preferred",
                  desc: "Multi-unit discounts and dedicated contractor accounts",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                >
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {f.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Who Rents From Us</h2>
            <p className="section-subheading mx-auto">
              Direct renters and contractors both get the same great fleet —
              with options tailored to each.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Direct Renters */}
            <div className="border-2 border-yellow-400 rounded-xl p-8">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                Direct Renters
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Property owners, farmers, small businesses — anyone who needs a
                machine and wants to skip the middleman markup.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {[
                  "No contractor license required",
                  "Daily, weekly, monthly rates",
                  "Flexible pickup and delivery",
                  "Operator coaching available",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0" />{" "}
                    {i}
                  </li>
                ))}
              </ul>
              <Link href="/quote" className="btn-primary text-xs">
                Request a Quote
              </Link>
            </div>

            {/* Contractors */}
            <div className="border-2 border-gray-800 rounded-xl p-8 bg-gray-900 text-white">
              <h3 className="text-2xl font-extrabold mb-3">Contractors</h3>
              <p className="text-gray-300 mb-5 leading-relaxed">
                Landscapers, snow removal companies, general contractors —
                partner with us for fleet access and dedicated contractor
                pricing.
              </p>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                {[
                  "Multi-unit discount programs",
                  "Priority availability during snow season",
                  "Net-30 billing available",
                  "Dedicated account manager",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0" />{" "}
                    {i}
                  </li>
                ))}
              </ul>
              <Link
                href="/contractor-program"
                className="btn-secondary text-xs"
              >
                Contractor Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">How It Works</h2>
            <p className="section-subheading mx-auto">
              Simple process. Fast turnaround.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Request a Quote",
                desc: "Tell us what machine, how long, and your job site. We respond same day.",
              },
              {
                step: "02",
                title: "Confirm & Book",
                desc: "We lock in your dates and confirm availability. No surprise fees.",
              },
              {
                step: "03",
                title: "Delivery or Pickup",
                desc: "We deliver to your site or you pick up from our yard. Your call.",
              },
              {
                step: "04",
                title: "Get to Work",
                desc: "Machine arrives ready to run. Return when done.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-extrabold text-sm">
                    {s.step}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/how-it-works"
              className="text-yellow-600 font-semibold text-sm hover:underline"
            >
              Full rental process details
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative bg-gray-900 py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/snow-plow.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Rent? Let's Talk.
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Get a quote in minutes. Available for snow season and year-round
            off-season projects across the our service area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
