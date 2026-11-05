import { cn } from "@/lib/utils"

// Figma's numbered photo cards on the marble band. "benefit" = Clearer / Refinement / Consistency, "step" = Prepare … Return.
const VARIANT = {
  benefit: {
    card: "h-[358px] p-md md:h-[295px] lg:h-[310px] lg:p-xl",
    title: "type-h5 md:type-h6 lg:type-h4",
    overlay: "linear-gradient(180deg, rgb(29 27 24 / 0) 0%, rgb(29 27 24 / 0.8) 100%), linear-gradient(rgb(29 27 24 / 0.4), rgb(29 27 24 / 0.4))",
  },
  step: {
    // Mobile darkens the flat tint to 0.5.
    card: "h-[173px] p-md [--tint:0.5] md:h-[224px] md:[--tint:0.4] lg:h-[286px] lg:px-lg lg:py-xl",
    title: "type-h5 lg:type-h4",
    overlay: "linear-gradient(180deg, rgb(29 27 24 / 0) 0%, #1d1b18 100%), linear-gradient(rgb(29 27 24 / var(--tint)), rgb(29 27 24 / var(--tint)))",
  },
}

export function ImageCard({
  variant,
  image,
  number,
  title,
  description,
  descriptionClassName,
}: {
  variant: keyof typeof VARIANT
  image: string
  number: string
  title: string
  description: string
  descriptionClassName?: string
}) {
  const v = VARIANT[variant]
  return (
    <article className={cn("relative flex flex-col justify-between overflow-hidden rounded-lg border border-border-glass/50", v.card)}>
      <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0" style={{ background: v.overlay }} />
      <p className="type-lg relative font-medium text-text-secondary md:type-md">{number}</p>
      <div className="relative flex flex-col gap-2xs lg:gap-xs">
        <h3 className={cn("text-text-primary", v.title)}>{title}</h3>
        <p className={cn("type-md text-text-secondary", descriptionClassName)}>{description}</p>
      </div>
    </article>
  )
}
