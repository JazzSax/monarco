import { ArrowButton } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"

export function LegacyCloseSection() {
  return (
    // Section/Medium padding (32 / 48 / 64). The fill is a dark marble under a 0.9 / 0.8 wash.
    <Section className="bg-surface-default py-section-md">
      <Backdrop src={asset("assets/marble.webp")} overlay="linear-gradient(90deg, rgb(29 27 24 / 0.9) 0%, rgb(29 27 24 / 0.8) 79.11%, rgb(29 27 24 / 0.8) 100%)" />
      {/* Figma fixes the mobile content box at 256px and centres the 200px of content in it. */}
      <Container className="flex h-[256px] flex-col items-center justify-center gap-3xl text-center md:h-auto">
        <div className="flex flex-col items-center gap-2xs lg:gap-xs">
          <Eyebrow tone="action">MONARCO</Eyebrow>
          <div className="flex w-[342px] flex-col gap-xs md:w-[566px] lg:w-[679px]">
            <h2 className="type-h2 text-text-primary">Every Legacy Begins Somewhere</h2>
            <p className="type-h6 font-medium text-text-primary md:type-lg lg:type-h6">Restore. Then be Great.</p>
          </div>
        </div>
        <ArrowButton>Begin Your Recovery Read</ArrowButton>
      </Container>
    </Section>
  )
}
