import { Container, Section } from "@/components/layout"
import { asset } from "@/lib/assets"
import { RitualCard } from "@/sections/rituals/RitualCard"

const DETAILS = [
  {
    image: "detail-formulation",
    title: "The Formulation",
    description: "A considered blend of caviar extract, peptides and hydrating actives to support the delicate eye area.",
    link: "View Ingredients",
  },
  {
    image: "detail-experience",
    title: "The Experience",
    description: "A cooling, restorative ritual for moments that matter. Designed to fit effortlessly into your routine.",
    link: "How to Use",
  },
  {
    image: "detail-craftsmanship",
    title: "The Craftsmanship",
    description: "Developed with exceptional ingredients, presented in a heavy glass jar. A ritual worthy of the House.",
    link: "Our Approach",
  },
]

export function RitualDetailsSection() {
  return (
    <Section className="bg-surface-inverse">
      <Container className="grid gap-md md:grid-cols-3">
        {DETAILS.map((d) => (
          <RitualCard key={d.title} variant="detail" {...d} image={asset(`assets/${d.image}.webp`)} />
        ))}
      </Container>
    </Section>
  )
}
