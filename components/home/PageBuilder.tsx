import {StatsBanner} from "./StatsBanner"
import {MachinesSection} from "./MachinesSection"
import {OffSeasonSection} from "./OffSeasonSection"
import {WhoWeServeSection} from "./WhoWeServeSection"
import {AudienceSidebarSection} from "./AudienceSidebarSection"
import {HowItWorksSection} from "./HowItWorksSection"
import {BulletCardsSection} from "./BulletCardsSection"
import {FeatureGrid} from "./FeatureGrid"
import {TextSection} from "./TextSection"
import {CtaBanner} from "./CtaBanner"
import type {PageBuilderBlock} from "./home-types"

type PageBuilderProps = {
  blocks: PageBuilderBlock[]
}

export function PageBuilder({blocks}: PageBuilderProps) {
  if (!Array.isArray(blocks) || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case "statsBanner":
            return <StatsBanner key={block._key} {...block} />
          case "machinesSection":
            return <MachinesSection key={block._key} {...block} />
          case "offSeasonSection":
            return <OffSeasonSection key={block._key} {...block} />
          case "whoWeServeSection":
            return <WhoWeServeSection key={block._key} {...block} />
          case "audienceSidebarSection":
            return <AudienceSidebarSection key={block._key} {...block} />
          case "howItWorksSection":
            return <HowItWorksSection key={block._key} {...block} />
          case "bulletCardsSection":
            return <BulletCardsSection key={block._key} {...block} />
          case "featureGrid":
            return <FeatureGrid key={block._key} {...block} />
          case "textSection":
            return <TextSection key={block._key} {...block} />
          case "ctaBanner":
            return <CtaBanner key={block._key} {...block} />
          default:
            return null
        }
      })}
    </>
  )
}
