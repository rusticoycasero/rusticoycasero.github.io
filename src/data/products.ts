import prepizzaTomate from "@/assets/prepizza-tomate.jpg";
import prepizzaCebolla from "@/assets/prepizza-cebolla.jpg";
import pizzetas from "@/assets/pizzetas.jpg";
import pizzaMixta from "@/assets/pizza-mixta.jpg";
import pizzaLisaProximamente from "@/assets/pizza-lisa-proximamente.png";


export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "prepizza-tomate",
    name: "Prepizza de Tomate",
    description: "Nuestra clásica base artesanal con salsa de tomate casera, lista para que le agregues tus ingredientes favoritos.",
    price: 1200,
    image: prepizzaTomate,
    category: "Prepizzas",
  },
  {
    id: "prepizza-cebolla",
    name: "Prepizza de Cebolla",
    description: "Para los fanaticos de la fugazzeta ofrecemos prepizza de cebolla. Un sabor único y casero.",
    price: 1200,
    image: prepizzaCebolla,
    category: "Prepizzas",
  },
  {
    id: "pizzetas",
    name: "Pizzetas (x12)",
    description: "Pack de 12 pizzetas individuales con salsa de tomate. Perfectas para eventos y meriendas.",
    price: 1400,
    image: pizzetas,
    category: "Pizzetas",
  },
  {
    id: "pizza-mixta",
    name: "Prepizza Mixta de cebolla y tomate",
    description: "Nuestra prepizza mixta combina lo mejor de ambos mundos: salsa de tomate casera y cebolla, para una experiencia de sabor completa.",
    price: 1400,
    image: pizzaMixta,
    category: "Pizzas",
  },
  {
    id: "pizza-lista-proximamente",
    name: "Pizza Lista (Próximamente)",
    description: "¡Muy pronto! Nuestra pizza lista, listo para para hornear y disfrutar en minutos. Ideal para quienes buscan conveniencia sin sacrificar sabor.",
    price: 2400,
    image: pizzaLisaProximamente,
    category: "Pizzas",
  },
];
