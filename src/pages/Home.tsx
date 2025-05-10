import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../types/product';
import ProductCard from '../components/ProductCard';

const ITEMS_PER_PAGE = 20;

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver>();
  const navigate = useNavigate();

  const lastProductRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://luisyoiselrodriguezcaballero.pythonanywhere.com/api/products/');
        const productsData = response.data;

        // If it's the first page, replace all products
        // If it's a subsequent page, append new products
        if (page === 1) {
          setProducts(productsData.slice(0, ITEMS_PER_PAGE));
        } else {
          const startIndex = (page - 1) * ITEMS_PER_PAGE;
          const newProducts = productsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
          setProducts(prev => [...prev, ...newProducts]);
        }

        // Check if there are more products to load
        setHasMore(productsData.length > page * ITEMS_PER_PAGE);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

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
              Sorprende con un Regalo Inolvidable
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-sky-100 mb-8"
            >
              Ramos y detalles únicos para cada ocasión
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <form onSubmit={handleSearch} className="flex items-center bg-white rounded-lg p-2">
                <Search className="w-6 h-6 text-gray-400 ml-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Busca el servicio que deseas..."
                  className="flex-1 px-4 py-2 text-gray-900 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition-colors"
                >
                  Buscar
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Nuestros Servicios</h2>
          
          {loading && products.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => {
                if (products.length === index + 1) {
                  return (
                    <motion.div
                      ref={lastProductRef}
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  );
                }
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Loading indicator for more products */}
          {loading && products.length > 0 && (
            <div className="text-center py-8">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-sky-600 border-r-transparent"></div>
            </div>
          )}

          {/* No products message */}
          {!loading && products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No hay productos disponibles en este momento.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;