import { useState } from "react"
import { Link } from "react-router-dom"
import { Sun, X } from "lucide-react"
import { asset } from "@/lib/assets"

export function AnnouncementBanner() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <aside className="relative overflow-hidden bg-surface-contrast py-xs">
      <img src={asset("assets/parchment.webp")} alt="" className="absolute inset-0 size-full object-cover opacity-50" />
      <div className="relative flex items-center justify-center px-container text-text-tertiary">
        <div className="flex flex-1 flex-col items-center justify-center gap-xs md:flex-row">
          <span className="flex items-center gap-xs">
            <Sun className="hidden size-6 md:block" strokeWidth={1} aria-hidden />
            <span className="type-caption font-medium md:type-sm">Your First Recovery Read Awaits</span>
          </span>
          <span className="flex items-center gap-xs">
            <Sun className="hidden size-6 md:block" strokeWidth={1} aria-hidden />
            <Link to="#" className="type-caption font-medium underline md:type-sm">
              Discover Your Recover Index
            </Link>
          </span>
        </div>
        <button type="button" aria-label="Dismiss announcement" onClick={() => setOpen(false)} className="absolute right-container">
          <X className="size-4" aria-hidden />
        </button>
      </div>
    </aside>
  )
}
