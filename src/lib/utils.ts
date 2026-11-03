import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Teach tailwind-merge the custom tokens from index.css, so a later class overrides an earlier one.
const twMerge = extendTailwindMerge<"type-scale">({
  extend: {
    theme: {
      spacing: [
        "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl",
        "container", "container-md", "container-sm", "section", "section-md", "section-sm",
      ],
    },
    classGroups: {
      "type-scale": [{ type: ["h1", "h2", "h3", "h4", "h5", "h6", "lg", "md", "sm", "caption"] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
