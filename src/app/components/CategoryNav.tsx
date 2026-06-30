import { useEffect, useRef, useState, type MouseEvent } from "react"

import type { MenuCategory } from "@/app/data/menu-data"
import { cn } from "@/lib/utils"

interface CategoryNavProps {
  categories: MenuCategory[]
  activeCategory: string | null
  onSelect: (categoryId: string) => void
}

export function CategoryNav({ categories, activeCategory, onSelect }: CategoryNavProps) {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const [isPinned, setIsPinned] = useState(false)
  const [navHeight, setNavHeight] = useState(0)

  // Watches a 1px sentinel placed right above the nav's normal spot. Once it
  // scrolls past the top of the viewport, the nav switches to fixed
  // positioning; once it scrolls back into view, the nav returns to its
  // original place below the search bar.
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPinned(!entry.isIntersecting && entry.boundingClientRect.top < 0)
      },
      { threshold: 0 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [categories.length])

  // Measures the nav's own height so a same-height spacer can be rendered in
  // its place once it becomes fixed, avoiding a layout jump.
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height)
    }
  }, [categories.length])

  if (categories.length === 0) return null

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    event.preventDefault()
    onSelect(categoryId)

    document.getElementById(categoryId)?.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `#${categoryId}`)
  }

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="h-px" />
      {isPinned && <div aria-hidden="true" style={{ height: navHeight }} />}

      <nav
        ref={navRef}
        data-purpose="category-nav"
        className={cn(
          "z-50 bg-background/95 backdrop-blur-sm border-b border-border",
          isPinned ? "fixed top-0 inset-x-0 shadow-sm" : "relative mb-8"
        )}
      >
        <div
          className={cn(
            "overflow-x-auto hide-scrollbar",
            isPinned && "max-w-5xl mx-auto px-4 md:px-6"
          )}
        >
          <div className="flex items-center gap-6 h-16 whitespace-nowrap text-center text-[10px] font-bold text-muted-foreground uppercase">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id

              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  onClick={(event) => handleClick(event, category.id)}
                  className={cn(
                    "flex flex-col items-center shrink-0 min-w-[80px] cursor-pointer transition-opacity",
                    isActive ? "opacity-100 text-foreground" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <Icon className="h-5 w-5 mb-1" />
                  <span>{category.navLabel ?? category.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
