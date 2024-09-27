import React, { useState } from "react";
import styles from './navbar.module.css';
import Logo from "../logo/logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navItems = [
        { id: 1, text: 'Programação', url: '/Niteroi/#em_cartaz' },
        { id: 2, text: 'Gastronomia', url: 'https://linktr.ee/reservaculturalsp?fbclid=PAZXh0bgNhZW0CMTEAAabqWzJl6zTG3UtiPRTWnC8zr3pWonCUuq226x34JeR0tkpZf8ekFUDFmvU_aem_Zlg-S94_9wl7df3gnCguhQ' },
        { id: 3, text: 'Eventos', url: '/eventos' },
        { id: 4, text: 'Fidelidade', url: '/Fidelidade' },
        { id: 5, text: 'Parceria', url: '/parceria' },
    ];

    const renderNavItems = () => {
        return navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
                <a className={styles.navLink} href={item.url}>
                    {item.text}
                </a>
            </li>
        ));
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Funções do antigo componente Location
    const handleToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
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
                <div className={styles.Location} onClick={handleToggleDropdown}>
                    <img className={styles.Icon} src="/images/location.png" alt="Ícone de localização" />
                    <h4 className={styles.State}>Niterói</h4>
                    <img className={styles.Arrow} src="/images/downArrow.png" alt="Seta para baixo" />
                </div>

                {dropdownOpen && (
                    <div className={styles.Dropdown}>
                        <div  className={styles.LocationItem}>
                            <a href="/SãoPaulo" className={styles.LocationItem}>
                                <h4>São Paulo - SP</h4>
                                <p>Avenida Paulista, 900 - Térreo Baixo</p>
                            </a>
                        </ div>

                        <div  className={styles.LocationItem}>
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
