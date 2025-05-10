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

export const tecnologia: Product[] = [
  {
    id: 1,
    name: "Laptop Ultra Delgada",
    price: 999.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 342,
    category: "Laptops",
    freeShipping: true,
    seller: {
      name: "TechStore",
      rating: 4.9
    }
  },
  {
    id: 2,
    name: "Smartphone 5G",
    price: 799.99,
    originalPrice: 999.99,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 218,
    category: "Smartphones",
    freeShipping: true,
    seller: {
      name: "Mobile World",
      rating: 4.7
    }
  },
  {
    id: 3,
    name: "Auriculares Inalámbricos",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 156,
    category: "Audio",
    freeShipping: true,
    seller: {
      name: "Sound Pro",
      rating: 4.8
    }
  },
  {
    id: 4,
    name: "Smartwatch Premium",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 289,
    category: "Wearables",
    freeShipping: true,
    seller: {
      name: "Smart Gear",
      rating: 4.6
    }
  },
  {
    id: 5,
    name: "Cámara Mirrorless 4K",
    price: 1499.99,
    originalPrice: 1799.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 167,
    category: "Cámaras",
    freeShipping: true,
    seller: {
      name: "Photo Pro",
      rating: 4.9
    }
  },
  {
    id: 6,
    name: "Tablet Pro",
    price: 649.99,
    originalPrice: 799.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 423,
    category: "Tablets",
    freeShipping: true,
    seller: {
      name: "Tech Hub",
      rating: 4.5
    }
  },
  {
    id: 7,
    name: "Sony WH-1000XM4",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 218,
    category: "Audio",
    freeShipping: true,
    seller: {
      name: "Sony Official",
      rating: 4.8
    }
  },
  {
    id: 8,
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
    id: 9,
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
];