# MONARCO site: agent guide

React 19 + Vite + Tailwind 4 marketing site, built page by page from the Figma file **THE MONARCO HOUSE**
(`figma.com/design/X8viBDfqA22pScMUR0ih7W`). Every page must match its Figma Desktop (1440), Tablet (744) and
Mobile (390) frames near pixel-perfectly, including prototype behaviour. `docs/design-parity.md` records how close each page is and why.

## Commands

| Task | Command |
|---|---|
| Dev server | `npm run dev` → `http://localhost:5173/monarco/` |
| Types + build | `npm run build` |
| Pixel diff vs Figma | `SECTIONS=1 npm run diff [-- <page>]` (needs dev server) |
| Prototype behaviour | `npm run check:prototype` (needs dev server) |
| Outline a Figma CSS dump | `node scripts/figma-outline.mjs dump.css > outline.txt` |
| Recover an image crop | `node scripts/tune-crop.mjs <page>-<width> <route> <img src part> [nth] [xs] [ys] [scales]` |
| Crop a region of a PNG (inspect an export) | `node scripts/crop.mjs in.png out.png y height [scale]` |
| Convert Figma image / video fills | `scripts/import-assets.mjs` (add a `name: [hash prefix, width]` entry), `scripts/import-videos.mjs` |

The repo lives in WSL (`~/Upwork/test`), Node 20 via nvm (`source ~/.nvm/nvm.sh && nvm use 20`). From Windows, run commands with
`wsl -d Ubuntu-22.04 -- bash <script.sh>`; Git Bash rewrites `/mnt/...` paths and `$VARS` passed to `wsl`, so put the command in a script file.

## Structure: where things go

```
src/pages/<Name>Page.tsx        only composes sections inside <PageShell> (plus <Divider /> between sections where Figma has one)
src/sections/<page>/*.tsx       one file per Figma section, named after it (CollectionSection, CaviarRitualSection)
src/sections/<page>/<Thing>.tsx a component used only by that page's sections (e.g. rituals/RitualCard)
src/sections/shared/*.tsx       sections reused by 2+ pages (HeroSection, MirrorRevealSection)
src/components/*.tsx            site-wide building blocks (below); components/ui = shadcn primitives
src/styles/tokens.css           Figma semantic tokens; src/index.css maps them to Tailwind + type utilities
public/assets/*.webp            images, kebab-case, referenced with asset("assets/x.webp")
design/baseline/<page>-<w>.png  Figma 2x frame exports the diff compares against
```

**Naming a new page.** Pick one short page id (`rituals`) and use it for the sections folder, the baseline files (`rituals-1440.png`) and the
diff case. The route is the page's URL slug (`/rituals`; existing exception: id `house`, route `/the-house`). Then:
- add the route in `src/App.tsx`;
- point the nav link in `components/navbar.tsx` (`LINKS`) and the footer link in `components/footer.tsx` (`ROUTES`) at it;
- add `["<id>", "<route>", [1440, 744, 390]]` to `CASES` in `scripts/visual-diff.mjs`. `npm run diff -- <filter>` matches ids by substring.

**When a section becomes shared:** a new page uses a section that already lives in another page's folder. `git mv` it to `src/sections/shared/`,
update the old page's import, and add optional props for whatever differs. Don't copy it. `scripts/check-prototype.mjs` asserts the exact videos on `/`,
so update it if a moved section changes Home's video fills.

## Reuse before you write

Check these first; extend one with an optional prop before creating a near-duplicate.

