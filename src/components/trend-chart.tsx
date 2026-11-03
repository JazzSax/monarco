import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"]

// Figma layer positions as % of the plot area (x of chart width, y of the 82px plot height).
const RECOVERY = [
  [2, 83],
  [21, 59],
  [39.3, 40],
  [58.3, 11],
  [77, 49],
  [95.8, 6],
]
const COMPARISON = [
  [77, 73],
  [95.8, 46],
]

function line(points: number[][]) {
  return points.map(([x, y]) => `${x},${y}`).join(" ")
}

function Dots({ points }: { points: number[][] }) {
  return points.map(([x, y]) => (
    <span
      key={`${x}-${y}`}
      className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-action bg-surface-action-secondary"
      style={{ left: `${x}%`, top: `${y}%` }}
    />
  ))
}

export function TimeRange({ className }: { className?: string }) {
  return (
    <span className={cn("type-caption inline-flex shrink-0 items-center gap-2xs rounded-sm bg-surface-raised px-xs py-2xs text-text-secondary", className)}>
      Last 6 months
      <ChevronDown className="size-3" aria-hidden />
    </span>
  )
}

/** Recovery Index line chart. `labelClassName` sets month label colour for light or dark cards. */
export function TrendChart({
  plotClassName,
  labelClassName = "text-text-tertiary",
  guideClassName = "bg-surface-raised opacity-10",
}: {
  plotClassName?: string
  labelClassName?: string
  guideClassName?: string
}) {
  return (
    <div role="img" aria-label="Example Recovery Index trend, January to June">
      <div className={cn("relative h-[82px]", plotClassName)}>
        {RECOVERY.map(([x]) => (
          <span key={x} className={cn("absolute inset-y-0 w-px", guideClassName)} style={{ left: `${x}%` }} />
        ))}
        <span className={cn("absolute inset-x-0 bottom-0 h-px", guideClassName)} />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible" aria-hidden>
          <polyline points={line(RECOVERY)} fill="none" stroke="var(--border-action)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          <polyline points={line(COMPARISON)} fill="none" stroke="var(--border-action)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
        </svg>
        <Dots points={RECOVERY} />
        <Dots points={COMPARISON} />
      </div>
      <div className={cn("type-caption mt-[11px] flex justify-between", labelClassName)}>
        {MONTHS.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  )
}
