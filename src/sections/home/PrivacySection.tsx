import { Camera, ScanEye, Trash2 } from "lucide-react"
import { IconBadge, SandCard } from "@/components/cards"
import { Section, Split, SplitBody, SplitIntro } from "@/components/layout"
import { BodyLarge, Eyebrow, SectionHeading } from "@/components/typography"

const STEPS = [
  { title: "Capture", body: "Used for your read.", Icon: Camera },
  { title: "Interpret", body: "Facial data is derived.", Icon: ScanEye },
  { title: "Discard", body: "Image is not retained.", Icon: Trash2 },
]

export function PrivacySection() {
  return (
    <Section className="bg-surface-inverse">
      <Split>
        <SplitIntro className="gap-sm">
          <div className="flex flex-col gap-2xs lg:gap-xs">
            <Eyebrow>PRIVACY</Eyebrow>
            <SectionHeading className="lg:w-[412px]">Private by Design Your Image is Never Stored</SectionHeading>
          </div>
          <BodyLarge>Recovery M.I. converts your capture into the face data required for your read, then discards the image. Only the information needed for your read remains.</BodyLarge>
        </SplitIntro>
        <SplitBody className="flex flex-col gap-md md:flex-row lg:gap-2xl">
          {STEPS.map(({ title, body, Icon }) => (
            <SandCard key={title} className="flex-1 flex-row items-center gap-sm p-md md:flex-col md:items-start md:gap-3xl lg:gap-5xl lg:p-xl">
              <IconBadge><Icon aria-hidden /></IconBadge>
              <div className="flex flex-col gap-2xs lg:gap-xs">
                <h3 className="type-h5 text-text-inverse md:type-h6 lg:type-h4">{title}</h3>
                <p className="type-md text-text-tertiary">{body}</p>
              </div>
            </SandCard>
          ))}
        </SplitBody>
      </Split>
    </Section>
  )
}
