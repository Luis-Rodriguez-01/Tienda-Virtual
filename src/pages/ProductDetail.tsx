import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Truck, Shield, ArrowLeft, Minus, Plus, Heart, Share2, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { allProducts } from '../data/allProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [showAuthAlert, setShowAuthAlert] = useState(false);

  const product = allProducts.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Producto no encontrado</p>
      </div>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, Math.min(99, newQuantity)));
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      setShowAuthAlert(true);
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    setShowAuthAlert(false);
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

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
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <div className="absolute top-4 right-4 space-y-2">
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-6 h-6 text-gray-600" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Share2 className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full">
                  -{discount}%
                </div>
              )}
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
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">{product.reviewCount} reseñas</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">Vendido por {product.seller.name}</span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-sky-600">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                {product.freeShipping && (
                  <div className="flex items-center text-green-600">
                    <Truck className="w-5 h-5 mr-2" />
                    <span>Envío gratis</span>
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Cantidad</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="p-2 hover:bg-gray-100 rounded-l-lg"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-5 h-5 text-gray-600" />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(Number(e.target.value))}
                      className="w-16 text-center border-x border-gray-300 py-2 focus:outline-none"
                      min="1"
                      max="99"
                    />
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="p-2 hover:bg-gray-100 rounded-r-lg"
                      disabled={quantity >= 99}
                    >
                      <Plus className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  <span className="text-gray-500">
                    Total: ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Auth Alert */}
              {showAuthAlert && (
                <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-yellow-700">
                    Debes iniciar sesión para agregar productos al carrito
                  </p>
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium
                  ${isAuthenticated 
                    ? 'bg-sky-600 text-white hover:bg-sky-700' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                {isAuthenticated ? 'Añadir al Carrito' : 'Inicia sesión para comprar'}
              </button>

              {/* Additional Info */}
              <div className="space-y-4 border-t pt-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Garantía de Calidad</h4>
                    <p className="text-gray-600 text-sm">
                      Todos nuestros productos son 100% originales y auténticos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Envío Seguro</h4>
                    <p className="text-gray-600 text-sm">
                      Entrega rápida y segura a todo el país
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="border-t">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Descripción del Producto</h2>
              <div className="prose text-gray-600">
                <p>
                  {product.name} es una fragancia excepcional que combina notas únicas para crear 
                  una experiencia olfativa inolvidable. Este perfume de alta calidad está diseñado 
                  para aquellos que aprecian la elegancia y la sofisticación.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Notas de salida: Cítricos frescos y especias aromáticas</li>
                  <li>Notas de corazón: Flores exóticas y maderas preciosas</li>
                  <li>Notas de fondo: Ámbar, vainilla y almizcle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;