import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rent CASE 521F Wheel Loader | Kansas City",
  description:
    "Rent the CASE 521F Wheel Loader in Kansas City. 121 HP, powershift transmission, 2.5–3.5 yd³ bucket capacity. Built for high-volume snow management, aggregate loading, and large construction sites.",
};

const specs = [
  { label: "Engine", value: "FPT N67, Tier 4 Final" },
  { label: "Net Power", value: "121 HP (90 kW)" },
  { label: "Operating Weight", value: "19,500 lb (8,845 kg)" },
  { label: "Transmission", value: "Powershift, 4-speed F/R" },
  { label: "Steering", value: "Articulated, center-pivot" },
  { label: "Bucket Capacity", value: "2.5–3.5 yd³ (1.9–2.7 m³)" },
  { label: "Tipping Load (straight)", value: "15,750 lb (7,144 kg)" },
  { label: "Breakout Force", value: "26,400 lb (11,975 kg)" },
  { label: "Top Speed", value: "24.9 mph (40 km/h)" },
  { label: "Fuel Tank", value: "44.5 gal (168 L)" },
  { label: "ROPS/FOPS", value: "Enclosed cab standard" },
  { label: "Hydraulic System", value: "Load-sensing, variable-flow" },
];

const applications = [
  {
    title: "High-Volume Snow Management",
    desc: "Larger bucket means fewer passes per lot. The 521F moves serious snow volume at commercial properties and large parking facilities.",
  },
  {
    title: "Aggregate & Material Loading",
    desc: "2.5–3.5 yd³ capacity handles gravel, sand, and fill at rates the 321F cannot match. Built for production loading environments.",
  },
  {
    title: "Road Base & Infrastructure",
    desc: "Powershift transmission and high breakout force handle compacted material and road base work with ease.",
  },
  {
    title: "Construction Site Support",
    desc: "Long-term monthly rentals available for multi-phase construction projects requiring sustained heavy lifting.",
  },
  {
    title: "Land Clearing",
    desc: "High ground clearance and strong hydraulics make the 521F effective for clearing brush, debris, and demolition material.",
  },
];

const comparison = [
  { label: "Power", compact: "74 HP", full: "121 HP" },
  { label: "Bucket Capacity", compact: "1.3–1.7 yd³", full: "2.5–3.5 yd³" },
  { label: "Operating Weight", compact: "13,633 lb", full: "19,500 lb" },
  {
    label: "Best For",
    compact: "Tight lots, precision work",
    full: "High-volume, large sites",
  },
];

export default function WheelLoader521FPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-0 overflow-hidden">
        <div className="relative h-80 md:h-96">
          <img
            src="/images/case-sv280b-skid-steer.jpg"
            alt="CASE 521F Wheel Loader"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Link href="/" className="hover:text-yellow-400">
                  Home
                </Link>
                <span>/</span>
                <span>Equipment</span>
                <span>/</span>
                <span className="text-white">CASE 521F Wheel Loader</span>
              </div>
              <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
                Available Now
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                CASE 521F
                <br />
                <span className="text-yellow-400">Wheel Loader</span>
              </h1>
              <p className="text-gray-300 max-w-xl">
                121 HP — Powershift Transmission — 2.5–3.5 yd³ Bucket — 19,500
                lb
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-yellow-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "121 HP", label: "Net Power" },
              { num: "2.5–3.5 yd³", label: "Bucket Capacity" },
              { num: "19,500 lb", label: "Operating Weight" },
              { num: "Powershift", label: "Transmission" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-black">
                  {s.num}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-black/70 mt-0.5">
                  {s.label}
                </div>
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
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                What It&#39;s Used For
              </h2>
              <div className="space-y-3">
                {applications.map((a) => (
                  <div
                    key={a.title}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-yellow-400"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {a.title}
                      </div>
                      <div className="text-gray-600 text-sm mt-0.5">
                        {a.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                Full Specifications
              </h2>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map((s, i) => (
                      <tr
                        key={s.label}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-3 font-medium text-gray-700 w-44">
                          {s.label}
                        </td>
                        <td className="px-4 py-3 text-gray-900 font-semibold">
                          {s.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
            How the 521F compares to the 321F
          </h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold" />
                  <th className="px-4 py-3 text-center font-semibold">
                    CASE 321F
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">
                    CASE 521F
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.label}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">
                      {row.compact}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-900 font-semibold">
                      {row.full}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Not sure which fits your job?{" "}
            <Link
              href="/contact"
              className="text-yellow-600 font-semibold hover:underline"
            >
              Contact us
            </Link>{" "}
            and we&#39;ll help you choose.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Rent the 521F?
          </h2>
          <p className="text-gray-400 mb-8">
            Daily, weekly, and monthly rates. Delivery available.
          </p>
          <Link href="/quote" className="btn-primary text-sm">
            Get a Quote Now
          </Link>
        </div>
      </section>
    </>
  );
}
