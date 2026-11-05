import { Container, Section } from "@/components/layout"
import { BodyLarge, DotLabel } from "@/components/typography"
import { asset } from "@/lib/assets"
import { ChapterHeading } from "@/sections/our-house/ChapterHeading"

const PRINCIPLES = [
  {
    image: "principle-intention",
    label: ["01", "INTENTION"],
    title: "Nothing Without Purpose",
    body: "We believe in doing fewer things better. Every experience, interaction and object should have a reason to exist.",
  },
  {
    image: "principle-craft",
    label: ["02", "CRAFT"],
    title: "The Details are the Difference",
    body: "From the intelligence behind a Recovery Read to the materials that meet the hand, we believe quality is experienced in the smallest details.",
  },
  {
    image: "principle-longevity",
    label: ["03", "LONGEVITY"],
    title: "Made for the Long View",
    body: "We favour what endures over what merely attracts attention. Recovery, with consistency and care, is not a temporary pursuit.",
  },
]

// Photo card with copy over a bottom fade. The flat tint is 0.5 below desktop, 0.25 on desktop.
const OVERLAY = "linear-gradient(180deg, rgb(29 27 24 / 0) 0%, rgb(29 27 24 / 0.8) 100%), linear-gradient(rgb(29 27 24 / var(--tint)), rgb(29 27 24 / var(--tint)))"

export function PrinciplesSection() {
  return (
    <Section className="bg-surface-inverse">
      <Container className="flex flex-col gap-5xl md:gap-3xl lg:gap-5xl">
        <div className="flex flex-col gap-sm lg:flex-row lg:items-end lg:gap-5xl">
          <ChapterHeading
            label={["CHAPTER III", "OUR PRINCIPLES"]}
            title="Considered in Every Detail"
            tone="light"
            // Figma's tablet heading group is 76px tall (24 + 40 text), which works out to a 12px gap.
            className="gap-2xs md:gap-sm lg:w-[648px] lg:shrink-0 lg:gap-xs"
            labelClassName="md:type-md lg:type-sm"
          />
          {/* Figma fixes this box at 60px on mobile; the third line overflows it. */}
          <BodyLarge className="h-[60px] md:h-auto lg:flex-1 lg:pb-xs">
            Our principles are deliberate. They guide what we create, how we create it and the experience we wish to leave behind.
          </BodyLarge>
        </div>
        <div className="flex flex-col gap-md lg:flex-row lg:gap-2xl">
          {PRINCIPLES.map((p) => (
            <article
              key={p.title}
              className="relative flex h-[267px] flex-col justify-between overflow-hidden rounded-lg bg-surface-contrast p-md [--tint:0.5] md:h-[250px] lg:h-[420px] lg:flex-1 lg:p-xl lg:[--tint:0.25]"
            >
              <img src={asset(`assets/${p.image}.webp`)} alt="" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0" style={{ background: OVERLAY }} />
              <DotLabel items={p.label} className="relative text-text-primary" />
              <div className="relative flex flex-col gap-2xs lg:gap-xs">
                <h3 className="type-h5 text-text-primary md:type-h6 lg:type-h5">{p.title}</h3>
                <p className="type-md text-text-secondary">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
