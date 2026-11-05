import { Link } from "react-router-dom"
import { Backdrop, Container, Rule } from "@/components/layout"
import { asset } from "@/lib/assets"

const COLUMNS = [
  { title: "Explore", links: ["The House", "Rituals", "Solis", "Our House", "Men of Monarco"] },
  { title: "Members", links: ["Begin My Read", "Sign In"] },
  { title: "Support", links: ["Contact", "FAQs", "Delivery & Return"] },
]
const ROUTES: Record<string, string> = { "The House": "/the-house", Rituals: "/rituals", Solis: "/solis", "Our House": "/our-house", "Men of Monarco": "/men-of-monarco" }
const LEGAL = ["Privacy Policy", "Terms of Service", "Membership Terms", "Terms of Sale", "Cookie Policy", "Accessibility"]

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
    </svg>
  )
}

function LinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden>
      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3.3 15V10H4.9v8h2.4ZM6.1 8.9a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM19 18v-4.4c0-2.4-1.300-3.700-3.100-3.700-1.400 0-2 .8-2.400 1.300V10h-2.400v8h2.400v-4.200c0-1.100.2-2.200 1.600-2.200s1.400 1.300 1.400 2.300V18H19Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface-default py-section-sm text-text-secondary md:pb-xl lg:pb-section-sm">
      <Backdrop src={asset("assets/footer-rock.webp")} imgClassName="object-bottom opacity-40" />
      <Container className="flex flex-col gap-md lg:gap-xl">
        <div className="flex flex-col gap-3xl md:gap-5xl lg:flex-row">
          <Link to="/" aria-label="Monarco home" className="relative block h-[85.75px] md:h-20 lg:h-[120px] lg:w-[668px] lg:shrink-0">
            <img
              src={asset("assets/logo-wide.webp")}
              alt=""
              className="absolute top-[-13px] left-[-17px] h-[112px] w-[331px] max-w-none md:top-[-16px] lg:top-0 lg:h-[120px] lg:w-[355px]"
            />
          </Link>
          <div className="flex flex-1 flex-col gap-md md:flex-row">
            {COLUMNS.map((column) => (
              <div key={column.title} className="flex flex-1 flex-col gap-xs md:gap-2xs lg:gap-xs">
                <h2 className="type-h6 font-medium text-text-action md:type-md lg:type-lg">{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to={ROUTES[link] ?? "#"} className="type-lg block py-xs md:type-sm lg:type-md">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Rule className="bg-border-default" />
        <p className="type-md md:type-sm">
          MONARCO provides lifestyle, recovery and personal wellness insights for informational purposes only. Recovery M.I and its
          associated readings are not intended to diagnose, treat, cure or prevent any medical condition. Insights, scores and
          recommendations are not medical advice and should not replace consultation with a qualified healthcare professional.
        </p>
        <Rule className="bg-border-default" />

        <div className="flex flex-col gap-xl md:gap-md">
          <div className="flex flex-col-reverse justify-between gap-md md:flex-row md:items-center">
            <ul className="flex flex-wrap gap-sm md:flex-nowrap md:gap-md">
              {LEGAL.map((link) => (
                <li key={link}>
                  <Link to="#" className="type-md block py-2xs md:type-caption md:font-medium lg:type-sm lg:font-normal">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-md text-text-secondary">
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><LinkedIn /></a>
            </div>
          </div>
          <div className="type-caption flex flex-col justify-between gap-md font-medium text-text-action md:flex-row">
            <p>© 2026 The Monarco House. All rights reserved.</p>
            <p>UNITED KINGDOM</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
