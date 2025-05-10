import { Product } from '../types/product';

export const accessories: Product[] = [
  {
    id: 1,
    name: "Apple Watch Series 8",
    price: 399.99,
    originalPrice: 449.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 342,
    category: "Smartwatches",
    freeShipping: true,
    seller: {
      name: "Apple Store",
      rating: 4.9
    }
  },
  {
    id: 2,
    name: "Sony WH-1000XM4",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 218,
    category: "Headphones",
    freeShipping: true,
    seller: {
      name: "Sony Official",
      rating: 4.8
    }
  },
  {
    id: 3,
    name: "Designer Leather Wallet",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 156,
    category: "Wallets",
    freeShipping: true,
    seller: {
      name: "Luxury Accessories",
      rating: 4.7
    }
  },
  {
    id: 4,
    name: "Ray-Ban Aviator",
    price: 149.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 289,
    category: "Sunglasses",
    freeShipping: true,
    seller: {
      name: "Eyewear Boutique",
      rating: 4.6
    }
  },
  {
    id: 5,
    name: "Premium Watch Band",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 167,
    category: "Watch Accessories",
    freeShipping: true,
    seller: {
      name: "Watch World",
      rating: 4.5
    }
  }
];