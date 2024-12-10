import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Home, ShoppingBag, Users, BookOpen, MessageCircle, UserPlus, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CartDropdown from './CartDropdown';
import AuthModal from './AuthModal';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null);
  const { isAuthenticated, user, logout } = useAuth();
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { to: '/', icon: Home, label: 'Inicio' },
    { to: '/products', icon: ShoppingBag, label: 'Productos' },
    { to: '/about', icon: Users, label: 'Acerca de' },
    { to: '/blog', icon: BookOpen, label: 'Blog' },
    { to: '/contact', icon: MessageCircle, label: 'Contacto' },
  ];
  return (
    <nav className="bg-gradient-to-r from-red-600 to-sky-400  text-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button></button>
          </div>

          {/* Auth & Cart */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-1 text-sm font-medium transition-colors duration-200
                  ${isActive
                    ? 'text-sky-300'
                    : 'text-sky-100 hover:text-sky-300'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </NavLink>
            ))}

            {isAuthenticated ? (
              <>
                <div className="relative group">
                  <button className="flex items-center gap-2 text-sky-100 hover:text-sky-300 transition-colors">
                    <User className="w-5 h-5" />
                    <span>{user?.name}</span>
                  </button>
                  <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {user?.role === 'admin' && (
                      <NavLink
                        to="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Panel de Admin
                      </NavLink>
                    )}
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="flex items-center gap-2 text-sky-100 hover:text-sky-300 transition-colors"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-sky-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </button>
                  {isCartOpen && <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => setAuthMode('login')}
                  className="flex items-center space-x-1 text-sm font-medium text-sky-100 hover:text-sky-300 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Iniciar sesión</span>
                </button>
                <button
                  onClick={() => setAuthMode('register')}
                  className="flex items-center space-x-1 text-sm font-medium bg-sky-600 hover:bg-sky-700 px-3 py-1.5 rounded-md transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Registrarse</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-sky-100 hover:text-sky-300 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              <NavLink to="/" className="block py-2 text-gray-600 hover:text-sky-600">Inicio</NavLink>
              <NavLink to="/products" className="block py-2 text-gray-600 hover:text-sky-600">Productos</NavLink>
              <NavLink to="/about" className="block py-2 text-gray-600 hover:text-sky-600">Nosotros</NavLink>
              <NavLink to="/contact" className="block py-2 text-gray-600 hover:text-sky-600">Contacto</NavLink>
              <NavLink to="/blog" className="block py-2 text-gray-600 hover:text-sky-600">Blog</NavLink>
              {isAuthenticated ? (
                <>
                  <div className="py-2 border-t">
                    <span className="text-gray-600">Bienvenido, {user?.name}</span>
                  </div>
                  {user?.role === 'admin' && (
                    <NavLink to="/admin" className="block py-2 text-gray-600 hover:text-sky-600">
                      Panel de Admin
                    </NavLink>
                  )}
                  <button
                    onClick={logout}
                    className="block py-2 text-gray-600 hover:text-sky-600 w-full text-left"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <div className="py-2 border-t space-y-2">
                  <button
                    onClick={() => setAuthMode('login')}
                    className="block w-full text-left py-2 text-gray-600 hover:text-sky-600"
                  >
                    Iniciar Sesión
                  </button>
                  <button
                    onClick={() => setAuthMode('register')}
                    className="block w-full text-left py-2 text-gray-600 hover:text-sky-600"
                  >
                    Registrarse
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authMode !== null}
        mode={authMode}
        onClose={() => setAuthMode(null)}
        onSwitchMode={(mode) => setAuthMode(mode)}
      />
    </nav>
  );
};

export default Navbar;