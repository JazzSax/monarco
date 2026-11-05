# Design parity: build vs Figma file and prototype

Last measured 2026-11-05. Home, The House and Rituals baselines are 2x frame exports from THE MONARCO HOUSE Figma file (prototype `node-id=338-9925`). Home and The House were first built from the older MONARCO (Test) file; the `nav-*` baselines are still from that file.

## How this is measured

| Check | Command | What it proves |
|---|---|---|
| Visual diff | `npm run dev`, then `SECTIONS=1 npm run diff` | Screenshots every page at 1440 / 744 / 390 (2x) and compares them pixel by pixel with the Figma frame exports in `design/baseline/`. Prints page height delta and % of mismatched pixels per section. |
| Prototype behaviour | `npm run check:prototype` | Asserts the prototype-only behaviours below in a real browser. |
| Types and build | `npm run build` | |

Mismatch % uses pixelmatch (threshold 0.15). Figma and Chrome anti-alias text differently, so **0.5–4% is the noise floor** for a section that is visually identical. Anything above about 5% is listed below with its cause.

## What the prototype adds over the static frames (now implemented)

| Prototype behaviour | Source in Figma | Build |
|---|---|---|
| Hero background is a video (8 s, face turning under a scan mesh) | Video fill `Hero Video Section.mp4` on Home Hero, all breakpoints | `public/assets/hero-home.mp4`, muted, looping, inline, with the still as poster |
| Solis background is a video (10 s, red Tera mask on rocks) | Video fill `Solis Product Section.mp4` on Home Solis, all breakpoints | `public/assets/solis.mp4` |
| Buttons: hover | Button component: Default → Hover, *While hovering*, Smart animate, ease-out 200 ms. Hover = scale 0.98, `Surface/action-hover` #DAB66E, drop shadow 0 3.92 11.76 #12110F 14% | `components/ui/button.tsx` |
| Buttons: focus and disabled | Focus = 3 px inner `Border/focus` #DAB66E stroke. Disabled = `Surface/disabled` #2D2A25 | `focus-visible:` / `disabled:` styles |
| Text links: hover | Secondary text link → `neutral/300` #D4D4D4, scale 0.98, 200 ms | `link` variant |
| Nav links: hover | Nav Link Inactive → Active, Smart animate, ease-out 300 ms (gold dot fades in, text turns `Text/action`) | `components/navbar.tsx` |
| Page navigation | "Enter The House", footer "The House", nav "The House" → The House page; House logo → Home. All *Navigate to*, Dissolve, ease-out 300 ms | Router links + 300 ms fade (`animate-dissolve`), scroll to top |

All of the above respect `prefers-reduced-motion`: the videos show their still and transitions are switched off.

Prototype features checked and confirmed absent, so not built: sticky navigation, scroll-triggered animations, carousel auto-play, and any interaction on the Mirror Portrait Reveal (its Start / Mid / End variants have no interactions; the prototype shows it static at Mid).

## Home page: remaining differences by section

