import { MenuItemCard } from "@/app/components/MenuItemCard"
import type { MenuCategory, MenuItem } from "@/app/data/menu-data"

interface MenuSectionProps {
  category: MenuCategory
  onSelectItem: (item: MenuItem) => void
}

export function MenuSection({ category, onSelectItem }: MenuSectionProps) {
  const Icon = category.icon

  const grid = (
    <div className="menu-grid">
      {category.items.map((item) => (
        <MenuItemCard key={item.id} item={item} onSelect={onSelectItem} />
      ))}
    </div>
  )

  return (
    <section id={category.id} className="mb-12 scroll-mt-24" data-purpose="menu-section">
      <h2 className="text-sm font-bold border-b border-border pb-2 mb-6 flex items-center gap-2 uppercase">
        <Icon className="h-4 w-4" />
        {category.label}
      </h2>

      {category.comingSoon ? (
        <p className="text-xs text-muted-foreground italic">
          Próximamente nuevas opciones en esta categoría.
        </p>
      ) : category.highlighted ? (
        <div className="bg-muted/40 border border-border rounded-lg p-4 shadow-sm">{grid}</div>
      ) : (
        grid
      )}
    </section>
  )
}
