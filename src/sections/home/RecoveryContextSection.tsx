import { Backdrop, Section, Split, SplitBody, SplitIntro } from "@/components/layout"
import { asset } from "@/lib/assets"
import { cn } from "@/lib/utils"

const SCENARIOS = [
  { label: "Late Night", score: 58, image: "scene-late-night" },
  { label: "Long Flight", score: 64, image: "scene-long-flight" },
  { label: "Heavy Week", score: 76, image: "scene-heavy-week" },
  { label: "Hard Training", score: 76, image: "scene-hard-training" },
  { label: "Early Start", score: 74, image: "scene-early-start" },
]

export function RecoveryContextSection() {
  return (
    <Section className="bg-surface-default">
      <Backdrop
        src={asset("assets/context-bg.webp")}
        overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.5) 100%)"
      />
      <Split className="lg:items-center">
        <SplitIntro className="gap-sm">
          <h2 className="type-h2 text-text-primary">Different Days Leave Different Signals</h2>
          <p className="type-lg text-text-secondary lg:w-[426px]">Late nights, long flights, heavy weeks. Your face carries a record of how you live.</p>
        </SplitIntro>
        <SplitBody className="-mr-container flex gap-xs overflow-x-auto md:mr-0 md:gap-sm md:overflow-visible lg:gap-md">
          {SCENARIOS.map((s, i) => (
            <article
              key={s.label}
              className={cn(
                "flex w-[133px] shrink-0 flex-col overflow-hidden rounded-md border md:w-auto md:flex-1 lg:rounded-lg",
                i === 0 ? "border-border-action" : "border-border-glass/50",
              )}
            >
              <img src={asset(`assets/${s.image}.webp`)} alt="" className="h-[120px] w-full object-cover lg:aspect-square lg:h-auto" />
              <div className="flex flex-col items-center gap-xs bg-surface-default px-md py-sm md:px-sm lg:gap-2xs lg:px-md text-center text-text-primary">
                <p className="type-md whitespace-nowrap">{s.label}</p>
                <p className="type-lg font-medium md:type-h6">{s.score}</p>
              </div>
            </article>
          ))}
        </SplitBody>
      </Split>
    </Section>
  )
}
