import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import Home from './Pages/Home';
import Tarifas from './Pages/Tarifas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarifas" element={<Tarifas />} />
      </Routes>
    </Router>
  );
}

export default App;
