import type { ComponentProps, ReactNode } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

/** Glass pill used for hero proof points. */
export function TrustPill({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="type-caption inline-flex items-center gap-2xs rounded-full border border-border-glass/25 bg-surface-contrast/5 px-sm py-xs font-medium whitespace-nowrap text-text-secondary backdrop-blur-[5px] [&_svg]:size-4 lg:[&_svg]:size-5">
      {icon}
      {children}
    </span>
  )
}

/** Sand card on light sections: icon, title, description. */
export function SandCard({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-col rounded-lg bg-surface-contrast", className)} {...props} />
}

/** Round icon badge: filled (Surface/action Secondary) or glass. */
export function IconBadge({
  children,
  variant = "filled",
  className,
}: {
  children: ReactNode
  variant?: "filled" | "glass"
  className?: string
}) {
  return (
    <span
      className={cn(
        "flex size-3xl shrink-0 items-center justify-center rounded-full [&_svg]:size-5",
        variant === "filled"
          ? "bg-surface-action-secondary text-text-primary"
          : "border border-border-glass/25 bg-surface-contrast/10 text-icon-action backdrop-blur-[5px]",
        className,
      )}
    >
      {children}
    </span>
  )
}

/** Check bullet + label. `tone` picks the Membership (gold) or plan (brown) check. */
export function BenefitItem({
  children,
  tone = "action",
  className,
}: {
  children: ReactNode
  tone?: "action" | "secondary"
  className?: string
}) {
  return (
    <li className={cn("type-md flex items-center gap-xs", className)}>
      <span
        className={cn(
          "flex size-[18px] shrink-0 items-center justify-center rounded-full md:size-5",
          tone === "action" ? "bg-surface-action text-text-inverse" : "bg-surface-action-secondary text-text-primary",
        )}
      >
        <Check className="size-3.5" strokeWidth={3} aria-hidden />
      </span>
      {children}
    </li>
  )
}

export function StatusBadge({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("type-caption rounded-sm px-xs py-2xs font-medium whitespace-nowrap", className)} {...props} />
}
