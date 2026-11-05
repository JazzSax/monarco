import { PageShell } from "@/components/page-shell"
import { CaviarRitualSection } from "@/sections/rituals/CaviarRitualSection"
import { CollectionSection } from "@/sections/rituals/CollectionSection"
import { HouseMembershipSection } from "@/sections/rituals/HouseMembershipSection"
import { RelatedContentSection } from "@/sections/rituals/RelatedContentSection"
import { RitualDetailsSection } from "@/sections/rituals/RitualDetailsSection"
import { RitualsHero } from "@/sections/rituals/RitualsHero"

export default function RitualsPage() {
  return (
    <PageShell>
      <RitualsHero />
      <CollectionSection />
      <CaviarRitualSection />
      <RitualDetailsSection />
      <HouseMembershipSection />
      <RelatedContentSection />
    </PageShell>
  )
}
