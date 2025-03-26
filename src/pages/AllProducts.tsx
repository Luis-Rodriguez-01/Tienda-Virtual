import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ScrollableCategories } from '../components/common/ScrollableCategories';
import { Product } from '../types/product';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const ITEMS_PER_PAGE = 20;

const AllProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/category/list');
        const categories = response.data.Categories.map((category: { name: string }) => category.name);
        setCategories(["Todos", ...categories]);
      } catch (error) {
        console.error("Error al cargar las categorías:", error);
        setError("Error al cargar las categorías");
      }
    };

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:8000/api/products/');
        const productsData = response.data;
        setProducts(productsData);

        // Filter products based on category and search
        const filteredProducts = productsData.filter((product: Product) => {
          const matchesCategory = selectedCategory === "Todos" || 
                                product.category.toLowerCase() === selectedCategory.toLowerCase();
          const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesCategory && matchesSearch;
        });

        // Apply pagination
        if (page === 1) {
          setProducts(filteredProducts.slice(0, ITEMS_PER_PAGE));
        } else {
          const startIndex = (page - 1) * ITEMS_PER_PAGE;
          const newProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
          setProducts(prev => [...prev, ...newProducts]);
        }

        setHasMore(filteredProducts.length > page * ITEMS_PER_PAGE);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    // Update search query when URL parameter changes
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }

    fetchCategories();
    fetchProducts();
  }, [searchParams, page, selectedCategory, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1); // Reset page when searching
    if (query) {
      setSearchParams({ search: query });
    } else {
      setSearchParams({});
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setPage(1); // Reset page when changing category
    setProducts([]); // Clear current products
  };

  // Infinite scroll handler
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight * 1.5 && !loading && hasMore) {
      setPage(prevPage => prevPage + 1);
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
      {/* Header */}
      <div className="relative bg-gradient-to-r from-gray-700 to-gray-300 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Servicios de Belleza</h1>
          <p className="text-lg text-white/90">
            Descubre nuestros servicios profesionales
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar servicios..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
          </div>
          <div className="flex-1">
            <ScrollableCategories
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div 
          className="overflow-auto" 
          style={{ maxHeight: 'calc(100vh - 300px)' }}
          onScroll={handleScroll}
        >
          {loading && products.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
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
                No se encontraron productos que coincidan con tu búsqueda.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;