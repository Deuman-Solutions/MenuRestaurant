import type { MenuCategory } from "@/app/data/menu-data"
import { cn } from "@/lib/utils"

interface CategoryNavProps {
  categories: MenuCategory[]
  activeCategory: string | null
  onSelect: (categoryId: string) => void
}

export function CategoryNav({ categories, activeCategory, onSelect }: CategoryNavProps) {
  if (categories.length === 0) return null

  return (
    <nav className="mb-8 border-b border-border pb-4 overflow-x-auto hide-scrollbar sticky top-0 z-50 bg-background shadow-sm">
      <div className="flex gap-6 whitespace-nowrap text-center text-[10px] font-bold text-muted-foreground uppercase">
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = activeCategory === category.id

          return (
            <a
              key={category.id}
              href={`#${category.id}`}
              onClick={() => onSelect(category.id)}
              className={cn(
                "flex flex-col items-center min-w-[80px] cursor-pointer transition-opacity",
                isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
              )}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span>{category.navLabel ?? category.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
