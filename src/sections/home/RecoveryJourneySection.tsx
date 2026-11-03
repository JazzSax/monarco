import { SandCard } from "@/components/cards"
import { Backdrop, Section, Split, SplitBody, SplitIntro } from "@/components/layout"
import { asset } from "@/lib/assets"

const STEPS = [
  { n: "01", title: "Read", body: "Recovery M.I. Understand your current recovery." },
  { n: "02", title: "Restore", body: "Solis. A considered light ritual." },
  { n: "03", title: "Return", body: "Complete another Recovery Read." },
  { n: "04", title: "Understand", body: "See what changes over time." },
]

export function RecoveryJourneySection() {
  return (
    <Section className="bg-surface-default shadow-[inset_0_1px_0_var(--border-default),inset_0_-1px_0_var(--border-default)]">
      <Backdrop src={asset("assets/marble.webp")} overlay="rgb(29 27 24 / 0.8)" />
      <Split>
        <SplitIntro className="gap-sm">
          <h2 className="type-h2 text-text-primary lg:w-[296px]">Read. Restore. Return.</h2>
          {/* Separate lines with Figma's 4px paragraph spacing, except on tablet where they run together. */}
          <p className="type-lg flex flex-col gap-2xs text-text-secondary md:block lg:flex">
            <span>A complete recovery ecosystem. </span>
            <span>Intelligence guides your rituals. </span>
            <span>Returning shows what changes.</span>
          </p>
        </SplitIntro>
        <SplitBody className="grid grid-cols-2 gap-xs lg:flex lg:gap-md">
          {STEPS.map((step) => (
            <SandCard key={step.n} className="flex-1 gap-3xl p-md md:gap-xl lg:gap-4xl lg:p-xl">
              <p className="type-lg font-medium text-text-action-secondary md:type-md">{step.n}</p>
              <div className="flex flex-col gap-2xs lg:gap-xs">
                <h3 className="type-h5 text-text-inverse md:type-h6 lg:type-h4">{step.title}</h3>
                <p className="type-md text-text-tertiary">{step.body}</p>
              </div>
            </SandCard>
          ))}
        </SplitBody>
      </Split>
    </Section>
  )
}
