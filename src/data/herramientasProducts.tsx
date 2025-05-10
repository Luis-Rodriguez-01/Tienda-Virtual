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

export const herramientas: Product[] = [
  {
    id: 1,
    name: "Taladro Inalámbrico Profesional",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 342,
    category: "Mecanica",
    freeShipping: true,
    seller: {
      name: "Tools Pro",
      rating: 4.9
    }
  },
  {
    id: 2,
    name: "Set de Destornilladores",
    price: 45.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1581147036324-c1c88bb6eb4e?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 218,
    category: "Herramientas Manuales",
    freeShipping: true,
    seller: {
      name: "Cocina",
      rating: 4.7
    }
  },
  {
    id: 3,
    name: "Caja de Herramientas Completa",
    price: 129.99,
    originalPrice: 169.99,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 156,
    category: "Jardineria",
    freeShipping: true,
    seller: {
      name: "ToolMaster",
      rating: 4.8
    }
  },
  {
    id: 4,
    name: "Sierra Circular",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 289,
    category: "Barberia",
    freeShipping: true,
    seller: {
      name: "Power Tools",
      rating: 4.6
    }
  },
  {
    id: 5,
    name: "Nivel Láser Profesional",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 167,
    category: "Construccion",
    freeShipping: true,
    seller: {
      name: "Pro Tools",
      rating: 4.9
    }
  },
  {
    id: 6,
    name: "Compresor de Aire",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1515017804404-308a98e670b4?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 423,
    category: "Plomeria",
    freeShipping: true,
    seller: {
      name: "Air Tools",
      rating: 4.5
    }
  }
];