import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { TruckIcon, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const sliderProducts = [
  {
    id: 1,
    name: 'Chanel N°5',
    price: 129.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 328,
    seller: {
      name: 'Luxury Perfumes',
      rating: 4.9
    },
    freeShipping: true
  },
  {
    id: 2,
    name: 'Dior Sauvage',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 456,
    seller: {
      name: 'Premium Scents',
      rating: 4.8
    },
    freeShipping: true
  },
  {
    id: 3,
    name: 'Versace Eros',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 289,
    seller: {
      name: 'Fragrance World',
      rating: 4.7
    },
    freeShipping: true
  },
  {
    id: 4,
    name: 'YSL Black Opium',
    price: 119.99,
    originalPrice: 139.99,
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 367,
    seller: {
      name: 'Luxury Scents',
      rating: 4.9
    },
    freeShipping: true
  },
  {
    id: 5,
    name: "Gucci Flora",
    price: 139.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 198,
    category: "Perfumes Femeninos",
    freeShipping: true,
    seller: {
      name: "Gucci Beauty",
      rating: 4.8
    }
  },
  {
    id: 6,
    name: "Paco Rabanne 1 Million",
    price: 119.99,
    originalPrice: 139.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 423,
    category: "Perfumes Masculinos",
    freeShipping: true,
    seller: {
      name: "Paco Rabanne",
      rating: 4.6
    }
  },
  {
    id: 7,
    name: "Marc Jacobs Daisy",
    price: 109.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 167,
    category: "Perfumes Femeninos",
    freeShipping: true,
    seller: {
      name: "Marc Jacobs",
      rating: 4.7
    }
  },
  {
    id: 8,
    name: "Armani Code",
    price: 134.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 289,
    category: "Perfumes Masculinos",
    freeShipping: true,
    seller: {
      name: "Armani Beauty",
      rating: 4.8
    }
  },
  {
    id: 9,
    name: "Carolina Herrera Good Girl",
    price: 149.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 345,
    category: "Perfumes Femeninos",
    freeShipping: true,
    seller: {
      name: "Carolina Herrera",
      rating: 4.9
    }
  },
  {
    id: 10,
    name: "Tom Ford Oud Wood",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 178,
    category: "Perfumes de Lujo",
    freeShipping: true,
    seller: {
      name: "Tom Ford Beauty",
      rating: 4.9
    }
  },
  {
    id: 11,
    name: "Hermès Terre d'Hermès",
    price: 179.99,
    originalPrice: 209.99,
    image: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 234,
    category: "Perfumes Masculinos",
    freeShipping: true,
    seller: {
      name: "Hermès Official",
      rating: 4.8
    }
  },
  {
    id: 12,
    name: "Jo Malone London",
    price: 159.99,
    originalPrice: 189.99,
    image: "https://cdn.pixabay.com/photo/2019/04/06/19/22/glass-4108085_1280.jpg",
    rating: 4.6,
    reviewCount: 156,
    category: "Perfumes de Lujo",
    freeShipping: true,
    seller: {
      name: "Jo Malone",
      rating: 4.7
    }
  },
  {
    id: 13,
    name: "Dolce & Gabbana Light Blue",
    price: 129.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 312,
    category: "Perfumes Femeninos",
    freeShipping: true,
    seller: {
      name: "D&G Beauty",
      rating: 4.8
    }
  },
  {
    id: 14,
    name: "Creed Aventus",
    price: 399.99,
    originalPrice: 449.99,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 198,
    category: "Perfumes de Lujo",
    freeShipping: true,
    seller: {
      name: "Creed Boutique",
      rating: 4.9
    }
  },
  {
    id: 15,
    name: "Byredo Gypsy Water",
    price: 289.99,
    originalPrice: 329.99,
    image: "https://images.unsplash.com/photo-1590047387154-0ac8c9c45c11?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 145,
    category: "Perfumes de Lujo",
    freeShipping: true,
    seller: {
      name: "Byredo",
      rating: 4.8
    }
  }
  
];

const ProductSlider = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Productos Populares</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="pb-16"
        >
          {sliderProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`/product/${product.id}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-w-1 aspect-h-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />
                    {product.originalPrice > product.price && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 truncate mb-1">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-lg font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{product.rating}</span>
                      <span className="mx-1">·</span>
                      <span>{product.reviewCount} reseñas</span>
                    </div>
                    {product.freeShipping && (
                      <div className="flex items-center text-green-600 text-sm">
                        <TruckIcon className="w-4 h-4 mr-1" />
                        Envío gratis
                      </div>
                    )}
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;