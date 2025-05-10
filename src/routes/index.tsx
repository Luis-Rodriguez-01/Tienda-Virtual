import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';
import ProductDetail from '../pages/ProductDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default AppRoutes;