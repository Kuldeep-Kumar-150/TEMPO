import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "./components/HeroSection";
import Story from "./components/Story";
import OurNft from "./components/OurNft";
import About from './components/About'
import WatchVideo from './components/WatchVideo'
import Faqs from "./components/Faqs";
function App() {
  return (
    <>
      <div className="BgImage d-flex flex-column vh_xl_100">
        <MyNav />
        <HeroSection />
      </div>
      <Story />
      <About />
      <WatchVideo />
      <OurNft />
      <Faqs/>
    </>
  );
}

export default App;
