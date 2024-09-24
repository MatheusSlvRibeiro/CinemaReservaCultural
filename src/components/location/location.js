import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './location.module.css';

const Location = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentCity, setCurrentCity] = useState('São Paulo');
  const navigate = useNavigate();

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCitySelection = (city) => {
    setCurrentCity(city);
    if (city === 'São Paulo') {
      navigate('/saopaulo'); 
    } else if (city === 'Niterói') {
      navigate('/niteroi');
    }
    setDropdownOpen(false);
  };

  return (
    <div className={style.LocationContainer}>
      <div className={style.Location} onClick={handleToggleDropdown}>
        <img className={style.Icon} src="/images/location.png" alt="Ícone de localização" />
        <h4 className={style.State}>{currentCity}</h4> 
        <img className={style.Arrow} src="/images/downArrow.png" alt="Seta para baixo" />
      </div>

      {dropdownOpen && (
        <div className={style.Dropdown}>
          <div className={style.LocationItem} onClick={() => handleCitySelection('São Paulo')}>
            <h4>São Paulo - SP</h4>
            <p>Avenida Paulista, 900 - Térreo Baixo</p>
          </div>
          <div className={style.LocationItem} onClick={() => handleCitySelection('Niterói')}>
            <h4>Niterói - RJ</h4>
            <p>Avenida Visconde do Rio Branco 880</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
