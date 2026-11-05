import { Container, Section } from "@/components/layout"
import { asset } from "@/lib/assets"
import { StoryCopy } from "@/sections/solis/StoryCopy"

export function PerformanceStorySection() {
  return (
    <Section className="bg-surface-inverse">
      {/* Copy first below desktop; image on the left at desktop. */}
      <Container className="flex flex-col gap-5xl lg:flex-row-reverse lg:items-center">
        <div className="lg:flex-1">
          <StoryCopy eyebrow="THE MAN BEHIND THE PERFORMANCE" title="The World Sees What You Do" subtitle="Rarely what it takes.">
            Solis was created for the moments in between. A considered light therapy ritual to help you look and feel more like yourself, every day.
          </StoryCopy>
        </div>
        {/* Crops found with scripts/tune-crop.mjs; Figma's mobile image is 357px wide. */}
        <img
          src={asset("assets/solis-story.webp")}
          alt=""
          className="h-[201px] w-[357px] rounded-lg object-cover object-[50%_15%] md:h-[392px] md:w-full md:object-[50%_25%] lg:aspect-auto lg:h-[486px] lg:w-0 lg:flex-1 lg:object-center"
        />

      </Container>
    </Section>
  )
}
