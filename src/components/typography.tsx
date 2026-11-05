import { Fragment, type ComponentProps } from "react"
import { cn } from "@/lib/utils"

/** "CHAPTER I • THE ORIGIN" style label: items separated by a 6px dot in the text colour (override with dotClassName). */
export function DotLabel({ items, className, dotClassName }: { items: string[]; className?: string; dotClassName?: string }) {
  return (
    <p className={cn("type-sm flex items-center gap-xs font-medium", className)}>
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && <span className={cn("size-1.5 shrink-0 rounded-full bg-current", dotClassName)} aria-hidden />}
          {item}
        </Fragment>
      ))}
    </p>
  )
}

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
