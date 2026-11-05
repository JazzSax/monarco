import { cn } from "@/lib/utils"

/** "Signarure Clay Red • First Edition", as designed (typo included). Gold in the hero, sand in the pre-order band. */
export function Edition({ tone }: { tone: "action" | "secondary" }) {
  return (
    <p className={cn("type-sm flex items-center gap-xs font-medium", tone === "action" ? "text-text-action" : "text-text-secondary")}>
      Signarure Clay Red
      <span className={cn("size-1.5 rounded-full", tone === "action" ? "bg-surface-action" : "bg-border-strong")} aria-hidden />
      First Edition
    </p>
  )
}
