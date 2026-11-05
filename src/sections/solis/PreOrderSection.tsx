import { CalendarDays, History, ShieldCheck, User } from "lucide-react"
import { TrustPill } from "@/components/cards"
import { ArrowButton } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"
import { Edition } from "@/sections/solis/Edition"

// These pills keep 16px icons at every width.
const PILL = "lg:[&_svg]:size-4"

export function PreOrderSection() {
  return (
    // Mobile overlay is 0.6 / 0.3; tablet and desktop 0.5 / 0.25.
    <Section className="bg-surface-default [--mid:0.6] [--end:0.3] md:[--mid:0.5] md:[--end:0.25]">
      <Backdrop
        src={asset("assets/solis-preorder.webp")}
        video={asset("assets/solis-preorder.mp4")}
        overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / var(--mid)) 50%, rgb(29 27 24 / var(--end)) 100%)"
      />
      <Container>
        <div className="flex w-[267px] flex-col items-start gap-3xl md:w-auto lg:w-[500px]">
          <div className="flex flex-col gap-sm">
            <div className="flex flex-col gap-xs">
              <div className="flex flex-col gap-2xs lg:gap-xs">
                <Eyebrow tone="action">MONARCO SOLIS</Eyebrow>
                <h2 className="type-h2 text-text-primary lg:w-[334px]">Your Ritual Begins Here</h2>
              </div>
              <Edition tone="secondary" />
            </div>
            <div className="flex flex-col gap-2xs md:gap-xs lg:gap-sm">
              <p className="type-h4 font-medium text-text-primary">£599</p>
              <p className="type-sm text-text-secondary">Includes three months of Monarco Intelligence membership.</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-md md:gap-xl">
            <ArrowButton>Pre-Order Monarco Solis</ArrowButton>
            <div className="flex flex-wrap gap-xs md:w-[448px] lg:w-auto">
              <TrustPill className={PILL} icon={<User aria-hidden />}>Available to non-members</TrustPill>
              <TrustPill className={PILL} icon={<CalendarDays aria-hidden />}>Estimated dispatch 01 January 2027</TrustPill>
              <TrustPill className={PILL} icon={<ShieldCheck aria-hidden />}>1 year manufacturer warranty</TrustPill>
              <TrustPill className={PILL} icon={<History aria-hidden />}>30-day returns</TrustPill>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
