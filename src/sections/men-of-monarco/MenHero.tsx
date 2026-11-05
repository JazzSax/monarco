import { Gem, House, UserStar, VenetianMask } from "lucide-react"
import { IconBadge } from "@/components/cards"
import { ArrowButton } from "@/components/cta"
import { Backdrop, Container } from "@/components/layout"
import { DotLabel, Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"

const PERKS = [
  { icon: <UserStar aria-hidden />, title: "House Membership", body: "A complimentary year inside The House." },
  { icon: <VenetianMask aria-hidden />, title: "The Solis Experience", body: "Our signature light therapy mask." },
  { icon: <Gem aria-hidden />, title: "The First Drops", body: "Priority access to selected skincare." },
  { icon: <House aria-hidden />, title: "A Private Experience", body: "Curated recovery experiences." },
]

export function MenHero() {
  return (
    // Desktop overlay is 0.65 at 54.52%; tablet and mobile 0.5 at 48.08%.
    <section className="relative flex h-[844px] flex-col justify-end overflow-hidden bg-surface-default py-section [--mid:0.5] [--stop:48.08%] md:h-[980px] lg:justify-center lg:pt-[184px] lg:[--mid:0.65] lg:[--stop:54.52%]">
      <Backdrop
        src={asset("assets/men-hero.webp")}
        // Crops found with scripts/tune-crop.mjs. Figma's tablet fill shows the photo smaller than a cover fit,
        // so it is scaled to 0.85 from the top-right corner; the gap it leaves sits under the solid end of the gradient.
        imgClassName="object-[20%_50%] md:origin-top-right md:scale-[0.85] md:object-[100%_0%] lg:scale-100 lg:object-center"
        overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / var(--mid)) var(--stop), rgb(29 27 24 / 0.25) 100%)"
      />
      <Container>
        <div className="flex flex-col items-start gap-3xl lg:w-[684px] lg:gap-4xl">
          <div className="flex flex-col gap-xl md:gap-3xl lg:gap-2xl">
            <div className="flex flex-col gap-sm lg:gap-lg">
              <div className="flex flex-col gap-xs md:gap-2xs">
                <div className="flex flex-col gap-2xs lg:gap-xs">
                  <Eyebrow tone="action">MONARCO PRESENTS</Eyebrow>
                  {/* Two lines on desktop only. */}
                  <h1 className="type-h1 text-text-primary">
                    The Men <br className="hidden lg:inline" />
                    of Monarco
                  </h1>
                </div>
                <p className="type-h6 font-medium whitespace-pre-line text-text-primary lg:type-h5">{"Every Man has a Story.\nWhat’s yours?"}</p>
              </div>
              <p className="type-lg text-text-secondary">One hundred men. Twelve months inside The Monarco House</p>
            </div>
            <ul className="grid gap-md md:grid-cols-[315px_349px] md:gap-x-3xl md:gap-y-xl lg:grid-cols-[357px_303px] lg:gap-x-xl">
              {PERKS.map((p) => (
                <li key={p.title} className="flex items-center gap-sm">
                  <IconBadge variant="glass" className="size-10 lg:size-10">
                    {p.icon}
                  </IconBadge>
                  <div className="flex flex-col gap-2xs text-text-secondary">
                    <p className="type-lg font-medium md:type-md lg:type-lg">{p.title}</p>
                    {/* Figma fits "A complimentary year inside The House." in 263px on tablet; Chrome needs ~1px more. */}
                    <p className="type-md md:type-sm md:whitespace-nowrap lg:type-md lg:whitespace-normal">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-sm md:gap-md">
            <ArrowButton>Tell Your Story</ArrowButton>
            <DotLabel items={["Three Questions", "Three Minutes", "Individually Considered"]} className="text-text-secondary" dotClassName="bg-border-strong" />
          </div>
        </div>
      </Container>
    </section>
  )
}
