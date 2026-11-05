import type { ReactNode } from "react"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-clip">
      <AnnouncementBanner />
      <div className="relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
