import { Divider } from "@/components/layout"
import { PageShell } from "@/components/page-shell"
import { ExpressionsSection } from "@/sections/our-house/ExpressionsSection"
import { FutureSection } from "@/sections/our-house/FutureSection"
import { LegacyCloseSection } from "@/sections/our-house/LegacyCloseSection"
import { OriginSection } from "@/sections/our-house/OriginSection"
import { OurHouseHero } from "@/sections/our-house/OurHouseHero"
import { PeopleSection } from "@/sections/our-house/PeopleSection"
import { PhilosophySection } from "@/sections/our-house/PhilosophySection"
import { PrinciplesSection } from "@/sections/our-house/PrinciplesSection"

export default function OurHousePage() {
  return (
    <PageShell>
      <OurHouseHero />
      <OriginSection />
      <PhilosophySection />
      <PrinciplesSection />
      <ExpressionsSection />
      <PeopleSection />
      <FutureSection />
      <Divider />
      <LegacyCloseSection />
    </PageShell>
  )
}
