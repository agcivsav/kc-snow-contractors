import { LandingForm } from "./LandingForm";
import { LANDING_FORM_SECTION_ID } from "./landing-form-shared";

export function LandingConversationSection() {
  return (
    <section
      id={LANDING_FORM_SECTION_ID}
      className="relative bg-gray-900 py-20 overflow-hidden scroll-mt-20"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/images/snow-plow.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Start the Conversation
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Fill out the form and we&apos;ll confirm availability, send
              pricing, and answer any questions — usually within the hour on
              business days.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                "No obligation — just straight answers",
                "Availability and pricing in one response",
                "Serving the Kansas City metro area",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <h3 className="text-xl font-extrabold text-gray-900 mb-1">
              Request Your Free Quote
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              Takes about 2 minutes. We respond same day.
            </p>
            <LandingForm idPrefix="conv" />
          </div>
        </div>
      </div>
    </section>
  );
}
