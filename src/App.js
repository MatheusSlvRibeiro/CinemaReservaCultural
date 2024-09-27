import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Home Page
import Home from './Pages/Home/Home';

//Niterói Pages
import Niteroi from './Pages/Niteroi/niteroi';
import Conceito from './Pages/Niteroi/Páginas/Conceito/Conceito';
import Tarifas from './Pages/Niteroi/Páginas/Tarifas/Tarifas';
import Fidelidade from './Pages/Niteroi/Páginas/Fidelidade/Fidelidade';
import Guia from './Pages/Niteroi/Páginas/Guia/Guia';
import MeiaEntrada from './Pages/Niteroi/Páginas/MeiaEntrada/MeiaEntrada';
import TrabalheConosco from './Pages/Niteroi/Páginas/TrabalheConosco/TrabalheConosco';
import Contato from './Pages/Niteroi/Páginas/Contato/Contato';

//São Paulo Pages
import SaoPaulo from './Pages/SaoPaulo/SãoPaulo';
import ConceitoSp from './Pages/SaoPaulo/Páginas/Conceito/ConceitoSp';
import TarifasSp from './Pages/SaoPaulo/Páginas/Tarifas/TarifasSp';
import FidelidadeSp from './Pages/SaoPaulo/Páginas/Fidelidade/FidelidadeSp';
import GuiaSp from './Pages/SaoPaulo/Páginas/Guia/guiaSp';
import MeiaEntradaSp from './Pages/SaoPaulo/Páginas/MeiaEntrada/MeiaEntradaSp';
import TrabalheConoscoSp from './Pages/SaoPaulo/Páginas/TrabalheConosco/TrabalheConoscoSp';
import ContatoSp from './Pages/SaoPaulo/Páginas/Contato/ContatoSp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SãoPaulo" element={<SaoPaulo/>} />
        <Route path='/ConceitoSp' element={<ConceitoSp />} />
        <Route path='/tarifasSp' element={<TarifasSp />}/>
        <Route path='/FidelidadeSp' element={<FidelidadeSp />} />
        <Route path='/GuiaSp' element={<GuiaSp />} />
        <Route path='/MeiaEntradaSp' element={<MeiaEntradaSp />} />
        <Route path='/TrabalheConoscoSp' element={<TrabalheConoscoSp />} />
        <Route path='/ContatoSp' element={<ContatoSp />} />
        

        <Route path="/niteroi" element={<Niteroi/>} />
        <Route path='/Conceito' element={<Conceito />} />
        <Route path='/tarifas' element={<Tarifas />}/>
        <Route path='/Fidelidade' element={<Fidelidade />} />
        <Route path='/Guia' element={<Guia />} />
        <Route path='/MeiaEntrada' element={<MeiaEntrada />} />
        <Route path='/TrabalheConosco' element={<TrabalheConosco />} />
        <Route path='/Contato' element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
