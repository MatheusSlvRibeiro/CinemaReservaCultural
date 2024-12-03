import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CidadeProvider } from './context/context';
import Home from './Pages/main/home/Home';
import Admin from './Pages/admin/admin';
import Login from './Pages/admin/login/login';

import Niteroi from './Pages/main/niteroi';
import SaoPaulo from './Pages/main/SaoPaulo';

import Filme from './Pages/secondary/Movie/Movie';
import Conceito from './Pages/secondary/Conceito/Conceito';
import Tarifas from './Pages/secondary/Tarifas/Tarifas';
import Fidelidade from './Pages/secondary/Fidelidade/Fidelidade';
import Guia from './Pages/secondary/Guia/Guia';
import MeiaEntrada from './Pages/secondary/MeiaEntrada/MeiaEntrada';
import TrabalheConosco from './Pages/secondary/TrabalheConosco/TrabalheConosco';
import Contato from './Pages/secondary/Contato/Contato';
import Eventos from './Pages/secondary/Eventos/Eventos'

function App() {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/LoginAdmin" />;
  };

  return (
    <CidadeProvider> 
      <Router>
        <Routes>
          <Route path='/Admin' element={<PrivateRoute><Admin onLogout={handleLogout} /></PrivateRoute>} />
          <Route path='/LoginAdmin' element={<Login onLogin={handleLogin} />} />

          <Route path="/" element={<Home />} />
          <Route path="/SaoPaulo" element={<SaoPaulo />} />
          <Route path="/niteroi" element={<Niteroi />} />

          <Route path='/:cidade/Filme' element={<Filme />} />
          <Route path='/:cidade/Conceito' element={<Conceito />} />
          <Route path='/:cidade/tarifas' element={<Tarifas />} />
          <Route path='/:cidade/Fidelidade' element={<Fidelidade />} />
          <Route path='/:cidade/Guia' element={<Guia />} />
          <Route path='/:cidade/MeiaEntrada' element={<MeiaEntrada />} />
          <Route path='/:cidade/TrabalheConosco' element={<TrabalheConosco />} />
          <Route path='/:cidade/Contato' element={<Contato />} />
          <Route path="/:cidade/Eventos" element={<Eventos />}/>
          <Route path="/:cidade/*" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </CidadeProvider>
  );
}

export default App;
