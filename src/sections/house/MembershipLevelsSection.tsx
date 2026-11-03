import { LockKeyhole } from "lucide-react"
import { BenefitItem, StatusBadge } from "@/components/cards"
import { ArrowButton, TextLink } from "@/components/cta"
import { Backdrop, Container, Section } from "@/components/layout"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"
import { asset } from "@/lib/assets"

const TITLE = "type-h4 md:type-h5 lg:type-h4"
const CARD = "relative flex flex-col justify-between gap-3xl overflow-hidden rounded-lg p-md lg:p-xl"
const PLAN_OVERLAY = "linear-gradient(180deg, rgb(29 27 24 / 0.95) 0%, rgb(29 27 24 / 0.75) 55%, rgb(29 27 24 / 0.5) 100%)"

function Benefits({ items, className }: { items: string[]; className: string }) {
  return (
    <ul className={`flex flex-col gap-xs ${className}`}>
      {items.map((item) => (
        <BenefitItem key={item} tone="secondary">
          {item}
        </BenefitItem>
      ))}
    </ul>
  )
}

function HousePlan() {
  return (
    <article className={`${CARD} bg-surface-contrast ring-1 ring-inset ring-icon-action lg:w-[553px] lg:shrink-0`}>
      <div className="flex flex-col gap-sm md:gap-md">
        <div className="flex items-start justify-between">
          <h3 className={`${TITLE} text-text-inverse`}>The House</h3>
          <StatusBadge className="bg-surface-action text-text-inverse">Available Now</StatusBadge>
        </div>
        <div className="flex flex-col gap-2xs md:gap-xs lg:gap-2xs">
          <p className="type-sm font-medium text-text-tertiary">Latest Read</p>
          <p className="flex items-center gap-2xs">
            <span className="type-h3 font-medium text-text-inverse md:type-h5 lg:type-h3">£19.99</span>
            <span className="type-sm font-medium text-text-tertiary">/ month</span>
          </p>
          <p className="type-h6 font-medium text-text-tertiary">Your Recovery Starts Here.</p>
        </div>
        <p className="type-md text-text-tertiary">Your personal recovery intelligence, all in one place. Understand where you are, track your progress and take action.</p>
        <Benefits
          className="text-text-tertiary"
          items={["Recovery M.I. reads", "Personalised recovery insights", "Recovery progress tracking", "Personalised recommendations", "Members-only product drops"]}
        />
      </div>
      <div className="flex flex-col gap-sm md:gap-md">
        <ArrowButton className="w-full">Begin My Read</ArrowButton>
        <p className="type-sm text-center text-text-tertiary">Start with your first Recovery Read. Membership follows your results.</p>
      </div>
    </article>
  )
}

function PrivatePlan() {
  return (
    <article className={`${CARD} min-w-0 bg-surface-default lg:flex-1`}>
      <Backdrop src={asset("assets/plan-private.webp")} overlay={PLAN_OVERLAY} />
      <div className="relative flex flex-col gap-sm md:gap-md">
        <div className="flex items-start justify-between">
          <h3 className={`${TITLE} text-text-primary`}>Monarco Private</h3>
          <StatusBadge className="bg-surface-contrast text-text-tertiary">In Development</StatusBadge>
        </div>
        <div className="flex flex-col gap-2xs md:gap-xs lg:gap-2xs">
          <p className="type-sm font-medium text-text-secondary">Latest Read</p>
          <p className="flex items-center gap-2xs">
            <span className={`${TITLE} font-medium text-text-primary`}>£59.99</span>
            <span className="type-sm font-medium text-text-secondary">/ month</span>
          </p>
          <p className="type-h6 font-medium text-text-secondary">Go Beyond the Surface.</p>
        </div>
        <p className="type-md text-text-secondary">Advanced recovery intelligence, deeper reporting and elevated membership privileges.</p>
        <Benefits
          className="text-text-secondary"
          items={["Everything in The House", "Advanced recovery reports", "Deeper longitudinal insights", "Priority product access", "Selected event invitations"]}
        />
      </div>
      <div className="relative flex flex-col gap-xs">
        <ArrowButton variant="dark" icon={null} className="w-full">
          <LockKeyhole aria-hidden />
          Future Access Begins with The House
        </ArrowButton>
        <TextLink className="w-full py-[11px] md:py-sm">Learn More</TextLink>
      </div>
    </article>
  )
}

function ReservePlan() {
  return (
    <article className={`${CARD} min-w-0 bg-surface-default lg:flex-1`}>
      <Backdrop src={asset("assets/plan-reserve.webp")} overlay={PLAN_OVERLAY} />
      <div className="relative flex flex-col gap-sm md:gap-md">
        <div className="flex items-start justify-between">
          <h3 className={`${TITLE} text-text-action`}>Monarco Reserve</h3>
          <StatusBadge className="rounded-[3px] bg-surface-sunken text-text-action ring-[0.8px] ring-inset ring-border-action">By Invitation</StatusBadge>
        </div>
        <div className="flex flex-col gap-sm">
          <p className="type-h6 font-medium text-text-secondary">A Different Level of Access.</p>
          <p className="type-md text-text-secondary">An exclusive expression of the Monarco experience. Curated gatherings, unique opportunities and bespoke privileges.</p>
        </div>
        <div className="h-0 w-[100px] shadow-[0_0_0_0.5px_var(--icon-action)]" />
      </div>
      <div className="relative">
        <TextLink>Discover Reserve</TextLink>
      </div>
    </article>
  )
}

export function MembershipLevelsSection() {
  return (
    <Section className="bg-surface-inverse">
      <Container className="flex flex-col gap-5xl">
        <div className="flex flex-col gap-sm md:w-[518px] lg:w-full lg:flex-row lg:gap-5xl">
          <div className="flex flex-1 flex-col gap-2xs lg:gap-xs">
            <Eyebrow>MEMBERSHIP</Eyebrow>
            <SectionHeading>{"One House\nDifferent levels of access"}</SectionHeading>
          </div>
          <div className="flex flex-1 items-end pb-xs md:pb-0 lg:pb-xs">
            <BodyLarge>Everyone begins with The House. Greater access becomes available over time for those who want to go further.</BodyLarge>
          </div>
        </div>
        <div className="flex flex-col gap-md lg:flex-row lg:gap-xl">
          <HousePlan />
          <PrivatePlan />
          <ReservePlan />
        </div>
      </Container>
    </Section>
  )
}
