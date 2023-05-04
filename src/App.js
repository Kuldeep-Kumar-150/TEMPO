import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "./components/HeroSection";
import Story from "./components/Story";
import Team from "./components/Team";
import About from "./components/About";
import WatchVideo from './components/WatchVideo'
import OurNft from './components/OurNft'
import Faqs from "./components/Faqs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PreLoader from "./components/PreLoader";
import BackToTop from "./components/BackToTop";
import RoadMap from "./components//RoadMap";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      delay: 100,
    });
  }, [])
  return (
    <>
      {/* <PreLoader /> */}
      <BackToTop />
      <div className="BgImage d-flex flex-column vh_xl_100">
        <MyNav />
        <HeroSection />
      </div>
      <Story />
      <About />
      <WatchVideo />
      <OurNft />
      <RoadMap />
      <Team />
      <Faqs />
    </>
  );
}

export default App;
