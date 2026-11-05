import { PageShell } from "@/components/page-shell"
import { ApplicationSection } from "@/sections/men-of-monarco/ApplicationSection"
import { FoundingOfferSection } from "@/sections/men-of-monarco/FoundingOfferSection"
import { MenHero } from "@/sections/men-of-monarco/MenHero"
import { MenPhilosophySection } from "@/sections/men-of-monarco/MenPhilosophySection"
import { PerspectivesSection } from "@/sections/men-of-monarco/PerspectivesSection"

export default function MenOfMonarcoPage() {
  return (
    <PageShell>
      <MenHero />
      <PerspectivesSection />
      <MenPhilosophySection />
      <FoundingOfferSection />
      <ApplicationSection />
    </PageShell>
  )
}
