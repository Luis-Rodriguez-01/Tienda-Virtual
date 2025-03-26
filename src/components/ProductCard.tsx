import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
        
        <img src={product.imagen_url} alt={product.name}

            className="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        </div>

        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
          
          <div className="mt-2 flex items-center">
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.original_price && product.original_price > product.price && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.original_price.toFixed(2)}
              </span>
            )}
          </div>

          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{product.rating}</span>
            <span className="mx-1">·</span>
            <span className="text-gray-600">{product.category}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;