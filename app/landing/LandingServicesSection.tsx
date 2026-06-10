import Link from "next/link";

const services = [
  {
    title: "CASE 321F Compact Wheel Loader",
    desc: "74 hp — 25 mph top speed — Hydrostatic transmission. Built for productivity in tight spaces — snow, grading, and material handling.",
    image: "/images/case-321f-wheel-loader.jpg",
    alt: "CASE 321F Compact Wheel Loader",
    badge: "Compact Wheel Loader",
  },
  {
    title: "CASE 521F Wheel Loader",
    desc: "121 hp — Powershift transmission — 19,500+ lb operating weight. Built for high-production loading and snow management.",
    image: "/images/case-sv280b-skid-steer.jpg",
    alt: "CASE 521F Wheel Loader",
    badge: "Wheel Loader",
  },
  {
    title: "CASE SV280B Skid Steer Loader",
    desc: "Vertical lift design — High-flow hydraulics — Universal attachment compatibility. The go-to machine for snow relocation and site prep.",
    image: "/images/skid1.png",
    alt: "CASE SV280B Skid Steer Loader",
    badge: "Skid Steer Loader",
  },
];

export function LandingServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading mx-auto">
            We run CASE equipment exclusively — proven, powerful, and
            purpose-built for demanding work sites across every season.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="card group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-yellow-400 text-sm">{service.badge}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {service.desc}
                </p>
                <Link
                  href="#landingForm"
                  className="btn-primary w-full text-center text-xs py-2.5"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
