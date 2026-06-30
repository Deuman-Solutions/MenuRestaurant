import type { MouseEvent } from "react"

import type { MenuCategory } from "@/app/data/menu-data"
import { cn } from "@/lib/utils"

interface CategoryNavProps {
  categories: MenuCategory[]
  activeCategory: string | null
  onSelect: (categoryId: string) => void
}

export function CategoryNav({ categories, activeCategory, onSelect }: CategoryNavProps) {
  if (categories.length === 0) return null

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    event.preventDefault()
    onSelect(categoryId)

    const target = document.getElementById(categoryId)
    target?.scrollIntoView({ behavior: "smooth", block: "start" })

    // Keep the URL hash in sync without triggering the browser's instant jump
    window.history.replaceState(null, "", `#${categoryId}`)
  }

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
      data-purpose="category-nav"
    >
      <div className="max-w-5xl mx-auto overflow-x-auto hide-scrollbar px-4 md:px-6">
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
  )
}
