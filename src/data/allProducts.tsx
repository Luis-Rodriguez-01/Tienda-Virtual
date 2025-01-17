import { Product } from '../types/product';

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Smartphone Galaxy S23 Ultra",
    price: 1199.99,
    originalPrice: 1399.99,
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 342,
    category: "Smartphones",
    freeShipping: true,
    seller: {
      name: "Samsung Official Store",
      rating: 4.9
    }
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    price: 1499.99,
    originalPrice: 1699.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 218,
    category: "Laptops",
    freeShipping: true,
    seller: {
      name: "Apple Premium Reseller",
      rating: 4.8
    }
  },
  {
    id: 3,
    name: "Sony A7 IV Camera",
    price: 2499.99,
    originalPrice: 2799.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 156,
    category: "Cameras",
    freeShipping: true,
    seller: {
      name: "Digital Camera Pro",
      rating: 4.7
    }
  },
  {
    id: 4,
    name: "Nike Air Max 2023",
    price: 179.99,
    originalPrice: 219.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 289,
    category: "Sneakers",
    freeShipping: true,
    seller: {
      name: "Nike Official",
      rating: 4.8
    }
  },
  {
    id: 5,
    name: "Smart 4K TV 65\"",
    price: 899.99,
    originalPrice: 1099.99,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 167,
    category: "TVs",
    freeShipping: true,
    seller: {
      name: "Electronics Hub",
      rating: 4.5
    }
  }
];