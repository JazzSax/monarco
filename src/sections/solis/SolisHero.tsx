import { BatteryFull, Cpu, Timer, Waves } from "lucide-react"
import { TrustPill } from "@/components/cards"
import { ArrowButton } from "@/components/cta"
import { Backdrop, Container } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"
import { Edition } from "@/sections/solis/Edition"

// Mobile pills use 20px icons (38px pills), tablet 16px, desktop 20px.
const PILL = "[&_svg]:size-5 md:[&_svg]:size-4 lg:[&_svg]:size-5"

export function SolisHero() {
  return (
    // Same frame as the shared HeroSection, but with a price block and a side caption. Mobile overlay is 0.6 / 0.3.
    <section className="relative flex h-[844px] flex-col justify-end overflow-hidden bg-surface-default py-section [--mid:0.6] [--end:0.3] md:h-[980px] md:[--mid:0.5] md:[--end:0] lg:justify-center lg:pt-[184px]">
      <Backdrop
        src={asset("assets/solis-hero.webp")}
        video={asset("assets/solis-hero.mp4")}
        overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / var(--mid)) 48.08%, rgb(29 27 24 / var(--end)) 100%)"
      />
      <Container className="flex flex-col gap-xl md:gap-4xl lg:flex-row lg:items-end lg:justify-between lg:gap-2xl">
        <div className="flex flex-col gap-5xl md:gap-8xl lg:w-[781px]">
          <div className="flex w-[267px] flex-col items-start gap-3xl md:w-auto lg:gap-4xl">
            <div className="flex flex-col gap-md md:gap-xl lg:gap-2xl">
              <div className="flex flex-col gap-sm lg:gap-lg">
                <div className="flex flex-col gap-xs">
                  <div className="flex flex-col gap-2xs lg:gap-xs">
                    <Eyebrow tone="action">MONARCO PRESENTS</Eyebrow>
                    <h1 className="type-h1 text-text-primary">Solis</h1>
                  </div>
                  <p className="type-h6 font-medium text-text-secondary">Restore. Then be Great.</p>
                </div>
                <p className="type-lg text-text-secondary lg:w-[323px]">A light therapy ritual for the man behind the performance.</p>
              </div>
              <div className="flex flex-col gap-2xs lg:gap-xs">
                <Edition tone="action" />
                <p className="type-h4 font-medium text-text-primary">£599</p>
                <p className="type-sm text-text-secondary">Includes three months of Monarco Intelligence membership.</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-md md:flex-row md:items-center">
              <ArrowButton>Pre-Order Monarco Solis</ArrowButton>
              <div className="type-caption flex flex-col gap-xs font-medium text-text-secondary md:gap-2xs">
                <p>Available to non-members.</p>
                <p>Estimated depatch 1 January 2027.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-xs">
            <TrustPill className={PILL} icon={<Timer aria-hidden />}>10 minutes treatment</TrustPill>
            <TrustPill className={PILL} icon={<Waves aria-hidden />}>3 brightness levels</TrustPill>
            <TrustPill className={PILL} icon={<Cpu aria-hidden />}>122 LEDs&nbsp; 488 chips</TrustPill>
            <TrustPill className={PILL} icon={<BatteryFull aria-hidden />}>3,000 mAh battery</TrustPill>
          </div>
        </div>
        <p className="type-sm w-[109px] font-medium text-text-action md:w-[92px] lg:w-[152px] lg:text-right">A RITUAL FOR WHAT”S NEXT.</p>
      </Container>
    </section>
  )
}
