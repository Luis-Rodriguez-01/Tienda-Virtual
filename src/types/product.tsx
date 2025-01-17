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