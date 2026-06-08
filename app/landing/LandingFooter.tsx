import { CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/utils/site-contact";

export function LandingFooter() {
  return (
    <footer className="bg-[#F7F5F2] py-14 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-8 md:px-10 md:py-10 text-center">
          {CONTACT_PHONE ? (
            <p className="text-gray-900 text-base md:text-lg mb-4">
              Call Us Directly At:{" "}
              <a
                href={CONTACT_PHONE_HREF}
                className="font-bold underline underline-offset-2 decoration-gray-900 hover:text-yellow-600 transition-colors"
              >
                {CONTACT_PHONE}
              </a>
            </p>
          ) : null}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Get a free quote from our heavy equipment rental experts. Whether
            you need a wheel loader, skid steer, or multiple units, we&apos;ll
            guide you every step of the way.
          </p>
        </div>
      </div>
    </footer>
  );
}
