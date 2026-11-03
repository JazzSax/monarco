import { ArrowButton } from "@/components/cta"
import { Section, Split, SplitBody, SplitIntro } from "@/components/layout"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"
import { asset } from "@/lib/assets"

export function InsideTheHouseSection() {
  return (
    <Section className="bg-surface-inverse">
      <Split>
        <SplitIntro className="gap-3xl">
          <div className="flex flex-col gap-sm">
            <div className="flex flex-col gap-2xs lg:gap-xs">
              <Eyebrow className="type-md md:type-sm">INSIDE THE HOUSE</Eyebrow>
              <SectionHeading className="md:whitespace-normal lg:whitespace-pre-line">{"Your Recovery\nin Perspective"}</SectionHeading>
            </div>
            <BodyLarge>See what's happening now, understand how it changes and get personalised recommendations to help you perform and recover at your best.</BodyLarge>
          </div>
          <div className="flex flex-col items-start gap-sm md:gap-md">
            <ArrowButton>Begin My Read</ArrowButton>
            <p className="type-sm w-[300px] text-text-tertiary md:w-auto">A clear, personalised view of your recovery and what to do next.</p>
          </div>
        </SplitIntro>
        <SplitBody className="relative h-[258px] overflow-hidden rounded-lg bg-surface-contrast md:h-[500px] lg:h-[441px]">
          <img
            src={asset("assets/dashboard.webp")}
            alt="Recovery dashboard preview"
            className="absolute top-md left-md h-[246px] w-[353px] max-w-none rounded-md md:h-[493px] md:w-[707px] lg:top-xl lg:left-xl lg:h-[590px] lg:w-[830px]"
          />
        </SplitBody>
      </Split>
    </Section>
  )
}
