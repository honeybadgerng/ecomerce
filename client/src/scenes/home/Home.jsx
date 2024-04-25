import Blogs from "../blogs/Blogs";
import HeroSection from "./HeroSection";
import ShopByCategory from "./ShopByCategory";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
// import MainCarousel from "./MainCarousel";

function Home() {
  return (
    <div className="home">
      {/* <MainCarousel /> */}
      <HeroSection />
      <ShopByCategory />
      <ShoppingList />
      <Blogs />
      <Subscribe />
    </div>
  );
}

export default Home;