| Need | Use |
|---|---|
| Section band with Section/Large padding | `Section` (`components/layout`) |
| 1360px max-width content with container padding | `Container` |
| 450px intro column + content (stacks below desktop) | `Split`, `SplitIntro`, `SplitBody` |
| Cover image / video / gradient behind content | `Backdrop` (`src`, `desktopSrc`, `video`, `overlay`, `imgClassName`) |
| Full-bleed page hero (eyebrow, H1, body, actions, pills) | `HeroSection` (`sections/shared`) |
| Eyebrow, dark H2 on light sections, large body | `Eyebrow`, `SectionHeading`, `BodyLarge` (`components/typography`) |
| Gold button with arrow / underlined text action | `ArrowButton`, `TextLink` (`components/cta`), built on `ui/button` |
| Glass pill, sand card, icon badge, check bullet, badge | `TrustPill`, `SandCard`, `IconBadge`, `BenefitItem`, `StatusBadge` (`components/cards`) |
| Dividers | `Divider`, `Rule` |

A component earns a file when it repeats (same Figma component used 2+ times) or when a section file gets hard to read.
Variants of one Figma component are one component with a variant map (see `sections/rituals/RitualCard.tsx`), not copies.

## Tokens and type: translate Figma values, don't hard-code them

- **Breakpoints:** default = Mobile frame, `md:` = Tablet (744), `lg:` = Desktop (1200+). Write mobile first.
- **Spacing.** Values are Mobile / Tablet / Desktop (`tokens.css`):

  | Class suffix | Values (px) | Notes |
  |---|---|---|
  | `2xs` `xs` `sm` `md` `lg` `xl` | 4, 8, 12, 16, 20, 24 | fixed at every width |
  | `2xl`…`9xl` | e.g. `4xl` 40 / 40 / 48, `6xl` 64 / 64 / 80 | change **only at desktop**; Tablet keeps the Mobile value |
  | `section`, `section-md`, `section-sm` | 40 / 64 / 96, 32 / 48 / 64, 24 / 32 / 40 | Figma Section/Large, Medium, Small; `py-section` is what `<Section>` applies |
  | `container`, `container-md`, `container-sm` | 16 / 24 / 40, 12 / 16 / 32, 8 / 8 / 24 | Container/Large etc.; `px-container` is what `<Container>` applies |

  For every Figma gap or padding, find a token whose value matches **at each frame**, and combine where needed:
  a gap of 16 / 24 / 24 is `gap-md md:gap-xl`. A section frame with `padding: 40px 0px` gets its side padding from a child
  container frame (`padding: 0px 16px`), which is `<Container>`. Use arbitrary values (`w-[426px]`) only for Figma's fixed widths and heights.
- **Type.** Figma style names are `<Style>/<Weight>`, e.g. "Paragraf Small/Medium" = `type-sm font-medium`.
  - `H1`…`H6` map to `type-h1`…`type-h6` (DM Sans; headings are already weight 500 in `index.css`).
  - Paragraf `Large`, `Medium` and `Small` map to `type-lg`, `type-md` and `type-sm`; `Caption` maps to `type-caption` (fixed 12/16). These are all Inter.
  - Each utility sets its own font and responsive size. Paragraf sizes don't change at desktop, so `lg:type-*` is only needed when the style itself changes.
  - The same text often uses a different style per frame, e.g. Mobile "Paragraf Small" and Tablet "Paragraf Medium" give `type-sm md:type-md`. Read the style in all three dumps.
- **Colour:** use semantic classes (`text-text-tertiary`, `bg-surface-contrast`). A hex in Figma is almost always one of the tokens in `tokens.css`.

## Workflow: building a page from Figma

