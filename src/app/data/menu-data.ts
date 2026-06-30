import {
  Snowflake,
  IceCream2,
  Coffee,
  Sandwich,
  Martini,
  UtensilsCrossed,
  CakeSlice,
  Soup,
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
  name: "Lancelot Barrio Italia",
  logoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAIfeFZ7bBYVCm65LAiryD1w453IZ-akVlNjEQ2X9RRlAXQW-7xHCUM6laCxBgFrn7P36weS9u7lEElgM7mtL4fZDXacqDWbI-ndmBSfLYit9FDPQiBCHjQnSAfEAAOgQQvxLn6uhHiLTZgYlLfZbimCwU9xfz-ZVcOyi9U2WY2PX9NvlDQcGXg2841Gzq5Ks0BRK5TTil-qe10t6R1d-DyDJXtwm9Px16hhLKu260X4RpPX5srfcY1UE9hGtZd1R6wNufJzHNv_g",
  bannerUrl:
    "https://lh3.googleusercontent.com/aida/AP1WRLvPbDHSmLPJnyW7NSnQ8YMufzA8nT9wxK6_a8-kvQ7S-2iR8geIZOJaPqkG7KuUy5sMaxbpJVt8kOepfreMTsyHxApM2CzmTcxDkINbQra1lr8SURdJTOvo1aHmhwthfBCjQELzrCl9jwXq1zEDwTyCDgiYEv2EeFXARnOKD3-pYx-NQKeS_RH9481EitWxWLOYEr_py05xm8xjcfhDuT8Xf5Bl2INRl9dYRty0q3HqWqHxZeiG2P97",
  schedule: "De Lunes a Domingos: 13:00 a 22:00",
  footerCredit: "FUDO",
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
        name: "🌹LADY RUBI 🌹✨ (Matcha)",
        description:
          "Inspirado en hechizos de amor y valentía. Cada sorbo despierta el corazón y el alma. / MATCHA, FRAMBUESA, LECHE & POLVO DE ESTRELLAS 💍",
        price: 5990,
        accentClassName: "text-red-600",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBtjkq_bzrFmgl_WzuiZNJLJOJ1cBWQPzu3HKEsBcQuIXgTiO__2XgUjnb2fMu3_5xZjK-EGzfdSc5VAc-7VGYzOOJJqSppMObPCzdTey3x6k_OrDBbsCdGTgwwEGq6GS0tgt0_2XU-xBfX5996ay8T4J90dpVF8DzkR8bfbgN1JkU4Cm8a4jRYj6ZsEpweNOMo3dJqiUy3Ohx3X-uxHsTtjt-2BHPSrgdR9o9Lv4xh92FH5P3uqW4YBd2IV74NwTTiY3yM15e0Bg",
      },
      {
        id: "lady-esmeralda",
        name: "🌿LADY ESMERALDA 🌿✨ (Matcha)",
        description:
          "Inspirada en la sabiduría del bosque. Te conecta con la naturaleza y su energía ancestral. / MATCHA, MANGO, LECHE & POLVO DE ESTRELLAS 🧚‍♀️",
        price: 5990,
        accentClassName: "text-green-600",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuALX9dGuFe2aqsCY0QwZuBum6O8zHZnjktCuV6D_1iWlJv-9sAEZGijqTaIAOvqKzb4QeLnmpl4BvQ-tu2AV6YPZnekwBoRLCzYZKCK9z6Qk_JHkM9F3hBnUlRJx_qssTcfSn4Ix3M3u0T4P6YwQVwOxUktetevBU5m8NVb_nv9H3rUQ_lDC4I98lJpM7KL91a2Jp075uWl6acOk18CIrvZFUJIf8XbaT020U1AoiGBF4l5I-shrApRVXcIWVVPWrGtUFLDOyHIOA",
      },
      {
        id: "infusiones",
        name: "🍵 INFUSIONES 🍵",
        description:
          "🌿 Infusión Tropical: Peach Mango con Té Negro 🍑🥭 ... 🍊✨ Infusión de Té Verde Menta ... 🌱🌿 ... ámbar con notas cítricas de limón - maracuyá y...",
        price: 3990,
        accentClassName: "text-orange-600",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBB8NtcfE17P3svJSdYoZvApSop25_1YZ00bGUagAh4L1grbdP_wjrDLymUe8KAgedQWl2O-n-QjFAwWlr1A07KrltUIcaIOgU_npxZyxp2M0CvbeNCJ0yRWGuMfM_J29uFpxB6G53L9Gzxoocl3CXxdP827Y9sZEhVsZtr6PGEEsedeCyydEZJlxWFRRyoFj8SiVO_tKIP21CrCtZd6qxk2E7c6FU_wBPbzZa5tFIjtk42o2Jb04FbzYMxyiwSWMxjT7u0E9nAKA",
      },
      {
        id: "huevos-de-dragon",
        name: "HUEVOS DE DRAGÓN 🥚🐉",
        description:
          "Crujientes por fuera y rebosantes de noble queso gouda fundido en su interior. Servidas con una poderosa salsa cheddar y coronadas con crujiente...",
        price: 7990,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD6pZQS1KwppQuCzfV1Rq0e1qe9HRMbD9dGwNWBD63--vtGMkif6viJ0mpuITdQyVgDDRj3qMLjpsj7rheJANiV5CDHHn6b68Fe_EHvBC6sGupPf2_mTaEYM6_xPLUMWzsK3G-RF_Z29ZTnfTyHVEmm5Nvc8rmU0sLLg_GBVFkFtm0qqCPk3VkbUy5lM8hIdvTynW81xl5tLzdMn8NQYSxrbRJ81S9VcMORtSPFdVuJRnU2Vrw9abkF2dbBPBs5xrobK3lpH4pX-g",
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
        name: "CAFÉ HELADO",
        description:
          "Café oscuro de carácter legendario, 3 bolas de helado de vainilla, leche, sabor caramelo, salsa de chocolate, suave chantilly y cacao en polvo...",
        price: 6990,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDL2Y5ey4dKxA1L373oovsLxSk0HeJcapuFfsS--KdB_kG2tPfdjHjP8jix7e88w5aeb9n9QVTPIpEtda9Si--ywFeQ_5XLAHmMyZ-PQXDKLEsgwYZmVqnwF37-JaCzGAJyYXHjWidHxjqI0yMMyQFitWoBZQS8dbPZdxL8sZKNllIkEvmHoXr7EurfFDz1U7l1o7EVmfxr2OveQWNn4KOqvPuW9hf1gj2pmtnrY_TzWRsNAhkHD-G2SBVM_IwF1YfumEEyT11JJA",
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
          "Un baile de nieve, frío y sedoso, bañado con un intenso shot de café caliente, que baja como una suave bruma mágica que despierta sabores y...",
        price: 5990,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDP-bqV0sfW-7rrsC2Rl5WCId1bNQdk9UnCw0oO9yuDAuvBP84j_Umk19bbYP3xcvul0fEWU38j_RqMJCmyOMpugGgufTfDVS6FPB7DxW7RFTovNzuWY30Ay_gazesIRCFiOsjhTnltGgJUcKFcF70xJW-SQh4-WGloemfRi7SfoNvJbmb4d8Rfc5UO6WB5kl1NYsqwespB9ladJEpot1ev5OEBAgv1_F_4QQV9Ar5wdb9h92JzttNZqFNKNBM_LLA4rw_70PtZeg",
      },
      {
        id: "frappuccino-moka",
        name: "❄️ FRAPPUCCINO MOKA ❄️",
        description:
          "Café helado, oscuro y noble, sellado por el hielo como un pacto antiguo. Despierta al guerrero, enfría el alma y susurra una verdad eterna: vencer la...",
        price: 5990,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD6lG81QBJ0Spz2lv6VT6eiTBEPuRIPSm93cFTs5AwskBHsCviz3LMNBx41VpMFCxF39Jbdmc_9LGkeWet6Z8nznYaaMoEk0lY9ULuJ9XLmoDRURPC8pVZlRoZJQ0oJtpIGlpZz49iPTIqAwSSRKHW1szkz2RkdeIZsse8SQg3xUtNz2QwoOAnFovM7rLFSPN4-ahahOJ3KVcY1lMjlyWC75MSyIaDyJ7XX32OgRdKEK-PRJxCfBfI2e4p69_gBZiNVegpdoyW-Zw",
      },
    ],
  },
  {
    id: "hamburguesas",
    label: "Hamburguesas Premium",
    navLabel: "Happy Burger Brave",
    icon: Sandwich,
    items: [
      {
        id: "sir-lancelot",
        name: "SIR LANCELOT + PAPAS",
        description:
          "Doble hamburguesa de vacuno, pan tipo brioche, tocino, queso gouda, salsa ciboulette, cebollas caramelizadas en salsa BBQ y papas rústicas...",
        price: 10990,
        accentClassName: "text-amber-800",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD0TN0ivwZS7sBuTkxDDIbs_X99_KcBtBbItSmAqEi7ppBGKenRucvvT6kRefB6o05zClRqIUWE5fCxz2NjjXkDN2Vg8u_6H6EKRicBrnZHD4sslEePyndeEzODihLNKWUoqAKD2OEb1Iv0wwxVzxGNqoAAO1vUoJ4Q0G9PDdaSxTtuYKUkAgW3r8WZRn6JtuM9W8PBKkXthxHDLfY1KJXOaBQCJwDTl4-D7WTGrD9mrLIgGF4ktkDezpWqRBV1b9eW1MakqLQcSw",
      },
      {
        id: "sir-pickles",
        name: "SIR PICKLES + PAPAS",
        description:
          "Doble hamburguesa de vacuno, pan tipo brioche, láminas de queso cheddar, tocino, lechuga, aros de cebolla morada, pepinillos rebanados, ají verde y...",
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
        id: "caldero-de-brujas",
        name: "✨🔮 CALDERO DE BRUJAS 🔮✨",
        description:
          "Las Brujas invadieron el castillo y han creado una poción para hechizarnos a todos / Ponche de frutas tropicales, mix de berries macerados, jugo de...",
        price: 6990,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAI7TvTK8tu0BFoKI7gMM6wcGnlLClZMwaW8aSdTiijDHBD3xrFfmmE2oZPTs1rOoRQNI9O7wCympWRGGLIYxzGDzOuw_5ELEFvf9QszjwlfzlIebRlJGmNvf3mW_VVH3Z46EoNUNojPs1BpMwrzscuZdLgs8C8H-gdmiDlUfn_86nCF6IM4KGSFddcMFZqoVxyVgzJ33-ydNYdUtB6mDZaGQhY17-isQYocTolOvmTOWGVJdu6PsCmp26Vt304OYX7JE_WYtbZDQ",
      },
      {
        id: "botin-de-guerra",
        name: "BOTÍN DE GUERRA 💰🏴‍☠️",
        description:
          '"Una batalla ganada, un botín de guerra robado. Largo vida al Rey" 👑 Mocktail a base de mojito de maracuyá, ginger ale y pulpa de frambuesa (P...',
        price: 5990,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBPIZsJI5DESTMJLWGOPS5m9MTv63oZtelcp2GdRRdN2zZkhSaiOVS04pIGDqvElULLmV_yuEMtFeKofsOFDNTsoxHyS92NihkST6F1fRNXL4y-XVSqw91BBPHfIo6vQrmqCnwibBfMFWiJBvzJnr8qkktte-9pt0UL4cw8pWT39kT3YwqLQPtjWoLIAbpn9DUc_3TxOcNFVcs3WdX3wUuhyGabeNV_0CDLg8w3XF-Wpi6FEkcjE50OztoFQr02kaQ4ROYJFghNgA",
      },
    ],
  },
  {
    id: "grandes-platos",
    label: "Grandes Platos",
    icon: UtensilsCrossed,
    items: [
      {
        id: "lancelot-baby-ribs",
        name: "LANCELOT BABY RIBS (ENSALADA + PAPAS)",
        description:
          "Pieza half de costillita de cerdo en salsa BBQ con semillas de sésamo y ciboulette, papas fritas rústicas y ensalada césar.",
        price: 15990,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCeoChipPKfBgpqRMriHvcCWzLD4jp381hRYptmAuwObOK3dIXF_3YyV3svkl9vWjG7uslY__p6MakT_cx00DUVxdqUaQBWX_NnHglZjS5215NQgYlwqJgspfCIdzjP7QD7V0wwPVJCTyA_8JRs2DpwJXHDEqWjr81w30-uUos_hXaIBhXBoqyR-M2az0NPUz5dc2SBvrZrXlmt7v8uB8Xis19-EMCHBeN9kcr2KvOL5bur3rU8JGLLcBC4HQvwuwzQ0jL1YdQGhQ",
      },
      {
        id: "la-parmesana",
        name: "LA PARMESANA",
        description: "Milanesa de pollo a la parmesana, ensalada césar y papas fritas.",
        price: 11990,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBTW_5fSkp16E1VU1mgxMPla8KYIRzgi3VItoM6sL3Vvua50fIlow7ZJia4gSK-ooSG07bj0gJBVXUpuAzcz-RyBR7j9yo1eye5LOLejZ0BtQM-TXh_tEuf9PGv93IBvRX7GsLCuJeL4ynGigEQqLItufgfJyv44vTPceVNr5iudA0U_CWTWSt3nM3k_tsYn1aNgC3n515lPVCAzJ3JnMQDyI8iIY6ZFPfSTrPkuOgaYnQWWaPE_i28QViXAchmZoBo85H12Clojg",
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
