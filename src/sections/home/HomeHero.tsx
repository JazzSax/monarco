import { FileImage, ScanEye, UserRoundCheck } from "lucide-react"
import { TrustPill } from "@/components/cards"
import { ArrowButton, TextLink } from "@/components/cta"
import { asset } from "@/lib/assets"
import { HeroSection } from "@/sections/shared/HeroSection"

export function HomeHero() {
  return (
    <HeroSection
      image={asset("assets/hero-home.webp")}
      overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.5) 45%, rgb(29 27 24 / 0) 100%)"
      bodyClassName="lg:w-[400px]"
      eyebrow="RECOVERY M.I."
      title="What Does Your Face Say About Your Recovery?"
      body="A private recovery read for men who demand more from their reflection."
      actions={
        <>
          <ArrowButton>Begin My Read</ArrowButton>
          <TextLink>Discover Monarco Solis</TextLink>
        </>
      }
      footer={
        <div className="flex flex-wrap gap-xs">
          <TrustPill icon={<ScanEye aria-hidden />}>478 facial data points</TrustPill>
          <TrustPill icon={<UserRoundCheck aria-hidden />}>Private by design</TrustPill>
          <TrustPill icon={<FileImage aria-hidden />}>No image storage</TrustPill>
        </div>
      }
    />
  )
}
