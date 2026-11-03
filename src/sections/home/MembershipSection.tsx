import { BenefitItem } from "@/components/cards"
import { ArrowButton, TextLink } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"

const BENEFITS = [
  "Continued Recovery M.I.",
  "Private recovery history",
  "Saved reports and baseline",
  "Comparison over time",
  "Deeper longitudinal intelligence",
  "Access to Rituals",
  "Members-only releases",
]

function Offer() {
  return (
    <div className="flex flex-1 flex-col gap-3xl rounded-lg bg-surface-sunken p-xl md:p-md lg:p-xl">
      <div className="flex flex-col gap-md lg:gap-xl">
        <div className="flex flex-col gap-sm md:gap-xs lg:gap-sm">
          <div className="flex flex-col gap-2xs lg:gap-xs">
            <Eyebrow tone="action">MEMBERSHIP</Eyebrow>
            <h2 className="type-h3 w-[303px] max-w-full text-text-primary">Enter The Monarco House</h2>
          </div>
          <p className="type-md text-text-secondary">Continue Your Recovery Journey.</p>
        </div>
        <p className="flex items-center gap-2xs">
          <span className="type-h4 font-medium text-text-primary md:type-h5">£19.99</span>
          <span className="type-md text-text-secondary md:type-sm">/ month</span>
        </p>
      </div>
      <div className="flex flex-col gap-sm lg:flex-row lg:items-center lg:gap-xl">
        <ArrowButton to="/the-house">Enter The House</ArrowButton>
        <TextLink className="py-[13px] text-text-secondary md:py-xs lg:py-sm">Begin My First Read</TextLink>
      </div>
    </div>
  )
}

function Benefits() {
  return (
    <div className="flex flex-1 flex-col gap-xl rounded-lg bg-surface-sunken p-md lg:p-xl">
      <div className="flex flex-col gap-md md:gap-sm lg:gap-md">
        <h3 className="type-h4 text-text-primary md:type-h5 lg:type-h4">Membership Includes</h3>
        <ul className="flex flex-col gap-sm text-text-secondary md:gap-xs lg:gap-sm">
          {BENEFITS.map((benefit) => (
            <BenefitItem key={benefit}>{benefit}</BenefitItem>
          ))}
        </ul>
      </div>
      <p className="type-lg text-text-action">A Higher Standard Always Returns.</p>
    </div>
  )
}

function Interior({ className }: { className: string }) {
  return <img src={asset("assets/house-interior.webp")} alt="" className={`rounded-lg object-cover ${className}`} />
}

export function MembershipSection() {
  return (
    <Section className="bg-surface-default">
      <Backdrop src={asset("assets/marble.webp")} overlay="rgb(29 27 24 / 0.8)" />
      <Container className="flex flex-col gap-md lg:flex-row lg:gap-2xl">
        {/* Figma's order changes by breakpoint: offer, image, benefits on mobile and desktop; two cards then image on tablet. */}
        <div className="contents md:flex md:gap-md lg:contents">
          <Offer />
          <Interior className="aspect-video w-full md:hidden lg:block lg:aspect-auto lg:w-[400px] lg:shrink-0" />
          <Benefits />
        </div>
        <Interior className="hidden h-[392px] w-full md:block lg:hidden" />
      </Container>
    </Section>
  )
}
