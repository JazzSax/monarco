import { ArrowRight } from "lucide-react"
import { TextLink } from "@/components/cta"
import { Container, Section } from "@/components/layout"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"
import { asset } from "@/lib/assets"

const PERSPECTIVES = [
  { image: "perspective-creative", title: "The Creative", subtitle: "The cost of creation" },
  { image: "perspective-builder", title: "The Builder", subtitle: "The weight of responsibility" },
  { image: "perspective-performer", title: "The Performer", subtitle: "The art of returning" },
]

// Mobile starts the fade at 0.16 instead of 0.
const OVERLAY = "linear-gradient(180deg, rgb(29 27 24 / var(--top)) 0%, rgb(29 27 24 / 0.8) 100%), linear-gradient(rgb(29 27 24 / 0.5), rgb(29 27 24 / 0.5))"

export function PerspectivesSection() {
  return (
    <Section className="bg-surface-inverse">
      <Container className="flex flex-col gap-5xl lg:flex-row">
        <div className="flex flex-col gap-sm md:flex-row md:items-end md:gap-3xl lg:w-[450px] lg:shrink-0 lg:flex-col lg:items-stretch lg:justify-end lg:gap-sm">
          <div className="flex flex-col gap-2xs md:w-[332px] md:shrink-0 lg:w-auto lg:gap-xs">
            <Eyebrow>THREE PERSPECTIVES</Eyebrow>
            {/* Figma's tablet H2 box is 696px wide inside a 332px column. */}
            <SectionHeading className="md:w-[696px] lg:w-auto">{"Different Men\nShared philosophy"}</SectionHeading>
          </div>
          <BodyLarge>Different ambitions. Different responsibilities. Different experiences of what it takes to sustain a high-output life.</BodyLarge>
        </div>
        <div className="grid gap-md md:grid-cols-3 lg:flex-1 lg:items-end lg:gap-2xl">
          {PERSPECTIVES.map((p) => (
            <article
              key={p.title}
              className="group relative flex h-[268.5px] flex-col justify-between overflow-hidden rounded-lg p-md [--top:0.16] md:h-[295.11px] md:[--top:0] lg:h-[308px] lg:px-xl lg:pt-xl lg:pb-sm"
            >
              {/* Prototype: hover zooms the photo in (1.07, measured against the prototype); copy and overlay stay put. */}
              <img
                src={asset(`assets/${p.image}.webp`)}
                alt=""
                className="absolute inset-0 size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.07] group-focus-within:scale-[1.07] motion-reduce:transition-none"
              />
              <div className="absolute inset-0" style={{ background: OVERLAY }} />
              <div className="relative flex flex-col gap-2xs lg:gap-xs">
                <h3 className="type-h5 text-text-primary md:type-h6 lg:type-h4">{p.title}</h3>
                <p className="type-md text-text-secondary italic md:type-sm md:font-medium lg:type-md lg:font-normal">{p.subtitle}</p>
              </div>
              {/* Figma's Small text-link Button: same Hover variant as every TextLink (scale 0.98, neutral-300, 200ms). */}
              <TextLink icon={<ArrowRight aria-hidden />} className="type-caption relative self-start py-2xs [&_svg]:size-3.5">
                Watch the Story
              </TextLink>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
