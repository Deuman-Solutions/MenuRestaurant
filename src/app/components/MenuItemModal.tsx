import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { formatPrice, type MenuItem } from "@/app/data/menu-data"

interface MenuItemModalProps {
  item: MenuItem | null
  onOpenChange: (open: boolean) => void
}

export function MenuItemModal({ item, onOpenChange }: MenuItemModalProps) {
  // Keep showing the last selected item's content while the dialog plays
  // its closing animation, instead of popping the content out instantly.
  const [displayedItem, setDisplayedItem] = useState<MenuItem | null>(item)
  if (item !== null && item !== displayedItem) {
    setDisplayedItem(item)
  }

  return (
    <Dialog open={item !== null} onOpenChange={onOpenChange}>
      {displayedItem && (
        <DialogContent className="gap-0 overflow-hidden p-0">
          <div className="h-62 w-full bg-muted">
            <img
              src={displayedItem.image}
              alt={displayedItem.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6">
            <DialogHeader className="pr-0">
              <DialogTitle className={displayedItem.accentClassName}>
                {displayedItem.name}
              </DialogTitle>
              <DialogDescription>{displayedItem.description}</DialogDescription>
            </DialogHeader>
            <p className="mt-4 text-lg font-bold">{formatPrice(displayedItem.price)}</p>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
