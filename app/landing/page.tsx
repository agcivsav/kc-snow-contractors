import type { Metadata } from "next";
import { LandingConversationSection } from "./LandingConversationSection";
import { LandingHeroSection } from "./LandingHeroSection";
import { LandingHowItWorksSection } from "./LandingHowItWorksSection";
import { LandingServicesSection } from "./LandingServicesSection";
import { LandingWhySection } from "./LandingWhySection";

export const metadata: Metadata = {
  title: "Get Your Equipment Quote | RPM Equipment Leasing — Kansas City",
  description:
    "Request a free quote on CASE wheel loaders and skid steers in Kansas City. Same-day response, year-round availability, and flexible rental rates.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LandingPage() {
  return (
    <>
      <LandingHeroSection />
      <LandingWhySection />
      <LandingServicesSection />
      <LandingHowItWorksSection />
      <LandingConversationSection />
    </>
  );
}
