import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center pt-4">
        Sobre Nosotros
      </h1>

      <div className="prose lg:prose-xl mb-12">
        <p className="text-gray-600 text-lg leading-relaxed">
          Somos un equipo dedicado de profesionales comprometidos a brindar servicios excepcionales
          valor para nuestros usuarios. Nuestra misión es crear soluciones innovadoras que hagan
          una diferencia en la vida de las personas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Nuestro Equipo</h3>
          <p className="text-gray-600">
            Expertos apasionados que trabajan juntos para lograr la excelencia
          </p>
        </div>

        <div className="text-center">
          <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Nuestra Misión</h3>
          <p className="text-gray-600">
            Creando soluciones innovadoras para los desafíos del mañana
          </p>
        </div>

        <div className="text-center">
          <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Nuestros Valores</h3>
          <p className="text-gray-600">
            Basado en la confianza, la integridad y el compromiso con la excelencia
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;