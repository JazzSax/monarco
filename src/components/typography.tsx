import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const eyebrowTone = {
  action: "text-text-action",
  secondary: "text-text-action-secondary",
}

export function Eyebrow({
  tone = "secondary",
  className,
  ...props
}: ComponentProps<"p"> & { tone?: keyof typeof eyebrowTone }) {
  return <p className={cn("type-sm font-medium", eyebrowTone[tone], className)} {...props} />
}

/** Dark H2 on the light (Surface/inverse) sections. */
export function SectionHeading({ className, ...props }: ComponentProps<"h2">) {
  return <h2 className={cn("type-h2 whitespace-pre-line text-text-inverse", className)} {...props} />
}

export function BodyLarge({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("type-lg text-text-tertiary", className)} {...props} />
}
