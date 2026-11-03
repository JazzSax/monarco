// Crop a PNG region to a smaller PNG: node scripts/crop.mjs in.png out.png y height [scale]
// With only in.png, prints its dimensions.
import fs from "node:fs"
import { PNG } from "pngjs"

const [input, output, y = 0, height, scale = 1] = process.argv.slice(2)
const src = PNG.sync.read(fs.readFileSync(input))
if (!output) {
  console.log(`${input} ${src.width}x${src.height}`)
  process.exit(0)
}
const step = Math.round(1 / Number(scale))
const top = Number(y)
const rows = Math.min(Number(height), src.height - top)
const out = new PNG({ width: Math.floor(src.width / step), height: Math.floor(rows / step) })
for (let r = 0; r < out.height; r++) {
  for (let c = 0; c < out.width; c++) {
    const from = ((top + r * step) * src.width + c * step) * 4
    src.data.copy(out.data, (r * out.width + c) * 4, from, from + 4)
  }
}
fs.writeFileSync(output, PNG.sync.write(out))
