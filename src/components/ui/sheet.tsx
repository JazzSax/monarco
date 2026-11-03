import type { ComponentProps } from "react"
import { Dialog as SheetPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetTitle = SheetPrimitive.Title

/** Rendered in place, below its trigger, for a dropdown-style sheet. Use with `<Sheet modal={false}>`. */
function SheetContent({ className, ...props }: ComponentProps<typeof SheetPrimitive.Content>) {
  return (
    <SheetPrimitive.Content
      data-slot="sheet-content"
      aria-describedby={undefined}
      onInteractOutside={(event) => event.preventDefault()}
      className={cn("absolute z-50", className)}
      {...props}
    />
  )
}

export { Sheet, SheetTrigger, SheetClose, SheetTitle, SheetContent }
