import { Loader2, Search } from "lucide-react"

import { Input } from "@/components/ui/input"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  isSearching?: boolean
}

export function SearchBar({ value, onChange, isSearching = false }: SearchBarProps) {
  return (
    <div className="relative max-w-4xl mx-auto mb-8">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        {isSearching ? (
          <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
        ) : (
          <Search className="h-5 w-5 text-muted-foreground" />
        )}
      </div>
      <Input
        type="text"
        placeholder="Buscar por productos"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="pl-12 pr-4"
      />
    </div>
  )
}
