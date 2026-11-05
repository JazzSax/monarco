import { ArrowRight, Package, Play, Sun, UserStar } from "lucide-react"
import { TrustPill } from "@/components/cards"
import { TextLink } from "@/components/cta"
import { Button } from "@/components/ui/button"
import { asset } from "@/lib/assets"
import { HeroSection } from "@/sections/shared/HeroSection"

export function RitualsHero() {
  return (
    // Mobile darkens the overlay (0.7 / 0.35); tablet and desktop use 0.5 / 0.25.
    <div className="[--mid:0.7] [--end:0.35] md:[--mid:0.5] md:[--end:0.25]">
      <HeroSection
        image={asset("assets/rituals-hero.webp")}
        overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / var(--mid)) 48.08%, rgb(29 27 24 / var(--end)) 100%)"
        // Crops found by searching object-position against the Figma frame exports.
        imgClassName="object-[79%_50%] md:object-[96%_50%] lg:object-center"
        copyClassName="w-[267px] md:w-[518px] lg:w-[426px]"
        headClassName="gap-2xs lg:gap-xs lg:w-[379px]"
        eyebrow="THE MONARCO RITUALS"
        title="Recovery, Made Ritual"
        body="Exceptional formulations. Considered essentials. A collection designed for the moments you choose to restore."
        actions={
          <>
            {/* Prototype: "Scroll to" the collection. A native anchor keeps this a jump with no script. */}
            <Button asChild>
              <a href="#collection">
                Explore The Collection
                <ArrowRight />
              </a>
            </Button>
            <TextLink icon={<Play aria-hidden />}>Watch The Film</TextLink>
          </>
        }
        footer={
          <div className="flex flex-wrap gap-xs">
            <TrustPill icon={<UserStar aria-hidden />}>Members-only skincare</TrustPill>
            <TrustPill icon={<Package aria-hidden />}>Limited pre-order drops</TrustPill>
            <TrustPill icon={<Sun aria-hidden />}>Solis available to all</TrustPill>
          </div>
        }
      />
    </div>
  )
}
