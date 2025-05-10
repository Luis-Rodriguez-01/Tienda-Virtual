import { Filter } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      <Filter className="text-gray-400" />
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
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
  );
};

export default CategoryFilter;