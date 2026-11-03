import type { ComponentProps, ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

/** Gold primary action with Figma's trailing arrow. Renders a router link when `to` is set. */
export function ArrowButton({
  children,
  to = "#",
  icon = <ArrowRight />,
  ...props
}: Omit<ComponentProps<typeof Button>, "asChild"> & { to?: string; icon?: ReactNode }) {
  return (
    <Button asChild {...props}>
      <Link to={to}>
        {children}
        {icon}
      </Link>
    </Button>
  )
}

/** Underlined text action. */
export function TextLink({
  children,
  to = "#",
  icon,
  ...props
}: Omit<ComponentProps<typeof Button>, "asChild"> & { to?: string; icon?: ReactNode }) {
  return (
    <Button asChild variant="link" {...props}>
      <Link to={to}>
        {children}
        {icon}
      </Link>
    </Button>
  )
}
