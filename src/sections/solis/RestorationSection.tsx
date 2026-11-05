import type { ReactNode } from "react"
import { ArrowButton } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"
import { ImageCard } from "@/sections/solis/ImageCard"

const BENEFITS = [
  { image: "benefit-clearer", title: "Clearer", description: "Supports a clearer, more even-looking complexion.", descriptionClassName: "lg:w-[182px]" },
  { image: "benefit-refinement", title: "Refinement", description: "Helps reduce the appearance of fine lines and signs of ageing." },
  { image: "benefit-consistency", title: "Consistency", description: "A simple, ten-minute ritual built around your routine.", descriptionClassName: "lg:w-[168px]" },
]

const STEPS = [
  { image: "step-prepare", title: "Prepare", description: "Cleanse and prepare your skin." },
  { image: "step-begin", title: "Begin", description: "Position Solis and select your settings." },
  { image: "step-restore", title: "Restore", description: "Enjoy a 10-minute treatment session." },
  { image: "step-return", title: "Return", description: "Continue with your day, on your terms." },
]

/** Intro + card row. The intro stacks on mobile and desktop; on tablet the heading sits beside the copy and button. */
function Block({
  eyebrow,
  eyebrowClassName,
  title,
  intro,
  action,
  children,
}: {
  eyebrow: string
  eyebrowClassName?: string
  title: string
  intro: string
  action: string
  children: ReactNode
}) {
  return (
    <Section>
      <Container className="flex flex-col gap-5xl lg:flex-row">
        <div className="flex w-[267px] flex-col md:grid md:w-auto md:grid-cols-2 md:content-start md:gap-x-3xl lg:flex lg:w-[450px] lg:shrink-0">
          <div className="flex flex-col gap-2xs md:row-span-2 lg:gap-xs">
            <Eyebrow tone="action" className={eyebrowClassName}>{eyebrow}</Eyebrow>
            <h2 className="type-h2 whitespace-pre-line text-text-primary">{title}</h2>
          </div>
          <p className="type-lg mt-sm text-text-secondary md:mt-0 lg:mt-sm">{intro}</p>
          <div className="mt-3xl">
            <ArrowButton>{action}</ArrowButton>
          </div>
        </div>
        <div className="lg:flex-1">{children}</div>
      </Container>
    </Section>
  )
}

export function RestorationSection() {
  return (
    <div className="relative overflow-hidden bg-surface-default">
      <Backdrop src={asset("assets/marble.webp")} overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.8) 50%, #1d1b18 100%)" />
      <Block
        eyebrow="THE ART OF RESTORATION"
        eyebrowClassName="md:type-md lg:type-sm"
        title={"A Clearer\nStronger You"}
        intro="Solis uses four wavelengths of light to support your skin’s natural processe, helping you look clearer, more refined and more like yourself."
        action="Explore The Benefits"
      >
        <div className="grid gap-md md:grid-cols-3 lg:gap-2xl">
          {BENEFITS.map((b, i) => (
            <ImageCard key={b.title} variant="benefit" number={`0${i + 1}`} {...b} image={asset(`assets/${b.image}.webp`)} />
          ))}
        </div>
      </Block>
      <Block eyebrow="BEFORE WHAT’S NEXT" title={"Ten Minutes\nA Different Your"} intro="A straightforward ritual, designed to fit into your day. Wherever your are." action="Watch How It Works">
        <div className="grid grid-cols-2 gap-xs md:grid-cols-4 lg:gap-md">
          {STEPS.map((s, i) => (
            <ImageCard key={s.title} variant="step" number={`0${i + 1}`} {...s} image={asset(`assets/${s.image}.webp`)} />
          ))}
        </div>
      </Block>
    </div>
  )
}
