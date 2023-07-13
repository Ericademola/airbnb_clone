import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page-components/Home';
import Trendings from './page-components/Trendings';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trendings/:label" element={<Trendings />} />
      </Routes>

    </div>
  );
}

export default App;
