import type { ReactNode } from "react"
import { TextLink } from "@/components/cta"
import { cn } from "@/lib/utils"

// Figma's "Ritual Category Cards" component. The category variant (collection) and the detail variant
// (Caviar Eye Patch details) differ only in image height, heading gap and link type on tablet.
const VARIANT = {
  category: {
    image: "h-[196px] lg:h-[246px]",
    heading: "gap-2xs md:gap-xs",
    link: "type-sm md:h-4 lg:h-auto lg:type-caption lg:py-2xs lg:text-text-inverse",
  },
  detail: {
    image: "h-[196px] md:h-[140px] lg:h-[246px]",
    heading: "gap-2xs lg:gap-xs",
    link: "type-sm font-medium lg:type-caption lg:py-2xs lg:font-normal lg:text-text-inverse",
  },
}

export function RitualCard({
  variant,
  image,
  badge,
  title,
  description,
  link,
  to = "#",
  className,
}: {
  variant: keyof typeof VARIANT
  image: string
  badge?: ReactNode
  title: string
  description: string
  link: string
  to?: string
  className?: string
}) {
  const v = VARIANT[variant]
  return (
    <article
      // Prototype: the card's Hover variant adds a 1px Border/action stroke and zooms the photo in (1.04, measured).
      className={cn(
        "group inset-stroke flex flex-col overflow-hidden rounded-lg bg-surface-contrast hover:[--stroke:var(--border-action)]",
        className,
      )}
    >
      {/* The wrapper clips the zoom to the image area. */}
      <div className={cn("shrink-0 overflow-hidden", v.image)}>
        <img
          src={image}
          alt=""
          className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] group-focus-within:scale-[1.04] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col gap-md px-md pt-sm pb-md md:gap-xl lg:px-xl lg:py-md">
        <div className="flex flex-col gap-xs">
          {badge}
          <div className={cn("flex flex-col", v.heading)}>
            <h3 className="type-h5 text-text-inverse md:type-h6 lg:type-h5">{title}</h3>
            <p className="type-md text-text-tertiary">{description}</p>
          </div>
        </div>
        {/* Text-link Button: shrinks to 0.98 on hover like every TextLink. On these light cards it keeps its colour. */}
        <TextLink
          to={to}
          className={cn("mt-auto h-auto self-start py-0 text-text-tertiary hover:text-text-tertiary lg:hover:text-text-inverse", v.link)}
        >
          {link}
        </TextLink>
      </div>
    </article>
  )
}
