import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen, onClose }) => {
    const { items, removeFromCart, updateQuantity } = useCart();
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50"
                >
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">Su Carrito</h3>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {items.length === 0 ? (
                            <div className="text-center py-12">
                                <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                                <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
                                <p className="text-gray-400 text-sm mt-2">¡Agrega algunos productos para comenzar!</p>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4 max-h-[60vh] overflow-auto pr-2">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded-md"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-medium text-gray-900 truncate">
                                                    {item.name}
                                                </h4>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    ${item.price.toFixed(2)} each
                                                </p>
                                                <div className="flex items-center gap-4 mt-2">
                                                    <div className="flex items-center bg-white rounded-md border border-gray-200">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                                            className="p-1 hover:bg-gray-100 rounded-l-md transition-colors"
                                                        >
                                                            <Minus className="w-4 h-4 text-gray-600" />
                                                        </button>
                                                        <span className="px-3 py-1 text-gray-700 select-none">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-1 hover:bg-gray-100 rounded-r-md transition-colors"
                                                        >
                                                            <Plus className="w-4 h-4 text-gray-600" />
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-red-500 hover:text-red-700 transition-colors"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-medium text-gray-900">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="border-t mt-4 pt-4 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold text-gray-900">Total:</span>
                                        <span className="text-xl font-bold text-sky-600">
                                            ${total.toFixed(2)}
                                        </span>
                                    </div>
                                    <button className="w-full bg-sky-600 text-white py-3 px-4 rounded-lg hover:bg-sky-700 transition-colors flex items-center justify-center gap-2 font-medium">
                                        <ShoppingCart className="w-5 h-5" />
                                        Hacer Pedido!
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CartDropdown;