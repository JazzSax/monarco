import { ArrowButton } from "@/components/cta"
import { Backdrop, Container } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"

/** Figma labels this "Men of Monarco" on desktop and "The First 100" on tablet and mobile. */
export function MenOfMonarcoSection() {
  return (
    <section id="men-of-monarco" className="relative overflow-hidden bg-surface-default py-section-md md:py-section-sm">
      <Backdrop src={asset("assets/men-banner.webp")} imgClassName="object-right" overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.8) 50%, rgb(29 27 24 / 0) 100%)" />
      <Container className="flex flex-col gap-sm md:flex-row md:items-start md:justify-between md:pr-7xl">
        <div className="flex w-[256px] flex-col gap-2xs md:w-[305px] lg:w-auto lg:gap-xs">
          <Eyebrow tone="action">
            <span className="lg:hidden">THE FIRST 100</span>
            <span className="hidden lg:inline">MEN OF MONARCO</span>
          </Eyebrow>
          <h2 className="type-h3 text-text-primary">What the World Doesn’t See</h2>
        </div>
        <div className="flex w-[256px] flex-col items-start gap-3xl md:w-auto md:gap-md">
          <p className="type-lg text-text-secondary md:type-md md:w-[217px]">The men behind the output. Their stories. Their recovery.</p>
          <ArrowButton className="font-medium">
            <span className="lg:hidden">Explore The First 100</span>
            <span className="hidden lg:inline">Explore The Men of Monarco</span>
          </ArrowButton>
        </div>
      </Container>
    </section>
  )
}
