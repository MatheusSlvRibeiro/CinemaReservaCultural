import React, { useState } from "react";
import styles from './navbar.module.css';
import Logo from '../logo/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faLocationDot, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({cidade, gastronomia, ingressos, estacionamento, cidadeUrl}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState(cidade);
    const [activeSubMenu, setActiveSubMenu] = useState(null); 

    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        if (city === "São Paulo") {
            window.location.href = "/saoPaulo";
        } else if (city === "Niterói") {
            window.location.href = "/Niteroi";
        }
    };

    const handleNavItemClick = (id) => {
        if (window.innerWidth <= 1200) {
            setActiveSubMenu(activeSubMenu === id ? null : id);
        }
    };

    const navItems = [
        { 
            id: 1, text: 'Programação',
            subItems: [
                { text: 'Em Cartaz', url: `/${cidadeUrl}#em_cartaz`, target: '_self' },
                { text: 'Ingressos', url: ingressos, target: '_blank' },
                { text: 'Tarifas', url: '/Tarifas', target: '_self' },
                { text: 'Meia-entrada', url: '/MeiaEntrada', target: '_self' },
                { text: 'Guia do Bom Espectador', url: '/Guia', target: '_self' }
            ]
        },
        { 
            id: 2, text: 'Gastronomia', 
            subItems: (gastronomia || []).map(item => ({
                text: item.titulo,
                url: item.link,
                target: '_blank'
            }))
        },
        { 
            id: 3, text: 'Eventos',
            subItems: [
                { text: 'Eventos Realizados', url: '#realizados', target: '_self' },
                { text: 'Parcerias', url: '/Parcerias', target: '_self' }
            ]
        },
        { 
            id: 4, text: 'O Reserva', 
            subItems: [
                { text: 'O Conceito', url: '/Conceito', target: '_self' },
                { text: 'Fidelidade', url: '/Fidelidade', target: '_self' },
                { text: 'Estacionamento', url: estacionamento, target: '_blank' },
                { text: 'Trabalhe Conosco', url: '/TrabalheConosco', target: '_self' },
                { text: 'Contato', url: '/Contato', target: '_self' }
            ]
        }
    ];

    const renderNavItems = () => {
        return navItems.map((item) => (
            <li key={item.id} className={`${styles.navItem} ${activeSubMenu === item.id ? styles.active : ''}`}>
                <button 
                    className={styles.navLink} 
                    onClick={() => handleNavItemClick(item.id)}
                >
                    {item.text} <FontAwesomeIcon icon={faCaretDown} className={styles.IconMobile}/>
                </button>
                {item.subItems && (
                    <ul className={`${styles.subMenu} ${activeSubMenu === item.id ? styles.show : ''}`}>
                        {item.subItems.map((subItem, index) => (
                            <li key={index}>
                                <a className={styles.subNavLink} href={subItem.url} target={subItem.target}>
                                    {subItem.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ));
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </div>
            <Logo className="logo" />
            <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
                {renderNavItems()}
            </ul>

            <div className={styles.LocationContainer}>
                <FontAwesomeIcon className={styles.Icon} icon={faLocationDot} aria-label="Ícone de localização" />
                <label className={styles.LocationLabel}>
                    <select value={selectedCity} onChange={handleCityChange} className={styles.CitySelect}>
                        <option className={styles.Option} value="São Paulo">São Paulo - SP</option>
                        <option className={styles.Option} value="Niterói">Niterói - RJ</option>
                    </select>
                </label>
            </div>
        </nav>
    );
};

export default Navbar;
