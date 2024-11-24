import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-sky-900/60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ShoppingBag className="w-16 h-16 mb-8 mx-auto text-sky-300" />
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Tus elementos esenciales diarios
          </h1>
          <p className="text-xl md:text-2xl text-center mb-12 text-sky-100">
            Todo lo que necesitas - desde comestibles hasta ropa, todo en un solo lugar
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/products')}
            className="px-8 py-3 bg-sky-500 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-sky-600 transition-colors"
          >
            Comprar ahora <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-sky-300 text-sky-300 rounded-full font-semibold hover:bg-sky-300/10 transition-colors"
          >
            Leer Más
          </motion.button>
        </motion.div>

        {/* Animated Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            { title: 'Comestibles y alimentos', desc: 'Productos frescos y envasados para sus necesidades diarias' },
            { title: 'Hogar & Limpieza', desc: 'Mantén tu espacio impecable con nuestros productos esenciales de limpieza' },
            { title: 'Moda & Indumentaria', desc: 'Ropa y accesorios de moda para todos' }
          ].map(({ title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
              className="bg-sky-800/30 backdrop-blur-md p-6 rounded-xl hover:bg-sky-800/40 transition-colors border border-sky-300/20"
            >
              <h3 className="text-xl font-semibold mb-2 text-sky-300">{title}</h3>
              <p className="text-sky-100">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;