| Section | 1440 | 744 | 390 | Cause |
|---|---|---|---|---|
| Announcement banner | 2.2% | 4.7% | 2.5% | The sparkle icons are a custom vector in Figma; Lucide `Sun` is used instead. |
| Hero (video) | 0.5% | 0.7% | 1.5% | Matches (compared against the poster frame). |
| A Clearer Perspective | 1.1% | 1.6% | 1.3% | Matches. |
| Different Days (Recovery Context) | **13.6%** | 3.6% | **16.7%** | Figma's background gradient leaves the sky lighter at the top. The viewer seat exposes gradient stops but not their angle or handles, so the overlay is approximated. |
| Men of Monarco banner | 3.6% | **7.3%** | **9.5%** | Background image crop below desktop is approximated. |
| How It Works | 1.2% | 2.7% | 2.8% | Matches. |
| Privacy | 0.8% | 3.3% | 2.3% | Matches. Icons are Lucide equivalents of the Figma vectors. |
| Mirror Portrait Reveal | 2.0% | 2.9% | 3.8% | Matches at rest. **Deliberate addition:** the handle can be dragged or moved with the keyboard; the prototype has no interaction here. |
| Over Time (trend chart) | 0.6% | 1.6% | 0.9% | Matches. |
| Membership | 1.0% | 2.8% | 2.1% | Matches. |
| Solis (video) | **9.2%** | 2.3% | 1.9% | Desktop finish tiles (Mineral / Tera / Obsidian) use Figma *Crop* image transforms that the viewer seat does not expose. The closest source and zoom were found by an automated search against the baseline, but the crops are not exact. |
| Read. Restore. Return. | 1.2% | 1.8% | 2.1% | Matches. |
| Featured Offers | **5.7%** | **10.8%** | **17.1%** | Same cause as Solis: the caviar jar and "Disconnecting" photos are cropped with transforms that are not exposed. Tablet and mobile crops are approximate. |
| Footer | 2.6% | 3.8% | 3.5% | Matches. |
| **Whole page** | **3.03%** | **3.35%** | **4.08%** | Page heights match Figma exactly (the 0.5px is Figma's fractional frame height). No horizontal overflow at any width. |

For reference, The House page measures 2.77% / 6.06% / 7.54%, with its outliers (hero at 744 / 390, Members-only, closing section at 390) coming from the same image-crop limitation.

## Rituals page

Built 2026-11-05 from THE MONARCO HOUSE file (Rituals: Desktop `338:9925`, Tablet `639:350`, Mobile `724:354`), measured against its 2x frame exports in `design/baseline/rituals-*.png`. Layer CSS was read with *Copy as code → CSS (all layers)*; images come from the Drive "Rituals" folder.

| Section | 1440 | 744 | 390 | Cause |
|---|---|---|---|---|
| Announcement banner | 2.2% | 4.7% | 2.8% | Shared component (sparkle icon, see Home). |
| Hero | 0.6% | 2.6% | 2.3% | Matches. Tablet and mobile crops found by searching `object-position` against the baseline. |
| Considered Essentials | 0.7% | 5.3% | 6.9% | Matches. At 390 one word of the intro wraps differently. |
| The Eye Ritual (Caviar) | 0.5% | 8.5% | 11.1% | Background crop below desktop is approximate (same search). |
| Formulation / Experience / Craftsmanship | 0.7% | 1.4% | 1.0% | Matches. |
| More Than Access | 1.0% | 2.2% | 6.6% | Matches; mobile crop approximate. |
| Built For Real Life / Understand First | **12.9%** | **17.1%** | **11.1%** | Both promo photos use Figma crop transforms the view-only seat does not expose; a position and zoom search did not get below ~22% per card, so they are left centred. |
| Footer | 2.5% | 3.8% | 3.5% | Shared component. |
| **Whole page** | **2.50%** | **6.34%** | **5.37%** | Page heights match Figma exactly. No horizontal overflow from 320 to 1920 px. |

Prototype behaviour on this page: nav and footer "Rituals" → `/rituals`; "Explore The Collection" scrolls to the collection (native anchor); "Explore Membership" → The House; category and detail cards get a 1px `Border/action` stroke on hover. Other links on the page are unwired in the prototype and point to `#`. All of these are covered by `npm run check:prototype`.

Page-specific decisions:

1. **Light Rituals image.** The Drive folder's red mask photo is a different shot from the one in the frame, so the card image is cropped from Figma's own Desktop export (`ritual-light.webp`, 656×492).
2. **Copy reproduced as designed**, including "House Exlusive".

## Other known differences and decisions

1. **Image crops.** The view-only Figma seat exposes image fills but not their crop or scale transforms. Original-resolution images were downloaded from the file and cropped with `object-position` / zoom tuned against the baselines. This is the largest remaining source of mismatch. An editor seat (or the Figma REST API with a token) would give the exact transforms.
2. **Icons.** Figma icons are vectors inside the components; the build uses the closest Lucide icons (the file's icon library is "Icons - Lucide", but several are custom). Instagram and LinkedIn are inline SVGs.
3. **Video looping.** Figma's player starts the clips muted and does not set a loop flag; the build loops them, which is the usual behaviour for background video. The Obsidian Solis clip present in the file is not used by any frame, so it is not shipped. Videos are re-encoded to 1920 px wide, silent H.264 (2.1 MB and 2.6 MB, down from 2.8 MB and 8.5 MB), which is a small resolution reduction from the 4K Solis source.
4. **Breakpoints.** Figma defines no viewport thresholds (Style Guide, section 08). The build switches at 744 px (tablet) and 1200 px (desktop). Pixel parity is only measurable at the three frame widths; between them the layout is fluid.
5. **Nav Menu Open.** The Figma frame shows "The House" as active over the Home page. The build marks the current route as active instead.
6. **Announcement close button.** No prototype interaction; the build dismisses the banner (addition).
7. **Unwired links.** The prototype only wires links to The House, Rituals and back. Solis, Our House, Men of Monarco, Sign In, Begin My Read, footer support/legal links and social links point to `#`.
8. **Copy reproduced as designed**, including typos: "Begining", "depatch", "THE JONARCO HOUSE", "Discover Your Recover Index".
9. **Contrast.** Token pairs that the Figma style guide itself flags as failing WCAG AA (for example `Text/on-action` on `Surface/action Secondary`, 2.70:1) are reproduced as designed.
10. **Fonts.** THE MONARCO HOUSE file uses Inter for every Paragraf and Caption text style and DM Sans for every H1–H6 style (headings, prices, scores). Each `type-*` utility in `src/index.css` carries its font, and body text defaults to Inter, so a responsive switch such as the footer titles' `type-h6 md:type-md` changes font exactly where Figma does. Both fonts are self-hosted variable fonts with optical sizing (`@fontsource-variable/inter/opsz.css`, `@fontsource-variable/dm-sans/opsz.css`); Inter's optical size is what makes line wraps match Figma. Remaining text differences are renderer anti-aliasing and sub-pixel advance widths.
11. **Home step numbers.** In the new file the Read Journey step numbers use a "Label/Eyebrow" style (DM Sans 600, 12/16, 1.2px tracking, uppercase). The build keeps the earlier Paragraf style for them; this is a design change beyond the font swap and is not applied.
