import { ArrowButton } from "@/components/cta"
import { Section, Split, SplitBody, SplitIntro } from "@/components/layout"
import { MetricsList } from "@/components/metrics"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"

export function RecoveryReadSection() {
  return (
    <Section className="bg-surface-inverse">
      <Split className="gap-6xl md:gap-5xl">
        <SplitIntro className="gap-3xl">
          <div className="flex flex-col gap-sm">
            <div className="flex flex-col gap-2xs lg:gap-xs">
              <Eyebrow>YOUR RECOVERY READ</Eyebrow>
              <SectionHeading className="lg:w-[396px]">A Clearer Perspective on Your Recovery</SectionHeading>
            </div>
            <BodyLarge>Your facial signals, combined with context, become a private recovery read — designed to give you clarity, not confusion.</BodyLarge>
          </div>
          <div>
            <ArrowButton>See What My Face Says</ArrowButton>
          </div>
        </SplitIntro>

        <SplitBody className="flex flex-col gap-md md:flex-row lg:gap-2xl">
          <div className="flex flex-col gap-md rounded-lg bg-surface-sunken p-md md:flex-1">
            <div className="flex flex-col items-center gap-xs text-center md:gap-sm">
              <p className="type-md font-medium text-text-action md:type-sm">YOUR RECOVERY READ</p>
              <div>
                <p className="type-h1 font-medium text-text-primary md:type-h2 md:font-semibold">72</p>
                <p className="type-sm text-text-secondary">Recovery Index</p>
              </div>
              <span className="type-md rounded-full bg-surface-action px-lg py-2xs text-text-inverse md:type-sm">Moderate</span>
            </div>
            <MetricsList />
          </div>

          <div className="relative flex h-[358px] flex-col justify-end overflow-hidden rounded-lg p-md md:h-auto md:flex-1">
            <img src="/assets/eye.webp" alt="" className="absolute inset-0 size-full object-cover" />
            <div className="relative flex flex-col gap-xs rounded-md bg-surface-contrast p-md">
              <p className="type-h5 font-medium text-text-inverse md:type-h6 lg:type-h5">This is Where You are Today</p>
              <p className="type-sm text-text-tertiary">Your facial signals and context reveal a clearer understanding of your current recovery state.</p>
            </div>
          </div>
        </SplitBody>
      </Split>
    </Section>
  )
}
