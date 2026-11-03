import { Play, ScanEye, Timer, UserRoundCheck } from "lucide-react"
import { TrustPill } from "@/components/cards"
import { ArrowButton, TextLink } from "@/components/cta"
import { asset } from "@/lib/assets"
import { HeroSection } from "@/sections/shared/HeroSection"

export function HouseHero() {
  return (
    <HeroSection
      image={asset("assets/hero-house.webp")}
      overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.5) 45%, rgb(29 27 24 / 0) 100%)"
      copyClassName="w-[308px] md:w-[544px] lg:w-[450px]"
      eyebrow="THE MONARCO HOUSE"
      title="Understanding Yourself is Just the Begining"
      body="Your recovery changes with you. Monarco helps you understand those changes, recognise patterns and build a more considered approach to recovery."
      actions={
        <>
          <ArrowButton>Begin My Read</ArrowButton>
          <TextLink icon={<Play aria-hidden />}>Watch The Film</TextLink>
        </>
      }
      footer={
        <div className="flex flex-wrap gap-xs">
          <TrustPill icon={<ScanEye aria-hidden />}>478 facial data points</TrustPill>
          <TrustPill icon={<UserRoundCheck aria-hidden />}>Private by design</TrustPill>
          <TrustPill icon={<Timer aria-hidden />}>takes 2 minutes</TrustPill>
        </div>
      }
    />
  )
}
