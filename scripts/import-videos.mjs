// One-off: converts video fills (Figma prototype downloads or Drive originals) to silent, web-ready MP4 in
// public/assets, plus a first-frame WebP poster (the still Figma's frame exports show).
// Usage: node scripts/import-videos.mjs <dir with the source files>   (sources missing from <dir> are skipped)
import { execFileSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import ffmpeg from "ffmpeg-static"
import sharp from "sharp"

const [dir] = process.argv.slice(2)
// name: source file. The Obsidian Solis clip (monarco-video-5180c517) is in the file but not used by any frame.
const VIDEOS = {
  "hero-home": "monarco-video-eb667769.mp4",
  solis: "monarco-video-31a49b73.mp4",
  "solis-hero": "Solis Hero Section.mp4",
  "solis-preorder": "Solis Pre Order.mp4",
}

for (const [name, file] of Object.entries(VIDEOS)) {
  const src = path.join(dir, file)
  if (!fs.existsSync(src)) continue
  const out = `public/assets/${name}.mp4`
  execFileSync(ffmpeg, [
    "-hide_banner", "-loglevel", "error", "-y",
    "-i", src,
    "-an", "-vf", "scale='min(1920,iw)':-2", "-c:v", "libx264", "-crf", "24", "-preset", "slow",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart", out,
  ])
  const frame = execFileSync(ffmpeg, ["-hide_banner", "-loglevel", "error", "-i", out, "-frames:v", "1", "-f", "image2pipe", "-vcodec", "png", "-"], { maxBuffer: 64 << 20 })
  await sharp(frame).webp({ quality: 85 }).toFile(`public/assets/${name}.webp`)
  console.log(out, `${Math.round(fs.statSync(out).size / 1024)}KB`)
}
