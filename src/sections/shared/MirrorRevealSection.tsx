import { Container } from "@/components/layout"
import { ScanReveal } from "@/components/scan-reveal"
import { asset } from "@/lib/assets"

function RevealCopy({ title, lines }: { title: string; lines: [string, string] }) {
  return (
    <div className="pointer-events-none flex w-[140px] flex-col gap-xs md:w-[180px] md:gap-sm lg:w-[250px]">
      <h2 className="type-h5 text-text-primary md:type-h3">{title}</h2>
      <div className="flex flex-col gap-2xs md:gap-xs">
        {lines.map((line) => (
          <p key={line} className="type-md text-text-secondary md:type-lg">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

export function MirrorRevealSection() {
  return (
    <section className="relative flex h-[300px] flex-col justify-center overflow-hidden md:h-[500px]">
      <ScanReveal before={asset("assets/reveal-before.webp")} after={asset("assets/reveal-after.webp")} />
      {/* Figma's side fade: opaque at both edges, clear over the face. */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{ background: "linear-gradient(90deg, #1d1b18 0%, rgb(29 27 24 / 0.8) 20%, rgb(29 27 24 / 0) 40%, rgb(29 27 24 / 0) 60%, rgb(29 27 24 / 0.8) 80%, #1d1b18 100%)" }}
      />
      {/* `relative` so z-20 applies: without it the copy paints under the positioned side fade above. */}
      <Container className="pointer-events-none relative z-20 flex justify-between">
        <RevealCopy title="Monarco Reads You" lines={["Recovery M.I.", "What sits beneath it."]} />
        <RevealCopy title="The Mirror Shows You" lines={["A reflection", "What you see."]} />
      </Container>
    </section>
  )
}
