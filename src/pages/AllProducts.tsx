import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import {ScrollableCategories} from '../components/common/ScrollableCategories';
import { allProducts } from '../data/allProducts';
import { accessories } from '../data/accessories';
import { Regalo } from '../data/regalo';
import { mensProducts } from '../data/mensProducts';
import { womanProducts } from '../data/womanProducts';
import { herramientas } from '../data/herramientasProducts';
import axios from 'axios';

// Combine all products from different categories
const combinedProducts = [
  ...allProducts,
  ...accessories,
  ...Regalo,
  ...mensProducts,
  ...womanProducts,
  ...herramientas
];

// Get unique categories from all products
const allCategories = ["Todos", ...new Set(combinedProducts.map(product => product.category))];

const AllProducts = () => {
  const [categories, setCategories] = useState<string[]>([]); // Almacenar categorías dinámicamente
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/category/list');
        const categories = response.data.Categories.map((category: { name: string }) => category.name);
        setCategories(["Todos", ...categories]);
      } catch (error) {
        console.error("Error al cargar las categorías:", error);
      }
    };
    fetchCategories();
  }, []);

  const filteredProducts = combinedProducts.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-red-600 to-sky-400 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Todos los Productos</h1>
          <p className="text-lg text-white/90">
            Explora nuestra colección completa
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
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
          </div>
          <div className="flex-1">
            <ScrollableCategories
              categories={allCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;