import { DotLabel } from "@/components/typography"
import { cn } from "@/lib/utils"

/** "CHAPTER I • THE ORIGIN" label over the chapter H2. Label → H2 gap is 4px below desktop, 8px on desktop unless overridden. */
export function ChapterHeading({
  label,
  title,
  tone,
  className,
  labelClassName,
  dotClassName,
  titleClassName,
}: {
  label: string[]
  title: string
  tone: "light" | "dark"
  className?: string
  labelClassName?: string
  dotClassName?: string
  titleClassName?: string
}) {
  return (
    <div className={cn("flex flex-col gap-2xs lg:gap-xs", className)}>
      <DotLabel items={label} className={cn(tone === "light" ? "text-text-action-secondary" : "text-text-action", labelClassName)} dotClassName={dotClassName} />
      <h2 className={cn("type-h2 whitespace-pre-line", tone === "light" ? "text-text-inverse" : "text-text-primary", titleClassName)}>{title}</h2>
    </div>
  )
}
