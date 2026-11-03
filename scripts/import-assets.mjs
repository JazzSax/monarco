// One-off: converts original Figma image fills (named monarco-img-<hash>) to named WebP files in public/assets.
// Usage: node scripts/import-assets.mjs <dir with originals>
import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const [dir] = process.argv.slice(2)
const out = "public/assets"
fs.mkdirSync(out, { recursive: true })
const files = fs.readdirSync(dir)

// name: [hash prefix, max width in px (2x the largest display width)]
const map = {
  "hero-home": ["811dfa", 2880],
  "hero-house": ["27775f", 2880],
  "eye": ["169fe8", 1000],
  "context-bg": ["cee8e5", 2880],
  "men-banner": ["acc71a", 2880],
  "marble": ["b2071b", 2880],
  "house-interior": ["cd0559", 1500],
  "solis-bg": ["058122", 2880],
  "scene-late-night": ["64f5c4", 400],
  "scene-long-flight": ["3d68b8", 400],
  "scene-heavy-week": ["cfb368", 400],
  "scene-hard-training": ["b886a9", 400],
  "scene-early-start": ["a69387", 400],
  "phone-face": ["dc1b56", 800],
  "phone-context": ["a58668", 800],
  "phone-insights": ["d2d8ea", 800],
  "reveal-before": ["526509", 2880],
  "reveal-after": ["9dc438", 2880],
  "finish-mineral": ["c2cce3", 500],
  "finish-tera": ["745510", 500],
  "finish-obsidian": ["ea5659", 500],
  "caviar-home": ["1c5766", 1400],
  "disconnect": ["befa82", 2880],
  "footer-rock": ["a78970", 2880],
  "parchment": ["27a8df", 2170],
  "plan-private": ["e6c66b", 800],
  "plan-reserve": ["f08e41", 800],
  "dashboard": ["74106b", 1700],
  "caviar-house": ["556662", 1700],
  "read-portrait": ["bc4d10", 600],
  "logo-primary": ["05b5fd", 300],
  "logo-wide": ["d285f1", 800],
}

for (const [name, [hash, width]] of Object.entries(map)) {
  const file = files.find((f) => f.startsWith(`monarco-img-${hash}`))
  if (!file) throw new Error(`missing ${name} (${hash})`)
  const info = await sharp(path.join(dir, file))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(path.join(out, `${name}.webp`))
  console.log(name, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`)
}
