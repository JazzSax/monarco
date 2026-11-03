import { Fragment } from "react"
import { Rule } from "@/components/layout"
import { cn } from "@/lib/utils"

export const RECOVERY_METRICS = [
  { label: "Eye Recovery", value: 78 },
  { label: "Skin Appearance", value: 68 },
  { label: "Visible Stress", value: 64 },
  { label: "Hydration", value: 71 },
  { label: "Overall Recovery", value: 72 },
]

function Bar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("h-1 flex-1 rounded-full bg-surface-raised", className)}>
      <div className="h-full rounded-full bg-surface-action" style={{ width: `${value}%` }} />
    </div>
  )
}

/** Inline rows: label, bar, value (Recovery Read card). */
export function MetricsList({ metrics = RECOVERY_METRICS }: { metrics?: typeof RECOVERY_METRICS }) {
  return (
    <div className="flex flex-col gap-xs rounded-md bg-surface-subtle px-md pt-sm pb-[13px] shadow-[0_-1.5px_0_var(--border-inverse)]">
      {metrics.map((m, i) => (
        <Fragment key={m.label}>
          {i > 0 && <Rule className="h-[1.5px] bg-border-inverse" />}
          <div className="flex items-center gap-xs">
            <span className="type-sm flex-1 text-text-secondary">{m.label}</span>
            <Bar value={m.value} />
            <span className="type-caption w-5 text-right font-medium text-text-secondary">{m.value}</span>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

/** Stacked rows: label above bar + value (compact report previews). */
export function CompactMetricsList({
  metrics = RECOVERY_METRICS.slice(0, 4),
  className,
}: {
  metrics?: typeof RECOVERY_METRICS
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2xs rounded-md bg-surface-subtle px-sm py-xs shadow-[0_-1.5px_0_var(--border-inverse)]",
        className,
      )}
    >
      {metrics.map((m, i) => (
        <Fragment key={m.label}>
          {i > 0 && <Rule className="h-[1.5px] bg-border-inverse" />}
          <div>
            <p className="type-caption font-medium text-text-secondary">{m.label}</p>
            <div className="flex items-center gap-xs">
              <Bar value={m.value} />
              <span className="type-caption w-5 text-right font-medium text-text-secondary">{m.value}</span>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  )
}
