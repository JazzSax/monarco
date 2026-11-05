import { ChartColumn, ScanEye, Sparkles } from "lucide-react"
import { IconBadge } from "@/components/cards"
import { Container, Section } from "@/components/layout"
import { asset } from "@/lib/assets"
import { StoryCopy } from "@/sections/solis/StoryCopy"

const BENEFITS = [
  { icon: <ScanEye aria-hidden />, title: "Recovery M.I.", body: "Begin with your personalised." },
  { icon: <Sparkles aria-hidden />, title: "Tailored Rituals", body: "Explore content and recommendations." },
  { icon: <ChartColumn aria-hidden />, title: "Your Progress", body: "Track your experience and decide whether to continue." },
]

export function MembershipIncludedSection() {
  return (
    <Section className="bg-surface-inverse">
      <Container className="flex flex-col gap-md lg:flex-row lg:items-center lg:gap-5xl">
        <div className="flex flex-col gap-5xl lg:flex-1 lg:gap-2xl">
          <StoryCopy
            eyebrow="BEYOND THE RITUAL"
            title="Three Months Inside The House"
            subtitle="Rarely what it takes."
            headingClassName="md:gap-2xs lg:gap-xs"
          >
            Every Solis purchase includes three months of Monarco Intelligence membership.
          </StoryCopy>
          {/* Rows of icon + copy on mobile, three columns from tablet. */}
          <ul className="flex flex-col gap-md md:flex-row">
            {BENEFITS.map((b) => (
              <li key={b.title} className="flex items-center gap-sm rounded-lg bg-surface-contrast p-md md:flex-1 md:flex-col md:items-start md:gap-3xl lg:gap-5xl">
                <IconBadge className="size-10 md:size-8 lg:size-10 md:[&_svg]:size-[18px] lg:[&_svg]:size-5">{b.icon}</IconBadge>
                <div className="flex flex-col gap-2xs lg:gap-xs">
                  <h3 className="type-h5 text-text-inverse md:type-h6 lg:type-h5">{b.title}</h3>
                  <p className="type-md text-text-tertiary">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img src={asset("assets/solis-house.webp")} alt="" className="aspect-video w-full rounded-lg object-cover md:aspect-auto md:h-[392px] lg:h-[510px] lg:w-0 lg:flex-1" />
      </Container>
    </Section>
  )
}
