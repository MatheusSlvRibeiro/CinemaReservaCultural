// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Pages/main/home/Home';
import Admin from './Pages/admin/admin';
import Login from './Pages/admin/login/login'

import Niteroi from './Pages/main/niteroi';
import SaoPaulo from './Pages/main/SaoPaulo';

import Conceito from './Pages/secondary/Conceito/Conceito';
import Tarifas from './Pages/secondary/Tarifas/Tarifas';
import Fidelidade from './Pages/secondary/Fidelidade/Fidelidade';
import Parcerias from './Pages/secondary/Parcerias/Parcerias'
import Guia from './Pages/secondary/Guia/Guia';
import MeiaEntrada from './Pages/secondary/MeiaEntrada/MeiaEntrada';
import TrabalheConosco from './Pages/secondary/TrabalheConosco/TrabalheConosco';
import Contato from './Pages/secondary/Contato/Contato';

function App() {

  const cidadeDefault = 'Sao Paulo';
  
  // eslint-disable-next-line no-unused-vars
  const [cidade, setCidade] = useState('');

  // eslint-disable-next-line no-unused-vars
  const [dados, setDados] = useState({});

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/LoginAdmin" />;
  };

  useEffect(() => {
    const cidadeSalva = Cookies.get('cidade') || cidadeDefault;
    setCidade(cidadeSalva);

    Cookies.set('cidade', cidadeSalva, {expires: 7, path: '/'});

    axios.get('/dados').then((response) => {
      setDados(response.data);
    });
  }, []);

    const handleCidadeChange = (novaCidade) => {
      setCidade(novaCidade);
      Cookies.set('cidade', novaCidade, {expires: 7, path: '/'});
      
      axios.get('/dados').then((response) => {
        setDados(response.data);
      });
    };

  return (

      <Router>
        <Routes>
          <Route path='/Admin' element={<PrivateRoute ><Admin onLogout={handleLogout}/></PrivateRoute> } />
          <Route path='/LoginAdmin' element={<Login onLogin={handleLogin} /> } />

          <Route path="/" element={<Home onCidadeChange={handleCidadeChange} />} />
          <Route path="/SaoPaulo" element={<SaoPaulo />} />
          <Route path="/niteroi" element={<Niteroi />} />
          
          <Route path="/Parcerias" element={<Parcerias />} />
          <Route path='/Conceito' element={<Conceito />} />
          <Route path='/tarifas' element={<Tarifas />} />
          <Route path='/Fidelidade' element={<Fidelidade />} />
          <Route path='/Guia' element={<Guia />} />
          <Route path='/MeiaEntrada' element={<MeiaEntrada />} />
          <Route path='/TrabalheConosco' element={<TrabalheConosco />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>

  );
}

export default App;
