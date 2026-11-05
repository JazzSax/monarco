import { Backdrop, Container, Section } from "@/components/layout"
import { DotLabel, SectionHeading } from "@/components/typography"
import { asset } from "@/lib/assets"

export function FutureSection() {
  return (
    // Light wash over the photo; mobile wash is 0.75 / 0.35, tablet and desktop 0.7 / 0.2.
    <Section className="bg-surface-contrast [--mid:0.75] [--end:0.35] md:[--mid:0.7] md:[--end:0.2]">
      <Backdrop
        src={asset("assets/our-house-future.webp")}
        // Mobile crop found with scripts/tune-crop.mjs.
        imgClassName="object-[70%_50%] md:object-center"
        overlay="linear-gradient(90deg, #e5ded1 0%, rgb(229 222 209 / var(--mid)) 50%, rgb(229 222 209 / var(--end)) 100%)"
      />
      <Container>
        <div className="flex w-[267px] flex-col gap-xl md:w-auto md:gap-md lg:w-[552px] lg:gap-3xl">
          <div className="flex flex-col gap-2xs lg:gap-xs">
            <DotLabel items={["CHAPTER VI", "THE FUTURE"]} className="text-text-action-secondary" />
            <div className="flex flex-col gap-sm">
              <SectionHeading>Built for What Endures</SectionHeading>
              <div className="type-lg flex flex-col gap-sm text-text-tertiary md:gap-xs lg:gap-sm">
                <p>Every house begins with an idea.</p>
                <p>Ours has a belief that recovery deserves a more meaningful place in the lives of men.</p>
                <p>We are building Monarco to bring together intelligence, considered rituals and a community that understands the value of returning attention to yourself.</p>
                <p>Our intention is not to create more noise around performance. It is to establish a different relationship with it.</p>
              </div>
            </div>
          </div>
          <p className="type-h6 font-medium text-text-action-secondary md:type-lg lg:type-h6">This is the House We are Building</p>
        </div>
      </Container>
    </Section>
  )
}
