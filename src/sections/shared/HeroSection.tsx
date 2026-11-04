import type { ReactNode } from "react"
import { Backdrop, Container } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { cn } from "@/lib/utils"

/** Full-bleed hero: 844 / 980 / 980 tall, copy bottom-aligned until desktop, then centred below the nav. */
export function HeroSection({
  image,
  video,
  overlay,
  eyebrow,
  title,
  body,
  actions,
  footer,
  copyClassName,
  bodyClassName,
}: {
  image: string
  video?: string
  overlay: string
  eyebrow: string
  title: string
  body: string
  actions: ReactNode
  footer: ReactNode
  copyClassName?: string
  bodyClassName?: string
}) {
  return (
    <section className="relative flex h-[844px] flex-col justify-end overflow-hidden bg-surface-default py-section md:h-[980px] lg:justify-center lg:pt-[184px]">
      <Backdrop src={image} video={video} overlay={overlay} />
      <Container className="flex flex-col gap-5xl md:gap-8xl">
        <div className="flex flex-col gap-3xl lg:gap-4xl">
          <div className={cn("flex w-[290px] flex-col gap-lg md:w-[338px] lg:w-[492px]", copyClassName)}>
            <div className="flex flex-col gap-xs">
              <Eyebrow tone="action">{eyebrow}</Eyebrow>
              <h1 className="type-h1 text-text-primary">{title}</h1>
            </div>
            <p className={cn("type-lg text-text-secondary", bodyClassName)}>{body}</p>
          </div>
          <div className="flex flex-col items-start gap-sm md:flex-row md:items-center md:gap-md">{actions}</div>
        </div>
        {footer}
      </Container>
    </section>
  )
}
