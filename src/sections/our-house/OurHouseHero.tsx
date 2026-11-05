import { ArrowDown } from "lucide-react"
import { Backdrop, Container } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { Button } from "@/components/ui/button"
import { asset } from "@/lib/assets"

export function OurHouseHero() {
  return (
    // Shorter than the other heroes below desktop (518 / 600 / 980). Mobile overlay is 0.8 / 0.5.
    <section className="relative flex h-[518px] flex-col justify-end overflow-hidden bg-surface-default py-section [--mid:0.8] [--end:0.5] md:h-[600px] md:[--mid:0.5] md:[--end:0] lg:h-[980px] lg:justify-center lg:pt-[184px]">
      <Backdrop
        src={asset("assets/our-house-hero.webp")}
        overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / var(--mid)) 48.08%, rgb(29 27 24 / var(--end)) 100%)"
      />
      <Container>
        <div className="flex w-[267px] flex-col items-start gap-5xl md:w-[340px] md:gap-3xl lg:w-[450px] lg:gap-4xl">
          <div className="flex flex-col gap-lg">
            <div className="flex flex-col gap-2xs lg:gap-xs">
              <Eyebrow tone="action">OUR HOUSE</Eyebrow>
              <h1 className="type-h1 text-text-primary lg:w-[340px]">A Heritage in the Making</h1>
            </div>
            {/* Two paragraphs in Figma, 4px apart. */}
            <p className="type-lg text-text-secondary">
              <span className="block">For those who understand that greatness</span>
              <span className="mt-2xs block">is not simply achieved. It must be sustained.</span>
            </p>
          </div>
          {/* Prototype: "Scroll to" Chapter II. */}
          <Button asChild>
            <a href="#philosophy">
              Discover Our Philosophy
              <ArrowDown />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  )
}
