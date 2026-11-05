// Screenshots each route at each Figma frame width (2x) and diffs against design/baseline.
// Prints height delta and % of differing pixels; writes baseline | build | diff strips to design/diff.
// Usage: npm run diff [-- filter]   (needs `npm run dev`, or set BASE_URL). SECTIONS=1 also prints section heights.
import fs from "node:fs"
import { chromium } from "playwright"
import pixelmatch from "pixelmatch"
import { PNG } from "pngjs"

const BASE = process.env.BASE_URL ?? "http://localhost:5173/monarco"
const OUT = "design/diff"
const filter = process.argv[2] ?? ""
const CASES = [
  ["home", "/", [1440, 744, 390]],
  ["house", "/the-house", [1440, 744, 390]],
  ["rituals", "/rituals", [1440, 744, 390]],
  ["solis", "/solis", [1440, 744, 390]],
  ["our-house", "/our-house", [1440, 744, 390]],
  ["nav", "/", [744, 390]], // menu open
]

fs.mkdirSync(OUT, { recursive: true })
const browser = await chromium.launch()
let failed = false

for (const [name, route, widths] of CASES) {
  for (const width of widths) {
    const id = `${name}-${width}`
    if (!id.includes(filter)) continue
    const base = PNG.sync.read(fs.readFileSync(`design/baseline/${id}.png`))
    const isNav = name === "nav"
    const context = await browser.newContext({
      // The menu's scrim is fixed, so its frame is compared at exactly the frame's height.
      viewport: { width, height: isNav ? Math.round(base.height / 2) : 1000 },
      deviceScaleFactor: 2,
    })
    const page = await context.newPage()
    // Figma frames export video fills as their still poster; reduced motion shows that poster.
    await page.emulateMedia({ reducedMotion: "reduce" })
    await page.goto(BASE + route, { waitUntil: "networkidle" })
    await page.evaluate(() => document.fonts.ready)
    if (isNav) await page.getByRole("button", { name: "Open menu" }).click()
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    // Section boxes, for per-section reporting (SECTIONS=1).
    const sections = await page.evaluate(() =>
      [...document.querySelectorAll("aside, main > *, footer")].map((el) => {
        const r = el.getBoundingClientRect()
        const name = el.querySelector("h1, h2, h3")?.textContent?.trim().slice(0, 32) || el.tagName.toLowerCase()
        return { name, top: r.top + scrollY, height: r.height }
      }),
    )
    const shot = PNG.sync.read(await page.screenshot({ fullPage: !isNav, animations: "disabled" }))
    await context.close()

    const w = Math.min(base.width, shot.width)
    const h = Math.min(base.height, shot.height)
    const crop = (png) => {
      const out = new PNG({ width: w, height: h })
      PNG.bitblt(png, out, 0, 0, w, h, 0, 0)
      return out
    }
    const [a, b] = [crop(base), crop(shot)]
    const diff = new PNG({ width: w, height: h })
    const count = pixelmatch(a.data, b.data, diff.data, w, h, { threshold: 0.15 })

    const column = Math.floor(w / 2)
    const strip = new PNG({ width: column * 3, height: Math.floor(h / 2) })
    for (let y = 0; y < strip.height; y++) {
      for (let x = 0; x < column; x++) {
        const from = (y * 2 * w + x * 2) * 4
        ;[a, b, diff].forEach((png, i) => png.data.copy(strip.data, (y * strip.width + x + i * column) * 4, from, from + 4))
      }
    }
    fs.writeFileSync(`${OUT}/${id}.png`, PNG.sync.write(strip))

    if (process.env.SECTIONS && !isNav) {
      for (const sec of sections) {
        if (sec.height < 2) continue
        const y0 = Math.round(sec.top * 2), y1 = Math.min(h, Math.round((sec.top + sec.height) * 2))
        let bad = 0
        for (let y = y0; y < y1; y++) for (let x = 0; x < w; x++) if (diff.data[(y * w + x) * 4] === 255 && diff.data[(y * w + x) * 4 + 1] === 0) bad++
        console.log(`  ${id}  ${String(Math.round(sec.height)).padStart(5)}px  ${((bad / ((y1 - y0) * w)) * 100).toFixed(1).padStart(5)}%  ${sec.name}`)
      }
    }
    const heightDelta = (shot.height - base.height) / 2
    if (Math.abs(heightDelta) > 1 || overflow > 0) failed = true
    console.log(`${id}: height ${shot.height / 2} vs ${base.height / 2} (delta ${heightDelta}px), diff ${((count / (w * h)) * 100).toFixed(2)}%, x-overflow ${overflow}px`)
  }
}
await browser.close()
process.exitCode = failed ? 1 : 0
