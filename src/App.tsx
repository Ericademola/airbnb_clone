import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './page-components/Home';
import Trendings from './page-components/Trendings';
import DisplayMap from './page-components/DisplayMap';
import { useState } from 'react';
import { PiListBulletsBold } from 'react-icons/pi';
import { HiMap } from 'react-icons/hi';
import Header from './shared-components/Header';

function App() {

  const [showMap, setShowMap] = useState<boolean>(false);

  const displayMap = () => {
    setShowMap(!showMap)
  }

  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trendings/:label" element={<Trendings />} />
        <Route path="/DisplayLocationMap" element={<DisplayMap />} />
      </Routes>

      <Link to={'/DisplayLocationMap'}>

        <button className="map_button" onClick={displayMap}>

          <span>

            Show {showMap ? 
              <span className="button_press">
                list <PiListBulletsBold className="button_icon"/>
              </span> :
              <span className="button_press">
                map <HiMap className="button_icon"/>
              </span>
            }

          </span>

        </button>
        
      </Link>

    </div>
  );
}

export default App;
