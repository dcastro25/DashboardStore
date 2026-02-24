export interface food {
  id: string
  name: string
  description: string
  price: number
  available: number
  image: string
  category: Category
}

export interface OrderItem extends food {
  quantity: number
}

export const categories = [
  "Platos Fuertes",
  "Sopas",
  "Parrilla",
  "Bebidas",
] as const

export type Category = (typeof categories)[number]

export const dishes: food[] = [
  {
    id: "1",
    name: "Patacon Clasico con Pollo",
    description: "Crujiente patacón verde acompañado de pollo desmechado y salsas de la casa.",
    price: 3.29,
    available: 20,
    image: "https://polloseldorado.co/wp-content/uploads/2023/07/PATACON-CON-POLLO.jpg",
    category: "Platos Fuertes",
  },
  {
    id: "2",
    name: "Patacon con Carne Desmechada",
    description: "Patacón dorado servido con carne desmechada jugosa y toppings tradicionales.",
    price: 3.49,
    available: 11,
    image: "https://tofuu.getjusto.com/orioneat-local/resized2/CexWxSpdG6T8j7aQX-300-x.webp",
    category: "Platos Fuertes",
  },
  {
    id: "3",
    name: "Arepa con Queso Fundido",
    description: "Arepa caliente rellena con abundante queso fundido y sabor casero.",
    price: 2.99,
    available: 16,
    image: "https://i.ytimg.com/vi/AJu0gRFsBrs/maxresdefault.jpg",
    category: "Platos Fuertes",
  },
  {
    id: "4",
    name: "Empanadas de Carne",
    description: "Empanadas crujientes rellenas de carne sazonada, perfectas como entrada.",
    price: 2.49,
    available: 25,
    image: "https://i.ytimg.com/vi/_eXhFE5KoaU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDiyxe6fcL-RYhX90js7vjgA6nGGA",
    category: "Platos Fuertes",
  },
  {
    id: "5",
    name: "Bandeja Paisa Completa",
    description: "Plato tradicional colombiano con arroz, frijoles, carne, chicharrón, huevo y arepa.",
    price: 8.99,
    available: 8,
    image: "https://i.blogs.es/bb0cca/bandeja_paisa/450_1000.jpg",
    category: "Platos Fuertes",
  },
  {
    id: "6",
    name: "Limonada de Coco",
    description: "Refrescante bebida tropical de coco con limón, cremosa y deliciosa.",
    price: 2.29,
    available: 30,
    image: "https://katieatthekitchendoor.com/wp-content/uploads/2015/06/2015-06-18-153-1600x1092.jpg",
    category: "Bebidas",
  },
  {
    id: "7",
    name: "Sancocho de Gallina",
    description: "Sopa tradicional con gallina, yuca, papa y plátano en caldo casero.",
    price: 4.99,
    available: 12,
    image: "https://www.infobae.com/resizer/v2/R4VENSPXO5DZBJ7M5CNWTKEAJQ.jpg?auth=e17bf2694a3eaf395d58a160b09cac133ff395e55f3e48295ed3c66173c5af23&smart=true&width=350&height=196&quality=85",
    category: "Sopas",
  },
  {
    id: "8",
    name: "Carne Asada con Chimichurri",
    description: "Carne asada a la parrilla acompañada con chimichurri y guarnición.",
    price: 6.49,
    available: 15,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_j67cq3rzfuQw99aD0RBK7Sxsv4r45AHug&s",
    category: "Parrilla",
  },
];