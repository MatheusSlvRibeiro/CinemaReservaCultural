import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; 
import data from "../../data/data.json";
import { useCidade } from "../../context/context";  

import styles from "./navbar.module.css";
import Logo from "../logo/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faLocationDot, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const { cidade, setCidade } = useCidade();
    const [dadosCidade, setDadosCidade] = useState(null);

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setCidade(selectedCity);
        Cookies.set("cidade", selectedCity, { expires: 7, path: "/" }); 
    };

    useEffect(() => {
        const cidadeDados = data[cidade]; 
        setDadosCidade(cidadeDados || null); 
    }, [cidade]);

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
                { text: "Em Cartaz", url: "#em_cartaz", target: "_self" },
                { text: "Ingressos", url: dadosCidade.ingressos, target: "_blank" },
                { text: "Tarifas", url: "/Tarifas", target: "_self" },
                { text: "Meia-entrada", url: "/MeiaEntrada", target: "_self" },
                { text: "Guia do Bom Espectador", url: "/Guia", target: "_self" },
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
                { text: "Eventos Realizados", url: "#realizados", target: "_self" },
                { text: "Parcerias", url: "/Parcerias", target: "_self" },
            ],
        },
        {
            id: 4,
            text: "O Reserva",
            subItems: [
                { text: "O Conceito", url: "/Conceito", target: "_self" },
                { text: "Fidelidade", url: "/Fidelidade", target: "_self" },
                { text: "Estacionamento", url: dadosCidade.estacionamento, target: "_blank" },
                { text: "Trabalhe Conosco", url: "/TrabalheConosco", target: "_self" },
                { text: "Contato", url: "/Contato", target: "_self" },
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
                        onChange={handleCityChange} 
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
