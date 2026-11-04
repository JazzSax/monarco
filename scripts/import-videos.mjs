// One-off: converts the prototype's video fills (MPEG-TS from Figma) to silent, web-ready MP4 in public/assets.
// Usage: node scripts/import-videos.mjs <dir with monarco-video-<id>.mp4 files>
import { execFileSync } from "node:child_process"
import path from "node:path"
import ffmpeg from "ffmpeg-static"

const [dir] = process.argv.slice(2)
// name: Figma video id prefix. The Obsidian Solis clip (5180c517) is in the file but not used by any frame.
const VIDEOS = { "hero-home": "eb667769", solis: "31a49b73" }

for (const [name, id] of Object.entries(VIDEOS)) {
  const out = `public/assets/${name}.mp4`
  execFileSync(ffmpeg, [
    "-hide_banner", "-loglevel", "error", "-y",
    "-i", path.join(dir, `monarco-video-${id}.mp4`),
    "-an", "-vf", "scale='min(1920,iw)':-2", "-c:v", "libx264", "-crf", "24", "-preset", "slow",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart", out,
  ])
  console.log(out)
}
