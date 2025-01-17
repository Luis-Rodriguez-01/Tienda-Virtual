import { useState } from 'react';
import { womanProducts } from '../data/womanProducts';
import SearchBar from '../components/common/SerchBar';
import CategoryFilter from '../components/common/CategoryFilter';
import ProductGrid from '../components/common/ProductGrid';

const categories = [
  "Todos",
  "Vestidos",
  "Blusas",
  "Pantalones",
  "Faldas",
  "Deportiva",
  "Trajes",
  "Abrigos",
  "Accesorios"
];

const WomanFashion = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = womanProducts.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-red-600 to-sky-400 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Moda de Mujer</h1>
          <p className="text-lg text-white/90">
            Descubre las últimas tendencias en moda femenina
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default WomanFashion;