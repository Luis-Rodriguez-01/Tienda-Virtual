import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MensFashion from '../pages/MensFashion';
import WomanFashion from '../pages/WomanFashion';
import Fashion from '../category/fashion';
import Herramientas from '../category/Herramientas'
import Tecnologia from '../pages/Tecnologia'
import Accessories from '../category/accessories';
import Regalo from '../category/regalo';
import AllProducts from '../pages/AllProducts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mens" element={<MensFashion />} />
      <Route path="/women" element={<WomanFashion />} />
      <Route path="/herramientas" element={<Herramientas />} />
      <Route path="/tecnologia" element={<Tecnologia />} />
      <Route path="/category/accessories" element={<Accessories />}/>
      <Route path="/category/fashion" element={<Fashion />} />
      <Route path="/category/gifts" element={<Regalo />} />
      <Route path="/products" element={<AllProducts />} />
    </Routes>
  );
};

export default AppRoutes;