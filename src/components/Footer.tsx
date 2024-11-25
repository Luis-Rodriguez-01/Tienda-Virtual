import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-sky-900 text-sky-100">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Sobre Nosotros</h3>
                        <p className="text-sky-200">
                            Su ventanilla única para todas sus necesidades diarias. Productos de calidad a precios asequibles.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-2" />
                                <span>luisyoisel.rodriguezcaballero@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-2" />
                                <span>+53 (555) 530-52</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>Havana City and Santiago de Cuba, City</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
                        <ul className="space-y-2">
                            <li><a href='/products' className="hover:text-sky-300">Productos</a></li>
                            <li><a href='/about' className="hover:text-sky-300">Nosotros</a></li>
                            <li><a href='/blog' className="hover:text-sky-300">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Síguenos en nuestras redes</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-sky-300">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-sky-300">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-sky-300">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-sky-800 mt-8 pt-8 text-center text-sky-300">
                    <p>&copy; 2024 Virtual Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;