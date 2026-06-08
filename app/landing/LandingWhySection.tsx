export function LandingWhySection() {
  const reasons = [
    {
      title: "Year-Round Availability",
      desc: "Our fleet doesn't hibernate. Snow season and off-season — machines ready when you need them.",
    },
    {
      title: "Large Fleet Inventory",
      desc: "High availability with rarely a waitlist, even during peak snow season in Kansas City.",
    },
    {
      title: "Local KC Support",
      desc: "Local company, local support. No out-of-town logistics delays or surprise fees.",
    },
    {
      title: "Contractor-Friendly Rates",
      desc: "Multi-unit discounts, long-term pricing, and dedicated contractor accounts available.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
            Why RPM Equipment
          </div>
          <h2 className="section-heading">Why Rent From Us?</h2>
          <p className="section-subheading mx-auto">
            Most rentals stop at winter. We don&apos;t. Here&apos;s what sets
            RPM Equipment Leasing apart in Kansas City.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-black font-extrabold text-sm">✓</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
