import { Divider } from "@/components/layout"
import { PageShell } from "@/components/page-shell"
import { FeaturedOffersSection } from "@/sections/home/FeaturedOffersSection"
import { HomeHero } from "@/sections/home/HomeHero"
import { HowItWorksSection } from "@/sections/home/HowItWorksSection"
import { LongitudinalSection } from "@/sections/home/LongitudinalSection"
import { MembershipSection } from "@/sections/home/MembershipSection"
import { MenOfMonarcoSection } from "@/sections/home/MenOfMonarcoSection"
import { PrivacySection } from "@/sections/home/PrivacySection"
import { RecoveryContextSection } from "@/sections/home/RecoveryContextSection"
import { RecoveryJourneySection } from "@/sections/home/RecoveryJourneySection"
import { RecoveryReadSection } from "@/sections/home/RecoveryReadSection"
import { SolisSection } from "@/sections/home/SolisSection"
import { MirrorRevealSection } from "@/sections/shared/MirrorRevealSection"

export default function HomePage() {
  return (
    <PageShell>
      <HomeHero />
      <RecoveryReadSection />
      <RecoveryContextSection />
      <Divider />
      <MenOfMonarcoSection />
      <HowItWorksSection />
      <PrivacySection />
      <MirrorRevealSection />
      <LongitudinalSection />
      <MembershipSection />
      <Divider />
      <SolisSection />
      <Divider />
      <RecoveryJourneySection />
      <FeaturedOffersSection />
    </PageShell>
  )
}
