import { RESTAURANT_INFO } from "@/app/data/menu-data"

export function Footer() {
  return (
    <footer className="mt-8 pb-8 text-center">
      <p className="text-[10px] text-gray-400">
        Esta tienda online fue creada con{" "}
        <span className="font-bold text-gray-600 italic">{RESTAURANT_INFO.footerCredit}</span>
      </p>
    </footer>
  )
}
