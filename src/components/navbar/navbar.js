import React from "react";
import styles from './navbar.module.css';
import Logo from "../logo/logo";
import Location from "../location/location";


const NavBar = () => {
    // Array of navigation items
    const navItems = [
        { id: 1, text: 'Programação', url: '/programação' },
        { id: 2, text: 'Gastronomia', url: '/gastronomia' },
        { id: 3, text: 'Eventos', url: '/eventos' },
        { id: 4, text: 'Fidelidade', url: '/fidelidade' },
        { id: 5, text: 'Parceria', url: '/parceria' },
    ];

    // Function to render the nav items
    const renderNavItems = () => {
        return navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
                <a className={styles.navLink} href={item.url}>
                    {item.text}
                </a>
            </li>
        ));
    };

    return (
        <nav className={styles.navbar}>
            <Logo></Logo>
            <ul className={styles.navList}>{renderNavItems()}</ul>
            <Location></Location>
        </nav>
    );
};

export default NavBar;
