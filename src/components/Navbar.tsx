import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Users, BookOpen, MessageCircle, Settings, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDropdown from './CartDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  const navItems = [
    { to: '/', icon: Home, label: 'Inicio' },
    { to: '/products', icon: ShoppingBag, label: 'Productos' },
    { to: '/about', icon: Users, label: 'Nosotros' },
    { to: '/blog', icon: BookOpen, label: 'Blog' },
    { to: '/contact', icon: MessageCircle, label: 'Contacto' },
    { to: '/settings', icon: Settings, label: 'Configuración' },
  ];

  return (
    <nav className="bg-sky-900 text-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-sky-300">Paradise Store</span>
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
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sky-100 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-300"
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
          </div>
        </div>
      )}

      {/* Cart Dropdown */}
      <div className="absolute right-4 top-full">
        <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;