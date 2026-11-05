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
// Smooth: 100ms in, the page is still on its way to the section.
await page.waitForTimeout(100)
assert.ok(await page.evaluate(() => document.getElementById("collection").getBoundingClientRect().top > 20), "anchor scroll should be smooth")
await page.waitForFunction(() => Math.abs(document.getElementById("collection").getBoundingClientRect().top) < 2)

// 8. Ritual card hover: 1px Border/action stroke after the 200ms transition.
const card = page.locator("#collection article").first()
await card.hover()
await page.waitForTimeout(300)
assert.equal(await card.evaluate((el) => getComputedStyle(el).outlineColor), "rgb(201, 159, 84)")
await page.waitForTimeout(100) // let the 300ms zoom finish
assert.match(await card.locator("img").evaluate((el) => getComputedStyle(el).scale), /^1\.04/)
// Its text link shrinks to 0.98 and keeps its colour on the light card.
const cardLink = card.getByRole("link")
const linkColor = await cardLink.evaluate((el) => getComputedStyle(el).color)
await cardLink.hover()
await page.waitForTimeout(300)
assert.equal(await cardLink.evaluate((el) => getComputedStyle(el).scale), "0.98")
assert.equal(await cardLink.evaluate((el) => getComputedStyle(el).color), linkColor)

// 9. "Explore Membership" navigates to The House.
await page.getByRole("link", { name: "Explore Membership" }).click()
await page.waitForURL("**/the-house")

// 10. Nav "Solis" navigates to the Solis page, whose hero and pre-order fills are muted, looping videos.
await page.getByRole("link", { name: "Solis", exact: true }).first().click()
await page.waitForURL("**/solis")
await page.waitForFunction(() => document.querySelector("h1")?.textContent === "Solis")
const solisVideos = await page.$$eval("video", (vs) => vs.map((v) => ({ src: v.currentSrc.split("/").pop(), muted: v.muted, loop: v.loop })))
assert.deepEqual(solisVideos.map((v) => v.src), ["solis-hero.mp4", "solis-preorder.mp4"])
assert.ok(solisVideos.every((v) => v.muted && v.loop))

// FAQ: starts on "Do I need a membership ?"; opening another closes it, and the answer animates open.
const membershipFaq = page.getByRole("button", { name: "Do I need a membership ?" })
const deliveryFaq = page.getByRole("button", { name: "When will my order arrive ?" })
assert.equal(await membershipFaq.getAttribute("aria-expanded"), "true")
await deliveryFaq.click()
assert.equal(await deliveryFaq.getAttribute("aria-expanded"), "true")
assert.equal(await membershipFaq.getAttribute("aria-expanded"), "false")
await page.waitForTimeout(400)
const answerHeight = async (btn) => btn.evaluate((el) => document.getElementById(el.getAttribute("aria-controls")).getBoundingClientRect().height)
assert.ok((await answerHeight(deliveryFaq)) > 10, "opened answer should be visible")
assert.equal(await answerHeight(membershipFaq), 0)
await deliveryFaq.click()
await page.waitForTimeout(400)
assert.equal(await answerHeight(deliveryFaq), 0)

// 11. Rituals "Explore Solis" navigates to the Solis page.
await page.goto(BASE + "/rituals", { waitUntil: "networkidle" })
await page.getByRole("link", { name: "Explore Solis" }).click()
await page.waitForURL("**/solis")

// 12. Nav "Our House" navigates to Our House; "Discover Our Philosophy" scrolls to Chapter II (prototype: Scroll to).
await page.getByRole("link", { name: "Our House", exact: true }).first().click()
await page.waitForURL("**/our-house")
await page.waitForFunction(() => document.querySelector("h1")?.textContent === "A Heritage in the Making")
await page.getByRole("link", { name: "Discover Our Philosophy" }).click()
await page.waitForFunction(() => Math.abs(document.getElementById("philosophy").getBoundingClientRect().top) < 2)

// 13. Expression card hover turns its stroke gold; its links go to Rituals and Solis.
const expression = page.locator("article", { hasText: "Monarco Rituals" })
await expression.hover()
await page.waitForTimeout(300)
assert.equal(await expression.evaluate((el) => getComputedStyle(el).outlineColor), "rgb(201, 159, 84)")
await page.waitForTimeout(200) // let the 300ms zoom finish
assert.match(await expression.locator("img").evaluate((el) => getComputedStyle(el).scale), /^1\.04/)
const ritualsLink = page.getByRole("link", { name: "Explore Our Rituals" })
await ritualsLink.hover()
await page.waitForTimeout(300)
assert.equal(await ritualsLink.evaluate((el) => getComputedStyle(el).scale), "0.98")
await ritualsLink.click()
await page.waitForURL("**/rituals")
await page.goto(BASE + "/our-house", { waitUntil: "networkidle" })
await page.getByRole("link", { name: "Discover Monarco Solis" }).click()
await page.waitForURL("**/solis")

// 14. Nav "Men of Monarco" and Our House's "Explore Men of Monarco" navigate to Men of Monarco.
await page.getByRole("link", { name: "Men of Monarco", exact: true }).first().click()
await page.waitForURL("**/men-of-monarco")
await page.waitForFunction(() => document.querySelector("h1")?.textContent?.includes("of Monarco"))
// 15. Perspective card hover zooms its photo in to 1.07.
const perspective = page.locator("article", { hasText: "The Builder" })
await perspective.hover()
await page.waitForTimeout(400)
assert.match(await perspective.locator("img").evaluate((el) => getComputedStyle(el).scale), /^1\.07/)
// …and its "Watch the Story" link shrinks to 0.98 and turns neutral-300 on its own hover.
const watch = perspective.getByRole("link", { name: "Watch the Story" })
await watch.hover()
await page.waitForTimeout(300)
const watchHover = await watch.evaluate((el) => ({ scale: getComputedStyle(el).scale, color: getComputedStyle(el).color }))
assert.equal(watchHover.scale, "0.98")
assert.equal(watchHover.color, "rgb(212, 212, 212)")

await page.goto(BASE + "/our-house", { waitUntil: "networkidle" })
await page.getByRole("link", { name: "Explore Men of Monarco" }).click()
await page.waitForURL("**/men-of-monarco")

await browser.close()
console.log("prototype behaviours: all checks passed")
