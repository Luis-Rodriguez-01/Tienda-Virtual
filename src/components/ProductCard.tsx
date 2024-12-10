import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, TruckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviewCount: number;
    seller: {
      name: string;
      rating: number;
    };
    freeShipping?: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
          />
          <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
          {discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              -{discount}%
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
          
          <div className="mt-2 flex items-center">
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{product.rating}</span>
            <span className="mx-1">·</span>
            <span>{product.reviewCount} reseñas</span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Vendido por {product.seller.name}
            </span>
            {product.freeShipping && (
              <div className="flex items-center text-green-600 text-sm">
                <TruckIcon className="w-4 h-4 mr-1" />
                Envío gratis
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;