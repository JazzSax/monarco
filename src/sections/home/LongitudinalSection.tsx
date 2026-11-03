import { SandCard } from "@/components/cards"
import { Section, Split, SplitBody, SplitIntro } from "@/components/layout"
import { TimeRange, TrendChart } from "@/components/trend-chart"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"

const STATES = [
  { state: "Today", score: "72", purpose: "Your current state." },
  { state: "Return", score: "74", purpose: "Track change." },
  { state: "Compare", score: "76", purpose: "See patterns." },
  { state: "Refine", score: "—", purpose: "More insight." },
]

export function LongitudinalSection() {
  return (
    <Section className="bg-surface-inverse">
      <Split>
        <SplitIntro className="gap-sm">
          <div className="flex flex-col gap-2xs lg:gap-xs">
            <Eyebrow>OVER TIME</Eyebrow>
            <SectionHeading>One Read Gives You a Moment. Returning Gives You Context</SectionHeading>
          </div>
          <BodyLarge>Track change. Understand patterns. Refine your rituals over time.</BodyLarge>
        </SplitIntro>
        <SplitBody className="flex flex-col gap-xs md:gap-md">
          <SandCard className="gap-xl p-md lg:p-xl">
            <div className="flex items-center justify-between gap-md">
              <p className="type-sm font-medium text-text-tertiary">Recovery Index · Example Trend</p>
              <TimeRange />
            </div>
            <TrendChart plotClassName="h-[113px] md:h-[61px] lg:h-[82px]" />
          </SandCard>
          <div className="grid grid-cols-2 gap-xs md:flex md:gap-md">
            {STATES.map(({ state, score, purpose }) => (
              <SandCard key={state} className="flex-1 gap-2xs p-md md:gap-xs lg:p-xl">
                <p className="type-sm font-medium text-text-action-secondary">{state}</p>
                <p className="type-h5 font-medium text-text-inverse">{score}</p>
                <p className="type-sm text-text-tertiary">{purpose}</p>
              </SandCard>
            ))}
          </div>
        </SplitBody>
      </Split>
    </Section>
  )
}
