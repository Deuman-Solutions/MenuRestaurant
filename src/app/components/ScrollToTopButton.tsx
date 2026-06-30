import { ArrowUp } from "lucide-react"

export function ScrollToTopButton() {
  return (
    <div className="fixed bottom-6 right-6 md:hidden z-50">
      <button
        type="button"
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center justify-center w-12 h-12 bg-white text-slate-800 rounded-full shadow-xl border border-gray-100 focus:outline-none transition-all hover:shadow-2xl"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  )
}
