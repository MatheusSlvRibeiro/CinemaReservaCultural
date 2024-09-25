import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Home Page
import Home from './Pages/Home/Home';

//Niterói Pages
import Niteroi from './Pages/Niteroi/niteroi'
import Fares from './Pages/Niteroi/Pages/Fares';
import Loyalty from './Pages/Niteroi/Pages/Loyalty';
import Guide from './Pages/Niteroi/Pages/Guide';
import ReducedFare from './Pages/Niteroi/Pages/ReducedFare';
import Concept from './Pages/Niteroi/Pages/Concept';
import TrabalheConosco from './Pages/Niteroi/Pages/WorkWithUs';
import FormContact from './Pages/Niteroi/Pages/Contact';

//São Paulo Pages
import SaoPaulo from './Pages/SaoPaulo/SãoPaulo'
import FaresSP from './Pages/SaoPaulo/Pages/Fares';
import LoyaltySP from './Pages/SaoPaulo/Pages/Loyalty';
import GuideSP from './Pages/SaoPaulo/Pages/Guide';
import ReducedFareSP from './Pages/SaoPaulo/Pages/ReducedFare';
import ConceptSP from './Pages/SaoPaulo/Pages/Concept';
import TrabalheConoscoSP from './Pages/SaoPaulo/Pages/WorkWithUs';
import FormContactSP from './Pages/SaoPaulo/Pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Saopaulo" element={<SaoPaulo/>} />
        <Route path="/Fares" element={<FaresSP />} />
        <Route path="/Guide" element={<GuideSP />} />
        <Route path="/Loyalty" element={<LoyaltySP />} />
        <Route path="/ReducedFare" element={<ReducedFareSP />} />
        <Route path="/Concept" element={<ConceptSP />} />
        <Route path="/TrabalheConosco" element={<TrabalheConoscoSP/>} />
        <Route path="/Contact" element={<FormContactSP/>} />

        <Route path="/niteroi" element={<Niteroi/>} />
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
