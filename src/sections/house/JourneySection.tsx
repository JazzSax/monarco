import type { ReactNode } from "react"
import { Moon } from "lucide-react"
import { IconBadge, SandCard, StatusBadge } from "@/components/cards"
import { Container, Section } from "@/components/layout"
import { CompactMetricsList } from "@/components/metrics"
import { TimeRange, TrendChart } from "@/components/trend-chart"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"
import { asset } from "@/lib/assets"
import { cn } from "@/lib/utils"

function Step({
  title,
  body,
  bodyClassName,
  children,
}: {
  title: string
  body: string
  bodyClassName?: string
  children: ReactNode
}) {
  return (
    <SandCard className="min-w-0 flex-1 gap-xl p-md lg:gap-2xl lg:p-xl">
      <div className="flex flex-col gap-2xs lg:gap-xs">
        <h3 className="type-h5 text-text-inverse md:type-h6 lg:type-h4">{title}</h3>
        <p className={cn("type-md text-text-tertiary", bodyClassName)}>{body}</p>
      </div>
      {children}
    </SandCard>
  )
}

const PREVIEW = "rounded-md bg-surface-default p-sm"

function ReportPreview() {
  return (
    <div className={cn(PREVIEW, "flex h-[184px] gap-md overflow-hidden md:h-[172px] lg:h-[184px]")}>
      <div className="flex flex-1 flex-col items-center gap-xs text-center">
        <p className="type-caption font-medium text-text-action">Your Recovery M.I</p>
        <p className="flex items-center gap-2xs">
          <span className="type-h4 font-medium text-text-primary">72</span>
          <span className="type-md text-text-action">/100</span>
        </p>
        <StatusBadge className="rounded-md bg-surface-action text-text-inverse">Moderate</StatusBadge>
      </div>
      <CompactMetricsList className="w-[128px] shrink-0 rounded-sm bg-surface-sunken px-xs py-2xs shadow-[0_-1.5px_0_var(--border-default)]" />
    </div>
  )
}

function TrendPreview() {
  return (
    <div className={cn(PREVIEW, "flex flex-col justify-between gap-md md:h-[172px] md:gap-0 lg:h-[184px]")}>
      <div className="flex items-center justify-between gap-2xs">
        <p className="type-caption font-medium text-text-primary">Your Recovery Trend</p>
        <TimeRange className="px-2xs" />
      </div>
      <TrendChart plotClassName="h-[74px] md:h-[82px]" labelClassName="text-text-secondary" guideClassName="bg-surface-sunken" />
    </div>
  )
}

function FocusPreview() {
  return (
    <div className={cn(PREVIEW, "flex flex-col justify-between gap-3xl md:h-[172px] md:gap-0 lg:h-[184px]")}>
      <IconBadge className="size-2xl [&_svg]:size-4">
        <Moon aria-hidden />
      </IconBadge>
      <div className="flex flex-col gap-xs">
        <p className="type-md font-medium text-text-primary">Focus On Recovery</p>
        <p className="type-sm text-text-secondary">Your recovery indicators suggest increased strain. Consider prioritizing sleep and reducing training load today.</p>
      </div>
    </div>
  )
}

export function JourneySection() {
  return (
    <Section className="bg-surface-inverse">
      <Container className="flex flex-col gap-5xl">
        <div className="flex flex-col gap-sm md:gap-md lg:flex-row lg:justify-between lg:gap-0">
          <div className="flex flex-col gap-sm lg:w-[580px]">
            <div className="flex flex-col gap-2xs">
              <Eyebrow>THE JOURNEY</Eyebrow>
              <SectionHeading>Read. Understand. Evolve</SectionHeading>
            </div>
            <BodyLarge>A continuous view of your recovery helps you recognise patterns, refine your rituals and perform at your best.</BodyLarge>
          </div>
          <p className="type-sm text-text-tertiary lg:w-[435px] lg:self-end">Each read adds to your personal history, giving you a clearer understanding of what changes and why.</p>
        </div>
        <div className="grid gap-md md:grid-cols-2 lg:flex">
          <Step title="Read" body="Take a new Recovery M.I. read." bodyClassName="md:w-[160px] lg:w-[147px]">
            <img src={asset("assets/read-portrait.webp")} alt="" className="h-[180px] w-full rounded-md object-cover md:h-[172px] lg:h-[184px]" />
          </Step>
          <Step title="Understand" body="Explore your insights and recommendations.">
            <ReportPreview />
          </Step>
          <Step title="Evolve" body="See how your indicators change over time." bodyClassName="md:w-[212px] lg:w-[202px]">
            <TrendPreview />
          </Step>
          <Step title="Perform" body="Apply personalised recommendations." bodyClassName="md:w-[195px] lg:w-auto">
            <FocusPreview />
          </Step>
        </div>
      </Container>
    </Section>
  )
}
