import { Fragment } from "react"
import { ArrowButton } from "@/components/cta"
import { Backdrop, Container, Rule, Section } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"

const QUESTIONS = ["Who are you ?", "What drives you?", "What does recovery mean to you?"]

export function ApplicationSection() {
  return (
    // Section/Small on top, Section/Large below (24 / 32 / 40 and 40 / 64 / 96).
    <Section className="bg-surface-inverse pt-section-sm pb-section">
      <Container>
        <div className="relative flex flex-col gap-xl overflow-hidden rounded-lg p-md md:gap-3xl md:p-xl lg:flex-row lg:gap-5xl lg:p-3xl">
          <Backdrop src={asset("assets/marble.webp")} overlay="linear-gradient(90deg, rgb(29 27 24 / 0.9) 0%, rgb(29 27 24 / 0.8) 79.11%, rgb(29 27 24 / 0.8) 100%)" />
          <div className="relative flex flex-col gap-sm lg:flex-1">
            <div className="flex flex-col gap-2xs lg:gap-xs">
              <Eyebrow tone="action">THE APPLICATION</Eyebrow>
              <h2 className="type-h2 text-text-primary md:w-[454px] lg:w-auto">Every Man has a Story. We’d Like to Hear Yours</h2>
            </div>
            {/* Copy as designed, including "Appromaximately". */}
            <p className="type-lg text-text-secondary">We’re inviting men who understand ambition, responsibility and recovery</p>
            <p className="type-lg text-text-secondary">Tell us why you’d like to represent The House. Three questions. Appromaximately three minutes.</p>
          </div>
          <div className="relative flex flex-col items-start gap-3xl lg:flex-1">
            <div className="flex w-full flex-col gap-xl md:gap-md lg:gap-xl">
              <h3 className="type-h4 text-text-primary md:type-h5 lg:type-h4">The Questions</h3>
              <div className="flex flex-col gap-lg md:gap-md lg:gap-lg">
                {QUESTIONS.map((q, i) => (
                  <Fragment key={q}>
                    <p className="flex items-start gap-xs">
                      <span className="type-sm font-medium text-text-action">{`0${i + 1}/`}</span>
                      <span className="type-h6 font-medium text-text-secondary">{q}</span>
                    </p>
                    <Rule className="h-px bg-border-subtle" />
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-md">
              <ArrowButton>Tell Your Story</ArrowButton>
              <div className="flex flex-col gap-2xs">
                <p className="type-md font-medium text-text-primary md:type-lg lg:type-md">Three Minutes, Every Story Considered</p>
                <p className="type-caption font-medium text-text-secondary md:type-sm md:font-normal lg:type-caption lg:font-medium">Selection not guaranteed no purchase required.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
