import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

/** Full-width band with the Section/Large vertical padding. */
export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("relative overflow-hidden py-section", className)} {...props} />
}

/** Container/Large side padding around content capped at Figma's 1360px max width. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className="relative w-full px-container">
      <div className={cn("mx-auto w-full max-w-[1360px]", className)} {...props} />
    </div>
  )
}

/** The recurring 450px intro column + fluid content column; stacks below desktop. */
export function Split({ className, ...props }: ComponentProps<"div">) {
  return <Container className={cn("flex flex-col gap-5xl lg:flex-row", className)} {...props} />
}

export function SplitIntro({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex w-full shrink-0 flex-col lg:w-[450px]", className)} {...props} />
}

export function SplitBody({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("min-w-0 lg:flex-1", className)} {...props} />
}

/** A line that, like a Figma centre-aligned stroke on a 0-height layer, takes no layout space. */
export function Rule({ className }: { className?: string }) {
  return (
    <div role="separator" className="relative z-10 h-0 w-full">
      <span className={cn("absolute inset-x-0 h-px -translate-y-1/2", className)} />
    </div>
  )
}

export function Divider() {
  return <Rule className="h-[1.5px] bg-icon-action-secondary" />
}

/** Decorative cover image with an optional gradient overlay, filling its positioned parent. */
export function Backdrop({
  src,
  overlay,
  imgClassName,
}: {
  src: string
  overlay?: string
  imgClassName?: string
}) {
  return (
    <>
      <img src={src} alt="" className={cn("absolute inset-0 size-full object-cover", imgClassName)} />
      {overlay && <div className="absolute inset-0" style={{ background: overlay }} />}
    </>
  )
}
