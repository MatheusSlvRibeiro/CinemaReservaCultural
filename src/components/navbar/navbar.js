import React, { useState } from "react";
import styles from './navbar.module.css';
import Logo from "../logo/logo";
import Location from "../location/location";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { id: 1, text: 'Programação', url: '/em_cartaz' },
        { id: 2, text: 'Gastronomia', url: 'https://linktr.ee/reservaculturalsp?fbclid=PAZXh0bgNhZW0CMTEAAabqWzJl6zTG3UtiPRTWnC8zr3pWonCUuq226x34JeR0tkpZf8ekFUDFmvU_aem_Zlg-S94_9wl7df3gnCguhQ' },
        { id: 3, text: 'Eventos', url: '/eventos' },
        { id: 4, text: 'Fidelidade', url: '/fidelidade' },
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

    return (
        <nav className={styles.navbar}>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </div>
            <Logo className="logo" />
            <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
                {renderNavItems()}
            </ul>
            <Location />
        </nav>
    );
};

export default NavBar;
