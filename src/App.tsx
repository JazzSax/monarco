import { useLayoutEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "@/pages/HomePage"
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
      </Routes>
    </div>
  )
}
