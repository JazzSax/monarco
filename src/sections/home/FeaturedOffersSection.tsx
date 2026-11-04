import { LockKeyhole } from "lucide-react"
import { ArrowButton, TextLink } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"

const CARD = "relative flex flex-col justify-center lg:flex-1 overflow-hidden rounded-lg p-md md:h-[391.5px] md:p-xl lg:h-auto lg:px-3xl lg:py-5xl"

export function FeaturedOffersSection() {
  return (
    <Section className="bg-surface-contrast">
      <Container className="flex flex-col gap-md lg:flex-row lg:gap-2xl">
        <article className={CARD}>
          <Backdrop src={asset("assets/caviar-home.webp")} desktopSrc={asset("assets/caviar-home-lg.webp")} imgClassName="lg:origin-[25%_50%] lg:scale-[1.2] lg:object-[25%_50%]" overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.5) 45%, rgb(29 27 24 / 0) 100%)" />
          <div className="relative flex w-[252px] flex-col gap-3xl md:w-[277px] lg:w-[368px]">
            <div className="flex flex-col gap-md">
              <div className="flex flex-col gap-sm">
                <div className="flex flex-col gap-2xs">
                  <Eyebrow tone="action" className="h-4">THE CAVIAR EYE PATCH</Eyebrow>
                  <h3 className="type-h4 text-text-primary lg:type-h3">Your Ritual Begins with the Read</h3>
                </div>
                <p className="type-lg text-text-secondary md:type-md lg:h-7 lg:type-lg">Members-only Ritual</p>
              </div>
              <p className="type-h4 font-medium text-text-primary md:type-h5">£125</p>
            </div>
            <div>
              <ArrowButton icon={null}>
                <LockKeyhole aria-hidden />
                Members Only
              </ArrowButton>
            </div>
          </div>
        </article>

        <article className={CARD}>
          <Backdrop src={asset("assets/disconnect.webp")} overlay="linear-gradient(90deg, rgb(29 27 24 / 0.55) 0%, rgb(29 27 24 / 0.6) 50%, rgb(29 27 24 / 0.5) 100%)" />
          <div className="relative flex flex-col gap-3xl">
            <div className="flex flex-col gap-md md:gap-xl lg:gap-lg">
              <div className="flex flex-col gap-sm lg:gap-lg">
              <h3 className="type-h4 w-[260px] text-text-primary md:w-auto lg:type-h3">The Privilege of Disconnecting</h3>
              <div className="flex w-[260px] flex-col gap-xs md:w-[405px]">
                <p className="type-lg text-text-secondary">For the man whose world rarely stands still.</p>
                <p className="type-lg text-text-secondary">A more considered approach to recovery, restoration and everything that follows.</p>
              </div>
              </div>
              <p className="type-lg font-medium text-text-secondary">Restore, Then Be Great.</p>
            </div>
            <div className="flex items-center gap-md">
              <ArrowButton>Begin My Read</ArrowButton>
              <TextLink>Discover Solis</TextLink>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  )
}
