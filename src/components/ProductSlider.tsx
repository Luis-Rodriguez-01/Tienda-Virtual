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
    name: 'Vestido Floral Elegante',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 156,
    freeShipping: true
  },
  {
    id: 2,
    name: 'Bolso de Cuero Premium',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 203,
    freeShipping: true
  },
  {
    id: 3,
    name: 'Zapatillas Deportivas Pro',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 189,
    freeShipping: false
  },
  {
    id: 4,
    name: 'Reloj Inteligente Elite',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 312,
    freeShipping: true
  },
  {
    id: 5,
    name: 'Chaqueta de Cuero Vintage',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewCount: 167,
    freeShipping: true
  },
  {
    id: 6,
    name: 'Auriculares Inalámbricos Pro',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 428,
    freeShipping: true
  },
  {
    id: 7,
    name: 'Vestido Floral Elegante',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 156,
    freeShipping: true
  },
  {
    id: 8,
    name: 'Bolso de Cuero Premium',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 203,
    freeShipping: true
  },
  {
    id: 9,
    name: 'Zapatillas Deportivas Pro',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 189,
    freeShipping: false
  },
  {
    id: 10,
    name: 'Reloj Inteligente Elite',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 312,
    freeShipping: true
  },
  {
    id: 11,
    name: 'Chaqueta de Cuero Vintage',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewCount: 167,
    freeShipping: true
  },
  {
    id: 12,
    name: 'Auriculares Inalámbricos Pro',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 428,
    freeShipping: true
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
          slidesPerView={1}
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
          className="pb-12"
        >
          {sliderProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`/product/${product.id}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-w-1 aspect-h-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
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