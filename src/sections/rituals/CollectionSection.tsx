import { StatusBadge } from "@/components/cards"
import { ArrowButton } from "@/components/cta"
import { Container, Section } from "@/components/layout"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"
import { asset } from "@/lib/assets"
import { RitualCard } from "@/sections/rituals/RitualCard"

const HOUSE = <StatusBadge className="self-start bg-surface-action text-text-inverse">House Exlusive</StatusBadge>
const OPEN = <StatusBadge className="self-start bg-surface-action-secondary text-text-primary">Open Access</StatusBadge>

const CATEGORIES = [
  { image: "ritual-eye", badge: HOUSE, title: "Eye Rituals", description: "Targeted formulations for considered eye-care rituals.", link: "Explore Eye Rituals" },
  { image: "ritual-face", badge: HOUSE, title: "Face Rituals", description: "Essential formulations for daily recovery.", link: "Explore Face Rituals" },
  { image: "ritual-body", badge: HOUSE, title: "Body Rituals", description: "Everyday body care, elevated through experience.", link: "Explore Body Rituals" },
  { image: "ritual-light", badge: OPEN, title: "Light Rituals", description: "Monarco Solis. A considered light-therapy ritual.", link: "Explore Solis" },
]

export function CollectionSection() {
  return (
    // Target of the hero's "Explore The Collection" (prototype: Scroll to).
    <Section id="collection" className="bg-surface-inverse">
      <Container className="flex flex-col gap-5xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-3xl">
          <div className="flex flex-col gap-sm lg:w-[704px]">
            <div className="flex flex-col gap-2xs lg:gap-xs">
              <Eyebrow className="md:type-md">THE COLLECTION</Eyebrow>
              <SectionHeading>Considered Essentials</SectionHeading>
            </div>
            <BodyLarge>
              A curated collection of rituals for the face, body and moments of restoration. Exclusively for Monarco House Members, with Solis available to all.
            </BodyLarge>
          </div>
          <ArrowButton className="hidden lg:inline-flex">View All Products</ArrowButton>
        </div>
        {/* Below desktop the button moves under the cards. */}
        <div className="flex flex-col gap-3xl lg:contents">
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <RitualCard key={c.title} variant="category" {...c} image={asset(`assets/${c.image}.webp`)} />
            ))}
          </div>
          <div className="lg:hidden">
            {/* Figma's tablet instance is 44px tall, 4px shorter than the hero button. */}
            <ArrowButton className="md:py-[10px]">View All Products</ArrowButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}
