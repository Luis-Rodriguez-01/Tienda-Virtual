import { useState } from 'react';
import { Package, Users, Settings, PlusCircle } from 'lucide-react';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('products');
    const [] = useState(false);


    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">Bienvenido, </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="md:col-span-1">
                        <nav className="space-y-2">
                            <button
                                onClick={() => setActiveTab('products')}
                                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'products' ? 'bg-sky-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Package className="w-5 h-5" />
                                Productos
                            </button>
                            <button
                                onClick={() => setActiveTab('users')}
                                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'users' ? 'bg-sky-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Users className="w-5 h-5" />
                                Usuarios
                            </button>
                            <button
                                onClick={() => setActiveTab('settings')}
                                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-sky-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Settings className="w-5 h-5" />
                                Configuración
                            </button>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-3">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            {activeTab === 'products' && (
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-semibold">Gestionar Productos</h2>
                                        <button
                                            
                                            className="flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors"
                                        >
                                            <PlusCircle className="w-5 h-5" />
                                            Agregar Producto
                                        </button>
                                    </div>
                                    {/* Product list will go here */}
                                </div>
                            )}

                            {activeTab === 'users' && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-6">Gestionar Usuarios</h2>
                                    {/* User management content will go here */}
                                </div>
                            )}

                            {activeTab === 'settings' && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-6">Configuración del Sistema</h2>
                                    {/* Settings content will go here */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;