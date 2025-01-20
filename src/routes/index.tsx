import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
    </Routes>
  );
};

export default AppRoutes;