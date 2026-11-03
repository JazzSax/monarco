import { ArrowButton, TextLink } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { Eyebrow } from "@/components/typography"

export function FinalBrandCloseSection() {
  return (
    <Section className="bg-surface-default shadow-[inset_0_1px_0_var(--border-default)]">
      <Backdrop src="/assets/disconnect.webp" overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.5) 45%, rgb(29 27 24 / 0) 100%)" />
      <Container>
        <div className="flex flex-col gap-3xl md:w-[429px] lg:w-[552px]">
          <div>
            <Eyebrow tone="action" className="mb-2xs md:mb-xs">THE JONARCO HOUSE</Eyebrow>
            <h2 className="type-h2 mb-md text-text-primary md:mb-sm">The Next Chapter of Your Recovery Starts Here</h2>
            <p className="type-lg mb-sm w-[271px] text-text-secondary md:w-auto lg:mb-lg">
              <span className="block lg:inline">Understand Where you are. </span>
              <span className="block lg:inline">Discover what changes. </span>
              <span className="block lg:inline">Build a more considered approach to recovery.</span>
            </p>
            <p className="type-lg font-medium text-text-secondary">Restore, Then Be Great.</p>
          </div>
          <div className="flex flex-col items-start gap-sm md:flex-row md:items-center md:gap-md">
            <ArrowButton>Begin My Read</ArrowButton>
            <TextLink>Learn More About The Monarco</TextLink>
          </div>
        </div>
      </Container>
    </Section>
  )
}
