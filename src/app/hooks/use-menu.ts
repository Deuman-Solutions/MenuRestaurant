import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { fetchMenuCategories, type MenuCategory } from "@/app/data/menu-data"
import { useDebouncedValue } from "@/app/hooks/use-debounce"

/**
 * Fetches the restaurant menu with TanStack Query and exposes a (debounced)
 * search term that filters categories and items by name/description.
 */
export function useMenu() {
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300)

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["menu-categories"],
    queryFn: fetchMenuCategories,
    staleTime: Infinity,
  })

  const categories = useMemo<MenuCategory[]>(() => data ?? [], [data])

  const filteredCategories = useMemo<MenuCategory[]>(() => {
    const term = debouncedSearchTerm.trim().toLowerCase()
    if (!term) return categories

    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.name.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term)
        ),
      }))
      .filter((category) => category.items.length > 0)
  }, [categories, debouncedSearchTerm])

  // True while the user has typed something that the debounce hasn't
  // applied to the results yet, useful to show a small loading state.
  const isSearching = searchTerm !== debouncedSearchTerm

  return {
    categories,
    filteredCategories,
    searchTerm,
    setSearchTerm,
    isSearching,
    isLoading,
    isError,
    error,
  }
}
