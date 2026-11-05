// Finds the object-position / scale that best matches Figma's crop of one image, by pixel-diffing
// that image's box against the frame export. The view-only Figma seat hides crop transforms; this recovers them.
// Usage (needs `npm run dev`):
//   node scripts/tune-crop.mjs <baseline id> <route> <img src substring> [nth=0] [xs] [ys] [scales]
//   node scripts/tune-crop.mjs rituals-744 /rituals rituals-hero 0 0,25,50,75,100 50 1
// Prints the image box and the best "x y scale mismatch%" combinations. Refine around the winner, then apply it
// as `object-[x%_y%]` (plus `scale-[s]` with a matching origin) on the image for that breakpoint.
import fs from "node:fs"
import { chromium } from "playwright"
import pixelmatch from "pixelmatch"
import { PNG } from "pngjs"

const BASE = process.env.BASE_URL ?? "http://localhost:5173/monarco"
const [id, route, srcPart, nth = "0", xs = "0,10,20,30,40,50,60,70,80,90,100", ys = "50", scales = "1"] = process.argv.slice(2)
const base = PNG.sync.read(fs.readFileSync(`design/baseline/${id}.png`))
const width = Number(id.split("-").pop())

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width, height: 1000 }, deviceScaleFactor: 2 })
await page.emulateMedia({ reducedMotion: "reduce" })
await page.goto(BASE + route, { waitUntil: "networkidle" })
await page.evaluate(() => document.fonts.ready)

const img = (await page.$$(`img[src*="${srcPart}"]`))[Number(nth)]
if (!img) throw new Error(`no img matching "${srcPart}" #${nth} on ${route}`)
const box = await img.evaluate((e) => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y + scrollY, w: r.width, h: r.height } })

const results = []
for (const s of scales.split(",")) for (const y of ys.split(",")) for (const x of xs.split(",")) {
  await img.evaluate((e, [x, y, s]) => Object.assign(e.style, { objectPosition: `${x}% ${y}%`, scale: s, transformOrigin: `${x}% ${y}%` }), [x, y, s])
  const shot = PNG.sync.read(await page.screenshot({ fullPage: true, clip: { x: box.x, y: box.y, width: box.w, height: box.h } }))
  const W = shot.width
  const H = Math.min(shot.height, base.height - Math.round(box.y * 2))
  const a = new PNG({ width: W, height: H })
  const b = new PNG({ width: W, height: H })
  PNG.bitblt(base, a, Math.round(box.x * 2), Math.round(box.y * 2), W, H, 0, 0)
  PNG.bitblt(shot, b, 0, 0, W, H, 0, 0)
  results.push([x, y, s, (pixelmatch(a.data, b.data, null, W, H, { threshold: 0.15 }) / (W * H)) * 100])
}
await browser.close()

results.sort((m, n) => m[3] - n[3])
console.log(JSON.stringify(box))
for (const [x, y, s, pct] of results.slice(0, 6)) console.log(`  x ${x}%  y ${y}%  scale ${s}  → ${pct.toFixed(1)}%`)
