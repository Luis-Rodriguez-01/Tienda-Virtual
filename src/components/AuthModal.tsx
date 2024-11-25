import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
    isOpen: boolean;
    mode: 'login' | 'register' | null;
    onClose: () => void;
    onSwitchMode: (mode: 'login' | 'register') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, mode, onClose, onSwitchMode }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { login, register } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (mode === 'login') {
            login(email, password);
        } else {
            register(name, email, password);
        }
        onClose();
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: -50,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.3,
            },
        },
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    <motion.div
                        className="bg-white rounded-xl shadow-xl w-full max-w-md relative z-10 overflow-hidden"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Header */}
                        <div className="bg-sky-900 text-white p-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold">
                                    {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="text-sky-100 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-sky-200 mt-2">
                                {mode === 'login'
                                    ? 'Sign in to access your account'
                                    : 'Join us and start shopping'}
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {mode === 'register' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nombre Completo
                                    </label>
                                    <div className="relative">
                                        <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-gray-900"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email 
                                </label>
                                <div className="relative">
                                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-gray-900"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Contraseña
                                </label>
                                <div className="relative">
                                    <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-gray-900"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            {mode === 'login' && (
                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 text-sky-600 focus:ring-sky-500" />
                                        <span className="ml-2 text-gray-600">Recuerdame</span>
                                    </label>
                                    <a href="#" className="text-sky-600 hover:text-sky-700">
                                        ¿Olvidaste la contraseña?
                                    </a>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-gray-50 text-sm text-center">
                            {mode === 'login' ? (
                                <p>
                                    ¿No tienes cuenta?{' '}
                                    <button
                                        onClick={() => onSwitchMode('register')}
                                        className="text-sky-600 hover:text-sky-700 font-medium"
                                    >
                                        Registrar
                                    </button>
                                </p>
                            ) : (
                                <p>
                                        ¿Ya tienes una cuenta?{' '}
                                    <button
                                        onClick={() => onSwitchMode('login')}
                                        className="text-sky-600 hover:text-sky-700 font-medium"
                                    >
                                            Inicia sesión
                                    </button>
                                </p>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;