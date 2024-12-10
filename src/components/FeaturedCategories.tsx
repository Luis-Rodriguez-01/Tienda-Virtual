import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Shirt, Home, Watch, Laptop, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Moda',
    icon: Shirt,
    color: 'bg-pink-100 text-pink-600',
    link: '/category/fashion'
  },
  {
    name: 'Electrónica',
    icon: Laptop,
    color: 'bg-blue-100 text-blue-600',
    link: '/category/electronics'
  },
  {
    name: 'Hogar',
    icon: Home,
    color: 'bg-green-100 text-green-600',
    link: '/category/home'
  },
  {
    name: 'Accesorios',
    icon: Watch,
    color: 'bg-purple-100 text-purple-600',
    link: '/category/accessories'
  },
  {
    name: 'Regalos',
    icon: Gift,
    color: 'bg-red-100 text-red-600',
    link: '/category/gifts'
  },
  {
    name: 'Ver Todo',
    icon: ShoppingBag,
    color: 'bg-gray-100 text-gray-600',
    link: '/products'
  }
];

const FeaturedCategories = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Categorías Destacadas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={category.link}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`${category.color} rounded-xl p-6 text-center transition-shadow hover:shadow-md`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-medium">{category.name}</h3>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;