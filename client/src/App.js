import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import SupermarketPage from "./scenes/categories/SupermarketPage";
import Supermarket from "./scenes/categories/Supermarket";
import FoodCupboard from "./scenes/categories/FoodCupboard";
import GrainsAndRice from "./scenes/categories/GrainsAndRice";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SupermarketPage" element={<SupermarketPage />} />
          <Route path="/Supermarket" element={<Supermarket />} />
          <Route path="/FoodCupboard" element={<FoodCupboard />} />
          <Route path="/GrainsAndRice" element={<GrainsAndRice />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
