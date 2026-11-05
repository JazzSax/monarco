import { useLayoutEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import RitualsPage from "@/pages/RitualsPage"
import SolisPage from "@/pages/SolisPage"
import TheHousePage from "@/pages/TheHousePage"

export default function App() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    // Prototype: page links "Navigate to" with a 300ms ease-out Dissolve.
    <div key={pathname} className="animate-dissolve">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-house" element={<TheHousePage />} />
        <Route path="/rituals" element={<RitualsPage />} />
        <Route path="/solis" element={<SolisPage />} />
      </Routes>
    </div>
  )
}
