export interface Food {
  id: number;
  foodName: string;
  url: string;
  description: string;
  price: number;
  available: number;
}

export const menuData: Food[] = [
  {
    id: 1,
    foodName: "Spicy seasoned seafood noodles",
    url: "https://pngimg.com/uploads/noodle/noodle_PNG47.png",
    description: "Fideos con mariscos y un toque picante artesanal.",
    price: 2.29,
    available: 20
  },
  {
    id: 2,
    foodName: "Salted Pasta with mushroom sauce",
    url: "https://pngimg.com/uploads/pasta/pasta_PNG63.png",
    description: "Pasta fettuccine con salsa cremosa de champiñones.",
    price: 2.69,
    available: 11
  },
  {
    id: 3,
    foodName: "Beef dumpling and sour soup",
    url: "https://pngimg.com/uploads/soup/soup_PNG107.png",
    description: "Sopa tradicional con dumplings de res y vegetales.",
    price: 2.99,
    available: 16
  },
  {
    id: 4,
    foodName: "Healthy noodle with spinach leaf",
    url: "https://pngimg.com/uploads/noodle/noodle_PNG24.png",
    description: "Bowl de fideos integrales con espinacas y especias.",
    price: 3.29,
    available: 22
  },
{
id: 5,
foodName: "Spicy instant noodle with omelette",
url: "https://pngimg.com/uploads/noodle/noodle_PNG30.png",
description: "Ramen premium con huevo, cebollín y especias orientales en bowl de cerámica.",
price: 3.59,
available: 17
},
  {
    id: 6,
    foodName: "Spicy instant noodle with omelette",
    url: "https://pngimg.com/uploads/noodle/noodle_PNG53.png",
    description: "Ramen instantáneo premium con huevo y cebollín.",
    price: 3.59,
    available: 17
  }
];