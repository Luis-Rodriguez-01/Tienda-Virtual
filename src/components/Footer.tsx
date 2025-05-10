import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-700 to-gray-300 text-sky-100">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Sobre Nosotros</h3>
                        <p className="text-sky-200 text-sm">
                        En Paradise Store creamos regalos únicos y hechos a mano para momentos especiales. Nos especializamos en ramos decorativos y combinaciones con bombones, diseñados con amor y dedicación. Cada detalle cuenta, y nosotros nos encargamos de que el tuyo sea inolvidable. 💐🎁
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            
                            <li>
                                <Link to="/products" className="text-sky-200 hover:text-white transition-colors">
                                    Productos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sky-200">
                                <Mail className="w-4 h-4" />
                                <span>luisyoisel.rodriguezcaballero@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-sky-200">
                                <Phone className="w-4 h-4" />
                                <span>+53 59186994</span>
                            </div>
                            <div className="flex items-center gap-2 text-sky-200">
                                <MapPin className="w-4 h-4" />
                                <span>Santiago de Cuba, Cuba</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61575569218426" className="text-sky-200 hover:text-white transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            
                            <a href="https://www.instagram.com/01_luis_rodriguez?utm_source=qr&igsh=MW" className="text-sky-200 hover:text-white transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-sky-800 mt-8 pt-8 text-center text-sky-200">
                    <p>&copy; {new Date().getFullYear()} Paradise Store. Todos los derechos reservados.</p>
                    <p>Desarrollado por <a href="https://www.facebook.com/profile.php?id=61575569218426">RodSolutions</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;