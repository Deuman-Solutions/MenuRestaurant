import { useEffect, useState } from "react"

/**
 * Returns a debounced copy of `value` that only updates after `delay` ms
 * have passed without `value` changing. Used to avoid filtering the menu
 * on every keystroke while the user is still typing in the search bar.
 */
export function useDebouncedValue<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [value, delay])

  return debouncedValue
}