Use the Chrome browser tools on the Figma file (the seat is view-only; don't use the Figma MCP). Never change Figma or account settings.
If browser tools aren't available, stop and ask the user. Steps 1–5 can't be done from the repo alone.

1. **Find the frames.** Figma page **Designs** → Layers has one section per site page (Home, The House, Rituals, Solis, Our House,
   Men of Monarco, Nav Menu Open). Expand it to get `Desktop`, `Tablet` and `Mobile`. Selecting a frame puts its node id in the URL.
   The prototype starts from the Desktop frame's node, e.g. `/proto/X8viBDfqA22pScMUR0ih7W/?node-id=<desktop node>`.
   If the page has no section, ask the user before building anything.
2. **Dump each frame's CSS.** Right-click the frame → Copy as → Copy as code → **CSS (all layers)**. Read the clipboard from Windows
   (`Get-Clipboard -Raw` in PowerShell; `navigator.clipboard.readText()` hangs), save it, then outline it with `scripts/figma-outline.mjs`.
   The dump gives sizes, auto-layout, padding, gaps, colours, gradients, fonts and image fill names. It has **no nesting and no text**: work out
   hierarchy from order and widths. The outline keeps `display: none` layers. They are hidden variants (for example the unused badge in a card), so skip them by hand.
3. **Export baselines.** Select the frame → Properties → Export (2x PNG) → move it from Downloads to
   `design/baseline/<page>-1440|744|390.png` and delete any `*Zone.Identifier` file. Read the copy from these images (layer names are often placeholders such as
   "Medium length hero headline goes here"), and reproduce it exactly, typos included.
4. **Walk the prototype.** Open `/proto/...&scaling=scale-down-width&hide-ui=1`. Click an empty spot inside the frame to flash the hotspots,
   hover cards, buttons and links for hover variants, and click each hotspot to see where it goes (Navigate to a page, Scroll to a section, nothing).
   List every behaviour; anything not wired points to `#`.
5. **Get assets.** Use the page's folder in the project Drive (originals) or Figma. Match each Figma fill name to a file and reuse existing
   `public/assets` files where the fill is the same. Convert with `sharp` to WebP at 2x the largest display width into `public/assets/`
   (`scripts/import-assets.mjs` for originals downloaded from Figma, `scripts/import-videos.mjs` for video fills). If no source matches what the
   frame shows, crop the image out of the 2x export.
6. **Build section by section.** One file per Figma section, reusing the table above. Mirror Figma's auto-layout: flex direction, gap, padding,
   fixed widths where text wrapping depends on them, and fixed heights where Figma fixes them.
7. **Diff and fix in this order:** page **heights** (every section's height must match, or everything below shifts), then layout and type,
   then image crops. Get crops with `scripts/tune-crop.mjs` (coarse grid, then refine around the best value) and apply them as
   `object-[x%_y%]` per breakpoint through `imgClassName`.
8. **Wire behaviour:** routes, a hash anchor for "Scroll to", and hover states as Figma variants (button hover is already in `ui/button`).
   Add assertions to `scripts/check-prototype.mjs`.
9. **Document:** add a page section to `docs/design-parity.md` with per-section mismatch at each width, plus the cause of anything above about 5%.

## Figma → CSS details that cost time

- Figma button strokes take no space: `Button` uses `ring`, not `border`. Tablet and mobile instances are sometimes 44px where the component is 48px;
  match the frame with a padding override (`md:py-[10px]`).
- A gradient overlay that differs per breakpoint: put CSS variables in the gradient, e.g.
  `rgb(29 27 24 / var(--mid))`, and set `[--mid:0.7] md:[--mid:0.5]` on the section.
- Figma rounds `line-height: 140%` to whole pixels (16px → 22px lines). Use the pixel value Figma laid out, which you get from layer height ÷ line count.
- When a child is taller than a fixed-height parent, Figma lets it overflow (e.g. bottom-aligned copy rising into the padding). Reproduce it with the same fixed height.
- Elements placed with `position: absolute` inside a row (button pairs) usually mean a 16px gap; measure it from the export.
- Wrapping differs only from font metrics: fonts are self-hosted variable fonts with optical sizing (`*/opsz.css`). Don't change letter-spacing to force a wrap.

## Done means

- `npm run build` passes.
- `SECTIONS=1 npm run diff`: page height delta 0 (Figma's ±0.5px fractional height is fine), `x-overflow 0px` at every width.
  Sections should sit at about 0.5–4% (the anti-aliasing noise floor); anything higher is explained in `docs/design-parity.md`.
- Other pages' diff numbers did not get worse.
- `npm run check:prototype` passes, including the new page's behaviours.
- No horizontal scroll between the frame widths (check 320, 600, 1024 and 1920).
