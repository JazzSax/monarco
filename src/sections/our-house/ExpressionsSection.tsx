import { Link } from "react-router-dom"
import { TextLink } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { DotLabel } from "@/components/typography"
import { asset } from "@/lib/assets"
import { cn } from "@/lib/utils"
import { ChapterHeading } from "@/sections/our-house/ChapterHeading"

// Descriptions are cut at three lines with an ellipsis in Figma; the visible copy is reproduced and clamped.
const EXPRESSIONS = [
  {
    image: "expression-recovery",
    label: ["01", "INTELLIGENCE"],
    title: "Recovery M.I",
    subtitle: "A Different Perspective",
    body: "What does your face say about your recovery? Our Monarco Intelligence experience offers a new perspective on visible recovery signals, bringing...",
    link: "Discover Recovery M.I.",
    to: "#",
  },
  {
    image: "expression-rituals",
    label: ["02", "RITUAL"],
    title: "Monarco Rituals",
    subtitle: "A Different Perspective",
    body: "Lorem ipsum dolor sit amet consectetur. Arcu nunc posuere potenti elit sit quam. Elementum morbi viverra vulputate congue ultrices dictum. P...",
    link: "Explore Our Rituals",
    to: "/rituals",
  },
  {
    image: "expression-objects",
    label: ["03", "OBJECTS"],
    title: "Monarco Objects",
    subtitle: "Purpose, Made Tangible",
    body: "From Monarco Solis to our skincare rituals, each expression is developed with an appreciation for function, material and experience. Nothing unnec...",
    link: "Discover Monarco Solis",
    to: "/solis",
    // Figma's mobile heading box on this card is 2px taller than the others (76 vs 74).
    headingClassName: "pb-[2px] md:pb-0",
  },
]

export function ExpressionsSection() {
  return (
    <Section className="bg-surface-default">
      <Backdrop
        src={asset("assets/our-house-philosophy.webp")}
        overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.8) 39.71%, rgb(29 27 24 / 0.5) 100%)"
      />
      <Container className="flex flex-col gap-5xl">
        <div className="flex flex-col gap-sm md:flex-row md:gap-3xl lg:items-end lg:gap-5xl">
          <ChapterHeading
            label={["CHAPTER IV", "THE EXPRESSIONS"]}
            title={"One Philosophy\nMany Expressions"}
            tone="dark"
            dotClassName="bg-surface-action-secondary"
            className="md:w-[332px] md:shrink-0 lg:w-[648px]"
          />
          <div className="flex flex-col items-start gap-md md:flex-1">
            <p className="type-lg text-text-secondary">Monarco is built around the belief that understanding, practice and environment each have a role in recovery.</p>
            <TextLink>Explore The Expressions</TextLink>
          </div>
        </div>
        <div className="grid gap-md md:grid-cols-3 lg:gap-2xl">
          {EXPRESSIONS.map((e) => (
            <article
              key={e.title}
              // Prototype: hover turns the stroke gold. Figma's desktop stroke takes no layout space (outline); tablet and mobile strokes do (border).
              className="flex flex-col overflow-hidden rounded-lg border border-border-glass/50 bg-surface-default transition-colors duration-200 ease-out hover:border-border-action motion-reduce:transition-none lg:border-0 lg:outline-1 lg:-outline-offset-1 lg:outline-border-glass/50 lg:outline-solid lg:hover:outline-border-action"
            >
              <img src={asset(`assets/${e.image}.webp`)} alt="" className="h-[196px] w-full shrink-0 object-cover md:h-[164.5px] lg:h-[243px]" />
              <div className="flex flex-1 flex-col gap-xl px-md pt-sm pb-md lg:px-xl lg:py-md">
                <div className="flex flex-col gap-sm lg:gap-md">
                  <div className={cn("flex flex-col gap-xs md:gap-2xs lg:gap-xs", e.headingClassName)}>
                    <DotLabel items={e.label} className="text-text-action" />
                    <h3 className="type-h5 text-text-primary md:type-h6 lg:type-h5">{e.title}</h3>
                    <p className="type-md font-medium text-text-primary md:font-normal lg:font-medium">{e.subtitle}</p>
                  </div>
                  <p className="type-md line-clamp-3 text-text-secondary md:type-sm lg:type-md">{e.body}</p>
                </div>
                <Link
                  to={e.to}
                  className="type-sm mt-auto inline-flex h-5 items-center self-start font-medium text-text-secondary underline decoration-1 underline-offset-[0.5em] md:h-4 md:font-normal lg:type-caption lg:h-auto lg:py-2xs lg:text-text-primary"
                >
                  {e.link}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
