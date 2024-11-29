import React, { useState } from "react";
import { useCidade } from "../../context/context";  
import { useLocation, useNavigate } from 'react-router-dom';

import styles from "./navbar.module.css";
import Logo from "../logo/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faLocationDot, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const { cidade, dadosCidade, setCidade } = useCidade();
    const navigate = useNavigate();
    const location = useLocation();

    const handleCityChange = (novaCidade) => {
        if (cidade === novaCidade) {
            return;
        }

        document.cookie = `cidade=${novaCidade}; path=/;`
        setCidade(novaCidade);

        const pathSegments = location.pathname.split('/');

        pathSegments[1] = novaCidade

        const newPath = `/${pathSegments.slice(1).join('/')}`;

        navigate(newPath);
    };

    if (!dadosCidade) {
        return (
            <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "2rem" }}>
                Cidade não encontrada!
            </p>
        );
    }

    const handleNavItemClick = (id) => {
        if (window.innerWidth <= 1200) {
            setActiveSubMenu(activeSubMenu === id ? null : id);
        }
    };

    const navItems = [
        {
            id: 1,
            text: "Programação",
            subItems: [
                { text: "Em Cartaz", url: `/${cidade}#em_cartaz`, target: "_self" },
                { text: "Ingressos", url: dadosCidade.ingressos, target: "_blank" },
                { text: "Tarifas", url: `/${cidade}/Tarifas`, target: "_self" },
                { text: "Meia-entrada", url: `/${cidade}/MeiaEntrada`, target: "_self" },
                { text: "Guia do Bom Espectador", url: `/${cidade}/Guia`, target: "_self" },
            ],
        },
        {
            id: 2,
            text: "Gastronomia",
            subItems: (dadosCidade.gastronomia || []).map((item) => ({
                text: item.titulo,
                url: item.link,
                target: "_blank",
            })),
        },
        {
            id: 3,
            text: "Eventos",
            subItems: [
                { text: "Faça seu evento", url: `/${cidade}/Eventos`, target: "_self" },
                { text: "Parcerias", url: `/${cidade}/Eventos#Parcerias`, target: "_self" },
            ],
        },
        {
            id: 4,
            text: "O Reserva",
            subItems: [
                { text: "O Conceito", url: `/${cidade}/Conceito`, target: "_self" },
                { text: "Fidelidade", url: `/${cidade}/Fidelidade`, target: "_self" },
                { text: "Estacionamento", url: dadosCidade.estacionamento, target: "_blank" },
                { text: "Trabalhe Conosco", url: `/${cidade}/TrabalheConosco`, target: "_self" },
                { text: "Contato", url: `/${cidade}/Contato`, target: "_self" },
            ],
        },
    ];

    const renderNavItems = () => {
        return navItems.map((item) => (
            <li key={item.id} className={`${styles.navItem} ${activeSubMenu === item.id ? styles.active : ""}`}>
                <button
                    className={styles.navLink}
                    onClick={() => handleNavItemClick(item.id)}
                >
                    {item.text} <FontAwesomeIcon icon={faCaretDown} className={styles.IconMobile} />
                </button>
                {item.subItems && (
                    <ul className={`${styles.subMenu} ${activeSubMenu === item.id ? styles.show : ""}`}>
                        {item.subItems.map((subItem, index) => (
                            <li key={index}>
                                <a
                                    className={styles.subNavLink}
                                    href={subItem.url}
                                    target={subItem.target}
                                >
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
            <ul className={`${styles.navList} ${menuOpen ? styles.open : ""}`}>
                {renderNavItems()}
            </ul>

            <div className={styles.LocationContainer}>
                <FontAwesomeIcon
                    className={styles.Icon}
                    icon={faLocationDot}
                    aria-label="Ícone de localização"
                />
                <label className={styles.LocationLabel}>
                    <select
                        value={cidade} 
                        onChange={(e) => handleCityChange(e.target.value)} 
                        className={styles.CitySelect}
                    >
                        <option className={styles.Option} value="saoPaulo">
                            São Paulo - SP
                        </option>
                        <option className={styles.Option} value="niteroi">
                            Niterói - RJ
                        </option>
                    </select>
                </label>
            </div>
        </nav>
    );
};

export default Navbar;
