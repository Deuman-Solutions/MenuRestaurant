import { useState } from "react"

import { Header } from "@/app/components/Header"
import { SearchBar } from "@/app/components/SearchBar"
import { CategoryNav } from "@/app/components/CategoryNav"
import { MenuSection } from "@/app/components/MenuSection"
import { MenuItemModal } from "@/app/components/MenuItemModal"
import { Footer } from "@/app/components/Footer"
import { ScrollToTopButton } from "@/app/components/ScrollToTopButton"
import { useMenu } from "@/app/hooks/use-menu"
import type { MenuItem } from "@/app/data/menu-data"

function App() {
  const {
    categories,
    filteredCategories,
    searchTerm,
    setSearchTerm,
    isSearching,
    isLoading,
    isError,
  } = useMenu()

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  // Highlight the first category by default once the menu finishes loading,
  // without needing an effect: derive it straight from render state.
  const activeCategory = selectedCategory ?? categories[0]?.id ?? null

  return (
    <>
      {/* Fixed category bar, always pinned to the top of the viewport */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setSelectedCategory}
      />

      {/* Offsets the page content by the height of the fixed nav above */}
      <div className="pt-16">
        <Header />

        <main className="relative -mt-32 md:-mt-40 px-4 pb-12 max-w-5xl mx-auto z-20">
          <div
            className="bg-card rounded-3xl shadow-2xl overflow-hidden min-h-[600px]"
            data-purpose="menu-card"
          >
            <section className="p-8 md:p-10 pb-4" data-purpose="search-section">
              <SearchBar value={searchTerm} onChange={setSearchTerm} isSearching={isSearching} />
            </section>

            <section className="p-8 md:p-10 pt-0" data-purpose="menu-listing">
              {isLoading && (
                <p className="text-sm text-muted-foreground text-center py-12">
                  Cargando el menú...
                </p>
              )}

              {isError && (
                <p className="text-sm text-destructive text-center py-12">
                  No pudimos cargar el menú. Intenta nuevamente más tarde.
                </p>
              )}

              {!isLoading && !isError && filteredCategories.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-12">
                  No encontramos productos para &quot;{searchTerm}&quot;.
                </p>
              )}

              {!isLoading &&
                !isError &&
                filteredCategories.map((category) => (
                  <MenuSection
                    key={category.id}
                    category={category}
                    onSelectItem={setSelectedItem}
                  />
                ))}
            </section>
          </div>

          <Footer />
        </main>
      </div>

      <ScrollToTopButton />

      <MenuItemModal
        item={selectedItem}
        onOpenChange={(open) => {
          if (!open) setSelectedItem(null)
        }}
      />
    </>
  )
}

export default App
