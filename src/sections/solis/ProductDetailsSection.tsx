import { Fragment, useId, useState, type ReactNode } from "react"
import { Plus, X } from "lucide-react"
import { Container, Section } from "@/components/layout"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"
import { cn } from "@/lib/utils"

// Copy as designed, including "Warrenty" and "th".
const SPECS = [
  ["Light wavelengths", "415 / 590 / 660 / 850 nm"],
  ["LED units", "122 LEDs / 488 chips"],
  ["Treatment timer", "10 minutes"],
  ["Brightness levels", "Three levels"],
  ["Battery", "3,000 mAh"],
  ["Charging", "USB-C (cable included)"],
  ["Material", "Food-grade silicone"],
  ["Warrenty", "1 year manufacturer warranty"],
]
// Figma's divider layers grow from 0 to 2px tall down the list, which nudges the lower rows down; kept for parity.
const DIVIDER_HEIGHTS = ["h-0", "h-0", "h-0", "h-px", "h-px", "h-[2px]", "h-[2px]"]

// Figma only has copy for "Do I need a membership ?" (placeholder Lorem ipsum); the other answers are empty hidden
// layers, so they reuse the same placeholder until real answers exist.
const PLACEHOLDER_ANSWER = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
const FAQS = [
  "When will my order arrive ?",
  "Do I need a membership ?",
  "How does th three-month membership work ?",
  "What’s included in the box ?",
  "How long is a treatment session ?",
  "What support is available ?",
].map((question) => ({ question, answer: PLACEHOLDER_ANSWER }))

const ICON = "absolute inset-0 size-full transition-[rotate,opacity] duration-300 ease-out motion-reduce:transition-none"

/** One item open at a time; opens on "Do I need a membership ?" as designed. */
function FaqList() {
  const [open, setOpen] = useState<number | null>(1)
  const id = useId()
  return (
    <ul className="flex flex-col gap-xs">
      {FAQS.map(({ question, answer }, i) => {
        const isOpen = open === i
        return (
          <li key={question} className="rounded-md bg-surface-contrast text-text-tertiary lg:rounded-lg">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${id}-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full cursor-pointer items-center gap-sm rounded-[inherit] p-sm text-left md:px-md lg:items-start lg:p-md"
            >
              <span className="type-lg flex-1 md:type-md">{question}</span>
              {/* Plus and × cross-fade while rotating a quarter turn, so the icon appears to twist closed/open. */}
              <span className="relative size-5 shrink-0 md:size-[18px] lg:size-5" aria-hidden>
                <Plus className={cn(ICON, isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100")} strokeWidth={1.5} />
                <X className={cn(ICON, isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0")} strokeWidth={1.5} />
              </span>
            </button>
            {/* Height animates via grid rows 0fr → 1fr; the inner box clips while it grows. */}
            <div
              id={`${id}-${i}`}
              role="region"
              aria-hidden={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="type-md px-sm pb-sm md:type-sm md:px-md lg:pb-md">{answer}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-sm md:flex-1 md:gap-md">
      <h3 className="type-h5 text-text-inverse">{title}</h3>
      {children}
    </div>
  )
}

export function ProductDetailsSection() {
  return (
    <Section className="bg-surface-inverse">
      <Container className="flex flex-col gap-3xl md:gap-5xl lg:flex-row lg:items-start lg:gap-4xl">
        <div className="flex flex-col gap-sm lg:flex-1">
          <div className="flex flex-col gap-2xs lg:gap-xs">
            <Eyebrow>PRODUCT INFORMATION</Eyebrow>
            <SectionHeading>The Details</SectionHeading>
          </div>
          <BodyLarge>Everything you need to know before beginning your Solis ritual.</BodyLarge>
        </div>

        {/* Specs and FAQ stack on mobile, sit side by side on tablet, and join the intro's row on desktop. */}
        <div className="flex flex-col gap-3xl md:flex-row md:items-start md:gap-md lg:contents">
          <Panel title="Specifications">
            <div className="flex flex-col gap-sm rounded-lg bg-surface-contrast px-sm py-md md:p-md lg:gap-xs lg:p-xl">
              {SPECS.map(([label, value], i) => (
                <Fragment key={label}>
                  {i > 0 && (
                    <div className={cn("relative", DIVIDER_HEIGHTS[i - 1])} aria-hidden>
                      <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border-strong" />
                    </div>
                  )}
                  <div className="type-md flex items-center justify-between gap-2xs text-text-tertiary md:type-sm lg:type-md">
                    <span className="w-[165px] shrink-0 md:w-auto">{label}</span>
                    <span className="text-right">{value}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </Panel>

          <Panel title="Frequently Asked Questions">
            <FaqList />
          </Panel>
        </div>
      </Container>
    </Section>
  )
}
