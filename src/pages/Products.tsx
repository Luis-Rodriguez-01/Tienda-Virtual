import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const products = [
    {
        id: 1,
        name: 'Paquete de comestibles orgánicos',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80',
        category: 'Comestibles'
    },
    {
        id: 2,
        name: 'Kit de limpieza premium',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80',
        category: 'Limpieza'
    },
    {
        id: 3,
        name: 'Colección de ropa casual',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80',
        category: 'Moda'
    },
    {
        id: 4,
        name: 'Paquete de productos frescos',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=400&q=80',
        category: 'Comestibles'
    },
    {
        id: 5,
        name: 'Paquete de elementos esenciales para el hogar',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80',
        category: 'Hogar'
    },
    {
        id: 6,
        name: 'Set de limpieza ecológico',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=400&q=80',
        category: 'Limpieza'
    }
];
const Products = () => {
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const [showLoginMessage, setShowLoginMessage] = React.useState(false);

    const handleAddToCart = (product: any) => {
        if (!isAuthenticated) {
            setShowLoginMessage(true);
            setTimeout(() => setShowLoginMessage(false), 3000);
            return;
        }
        addToCart(product);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-sky-900 mb-8">Nuestros Productos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    >
                        <div className="aspect-w-16 aspect-h-9">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                                <span className="text-sky-600 font-bold">${product.price}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Categoría: {product.category}</p>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleAddToCart(product)}
                                className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                Añadir a la cesta
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {showLoginMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-4 right-4 bg-sky-600 text-white px-6 py-3 rounded-lg shadow-lg"
                    >
                        Inicie sesión para agregar artículos a su carrito
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Products;