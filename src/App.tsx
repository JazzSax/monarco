import { useLayoutEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import MenOfMonarcoPage from "@/pages/MenOfMonarcoPage"
import OurHousePage from "@/pages/OurHousePage"
import RitualsPage from "@/pages/RitualsPage"
import SolisPage from "@/pages/SolisPage"
import TheHousePage from "@/pages/TheHousePage"

export default function App() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    // A new page starts at the top immediately; smooth scrolling is only for in-page anchors.
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return (
    // Prototype: page links "Navigate to" with a 300ms ease-out Dissolve.
    <div key={pathname} className="animate-dissolve">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-house" element={<TheHousePage />} />
        <Route path="/rituals" element={<RitualsPage />} />
        <Route path="/solis" element={<SolisPage />} />
        <Route path="/our-house" element={<OurHousePage />} />
        <Route path="/men-of-monarco" element={<MenOfMonarcoPage />} />
      </Routes>
    </div>
  )
}
