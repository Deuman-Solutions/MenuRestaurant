import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { fetchMenuCategories, type MenuCategory } from "@/app/data/menu-data"

/**
 * Fetches the restaurant menu with TanStack Query and exposes a search term
 * that filters categories and items by name/description on the client.
 */
export function useMenu() {
  const [searchTerm, setSearchTerm] = useState("")

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
    const term = searchTerm.trim().toLowerCase()
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
  }, [categories, searchTerm])

  return {
    categories,
    filteredCategories,
    searchTerm,
    setSearchTerm,
    isLoading,
    isError,
    error,
  }
}
