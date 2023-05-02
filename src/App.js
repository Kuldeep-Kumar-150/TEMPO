import './App.css';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './components/About';
import WatchVideo from './components/WatchVideo';
import OurNft from './components/OurNft';

function App() {
  return (
    <div>
      <MyNav />
      <About />
      <WatchVideo />
      <OurNft/>
    </div>
  );
}

export default App;
