// Condenses Figma's "Copy as code → CSS (all layers)" dump into one line per layer:
//   Layer name [Typography style] | flex direction, padding, gap, size, colours, font…
// Usage: node scripts/figma-outline.mjs <dump.css> > outline.txt
// Figma's dump has no nesting and no text content; read hierarchy from widths/order and copy from the frame export.
import fs from "node:fs"

const src = fs.readFileSync(process.argv[2], "utf8")
const noise = /^(flex: none|flex-grow: 0|position: relative|align-self: stretch|isolation: isolate|order:|z-index|font-style|display: flex|left:|top:)/
const short = [["flex-direction: ", "dir:"], ["align-items: ", "ai:"], ["justify-content: ", "jc:"]]

for (const block of src.split(/\n\n\n/)) {
  let name = null
  let typo = null
  const props = []
  // Multi-line comments (typography descriptions) are skipped whole.
  for (const line of block.replace(/\/\*[^*]*\n[\s\S]*?\*\//g, (c) => c.split("\n")[0] + " */").split("\n").map((l) => l.trim()).filter(Boolean)) {
    const comment = line.match(/^\/\* (.*?)(?: \*\/)?$/)
    if (comment) {
      const text = comment[1]
      if (text.startsWith("Typography")) typo = text.replace("Typography Semantik/", "")
      else if (!/^(Auto layout|Inside auto layout|identical to box|or \d)/.test(text) && name === null) name = text
      continue
    }
    const prop = line.replace(/;$/, "")
    if (noise.test(prop)) continue
    props.push(short.reduce((p, [a, b]) => p.replace(a, b), prop))
  }
  if (name || props.length) console.log(`${name ?? "?"}${typo ? ` [${typo}]` : ""} | ${props.join("; ")}`)
}
