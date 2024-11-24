import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen, onClose }) => {
    const { items, removeFromCart } = useCart();
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50"
                >
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Shopping Cart</h3>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {items.length === 0 ? (
                            <div className="text-center py-8">
                                <ShoppingCart className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                                <p className="text-gray-500">Your cart is empty</p>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4 max-h-96 overflow-auto">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex items-center gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                                                <div className="flex items-center justify-between mt-1">
                                                    <p className="text-sm text-gray-600">
                                                        ${item.price} × {item.quantity}
                                                    </p>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t mt-4 pt-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-semibold">Total:</span>
                                        <span className="font-bold text-sky-600">${total.toFixed(2)}</span>
                                    </div>
                                    <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors">
                                        Checkout
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