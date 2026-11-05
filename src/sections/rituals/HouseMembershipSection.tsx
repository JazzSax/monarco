import { Check } from "lucide-react"
import { ArrowButton, TextLink } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"

const BENEFITS = [
  "Continued Recovery M.I.",
  "Personalised recovery insights.",
  "Recovery progress tracking.",
  "Access to exclusive product drops.",
  "Members-only experiences.",
]

export function HouseMembershipSection() {
  return (
    // Mobile overlay is 0.8 / 0.25; tablet and desktop 0.6 / 0.6.
    <Section className="bg-surface-default [--mid:0.8] [--end:0.25] md:[--mid:0.6] md:[--end:0.6]">
      <Backdrop
        src={asset("assets/rituals-hero.webp")}
        // Mobile crop found by searching object-position against the Figma frame export.
        imgClassName="object-[95%_50%] md:object-center"
        overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / var(--mid)) 48.08%, rgb(29 27 24 / var(--end)) 100%)"
      />
      {/* Desktop: Figma fixes the row at 378px and bottom-aligns a 386px copy column, so it rises 8px into the padding. */}
      <Container className="flex flex-col gap-5xl md:flex-row md:items-end md:justify-between md:gap-4xl lg:h-[378px] lg:gap-5xl">
        <div className="flex flex-col items-start gap-3xl md:w-[346px] lg:w-[450px] lg:gap-4xl">
          <div className="flex flex-col gap-xl md:gap-md lg:gap-xl">
            <div className="flex flex-col gap-sm">
              <div className="flex flex-col gap-2xs lg:gap-xs">
                <Eyebrow tone="action" className="md:type-md">THE MONARCO HOUSE</Eyebrow>
                <h2 className="type-h2 text-text-primary">More Than Access A Way to Restore</h2>
              </div>
              <p className="type-lg text-text-secondary">
                The House brings together Recovery M.I., personal insights, considered rituals and exclusive releases in one evolving experience.
              </p>
            </div>
            <p className="flex items-baseline gap-xs">
              <span className="type-h4 font-sans font-medium text-text-primary">£19.99</span>
              <span className="type-md text-text-secondary">/ month</span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-sm lg:flex-row lg:items-center lg:gap-md">
            <ArrowButton>Begin My Recovery Read</ArrowButton>
            {/* Mobile: Figma centres the 136px label in a 155px box. */}
            <TextLink to="/the-house" className="px-[9.5px] md:px-0">Explore Membership</TextLink>
          </div>
        </div>
        <ul className="flex w-[256px] shrink-0 flex-col gap-xs rounded-md bg-surface-contrast p-md md:w-[255px] md:p-sm lg:w-[300px] lg:gap-sm lg:p-md">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="type-sm flex items-center gap-xs text-text-tertiary">
              <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-surface-action-secondary text-text-primary lg:size-5">
                <Check className="size-3 lg:size-4" strokeWidth={3} aria-hidden />
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
