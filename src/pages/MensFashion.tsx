import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { mensProducts } from '../data/mensProducts'; // Supongamos que también actualizas productos del backend
import axios from 'axios';

const MensFashion = () => {
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
  console.log(categories);

  const filteredProducts = mensProducts.filter((product) => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-red-600 to-sky-400 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Moda de Hombre</h1>
          <p className="text-lg text-white/90">
            Descubre las últimas tendencias en moda masculina
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
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="text-gray-400" />
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-sky-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
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

export default MensFashion;
