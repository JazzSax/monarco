import { Link } from "react-router-dom"
import { ArrowButton } from "@/components/cta"
import { Backdrop, Section, Split, SplitBody, SplitIntro } from "@/components/layout"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"

export function MembersOnlySection() {
  return (
    <Section className="bg-surface-inverse">
      <Split>
        <SplitIntro className="gap-3xl">
          <div className="flex flex-col gap-sm">
            <div className="flex flex-col gap-2xs lg:gap-xs">
              <Eyebrow className="type-md md:type-sm">BEYOND INTELLIGENCE</Eyebrow>
              <SectionHeading className="whitespace-normal md:whitespace-pre-line">{"Members-only\nAccess"}</SectionHeading>
            </div>
            <BodyLarge>As a member, you'll get exclusive access to limited product drops, priority access to future releases and invitations to selected events.</BodyLarge>
          </div>
          <div>
            <ArrowButton>Explore Members’ Drops</ArrowButton>
          </div>
        </SplitIntro>
        <SplitBody className="relative flex h-[358px] items-end justify-end overflow-hidden rounded-lg p-md md:h-[392px] lg:h-[441px] lg:p-xl">
          <Backdrop src="/assets/caviar-house.webp" overlay="rgb(29 27 24 / 0.25)" />
          <div className="relative flex w-full flex-col gap-xl rounded-md bg-surface-sunken p-md md:w-[320px] lg:w-[370px] lg:p-xl">
            <div className="flex flex-col gap-sm">
              <div className="flex flex-col gap-xs">
                <p className="type-caption font-medium text-text-action">EXCLUSIVE TO MEMBERS</p>
                <h3 className="type-h5 text-[#f6f3eb]">The Caviar Eye Patch</h3>
              </div>
              <p className="type-md text-text-secondary">A precision skincare treatment designed to support your recovery rituals. Available through members-only drops.</p>
            </div>
            <Link to="#" className="type-sm font-medium text-text-secondary underline underline-offset-[0.5em]">
              View Upcoming Drops
            </Link>
          </div>
        </SplitBody>
      </Split>
    </Section>
  )
}
