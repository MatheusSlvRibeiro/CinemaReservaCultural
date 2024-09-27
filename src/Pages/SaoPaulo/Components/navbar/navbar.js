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
                { text: 'Em Cartaz', url: '/SãoPaulo/#em_cartaz' },
                { text: 'Ingressos', url: 'https://www.ingresso.com/cinema/cinema-reserva-cultural-sao-paulo?city=sao-paulo' },
                { text: 'Tarifas', url: '/TarifasSp' },
                { text: 'Meia-entrada', url: '/MeiaEntradaSp' },
                { text: 'Guia do Bom Espectador', url: '/GuiaSp' }
            ]
        },
        { 
            id: 2, text: 'Gastronomia', url: '#', 
            subItems: [
                { text: 'Buffet pain de france', url: 'https://drive.google.com/file/d/1r1duntiYfC_eTOw-I71YMWEsy2oh5DJM/view' },
                { text: 'bistro reserva', url: 'https://api.whatsapp.com/send?phone=5511914339374' },
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
            id: 4, text: 'O Reserva', url: '/ConceitoSp', 
            subItems: [
                { text: 'O Conceito', url: '/ConceitoSp' },
                { text: 'Fidelidade', url: '/FidelidadeSp' },
                { text: 'Estacionamento', url: 'https://www.google.com/maps/place/R.+S%C3%A3o+Carlos+do+Pinhal,+303+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP,+01333-001/@-23.56475,-46.6532284,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59b86d92b715:0xba496b2341d67afd!8m2!3d-23.5647549!4d-46.6506535!16s%2Fg%2F11c5lzbhzt?entry=tts&g_ep=EgoyMDI0MDgyOC4wKgBIAVAD' },
                { text: 'Trabalhe Conosco', url: 'TrabalheConoscoSp' },
                { text: 'Contato', url: '/ContatoSp' }
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
                    <h4 className={styles.State}>São Paulo</h4>
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
