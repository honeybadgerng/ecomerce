import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import { Helmet } from "react-helmet";
import Navbar from "./scenes/global/Navbar";
import ComingSoon from "./scenes/global/ComingSoon";
import Footer from "./scenes/global/Footer";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import SupermarketPage from "./scenes/categories/SupermarketPage";
import Supermarket from "./scenes/categories/Supermarket";
import PhonesAndTablets from "./scenes/categories/PhonesAndTablets";
import FoodCupboard from "./scenes/categories/FoodCupboard";
import GrainsAndRice from "./scenes/categories/GrainsAndRice";
import Appliances from "./scenes/categories/Appliances";
import SmallAppliances from "./scenes/categories/SmallAppliances";
import BigAppliances from "./scenes/categories/BigAppliances";
import Electronics from "./scenes/categories/Electronics";
import Televisions from "./scenes/categories/Televisions";
import Cameras from "./scenes/categories/Cameras";
import HomeTheatres from "./scenes/categories/HomeTheatres";
import GeneratorsAndInverters from "./scenes/categories/GeneratorsAndInverters";
import AirConditionersAndAccessories from "./scenes/categories/AirConditionersAndAccessories";
import Refrigerators from "./scenes/categories/Refrigerators";
import WashingMachinesAndDryers from "./scenes/categories/WashingMachinesAndDryers";
import Freezers from "./scenes/categories/Freezers";
import Fans from "./scenes/categories/Fans";
import Heaters from "./scenes/categories/Heaters";
import AirPurifiers from "./scenes/categories/AirPurifiers";
import WaterDispensers from "./scenes/categories/WaterDispensers";
import Generators from "./scenes/categories/Generators";
import Inverters from "./scenes/categories/Inverters";
import RangeHoods from "./scenes/categories/RangeHoods";
import MobilePhones from "./scenes/categories/MobilePhones";
import Tablets from "./scenes/categories/Tablets";
import MobileAccessories from "./scenes/categories/MobileAccessories";
import Post from "./components/Post";
import PostDetails from "./scenes/postDetails/PostDetails";
import Blogs from "./scenes/blogs/Blogs";
import AboutUs from "./scenes/home/AboutUs";
import ShopByCategory from "./scenes/home/ShopByCategory";
import Emile12 from "./scenes/categories/Emile12";

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
        <Helmet>
          <title>Xclusive Mart </title>
          <meta name="description" content="Your favorite online store " />
        </Helmet>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SupermarketPage" element={<SupermarketPage />} />
          <Route path="/PhonesAndTablets" element={<PhonesAndTablets />} />
          <Route path="/Supermarket" element={<Supermarket />} />
          <Route path="/FoodCupboard" element={<FoodCupboard />} />
          <Route path="/GrainsAndRice" element={<GrainsAndRice />} />
          <Route path="/Appliances" element={<Appliances />} />
          <Route path="/SmallAppliances" element={<SmallAppliances />} />
          <Route path="/BigAppliances" element={<BigAppliances />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Televisions" element={<Televisions />} />
          <Route path="/Cameras" element={<Cameras />} />
          <Route path="/HomeTheatres" element={<HomeTheatres />} />
          <Route
            path="/GeneratorsAndInverters"
            element={<GeneratorsAndInverters />}
          />
          <Route
            path="/AirConditionersAndAccessories"
            element={<AirConditionersAndAccessories />}
          />
          <Route path="/Refrigerators" element={<Refrigerators />} />
          <Route
            path="/WashingMachinesAndDryers"
            element={<WashingMachinesAndDryers />}
          />
          <Route path="/Freezers" element={<Freezers />} />
          <Route path="/Fans" element={<Fans />} />
          <Route path="/Heaters" element={<Heaters />} />
          <Route path="/AirPurifiers" element={<AirPurifiers />} />
          <Route path="/WaterDispensers" element={<WaterDispensers />} />
          <Route path="/Generators" element={<Generators />} />
          <Route path="/Inverters" element={<Inverters />} />
          <Route path="/RangeHoods" element={<RangeHoods />} />
          <Route path="/MobilePhones" element={<MobilePhones />} />
          <Route path="/MobileAccessories" element={<MobileAccessories />} />
          <Route path="/Tablets" element={<Tablets />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="post/:postId" element={<PostDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="post/:slug" element={<PostDetails />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/ComingSoon" element={<ComingSoon />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ShopByCategory" element={<ShopByCategory />} />
          <Route path="/Emile12" element={<Emile12 />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
