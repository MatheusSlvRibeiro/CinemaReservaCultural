import React, { useState } from "react";
import styles from './navbar.module.css';
import Logo from "../logo/logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navItems = [
        { 
            id: 1, text: 'Programação', url: '#', 
            subItems: [
                { text: 'Em Cartaz', url: '/Niteroi/#em_cartaz' },
                { text: 'Ingressos', url: 'https://www.ingresso.com/cinema/cinema-reserva-cultural-niteroi?city=niteroi' },
                { text: 'Tarifas', url: '/Tarifas' },
                { text: 'Meia-entrada', url: '/MeiaEntrada' },
                { text: 'Guia do Bom Espectador', url: '/Guia' }
            ]
        },
        { 
            id: 2, text: 'Gastronomia', url: '#', 
            subItems: [
                { text: 'Mahatma Pizza', url: 'https://www.instagram.com/mahatmapizza/' },
                { text: 'Brasserie Reserva', url: 'https://www.instagram.com/brasseriereserva/' },
                { text: 'Dropburger', url: 'https://www.instagram.com/dropburger/' }
            ]
        },
        { 
            id: 3, text: 'Eventos', url: '#', 
            subItems: [
                { text: 'Eventos Realizados', url: '#realizados' },
                { text: 'Parcerias', url: '#parcerias' }
            ]
        },
        { 
            id: 4, text: 'O Reserva', url: '/Conceito', 
            subItems: [
                { text: 'O Conceito', url: '/Conceito' },
                { text: 'Fidelidade', url: '/Fidelidade' },
                { text: 'Estacionamento', url: 'https://www.google.com/maps/place/Av.+Visconde+do+Rio+Branco,+880+-+S%C3%A3o+Domingos,+Niter%C3%B3i+-+RJ,+24210-200/@-22.8982811,-43.1332801,17z/data=!3m1!4b1!4m6!3m5!1s0x9983e476739ca3:0x100a0ab61b58ef51!8m2!3d-22.8982861!4d-43.1307052!16s%2Fg%2F11pvbz_pzn?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D' },
                { text: 'Trabalhe Conosco', url: 'TrabalheConosco' },
                { text: 'Contato', url: '/Contato' }
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
                                <a className={styles.subNavLink} href={subItem.url}>
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

            {/* Código do Location diretamente aqui */}
            <div className={styles.LocationContainer}>
                <div className={styles.Location} onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <img className={styles.Icon} src="/images/location.png" alt="Ícone de localização" />
                    <h4 className={styles.State}>Niterói</h4>
                    <img className={styles.Arrow} src="/images/downArrow.png" alt="Seta para baixo" />
                </div>

                {dropdownOpen && (
                    <div className={styles.Dropdown}>
                        <div className={styles.LocationItem}>
                            <a href="/SãoPaulo" className={styles.LocationItem}>
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

export default NavBar;
