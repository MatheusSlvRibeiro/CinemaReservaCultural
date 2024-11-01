import React, { useState } from "react";
import styles from './navbar.module.css';
import Logo from '../logo/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({cidade, gastronomia, ingressos, estacionamento}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navItems = [
        { 
            id: 1, text: 'Programação', url: '/SãoPaulo#em_cartaz', target: '_self',
            subItems: [
                { text: 'Em Cartaz', url: '/SãoPaulo/#em_cartaz', target: '_self',},
                { text: 'Ingressos', url: ingressos, target: '_blank',},
                { text: 'Tarifas', url: '/Tarifas', target: '_self',},
                { text: 'Meia-entrada', url: '/MeiaEntrada', target: '_self',},
                { text: 'Guia do Bom Espectador', url: '/Guia', target: '_self',}
            ]
        },
        { 
            id: 2, text: 'Gastronomia', url: '#', target: '_self', 
            subItems: (gastronomia || []).map(item => ({
                text: item.titulo,
                url: item.link,
                target: '_blank'
            })),
        },
        { 
            id: 3, text: 'Eventos', url: '#', target: '_self',
            subItems: [
                { text: 'Eventos Realizados', url: '#realizados', target: '_self',},
                { text: 'Parcerias', url: '/Parcerias', target: '_self',}
            ]
        },
        { 
            id: 4, text: 'O Reserva', url: '/Conceito', target: '_self', 
            subItems: [
                { text: 'O Conceito', url: '/Conceito' , target: '_self',},
                { text: 'Fidelidade', url: '/Fidelidade' , target: '_self',},
                { text: 'Estacionamento', url: estacionamento , target: '_blank',},
                { text: 'Trabalhe Conosco', url: 'TrabalheConosco' , target: '_self',},
                { text: 'Contato', url: '/Contato' , target: '_self',}
            ]
        }
    ];

    const renderNavItems = () => {
        return navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
                <a className={styles.navLink} href={item.url}>
                    {item.text}
                </a>
                {item.subItems && (
                    <ul className={styles.subMenu}>
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
                <div className={styles.Location} onClick={() => setDropdownOpen(!dropdownOpen)}>
                <FontAwesomeIcon className={styles.Icon} icon={faLocationDot} aria-label="Ícone de localização" />
                    <h4 className={styles.State}>{cidade}</h4>
                    <FontAwesomeIcon className={styles.Arrow} icon={faCaretDown} aria-label="Seta para baixo" />
                </div>

                {dropdownOpen && (
                    <div className={styles.Dropdown}>
                        <div className={styles.LocationItem}>
                            <a href="/saoPaulo">
                                <h4>São Paulo - SP</h4>
                                <p>Avenida Paulista, 900 - Térreo Baixo</p>
                            </a>
                        </div>
                        <div className={styles.LocationItem}>
                            <a href="/niteroi">
                                <h4>Niterói - RJ</h4>
                                <p>Avenida Visconde do Rio Branco 880</p>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
