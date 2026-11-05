import { ArrowButton } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"

export function CaviarRitualSection() {
  return (
    <Section className="bg-surface-default">
      <Backdrop
        src={asset("assets/caviar-ritual.webp")}
        // Crops found by searching object-position against the Figma frame exports.
        imgClassName="object-[70%_50%] md:object-[65%_50%] lg:object-center"
        overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.7) 39.71%, rgb(29 27 24 / 0.3) 100%)"
      />
      <Container>
        <div className="flex flex-col items-start gap-3xl md:w-[420px] lg:w-[450px]">
          <div className="flex flex-col gap-md md:gap-xl">
            <div className="flex flex-col gap-sm">
              <div className="flex flex-col gap-2xs lg:gap-xs">
                <Eyebrow tone="action" className="md:type-md">THE EYE RITUAL</Eyebrow>
                <h2 className="type-h2 whitespace-pre-line text-text-primary">{"THE RITUAL\nBEGINS HERE"}</h2>
              </div>
              <p className="type-lg text-text-secondary md:w-[408px]">A precision eye-care ritual, created for moments of intentional restoration.</p>
            </div>
            <div className="flex flex-col gap-2xs md:gap-xs">
              <p className="type-h4 font-medium text-text-primary">£125</p>
              <p className="type-md text-text-secondary">Members Only / Limited Pre-Order Drop</p>
            </div>
          </div>
          <ArrowButton>Discover The Caviar Eye Patch</ArrowButton>
        </div>
      </Container>
    </Section>
  )
}
