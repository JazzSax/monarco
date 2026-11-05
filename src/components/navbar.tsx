import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Container } from "@/components/layout"
import { ArrowButton } from "@/components/cta"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { asset } from "@/lib/assets"
import { cn } from "@/lib/utils"

const LINKS = [
  { label: "The House", to: "/the-house" },
  { label: "Rituals", to: "/rituals" },
  { label: "Solis", to: "/solis" },
  { label: "Our House", to: "#" },
  { label: "Men of Monarco", to: "#" },
]

const MENU_BUTTON = "flex size-8 items-center justify-center rounded-sm bg-surface-sunken text-text-primary ring-1 ring-border-default lg:hidden [&_svg]:size-5"

function NavItems({ className, itemClassName, onNavigate }: { className?: string; itemClassName?: string; onNavigate?: () => void }) {
  const { pathname } = useLocation()
  return (
    <ul className={className}>
      {LINKS.map((link) => {
        const isActive = link.to === pathname
        return (
          <li key={link.label}>
            <Link
              to={link.to}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              // Prototype: Nav Link "Inactive" smart-animates to "Active" on hover over 300ms, ease-out.
              className={cn(
                "group type-sm flex items-center gap-2xs py-2xs transition-colors duration-300 ease-out motion-reduce:transition-none",
                isActive ? "text-text-action" : "text-text-secondary hover:text-text-action focus-visible:text-text-action",
                itemClassName,
              )}
            >
              <span
                className={cn(
                  "size-1.5 rounded-full bg-surface-action transition-opacity duration-300 ease-out motion-reduce:transition-none",
                  !isActive && "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
                )}
                aria-hidden
              />
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      {open && <div className="absolute inset-0 z-30 bg-black/50 backdrop-blur-[2px] lg:hidden" onClick={close} aria-hidden />}
      <header className="absolute inset-x-0 top-0 z-40 flex h-[72px] items-center">
        <Container className="flex items-center justify-between">
          <nav aria-label="Main" className="flex items-center gap-2xl">
            <Link to="/" aria-label="Monarco home" className="block h-10 md:h-12">
              <img src={asset("assets/logo-primary.webp")} alt="" className="h-full w-auto" />
            </Link>
            <NavItems className="hidden items-center lg:flex" itemClassName="px-xs" />
          </nav>

          <div className="hidden items-center gap-xs lg:flex">
            <Link to="#" className="type-sm px-lg py-xs font-medium text-text-primary">
              Sign In
            </Link>
            <ArrowButton size="sm">Begin My Read</ArrowButton>
          </div>

          <Sheet modal={false} open={open} onOpenChange={setOpen}>
            {open ? (
              <SheetClose aria-label="Close menu" className={MENU_BUTTON}>
                <X aria-hidden />
              </SheetClose>
            ) : (
              <SheetTrigger aria-label="Open menu" className={MENU_BUTTON}>
                <Menu aria-hidden />
              </SheetTrigger>
            )}
            <SheetContent className="inset-x-container top-16 flex flex-col gap-3xl rounded-lg bg-surface-default p-md pb-xl md:pb-md lg:hidden">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <NavItems className="flex flex-col gap-md" itemClassName="type-h6" onNavigate={close} />
              <div className="flex flex-col gap-sm md:gap-md">
                <Button asChild className="w-full rounded-sm px-md [&_svg]:size-4">
                  <Link to="#" onClick={close}>
                    Begin My Read
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
                <Link to="#" onClick={close} className="type-md py-sm text-center text-text-primary">
                  Sign In
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </Container>
      </header>
    </>
  )
}
