import { motion } from 'framer-motion';
import { Product } from '../../types/product';
import ProductCard from '../ProductCard';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
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
      {products.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">
            No se encontraron productos que coincidan con tu búsqueda.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;