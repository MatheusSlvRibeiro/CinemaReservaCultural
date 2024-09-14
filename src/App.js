import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import Home from './Pages/Home';
import Fares from './Pages/Fares';
import Loyalty from './Pages/Loyalty';
import Guide from './Pages/Guide';
import ReducedFare from './Pages/ReducedFare';
import Concept from './Pages/Concept';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fares" element={<Fares />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/Loyalty" element={<Loyalty />} />
        <Route path="/ReducedFare" element={<ReducedFare />} />
        <Route path="/Concept" element={<Concept />} />
      </Routes>
    </Router>
  );
}

export default App;
