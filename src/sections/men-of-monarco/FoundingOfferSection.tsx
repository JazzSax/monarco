import { SandCard } from "@/components/cards"
import { ArrowButton } from "@/components/cta"
import { Container, Rule, Section } from "@/components/layout"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"
import { asset } from "@/lib/assets"

// Copy as designed, including "theraphy".
const BENEFITS = [
  { title: "Twelve Months Inside The House", body: "A complimentary year of House membership following your Recovery M.I. read." },
  { title: "The Solis Experience", body: "The opportunity to receive Monarco Solis, our signature LED light theraphy mask." },
  { title: "The First Drops", body: "Priority access to selected members-only skincare releases." },
  { title: "A Private Recovery Experience", body: "Invitation to curated recovery experiences with selected partners." },
]

export function FoundingOfferSection() {
  return (
    <Section className="bg-surface-inverse">
      <Container className="flex flex-col gap-xl">
        <div className="flex flex-col gap-md md:gap-xl lg:gap-5xl">
          <div className="flex flex-col gap-5xl lg:flex-row lg:items-center">
            <div className="flex flex-col items-start gap-3xl lg:w-[450px] lg:shrink-0">
              <div className="flex flex-col gap-sm">
                <div className="flex flex-col gap-xs">
                  <div className="flex flex-col gap-2xs lg:gap-xs">
                    <Eyebrow>FOUNDING OFFER</Eyebrow>
                    <SectionHeading>Represent The House</SectionHeading>
                  </div>
                  <p className="type-h6 font-medium text-text-inverse">More Than Membership</p>
                </div>
                <BodyLarge>An invitation to experience Monarco and represent a philosophy built around recovery.</BodyLarge>
                <BodyLarge>Selected men may receive membership, signature products and curated experiences.</BodyLarge>
              </div>
              <ArrowButton>Tell Your Story</ArrowButton>
            </div>
            <div className="relative flex h-[201px] items-end justify-end overflow-hidden rounded-lg p-md md:h-[392px] md:p-xl lg:h-[326px] lg:flex-1">
              <img src={asset("assets/men-founding.webp")} alt="" className="absolute inset-0 size-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgb(29 27 24 / 0) 0%, rgb(29 27 24 / 0.8) 100%), linear-gradient(rgb(29 27 24 / 0.25), rgb(29 27 24 / 0.25))" }}
              />
              <p className="type-sm relative text-right font-medium text-text-action">
                A Different Kind <br className="hidden lg:inline" />
                of Community
              </p>
            </div>
          </div>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4 lg:gap-2xl">
            {BENEFITS.map((b, i) => (
              <SandCard key={b.title} className="gap-3xl p-md lg:gap-4xl lg:p-xl">
                <span className="type-lg font-medium text-text-action-secondary md:type-md">{`0${i + 1}`}</span>
                <div className="flex flex-col gap-2xs lg:gap-xs">
                  <h3 className="type-h5 text-text-inverse md:type-h6 lg:type-h4">{b.title}</h3>
                  <p className="type-md text-text-tertiary">{b.body}</p>
                </div>
              </SandCard>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-md lg:flex-row lg:items-end lg:gap-5xl">
          <div className="flex flex-col gap-xs lg:w-[598px] lg:shrink-0">
            <h3 className="type-h5 text-text-inverse md:type-h6">Why The Men of Monarco?</h3>
            <p className="type-md text-text-tertiary md:type-sm">
              Because a man is more than what he achieves. Selected men experience The House and represent a more considered approach to recovery.
            </p>
          </div>
          {/* Zero-height stroke; tablet and desktop keep 8px under it. */}
          <div className="md:pb-xs lg:flex-1">
            <Rule className="h-[1.5px] bg-border-strong" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
