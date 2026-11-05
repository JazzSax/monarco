import type { ReactNode } from "react"
import { ArrowButton, TextLink } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { asset } from "@/lib/assets"
import { cn } from "@/lib/utils"

function PromoCard({
  image,
  overlay,
  label,
  title,
  description,
  actions,
  className,
  copyClassName,
  titleClassName,
}: {
  image: string
  overlay: string
  label: string
  title: string
  description: ReactNode
  actions: ReactNode
  className?: string
  copyClassName: string
  titleClassName?: string
}) {
  return (
    <article
      className={cn(
        "relative flex flex-col overflow-hidden rounded-lg p-md md:h-[391.5px] md:justify-center md:p-xl lg:h-auto lg:flex-1 lg:justify-start lg:px-3xl lg:py-5xl",
        className,
      )}
    >
      <Backdrop src={asset(image)} overlay={overlay} />
      <div className="relative flex flex-col items-start gap-3xl">
        <div className={cn("flex flex-col gap-sm", copyClassName)}>
          <div className="flex flex-col gap-2xs">
            <p className="type-sm flex items-center gap-xs font-medium text-text-action">
              MONARCO
              <span className="size-1.5 rounded-full bg-surface-action" aria-hidden />
              {label}
            </p>
            <h2 className={cn("type-h4 text-text-primary lg:type-h3", titleClassName)}>{title}</h2>
          </div>
          {description}
        </div>
        {actions}
      </div>
    </article>
  )
}

export function RelatedContentSection() {
  return (
    <Section className="bg-surface-contrast">
      <Container className="flex flex-col gap-md lg:flex-row lg:gap-2xl">
        <PromoCard
          image="assets/promo-rituals.webp"
          // Mobile overlay is 0.8 / 0.5; tablet and desktop 0.5 / 0.
          overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / var(--mid)) 59.99%, rgb(29 27 24 / var(--end)) 100%)"
          className="[--mid:0.8] [--end:0.5] md:[--mid:0.5] md:[--end:0]"
          copyClassName="w-[250px] md:w-[292px] lg:w-[368px]"
          label="THE RITUALS"
          title="Built For Real Life"
          description={
            <p className="type-lg text-text-secondary md:type-md lg:type-lg">
              From early mornings to late nights, Monarco Rituals are designed for the moments that make the difference.
            </p>
          }
          actions={<ArrowButton>Discover The Collection</ArrowButton>}
        />
        <PromoCard
          image="assets/promo-recovery.webp"
          overlay="linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.5) 50%, rgb(29 27 24 / 0) 100%)"
          copyClassName="w-[250px] md:w-[340px] lg:w-[372px]"
          titleClassName="w-[251px] md:w-[288px] lg:w-auto"
          label="RECOVERY M.I."
          title="Understand First Restore with Intention"
          description={
            // Figma: 16px at 140% (laid out as 22px lines) on mobile and desktop, Paragraf Medium (16/24) on tablet.
            <p className="text-base leading-[22px] text-text-secondary md:leading-6 lg:w-[340px] lg:leading-[22px]">
              Your first Recovery Read introduces a new perspective on your recovery through Monarco’s private Recovery Index.
            </p>
          }
          actions={
            <div className="flex flex-col items-start gap-sm md:flex-row md:items-center md:gap-md">
              <ArrowButton>Begin My Read</ArrowButton>
              <TextLink>Learn About Recovery M.I.</TextLink>
            </div>
          }
        />
      </Container>
    </Section>
  )
}
