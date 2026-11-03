import { useState } from "react"
import { MoveHorizontal } from "lucide-react"
import { Slider, SliderThumb, SliderTrack } from "@/components/ui/slider"

/** Before/after portrait split by a draggable, keyboard-accessible handle. */
export function ScanReveal({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50)

  return (
    <div className="absolute inset-0">
      <img src={before} alt="" className="absolute inset-0 size-full object-cover" />
      <img
        src={after}
        alt=""
        className="absolute inset-0 size-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      />
      <Slider
        value={[position]}
        onValueChange={([value]) => setPosition(value)}
        min={0}
        max={100}
        step={0.5}
        aria-label="Reveal position"
        className="absolute inset-0 z-10 flex touch-none items-center select-none"
      >
        <SliderTrack className="relative size-full" />
        <SliderThumb className="relative flex size-8 cursor-ew-resize items-center justify-center rounded-[28px] border-[1.5px] border-border-action bg-surface-sunken text-text-primary md:size-4xl">
          <span className="pointer-events-none absolute left-1/2 h-screen w-0.5 -translate-x-1/2 bg-surface-action" aria-hidden />
          <span className="relative flex size-full items-center justify-center rounded-[28px] bg-surface-sunken">
            <MoveHorizontal className="size-4 md:size-6" aria-hidden />
          </span>
        </SliderThumb>
      </Slider>
    </div>
  )
}
