import { formatPrice, type MenuItem } from "@/app/data/menu-data"
import { cn } from "@/lib/utils"

interface MenuItemCardProps {
  item: MenuItem
  onSelect: (item: MenuItem) => void
}

export function MenuItemCard({ item, onSelect }: MenuItemCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="flex w-max-[300px] h-[120px] text-left border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <div className="flex-1 p-4">
        <h3 className={cn("font-bold text-xs uppercase line-clamp-1", item.accentClassName)}>{item.name}</h3>
        <p className="text-[10px] text-muted-foreground mt-1 leading-tight line-clamp-3">{item.description}</p>
        <p className="font-bold text-xs mt-3">{formatPrice(item.price)}</p>
      </div>
      <div className="w-32 bg-muted shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
    </button>
  )
}
