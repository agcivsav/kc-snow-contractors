import Link from "next/link";

const steps = [
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
];

export function LandingHowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading mx-auto">
            Simple process. Fast turnaround. Renting heavy equipment
            shouldn&apos;t be complicated.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-extrabold text-sm">
                  {item.step}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="#landingForm" className="btn-primary text-sm">
            Get My Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
