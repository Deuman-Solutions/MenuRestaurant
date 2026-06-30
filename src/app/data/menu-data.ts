import {
  Snowflake,
  IceCream2,
  Coffee,
  Sandwich,
  Martini,
  UtensilsCrossed,
  CakeSlice,
  type LucideIcon,
} from "lucide-react"

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  /** Optional tailwind class to accent the item name, mirrors the original design highlights */
  accentClassName?: string
}

export interface MenuCategory {
  id: string
  /** Label shown as the section title */
  label: string
  /** Shorter label used in the horizontal category navigation, falls back to label */
  navLabel?: string
  icon: LucideIcon
  items: MenuItem[]
  /** Wraps the items in a soft highlighted panel, used for the "Especiales" section */
  highlighted?: boolean
  /** Renders an empty state instead of a grid, used for categories without items yet */
  comingSoon?: boolean
}

export const RESTAURANT_INFO = {
  name: "Menu Restaurant",
  logoUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQC14ypHGCFsbS8HmcvC50EqddVwVXDr-EHUXYdnnfOw&s=10",
  bannerUrl:
    "https://lh3.googleusercontent.com/aida/AP1WRLvPbDHSmLPJnyW7NSnQ8YMufzA8nT9wxK6_a8-kvQ7S-2iR8geIZOJaPqkG7KuUy5sMaxbpJVt8kOepfreMTsyHxApM2CzmTcxDkINbQra1lr8SURdJTOvo1aHmhwthfBCjQELzrCl9jwXq1zEDwTyCDgiYEv2EeFXARnOKD3-pYx-NQKeS_RH9481EitWxWLOYEr_py05xm8xjcfhDuT8Xf5Bl2INRl9dYRty0q3HqWqHxZeiG2P97",
  schedule: "De Lunes a Domingos: 13:00 a 22:00",
  footerCredit: "Deuman Solutions",
} as const

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "especiales",
    label: "Especiales de Invierno",
    icon: Snowflake,
    highlighted: true,
    items: [
      {
        id: "lady-rubi",
        name: "🌹 Matcha Rubi 🌹",
        description:
          "Inspirado en hechizos de amor y valentía. Cada sorbo despierta el corazón y el alma. / MATCHA, FRAMBUESA, LECHE & POLVO DE ESTRELLAS 💍",
        price: 5990,
        accentClassName: "text-red-600",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwV0czHpUfn1MH07HZigtzrF0-IC4fSCxJPX8lFytiI4qngCcK-Qp4BXO&s=10",
      },
      {
        id: "lady-esmeralda",
        name: "🌿 Matcha Esmaralda 🌿",
        description:
          "Inspirada en la sabiduría del bosque. Te conecta con la naturaleza y su energía ancestral. / MATCHA, MANGO, LECHE & POLVO DE ESTRELLAS 🧚‍♀️",
        price: 5990,
        accentClassName: "text-green-600",
        image:
          "https://images.aws.nestle.recipes/original/2024_10_28T11_34_29_badun_images.badun.es_te_matcha_con_leche_condensada_7c8c.jpg",
      },
      {
        id: "infusiones",
        name: "🍵 INFUSIONES 🍵",
        description:
          "🌿 Infusión Tropical: Peach Mango con Té Negro 🍑🥭 ... 🍊✨ Infusión de Té Verde Menta ... 🌱🌿 ... ámbar con notas cítricas de limón - maracuyá y naranja",
        price: 3990,
        accentClassName: "text-orange-600",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRPOJHnTdvu95-ZVOoY0Q6XdRp4PqTi_Y7nS8L4c3ounmMshFfk-L_EC0&s=10",
      },
    ],
  },
  {
    id: "heladeria",
    label: "Heladería",
    icon: IceCream2,
    items: [
      {
        id: "cafe-helado",
        name: "CAFE HELADO",
        description:
          "Café oscuro de carácter legendario, 3 bolas de helado de vainilla, leche, sabor caramelo, salsa de chocolate, suave chantilly y cacao en polvo...",
        price: 6990,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-rAP5U8ffx_6G-1Yz8qHJrsaH7PjyEygKa91mu9GH5nsrZ3Qck0FnhF6&s=10",
      },
      {
        id: "brownie-con-helado",
        name: "¡BROWNIE CON HELADO!",
        description:
          "Delicioso Brownie de chocolate acompañado con helado en una espectacular copa, salsa de caramelo y salsa de chocolate.",
        price: 4990,
        image:
          "https://www.brewwildpizzabar.com/blog/wp-content/uploads/2025/04/helado-con-Brownie.jpg",
      },
    ],
  },
  {
    id: "cafeteria",
    label: "Cafetería",
    icon: Coffee,
    items: [
      {
        id: "bruma-encantada",
        name: "✨BRUMA ENCANTADA✨ (Affogato)",
        description:
          "Un baile de nieve, frío y sedoso, bañado con un intenso shot de café caliente, que baja como una suave bruma mágica que despierta sabores y emociones.",
        price: 5990,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQ0DR8xWQcJp-1-Bxvx4AYOECp8IpRz8zHkLqW9avHJnRaXlWQT1yecM&s=10",
      },
      {
        id: "frappuccino-moka",
        name: "❄️ FRAPPUCCINO MOKA ❄️",
        description:
          "Café helado, oscuro y noble, sellado por el hielo como un pacto antiguo. Despierta al guerrero, enfría el alma y susurra una verdad eterna: vencer la sed con sabor a chocolate y café.",
        price: 5990,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYsQFBUxfIM44z10xXizwYi2gQJ-SOMz0FfzOfYMj_eofWS8JTeSDO84_l&s=10",
      },
    ],
  },
  {
    id: "hamburguesas",
    label: "Hamburguesas Premium",
    navLabel: "Happy Burger",
    icon: Sandwich,
    items: [
      {
        id: "giga-hamburguesa",
        name: "GIGA HAMBURGUESA + PAPAS",
        description:
          "Doble hamburguesa de vacuno, pan tipo brioche, tocino, queso gouda, salsa ciboulette, cebollas caramelizadas en salsa BBQ y papas rústicas...",
        price: 10990,
        accentClassName: "text-amber-800",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLHc-YovMNxy3MI5yFXs8VJ-57czGQ2oMQSIyPlz76HR_ajBZ-Z5Hh2I&s=10",
      },
      {
        id: "sir-pickles",
        name: "SIR PICKLES + PAPAS",
        description:
          "Doble hamburguesa de vacuno, pan tipo brioche, láminas de queso cheddar, tocino, lechuga, aros de cebolla morada, pepinillos rebanados, ají verde y salsa BBQ, acompañado de papas rústicas.",
        price: 10990,
        accentClassName: "text-amber-800",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBCWNyxla8O-2rVPzHCcgfMTIT73wurYKaY1HatLQMEnB7rjE3JouGcT0O5sejrmIbWMI57ZuzQaOntF3WOQtiwhQmx3EJfW1D2jTzk3-asCmIN2tYMwiNw2HI3ItXRGzQ85pjDshJTWmWWJJa3QnIqcqlFcPhZfrZIqiET0tAbQByYULW7dH0HOId9SZfgAAxohWLed3G88absAfyEadn7yPdhMzWmLtCvReTaZNiOdEsR6IT0T5gCkSvcaYJRD9mUqpvFiTmBzQ",
      },
    ],
  },
  {
    id: "tortas",
    label: "Tortas",
    icon: CakeSlice,
    comingSoon: true,
    items: [],
  },
  {
    id: "mocktails",
    label: "Mocktails Temáticos",
    icon: Martini,
    items: [
      {
        id: "blue-lagoon",
        name: "✨BLUE LAGOON✨",
        description:
          "El mismo azul eléctrico y refrescante, totalmente libre de alcohol. Una base cítrica de limonada natural y notas aromáticas de sirope azul de naranja. Divertido, ligero y burbujeante.",
        price: 6990,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwDewTrjCW0pX-lOjwLC2cN6PCQ8wdBBfibHBeM-5W0lkan1AzHUYpVE&s=10",
      },
      {
        id: "mimosa",
        name: "MIMOSA",
        description:
          'Todo el glamour del clásico cóctel, completamente libre de alcohol. Zumo de naranja fresco seleccionado combinado con un toque efervescente y notas botánicas ligeras.',
        price: 5990,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOJWoEbJwe2O-lAb-oXuEAdpbkLosBCXPD5FEuyiyeIek-uIu6Tfyuu0&s=10",
      },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    icon: UtensilsCrossed,
    items: [
      {
        id: "pizza-española",
        name: "PIZZA ESPAÑOLA",
        description:
          "Salsa de tomate, mozzarella, chorizo español, pimientos asados y aceitunas. Intensa, sabrosa y tradicional.",
        price: 15990,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkv7fnOMdbjA2hYELIrGvc7sPDu130_dnHQFQV7a_Tt2Q1ZMhOLJdtyBY&s=10",
      },
      {
        id: "pizza-italiana",
        name: "PIZZA ITALIANA",
        description: "Salsa de tomate, mozzarella fior di latte, albahaca fresca y aceite de oliva. Sencilla, fresca y clásica.",
        price: 11990,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGACociwatlDl-gEQPD90iRtSaFI_ikRf2EWtMYsp_2SUMQ6_ZcM2v8fM&s=10",
      },
    ],
  },
]

/** Formats a CLP price the same way the original menu does, e.g. 5990 -> "$5.990" */
export function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-CL")}`
}

/**
 * Simulates an API request to fetch the menu. Swap this for a real fetch()
 * call to your backend whenever the menu is served dynamically.
 */
export async function fetchMenuCategories(): Promise<MenuCategory[]> {
  await new Promise((resolve) => setTimeout(resolve, 350))
  return MENU_CATEGORIES
}
