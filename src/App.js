import './App.css';
import NftCollection from './pages/NftCollection';
import Home from './pages/Home';
import {
  Route,
  Routes
} from 'react-router-dom';

import 'aos/dist/aos.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App"> 
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/nft-collection" element={<NftCollection />} />
        </Routes>        
    </div>    
  );
}

export default App;
