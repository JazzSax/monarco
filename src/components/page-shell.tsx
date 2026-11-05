import type { ReactNode } from "react"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

export function PageShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-x-clip", className)}>
      <AnnouncementBanner />
      <div className="relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
