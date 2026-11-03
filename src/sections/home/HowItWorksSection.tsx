import { ArrowButton } from "@/components/cta"
import { Section, Split, SplitBody, SplitIntro } from "@/components/layout"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"

const STEPS = [
  { n: "01", title: "Face Read", body: "Complete your private Recovery M.I. read.", image: "phone-face" },
  { n: "02", title: "Context", body: "Give your read context. A few considered questions about what sits behind the signals.", image: "phone-context" },
  { n: "03", title: "Understand", body: "Receive your private Recovery Read. Facial signals create a clearer understanding.", image: "phone-insights" },
]

export function HowItWorksSection() {
  return (
    <Section className="bg-surface-inverse">
      <Split>
        <SplitIntro className="gap-3xl md:flex-row lg:flex-col">
          <div className="flex flex-col gap-sm md:flex-1 lg:flex-none">
            <div className="flex flex-col gap-2xs lg:gap-xs">
              <Eyebrow>HOW IT WORKS</Eyebrow>
              <SectionHeading>{"A Simple Journey\nA Clearer You"}</SectionHeading>
            </div>
            <BodyLarge className="w-[224px] md:hidden lg:block lg:w-auto">From capture to clarity in just a few minutes.</BodyLarge>
          </div>
          <div className="flex flex-col items-start gap-3xl md:flex-1 lg:flex-none">
            <BodyLarge className="hidden md:block lg:hidden">From capture to clarity in just a few minutes.</BodyLarge>
            <ArrowButton>Begin Private Read</ArrowButton>
          </div>
        </SplitIntro>

        <SplitBody className="flex flex-col gap-4xl md:flex-row md:gap-md lg:gap-2xl">
          {STEPS.map((step) => (
            <article key={step.n} className="flex min-w-0 flex-1 flex-col justify-between gap-md md:gap-xl lg:gap-md">
              <div className="flex flex-col gap-md">
                <p className="type-lg font-medium text-text-action-secondary md:type-md">{step.n}</p>
                <div className="flex flex-col gap-2xs lg:gap-xs">
                  <h3 className="type-h4 text-text-inverse md:type-h6 lg:type-h4">{step.title}</h3>
                  <p className="type-md text-text-tertiary">{step.body}</p>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-lg bg-surface-contrast">
                <img src={`/assets/${step.image}.webp`} alt="" className="absolute top-[-36px] left-1/2 lg:top-[-31px] h-[430px] w-[322px] max-w-none -translate-x-1/2" />
              </div>
            </article>
          ))}
        </SplitBody>
      </Split>
    </Section>
  )
}
