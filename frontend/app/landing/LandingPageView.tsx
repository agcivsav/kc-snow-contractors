import type {SeoLandingData} from "./landing-types"
import {LandingConversationSection} from "./LandingConversationSection"
import {LandingHeroSection} from "./LandingHeroSection"
import {LandingHowItWorksSection} from "./LandingHowItWorksSection"
import {LandingServicesSection} from "./LandingServicesSection"
import {LandingWhySection} from "./LandingWhySection"

type LandingPageViewProps = {
  data: SeoLandingData
}

export function LandingPageView({data}: LandingPageViewProps) {
  return (
    <>
      {data.hero ? <LandingHeroSection data={data.hero} /> : null}
      {data.whySection ? <LandingWhySection data={data.whySection} /> : null}
      {data.servicesSection ? (
        <LandingServicesSection data={data.servicesSection} />
      ) : null}
      {data.howItWorksSection ? (
        <LandingHowItWorksSection data={data.howItWorksSection} />
      ) : null}
      {data.conversationSection ? (
        <LandingConversationSection data={data.conversationSection} />
      ) : null}
    </>
  )
}
