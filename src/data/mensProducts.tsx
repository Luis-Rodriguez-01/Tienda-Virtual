export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  freeShipping: boolean;
  seller: {
    name: string;
    rating: number;
  };
}

export const mensProducts: Product[] = [
  {
    id: 1,
    name: "Chaqueta de Cuero Premium",
    price: 129.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 342,
    category: "Chaquetas",
    freeShipping: true,
    seller: {
      name: "Urban Style",
      rating: 4.9
    }
  },
  {
    id: 2,
    name: "Jeans Slim Fit Clásicos",
    price: 59.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 218,
    category: "Pantalones",
    freeShipping: true,
    seller: {
      name: "Denim Co.",
      rating: 4.7
    }
  },
  {
    id: 3,
    name: "Camisa Oxford Elegante",
    price: 45.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 156,
    category: "Camisas",
    freeShipping: true,
    seller: {
      name: "Gentleman's Choice",
      rating: 4.8
    }
  },
  {
    id: 4,
    name: "Sudadera con Capucha Deportiva",
    price: 49.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 289,
    category: "Deportiva",
    freeShipping: true,
    seller: {
      name: "SportMax",
      rating: 4.6
    }
  },
  {
    id: 5,
    name: "Blazer Slim Fit",
    price: 149.99,
    originalPrice: 229.99,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 167,
    category: "Trajes",
    freeShipping: true,
    seller: {
      name: "Executive Wear",
      rating: 4.9
    }
  },
  {
    id: 6,
    name: "Camiseta Básica Premium",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 423,
    category: "Camisetas",
    freeShipping: true,
    seller: {
      name: "Basic Essentials",
      rating: 4.5
    }
  },
  {
    id: 7,
    name: "Pantalones Chinos Casuales",
    price: 54.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 198,
    category: "Pantalones",
    freeShipping: true,
    seller: {
      name: "Urban Comfort",
      rating: 4.7
    }
  },
  {
    id: 8,
    name: "Abrigo de Invierno Elegante",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 145,
    category: "Abrigos",
    freeShipping: true,
    seller: {
      name: "Winter Collection",
      rating: 4.8
    }
  },
  {
    id: 9,
    name: "Polo Premium",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 267,
    category: "Polos",
    freeShipping: true,
    seller: {
      name: "Casual Luxury",
      rating: 4.6
    }
  },
  {
    id: 10,
    name: "Shorts Deportivos",
    price: 29.99,
    originalPrice: 44.99,
    image: "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03d?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 189,
    category: "Deportiva",
    freeShipping: true,
    seller: {
      name: "SportMax",
      rating: 4.6
    }
  },
  {
    id: 11,
    name: "Camisa de Lino Verano",
    price: 49.99,
    originalPrice: 74.99,
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 134,
    category: "Camisas",
    freeShipping: true,
    seller: {
      name: "Summer Style",
      rating: 4.7
    }
  },
  {
    id: 12,
    name: "Chaleco Formal",
    price: 79.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 98,
    category: "Trajes",
    freeShipping: true,
    seller: {
      name: "Executive Wear",
      rating: 4.9
    }
  },
  {
    id: 13,
    name: "Sudadera Básica",
    price: 34.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 276,
    category: "Sudaderas",
    freeShipping: true,
    seller: {
      name: "Casual Comfort",
      rating: 4.5
    }
  },
  {
    id: 14,
    name: "Pantalones Deportivos",
    price: 44.99,
    originalPrice: 64.99,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 187,
    category: "Deportiva",
    freeShipping: true,
    seller: {
      name: "SportMax",
      rating: 4.6
    }
  },
  {
    id: 15,
    name: "Chaqueta Bomber",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 165,
    category: "Chaquetas",
    freeShipping: true,
    seller: {
      name: "Urban Style",
      rating: 4.9
    }
  }
];