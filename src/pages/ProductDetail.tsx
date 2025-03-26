import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../types/product';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error loading product:", error);
        setError("No se pudo cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-xl mb-4">Producto no encontrado</p>
          <button
            onClick={() => navigate(-1)}
            className="text-sky-600 hover:text-sky-700 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver
        </button>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="relative">
              <motion.img
                src={product.imagen_url}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="ml-1 text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-sky-600">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.original_price && product.original_price > product.price && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.original_price.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Category */}
              <div className="border-t pt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Categoría</h2>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Description */}
              <div className="border-t pt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h2>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;