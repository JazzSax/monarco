import { Backdrop, Container, Section } from "@/components/layout"
import { asset } from "@/lib/assets"
import { ChapterHeading } from "@/sections/our-house/ChapterHeading"

export function PhilosophySection() {
  return (
    // Target of the hero's "Discover Our Philosophy" (prototype: Scroll to). Mobile overlay is 0.8 / 0.4.
    <Section id="philosophy" className="bg-surface-default [--mid:0.8] [--end:0.4] md:[--mid:0.7] md:[--end:0.3]">
      <Backdrop
        src={asset("assets/our-house-philosophy.webp")}
        // Mobile crop found with scripts/tune-crop.mjs.
        imgClassName="object-[76%_50%] md:object-center"
        overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / var(--mid)) 39.71%, rgb(29 27 24 / var(--end)) 100%)"
      />
      <Container>
        <div className="flex w-[267px] flex-col gap-sm md:w-auto lg:w-[450px]">
          <div className="flex flex-col gap-xs">
            <ChapterHeading
              label={["CHAPTER II", "OUR PHILOSOPHY"]}
              title={"Restore\nThen be Great"}
              tone="dark"
              className="gap-xs md:gap-2xs lg:gap-xs"
              labelClassName="type-md md:type-sm"
            />
            <p className="type-h6 font-medium whitespace-pre-line text-text-primary">{"Ambition has its place.\nSo does stillness."}</p>
          </div>
          <div className="flex flex-col gap-2xl">
            <div className="type-lg flex flex-col gap-sm text-text-secondary md:gap-md">
              {/* Hard line break after "himself", as in Figma. */}
              <p className="whitespace-pre-line">{"We believe that how a man restores himself\ndeserves the same attention as how he applies himself."}</p>
              <p>Recovery is not something reserved for when the work is finished. It belongs within the work of living well.</p>
            </div>
            <p className="type-h6 font-medium text-text-action md:type-lg lg:type-h6">Recovery is Luxury</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
