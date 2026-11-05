import { PageShell } from "@/components/page-shell"
import { MembershipIncludedSection } from "@/sections/solis/MembershipIncludedSection"
import { PerformanceStorySection } from "@/sections/solis/PerformanceStorySection"
import { PreOrderSection } from "@/sections/solis/PreOrderSection"
import { ProductDetailsSection } from "@/sections/solis/ProductDetailsSection"
import { RestorationSection } from "@/sections/solis/RestorationSection"
import { SolisHero } from "@/sections/solis/SolisHero"

export default function SolisPage() {
  return (
    <PageShell>
      <SolisHero />
      <PerformanceStorySection />
      <RestorationSection />
      <MembershipIncludedSection />
      <PreOrderSection />
      <ProductDetailsSection />
    </PageShell>
  )
}
