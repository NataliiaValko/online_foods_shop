import { Route, Routes } from 'react-router-dom';

import {
  HomePage,
  MenuPage,
  CategoryPage,
  ProductPage,
  CartPage,
  CheckoutPage,
  FeedbackPage,
} from 'pages';
import { Header } from 'components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:category" element={<CategoryPage />} />
        <Route path="/menu/:category/:product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </>
  );
};
