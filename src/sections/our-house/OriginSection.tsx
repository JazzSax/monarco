import { Container, Section } from "@/components/layout"
import { asset } from "@/lib/assets"
import { ChapterHeading } from "@/sections/our-house/ChapterHeading"

export function OriginSection() {
  return (
    <Section className="bg-surface-inverse">
      <Container className="flex flex-col gap-5xl lg:flex-row lg:items-center">
        <div className="flex w-[342px] flex-col gap-sm md:w-auto lg:w-[450px] lg:shrink-0">
          <div className="flex flex-col gap-xs">
            <ChapterHeading label={["CHAPTER I", "THE ORIGIN"]} title="The World Sees the Achievement" tone="light" titleClassName="lg:w-[365px]" />
            <p className="type-h6 font-medium text-text-tertiary">Rarely what it takes.</p>
          </div>
          <div className="flex flex-col gap-xl md:gap-md lg:gap-xl">
            <div className="type-lg flex flex-col gap-sm text-text-tertiary">
              <p>The early mornings. The decisions made alone. The responsibilities carried. The expectations that seldom ease.</p>
              <p>A life of ambition asks much of a man.</p>
              <p>
                Yet while the world has become increasingly interested in performance, comparatively little attention is given to what it takes to sustain it. Monarco was
                founded on a simple belief.
              </p>
            </div>
            <p className="type-lg font-medium text-text-action-secondary lg:type-h6">The pursuit of greatness should never come at the expense of the man pursuing it.</p>
          </div>
        </div>
        <img
          src={asset("assets/our-house-origin.webp")}
          alt=""
          // Mobile crop (top-aligned) found with scripts/tune-crop.mjs.
          className="aspect-video w-full rounded-lg object-cover object-top md:aspect-auto md:h-[392px] md:object-center lg:h-[550px] lg:w-0 lg:flex-1"
        />
      </Container>
    </Section>
  )
}
