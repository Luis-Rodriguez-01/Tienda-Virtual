import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Users, BookOpen, MessageCircle, ShoppingBag, ShoppingCart, LogIn, UserPlus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import CartDropdown from './CartDropdown';
import AuthModal from './AuthModal';
import logo from '../media/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [authModal, setAuthModal] = useState<'login' | 'register' | null>(null);
  const { cartCount } = useCart();
  const { isAuthenticated, logout } = useAuth();

  const navItems = [
    { to: '/', icon: Home, label: 'Hogar' },
    { to: '/products', icon: ShoppingBag, label: 'Productos' },
    { to: '/about', icon: Users, label: 'Acerca de' },
    { to: '/blog', icon: BookOpen, label: 'Blog' },
    { to: '/contact', icon: MessageCircle, label: 'Contacto' },
  ];

  return (
    <nav className="bg-sky-900 text-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Paradise Store Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
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

            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 text-sm font-medium text-sky-100 hover:text-sky-300 transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Cerrar sesión</span>
                  </button>
                  <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="flex items-center space-x-1 text-sm font-medium text-sky-100 hover:text-sky-300 relative"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setAuthModal('login')}
                    className="flex items-center space-x-1 text-sm font-medium text-sky-100 hover:text-sky-300 transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Iniciar sesión</span>
                  </button>
                  <button
                    onClick={() => setAuthModal('register')}
                    className="flex items-center space-x-1 text-sm font-medium bg-sky-600 hover:bg-sky-700 px-3 py-1.5 rounded-md transition-colors"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Registrar</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {isAuthenticated ? (
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="text-sky-100 hover:text-sky-300 relative"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            ) : (
              <button
                onClick={() => setAuthModal('login')}
                className="text-sky-100 hover:text-sky-300"
              >
                <LogIn className="w-6 h-6" />
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sky-100 hover:text-sky-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium
                  ${isActive
                    ? 'bg-sky-800 text-sky-300'
                    : 'text-sky-100 hover:bg-sky-800 hover:text-sky-300'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </NavLink>
            ))}
            {!isAuthenticated && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  setAuthModal('register');
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium bg-sky-600 hover:bg-sky-700 transition-colors"
              >
                <UserPlus className="w-5 h-5" />
                <span>Registrar</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Cart Dropdown */}
      {isAuthenticated && (
        <div className="absolute right-4 top-full">
          <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal !== null}
        mode={authModal}
        onClose={() => setAuthModal(null)}
        onSwitchMode={setAuthModal}
      />
    </nav>
  );
};

export default Navbar;