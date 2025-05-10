import { Product } from '../types/product';

export const womanProducts: Product[] = [
  {
    id: 1,
    name: "Vestido Floral de Verano",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 342,
    category: "Vestidos",
    freeShipping: true,
    seller: {
      name: "Fashion Boutique",
      rating: 4.9
    }
  },
  {
    id: 2,
    name: "Blusa de Seda Elegante",
    price: 59.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 218,
    category: "Blusas",
    freeShipping: true,
    seller: {
      name: "Elegant Wear",
      rating: 4.7
    }
  },
  // ... rest of the products
];