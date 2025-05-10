import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, UserPlus, LogIn, Gem } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CartDropdown from './CartDropdown';
import AuthModal from './AuthModal';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null);
  const { items } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { to: '/products', label: 'Productos' },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-300 text-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-2xl">
              <Gem className="inline pr-1 w-8 h-8" />Paradise Store
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-1 text-sm font-medium transition-colors duration-200
                  ${isActive ? 'text-sky-300' : 'text-sky-100 hover:text-sky-300'}`
                }
              >
                <span>{label}</span>
              </NavLink>
            ))}

            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <span className="text-sky-100">{user?.name}</span>
                  <button
                    onClick={logout}
                    className="text-sky-100 hover:text-sky-300 transition-colors"
                  >
                    Cerrar Sesión
                  </button>
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
            </div>
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
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="block py-2 text-gray-600 hover:text-sky-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
              
              {isAuthenticated ? (
                <>
                  <div className="py-2 border-t">
                    <span className="text-gray-600">Bienvenido, {user?.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="block w-full text-left py-2 text-gray-600 hover:text-sky-600"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <div className="py-2 border-t space-y-2">
                  <button
                    onClick={() => {
                      setAuthMode('login');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-gray-600 hover:text-sky-600"
                  >
                    Iniciar Sesión
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode('register');
                      setIsMenuOpen(false);
                    }}
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