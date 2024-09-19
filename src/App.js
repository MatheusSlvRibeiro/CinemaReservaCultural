import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import Fares from './Pages/Fares';
import Loyalty from './Pages/Loyalty';
import Guide from './Pages/Guide';
import ReducedFare from './Pages/ReducedFare';
import Concept from './Pages/Concept';
import TrabalheConosco from './Pages/WorkWithUs';
import FormContact from './Pages/Contact';
import SaoPaulo from './components/City/SaoPaulo/SaoPaulo';
import Niteroi from './components/City/Niteroi/Niteroi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SaoPaulo/>} />
        <Route path="/Saopaulo" element={<SaoPaulo/>} />
        <Route path="/Niteroi" element={<Niteroi/>} />
        <Route path="/Fares" element={<Fares />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/Loyalty" element={<Loyalty />} />
        <Route path="/ReducedFare" element={<ReducedFare />} />
        <Route path="/Concept" element={<Concept />} />
        <Route path="/TrabalheConosco" element={<TrabalheConosco/>} />
        <Route path="/Contact" element={<FormContact/>} />

      </Routes>
    </Router>
  );
}

export default App;
