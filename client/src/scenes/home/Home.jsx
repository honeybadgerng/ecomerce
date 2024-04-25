import HeroSection from "./HeroSection";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
// import MainCarousel from "./MainCarousel";

function Home() {
  return (
    <div className="home">
      {/* <MainCarousel /> */}
      <HeroSection />
      <ShoppingList />
      <Subscribe />
    </div>
  );
}

export default Home;
