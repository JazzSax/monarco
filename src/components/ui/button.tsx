import type { ComponentProps } from "react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none aria-disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // Figma strokes the primary button with an outer 1px border, which does not affect layout: hence a ring.
        primary:
          "bg-surface-action text-text-inverse ring-1 ring-border-action hover:bg-surface-action-hover hover:ring-surface-action-hover active:bg-surface-action-pressed active:ring-surface-action-pressed disabled:bg-surface-disabled disabled:text-text-disabled disabled:ring-border-disabled",
        dark: "bg-surface-page text-text-secondary ring-1 ring-border-subtle hover:ring-border-strong disabled:text-text-disabled",
        link: "px-0 text-text-primary [text-decoration-line:underline] [text-decoration-thickness:1px] [text-underline-offset:0.5em] hover:text-text-action-hover disabled:text-text-disabled",
      },
      size: {
        default: "gap-2xs px-lg py-sm type-md rounded-md [&_svg]:size-5",
        sm: "gap-2xs px-md py-xs type-sm font-medium rounded-sm [&_svg]:size-4",
      },
    },
    compoundVariants: [{ variant: "link", className: "gap-xs px-0 rounded-none" }],
    defaultVariants: { variant: "primary", size: "default" },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button"
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export { Button, buttonVariants }
