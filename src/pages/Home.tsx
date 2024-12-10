import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import FeaturedCategories from '../components/FeaturedCategories';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Vestido Floral de Verano',
    price: 29.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviewCount: 128,
    seller: {
      name: 'Fashion Store',
      rating: 4.8
    },
    freeShipping: true
  },
  {
    id: 2,
    name: 'Smartwatch Premium',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 256,
    seller: {
      name: 'Tech World',
      rating: 4.9
    },
    freeShipping: true
  },
  {
    id: 3,
    name: 'Zapatillas Deportivas',
    price: 79.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewCount: 189,
    seller: {
      name: 'Sports Elite',
      rating: 4.7
    },
    freeShipping: false
  },
  {
    id: 4,
    name: 'Bolso de Cuero',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 167,
    seller: {
      name: 'Luxury Accessories',
      rating: 4.9
    },
    freeShipping: true
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-sky-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Tu Destino de Compras Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-sky-100 mb-8"
            >
              Millones de productos con ofertas increíbles
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="flex items-center bg-white rounded-lg p-2">
                <Search className="w-6 h-6 text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  className="flex-1 px-4 py-2 text-gray-900 focus:outline-none"
                />
                <button className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition-colors">
                  Buscar
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <FeaturedCategories />

      {/* Featured Products */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Productos Destacados</h2>
            <button className="flex items-center text-sky-600 hover:text-sky-700 transition-colors">
              Ver todos <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Flash Sales Banner */}
      <div className="bg-gradient-to-r from-red-600 to-sky-400 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¡Ofertas Relámpago!</h2>
          <p className="text-xl mb-6">Hasta 50% de descuento en productos seleccionados</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Ver Ofertas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;