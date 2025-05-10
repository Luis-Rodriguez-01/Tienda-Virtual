import { Product } from '../types/product';

export const Regalo: Product[] = [
  {
    id: 1,
    name: "Luxury Gift Set",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 342,
    category: "Gift Sets",
    freeShipping: true,
    seller: {
      name: "Luxury Gifts Co",
      rating: 4.9
    }
  },
  {
    id: 2,
    name: "Premium Chocolate Box",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 218,
    category: "Gourmet",
    freeShipping: true,
    seller: {
      name: "Chocolate Delights",
      rating: 4.8
    }
  },
  {
    id: 3,
    name: "Jewelry Gift Box",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 156,
    category: "Jewelry",
    freeShipping: true,
    seller: {
      name: "Jewelry Boutique",
      rating: 4.7
    }
  },
  {
    id: 4,
    name: "Premium Wine Set",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 289,
    category: "Wine & Spirits",
    freeShipping: true,
    seller: {
      name: "Wine Connoisseur",
      rating: 4.8
    }
  },
  {
    id: 5,
    name: "Spa Gift Package",
    price: 129.99,
    originalPrice: 169.99,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 167,
    category: "Wellness",
    freeShipping: true,
    seller: {
      name: "Luxury Spa",
      rating: 4.6
    }
  }
];