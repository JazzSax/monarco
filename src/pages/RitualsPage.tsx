import { PageShell } from "@/components/page-shell"
import { CaviarRitualSection } from "@/sections/rituals/CaviarRitualSection"
import { CollectionSection } from "@/sections/rituals/CollectionSection"
import { HouseMembershipSection } from "@/sections/rituals/HouseMembershipSection"
import { RelatedContentSection } from "@/sections/rituals/RelatedContentSection"
import { RitualDetailsSection } from "@/sections/rituals/RitualDetailsSection"
import { RitualsHero } from "@/sections/rituals/RitualsHero"

export default function RitualsPage() {
  return (
    // Figma (THE MONARCO HOUSE): Inter for all copy, DM Sans for the headings inside the page and for prices.
    <PageShell className="font-inter [&_main_:is(h1,h2,h3)]:font-sans">
      <RitualsHero />
      <CollectionSection />
      <CaviarRitualSection />
      <RitualDetailsSection />
      <HouseMembershipSection />
      <RelatedContentSection />
    </PageShell>
  )
}
