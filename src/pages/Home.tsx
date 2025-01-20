import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductSlider from '../components/ProductSlider';

const featuredProducts = [
  {
    id: 1,
    name: 'Dior J\'adore',
    price: 129.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
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
    name: 'Chanel Coco Mademoiselle',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80',
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
    name: 'Tom Ford Black Orchid',
    price: 189.99,
    originalPrice: 219.99,
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80',
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
    name: 'Gucci Bloom',
    price: 119.99,
    originalPrice: 139.99,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 367,
    seller: {
      name: 'Luxury Scents',
      rating: 4.9
    },
    freeShipping: true
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-700 to-gray-300 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Descubre Tu Fragancia Perfecta
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-sky-100 mb-8"
            >
              Las mejores fragancias de lujo en un solo lugar
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
                  placeholder="Busca tu perfume favorito..."
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

      {/* Featured Products */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Fragancias Destacadas</h2>
            <Link 
              to="/products" 
              className="flex items-center text-sky-600 hover:text-sky-700 transition-colors"
            >
              Ver todas <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-w-1 aspect-h-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover"
                  />
                  {product.originalPrice > product.price && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-bold text-sky-600">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Perfume Banner */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Perfumes"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-inherit to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-bold text-black mb-6">
                  El Arte de la Perfumería
                </h2>
                <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                  Descubre una colección exclusiva de fragancias que capturan la esencia de la elegancia y el lujo. 
                  Cada aroma cuenta una historia única, diseñada para despertar tus sentidos.
                </p>
                <Link
                  to="/products"
                  className="inline-block bg-white/10 backdrop-blur-md text-black border-2 border-white px-8 py-4 rounded-full font-semibold 
                            hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  Explorar Colección
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Slider */}
      <ProductSlider />
    </div>
  );
};

export default Home;