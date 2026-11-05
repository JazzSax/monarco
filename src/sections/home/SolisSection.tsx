import type { ReactNode } from "react"
import { Cpu, Scan, Timer, User } from "lucide-react"
import { IconBadge } from "@/components/cards"
import { ArrowButton } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { Eyebrow } from "@/components/typography"
import { asset } from "@/lib/assets"

const SPECS: { icon: ReactNode; lines: string[] }[] = [
  { icon: <Cpu aria-hidden />, lines: ["122 LEDs", "488 chips"] },
  { icon: <Scan aria-hidden />, lines: ["4 wavelengths", "465 | 590 | 630 | 850 nm"] },
  { icon: <User aria-hidden />, lines: ["Engineered for men"] },
  { icon: <Timer aria-hidden />, lines: ["10 minutes a day"] },
]

const FINISHES = [
  { name: "Mineral", caption: "A lighter Perspective", image: "finish-mineral" },
  { name: "Tera", caption: "An earthy experience", image: "finish-tera" },
  { name: "Obsidian", caption: "Our signature finish", image: "finish-obsidian" },
]

export function SolisSection() {
  return (
    <Section id="solis" className="bg-surface-default">
      <Backdrop src={asset("assets/solis-bg.webp")} video={asset("assets/solis.mp4")} overlay="linear-gradient(90deg, rgb(29 27 24 / 0.8) 0%, rgb(29 27 24 / 0.6) 100%)" />
      <Container className="flex flex-col gap-5xl lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-3xl lg:w-[553px]">
          <div className="flex flex-col gap-xl md:gap-3xl">
            <div className="flex flex-col gap-sm">
              <div className="flex flex-col gap-xs lg:gap-2xs">
                <div className="flex flex-col gap-2xs lg:gap-xs">
                  <Eyebrow tone="action">MONARCO</Eyebrow>
                  <h2 className="type-h2 text-text-primary">Solis</h2>
                </div>
                <p className="type-lg text-text-secondary">RECOVERY LIGHT</p>
              </div>
              <div className="type-md flex flex-col gap-2xs text-text-secondary">
                <p>A considered light ritual for recovery.</p>
                <p>Ten minutes. Deliberately yours.</p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-md md:flex-nowrap lg:gap-2xl">
              {SPECS.map(({ icon, lines }) => (
                <li key={lines[0]} className="flex w-[144px] flex-col items-center gap-xs text-center md:w-auto md:gap-sm">
                  <IconBadge variant="glass">{icon}</IconBadge>
                  <div className="type-caption flex flex-col gap-2xs font-medium text-text-secondary">
                    {lines.map((line) => (
                      <p key={line} className="whitespace-nowrap">{line}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-sm md:flex-row md:items-center">
            <ArrowButton className="w-full md:w-auto">Pre-Order Monarco Solis</ArrowButton>
            <p className="type-sm w-[253px] text-text-secondary">Includes 3 months complimentary Monarco House membership.</p>
          </div>
        </div>

        <ul className="flex gap-xs md:gap-md lg:w-[604px] lg:gap-2xl lg:self-end">
          {FINISHES.map((finish) => (
            // Prototype: hover turns the stroke gold and zooms the photo in (1.04 from the centre, measured).
            // The wrapper below clips the zoom to the image area.
            <li
              key={finish.name}
              // Figma's desktop stroke sits inside the card and takes no space (image 180 wide, card 270 tall), so it is drawn
              // on an overlay above the content (the zooming photo would cover an inset outline). On tablet and mobile the
              // stroke does take space: a border.
              className="group relative min-w-0 flex-1 overflow-hidden rounded-lg border border-border-glass/25 transition-colors duration-300 ease-out hover:border-border-action motion-reduce:transition-none lg:w-[180px] lg:flex-none lg:border-0 lg:inset-stroke lg:[--stroke:rgb(167_157_141/0.25)] lg:hover:[--stroke:var(--border-action)]"
            >
              <div className="h-[112px] overflow-hidden md:h-[219px] lg:h-[200px]">
                {/* Figma (THE MONARCO HOUSE) uses the same photo at every width, cover-cropped into the card. */}
                <img
                  src={asset(`assets/${finish.image}.webp`)}
                  alt=""
                  className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                />
              </div>
              <div className="flex flex-col items-center gap-2xs bg-surface-default px-md py-sm text-center">
                <p className="type-md font-medium text-text-primary md:type-lg">{finish.name}</p>
                <p className="type-sm text-text-secondary">{finish.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
