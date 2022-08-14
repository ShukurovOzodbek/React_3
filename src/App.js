import './App.css';
import Carusel from './Carusel/Carusel';
import Header from './components/Header/Header'
import Ul from './components/Ul/Ul';
import Cont from './container/Cont/Cont';
import Text from './container/Text/Text';

function App() {
  return (
    <div className="App">
      <Header />
      <Cont />
      <Carusel />
      <div className="text">
        <Text />
      </div>
      <div className="line"></div>
      <div className="UL">
        <Ul />
      </div>
      <span className='span'>More ways to shop: <a href="https://www.apple.com/retail/">Find an Apple Store</a> or <a href="https://locate.apple.com/">other retailer</a> near you. Or call 1-800-MY-APPLE.</span>
      <div className="line"></div>
      <div className="div">
        <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
        <div className="policy">
          <span>Privacy Policy</span> | <span>Terms of Use</span> | <span>Sales and Refunds</span> | <span>Legal</span> | <span>Site Map</span>
        </div>
        United states
      </div>
    </div>
  );
}

export default App;
