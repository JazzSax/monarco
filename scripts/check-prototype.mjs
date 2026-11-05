// Checks the prototype behaviours that static frames don't show. Usage: node scripts/check-prototype.mjs (needs `npm run dev`).
import assert from "node:assert/strict"
import { chromium } from "playwright"

const BASE = process.env.BASE_URL ?? "http://localhost:5173/monarco"
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto(BASE + "/", { waitUntil: "networkidle" })

// 1. Hero and Solis video fills play, muted and looping.
const videos = await page.$$eval("video", (vs) => vs.map((v) => ({ src: v.currentSrc.split("/").pop(), muted: v.muted, loop: v.loop })))
assert.deepEqual(videos.map((v) => v.src), ["hero-home.mp4", "solis.mp4"])
assert.ok(videos.every((v) => v.muted && v.loop))
await page.waitForTimeout(1500)
const playing = await page.$eval("video", (v) => v.currentTime > 0 && !v.paused)
assert.ok(playing, "hero video should be playing")

// 2. Button hover: Figma Hover variant (scale 0.98, Surface/action-hover, drop shadow) after the 200ms transition.
const cta = page.getByRole("link", { name: "Begin My Read" }).nth(1)
await cta.hover()
await page.waitForTimeout(300)
const hover = await cta.evaluate((el) => {
  const s = getComputedStyle(el)
  return { scale: s.scale, bg: s.backgroundColor, shadow: s.boxShadow }
})
assert.equal(hover.scale, "0.98")
assert.equal(hover.bg, "rgb(218, 182, 110)")
assert.match(hover.shadow, /rgba\(18, 17, 15, 0\.14\)/)

// 3. Nav link hover: Inactive -> Active (gold text, dot visible) after 300ms.
const rituals = page.getByRole("link", { name: "Rituals" }).first()
await rituals.hover()
await page.waitForTimeout(400)
const nav = await rituals.evaluate((el) => ({ color: getComputedStyle(el).color, dot: getComputedStyle(el.firstElementChild).opacity }))
assert.equal(nav.color, "rgb(201, 159, 84)")
assert.equal(nav.dot, "1")

// 4. "Enter The House" navigates with the dissolve and lands at the top of The House.
await page.getByRole("link", { name: "Enter The House" }).click()
await page.waitForURL("**/the-house")
// React Router renders the new route in a transition, so the page swaps shortly after the URL changes.
await page.waitForFunction(() => scrollY === 0 && document.title !== "" && document.querySelector("h1")?.textContent?.startsWith("Understanding"))
const fade = await page.$eval(".animate-dissolve", (el) => getComputedStyle(el).animationName)
assert.equal(fade, "dissolve")

// 5. The House logo returns home.
await page.getByRole("link", { name: "Monarco home" }).first().click()
await page.waitForURL((url) => url.pathname.endsWith("/monarco/") || url.pathname.endsWith("/monarco"))

// 6. Nav "Rituals" navigates to the Rituals page.
await page.getByRole("link", { name: "Rituals", exact: true }).first().click()
await page.waitForURL("**/rituals")
await page.waitForFunction(() => document.querySelector("h1")?.textContent === "Recovery, Made Ritual")

// 7. "Explore The Collection" scrolls to the collection (prototype: Scroll to).
await page.getByRole("link", { name: "Explore The Collection" }).click()
await page.waitForFunction(() => Math.abs(document.getElementById("collection").getBoundingClientRect().top) < 2)

// 8. Ritual card hover: 1px Border/action stroke after the 200ms transition.
const card = page.locator("#collection article").first()
await card.hover()
await page.waitForTimeout(300)
assert.equal(await card.evaluate((el) => getComputedStyle(el).outlineColor), "rgb(201, 159, 84)")

// 9. "Explore Membership" navigates to The House.
await page.getByRole("link", { name: "Explore Membership" }).click()
await page.waitForURL("**/the-house")

await browser.close()
console.log("prototype behaviours: all checks passed")
