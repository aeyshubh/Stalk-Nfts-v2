import './App.css';
import NftCollection from './pages/NftCollection';
import Home from './pages/Home';
import {
  Route,
  Routes
} from 'react-router-dom';
import BlurBg from './components/BlurBG/BlurBg';

import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">  
        <BlurBg />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/nft-collection" element={<NftCollection />} />
        </Routes>        
    </div>    
  );
}

export default App;
