import { Backdrop, Container, Rule, Section } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"

export function MenPhilosophySection() {
  return (
    <Section className="bg-surface-default">
      <Backdrop src={asset("assets/men-philosophy.webp")} overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.5) 50%, rgb(29 27 24 / 0.5) 100%)" />
      <Container>
        <div className="flex flex-col gap-xl md:w-[340px] lg:w-[450px]">
          <div className="flex flex-col gap-sm">
            <div className="flex flex-col gap-xs">
              <div className="flex flex-col gap-2xs lg:gap-xs">
                <Eyebrow tone="action">THE PHILOSOPHY</Eyebrow>
                <h2 className="type-h2 whitespace-pre-line text-text-primary">{"The World Sees\nWhat You Do"}</h2>
              </div>
              <p className="type-h6 font-medium text-text-primary">Rarely What It Takes.</p>
            </div>
            <p className="type-lg text-text-secondary md:w-[256px] lg:w-[380px]">There is more to a man than is work. His achievements. His responsibilities. The pressure he carries.</p>
            <p className="type-lg text-text-secondary md:w-[256px] lg:w-[380px]">Monarco was created for the man behind the performance.</p>
          </div>
          {/* A 100px gold stroke on a zero-height layer: it takes no layout space. */}
          <Rule className="h-[1.5px] w-[100px] bg-surface-action" />
          <p className="type-h6 font-medium text-text-primary">Restore, Then Be Great.</p>
        </div>
      </Container>
    </Section>
  )
}
