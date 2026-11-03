import type { ComponentProps } from "react"
import { Slider as SliderPrimitive } from "radix-ui"

const Slider = SliderPrimitive.Root
const SliderTrack = SliderPrimitive.Track
const SliderThumb = SliderPrimitive.Thumb

export type SliderProps = ComponentProps<typeof SliderPrimitive.Root>
export { Slider, SliderTrack, SliderThumb }
