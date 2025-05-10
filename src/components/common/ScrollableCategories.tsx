import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import axios from 'axios';

interface ScrollableCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const ScrollableCategories = ({ categories, selectedCategory, onSelectCategory }: ScrollableCategoriesProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
  
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
  
    const canScrollLeft = scrollLeft > 0;
    const canScrollRight = scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth;
  
    setShowLeftArrow(canScrollLeft);
    setShowRightArrow(canScrollRight);
  };
  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/category/list');
        const categories = response.data.Categories.map((category: { name: string }) => category.name);
        categories(["Todos", ...categories]);
      } catch (error) {
        console.error("Error al cargar las categorías:", error);
      }
    };
    fetchCategories();
  }, [categories]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = scrollContainerRef.current.clientWidth / 2;
    const newScrollLeft =
      scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative flex items-center">
      <Filter className="text-gray-400 flex-shrink-0 mr-4" aria-hidden="true" />

      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="absolute left-6 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-x-hidden scroll-smooth"
        onScroll={checkScroll}
      >
        <div className="flex gap-2 px-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex-shrink-0 transition-colors ${
                selectedCategory === category
                  ? 'bg-sky-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}

        </div>
      </div>

      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="absolute right-0 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      )}
    </div>
  );
};

