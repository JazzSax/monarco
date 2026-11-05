import { ArrowButton } from "@/components/cta"
import { Container, Section } from "@/components/layout"
import { asset } from "@/lib/assets"
import { ChapterHeading } from "@/sections/our-house/ChapterHeading"

export function PeopleSection() {
  return (
    <Section className="bg-surface-inverse">
      <Container className="flex flex-col gap-5xl lg:flex-row lg:items-center">
        <div className="flex flex-col items-start gap-3xl lg:w-[450px] lg:shrink-0">
          <div className="flex flex-col gap-sm">
            <ChapterHeading label={["CHAPTER V", "THE PEOPLE"]} title="What the World Doesn’t See" tone="light" titleClassName="w-[342px] md:w-auto lg:w-[365px]" />
            <div className="flex flex-col gap-xl md:gap-md lg:gap-xl">
              <div className="type-lg flex flex-col gap-sm text-text-tertiary">
                <p>
                  Behind every achievement is a life rarely seen in full. The responsibility. The tension. The discipline. The moments of uncertainty. And the effort required to
                  continue.
                </p>
                <p>We believe these stories deserve to be told.</p>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="flex flex-col gap-2xs">
                  <p className="type-md font-medium text-text-action-secondary">THE FIRST 100</p>
                  <h3 className="type-h6 text-text-inverse">Different Lives. A Shared Understanding</h3>
                </div>
                <p className="type-md text-text-tertiary">An inaugural collection of men whose lives reflect the many forms of ambition.</p>
              </div>
            </div>
          </div>
          <ArrowButton to="/men-of-monarco">Explore Men of Monarco</ArrowButton>
        </div>
        {/* Figma's desktop image is 871px wide and runs 25px past the content edge. */}
        <img
          src={asset("assets/our-house-people.webp")}
          alt=""
          className="aspect-video w-full rounded-lg object-cover md:aspect-auto md:h-[392px] lg:h-[506px] lg:w-[871px] lg:shrink-0"
        />
      </Container>
    </Section>
  )
}
