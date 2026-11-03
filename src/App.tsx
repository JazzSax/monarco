import { Route, Routes } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import TheHousePage from "@/pages/TheHousePage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/the-house" element={<TheHousePage />} />
    </Routes>
  )
}
