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
import FARES_SP from './Pages/SaoPaulo/Pages/FARES_SP';
import LOYALTY_SP from './Pages/SaoPaulo/Pages/LOYALTY_SP';
import guia_sp from './Pages/SaoPaulo/Pages/guia_sp';
import REDUCED_FARE_SP from './Pages/SaoPaulo/Pages/REDUCED_FARE_SP';
import CONCEPT_SP from './Pages/SaoPaulo/Pages/CONCEPT_SP';
import WORK_WITH_US_SP from './Pages/SaoPaulo/Pages/WORK_WITH_US_SP';
import FORM_CONTACT_SP from './Pages/SaoPaulo/Pages/CONTACT_SP';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SãoPaulo" element={<SaoPaulo/>} />
        <Route path="/FARES_SP" element={<FARES_SP />} />
        <Route path="/guia_sp" element={<guia_sp />} />
        <Route path="/LOYALTY_SP" element={<LOYALTY_SP />} />
        <Route path="/REDUCED_FARE_SP" element={<REDUCED_FARE_SP />} />
        <Route path="/CONCEPT_SP" element={<CONCEPT_SP />} />
        <Route path="/WORK_WITH_US_SP" element={<WORK_WITH_US_SP/>} />
        <Route path="/CONTACT_SP" element={<FORM_CONTACT_SP/>} />

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
