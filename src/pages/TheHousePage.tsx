import { PageShell } from "@/components/page-shell"
import { FinalBrandCloseSection } from "@/sections/house/FinalBrandCloseSection"
import { HouseHero } from "@/sections/house/HouseHero"
import { InsideTheHouseSection } from "@/sections/house/InsideTheHouseSection"
import { JourneySection } from "@/sections/house/JourneySection"
import { MembersOnlySection } from "@/sections/house/MembersOnlySection"
import { MembershipLevelsSection } from "@/sections/house/MembershipLevelsSection"
import { MirrorRevealSection } from "@/sections/shared/MirrorRevealSection"

export default function TheHousePage() {
  return (
    <PageShell>
      <HouseHero />
      <MembershipLevelsSection />
      <InsideTheHouseSection />
      <MirrorRevealSection />
      <MembersOnlySection />
      <JourneySection />
      <FinalBrandCloseSection />
    </PageShell>
  )
}
