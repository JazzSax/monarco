import type { ReactNode } from "react"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"
import { cn } from "@/lib/utils"

/** Figma's "Story" copy block on light sections: eyebrow, H2 (403px on desktop), H6 subheading, body. */
export function StoryCopy({
  eyebrow,
  title,
  subtitle,
  children,
  headingClassName,
}: {
  eyebrow: string
  title: string
  subtitle: string
  children: ReactNode
  /** Gap between heading and subheading (8px by default). */
  headingClassName?: string
}) {
  return (
    <div className="flex flex-col gap-sm">
      <div className={cn("flex flex-col gap-xs", headingClassName)}>
        <div className="flex flex-col gap-2xs lg:gap-xs">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionHeading className="lg:w-[403px]">{title}</SectionHeading>
        </div>
        <p className="type-h6 font-medium text-text-tertiary">{subtitle}</p>
      </div>
      <BodyLarge>{children}</BodyLarge>
    </div>
  )
}
