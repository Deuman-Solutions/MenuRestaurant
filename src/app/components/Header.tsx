import { Clock } from "lucide-react"

import { RESTAURANT_INFO } from "@/app/data/menu-data"

export function Header() {
  return (
    <header
      className="hero-banner relative flex items-start justify-between p-6 md:px-12 md:py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${RESTAURANT_INFO.bannerUrl}')`,
      }}
    >
      <div className="flex items-center space-x-4 z-10">
        <div className="rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center overflow-hidden shadow-xl bg-black border-4 border-white">
          <img
            src={RESTAURANT_INFO.logoUrl}
            alt={`Logo ${RESTAURANT_INFO.name}`}
            className="w-16 h-16 object-contain"
          />
        </div>
        <h1 className="text-white text-2xl md:text-4xl font-bold tracking-tight uppercase">
          {RESTAURANT_INFO.name}
        </h1>
      </div>

      <div className="hidden md:flex items-center text-white gap-2 z-10 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
        <Clock className="h-5 w-5" />
        <span className="text-sm font-medium uppercase">{RESTAURANT_INFO.schedule}</span>
      </div>
    </header>
  )
}
