import React, { useState } from 'react';
import Styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';

const Footer = () => {
  // Estado para controlar visibilidade das colunas
  const [openColumn, setOpenColumn] = useState(null);

  // Função para alternar a coluna aberta em telas pequenas
  const toggleColumn = (index) => {
    setOpenColumn(openColumn === index ? null : index);
  };

  // Verifica se a tela é pequena
  const isSmallScreen = window.innerWidth <= 580;

  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer_container}>
        <div className={Styles.footerBottom}>
          <div className={Styles.Links}>
            {/* Cada coluna recebe uma key para controle individual */}
            <div className={Styles.column}>
              <h3 className={Styles.column_title} onClick={() => isSmallScreen && toggleColumn(0)}>
                Programação
              </h3>
              <ul className={openColumn === 0 && isSmallScreen ? Styles.active : ''}>
                <li><a className={Styles.column_item} href="/#em_cartaz">Em Cartaz</a></li>
                <li><a className={Styles.column_item} href="https://www.ingresso.com/cinema/cinema-reserva-cultural-sao-paulo?city=sao-paulo" 
                                                            rel='noopener noreferrer' 
                                                            target='blank'>Ingressos</a></li>
                <li><a className={Styles.column_item} href='/Fares'>Tarifas</a></li>
                <li><a className={Styles.column_item} href='/reducedFare'>Meia-Entrada</a></li>
                <li><a className={Styles.column_item} href="/Guide">Guia do Bom Espectador</a></li>
              </ul>
            </div>

            <div className={Styles.column}>
              <h3 className={Styles.column_title} onClick={() => isSmallScreen && toggleColumn(1)}>
                Gastronomia
              </h3>
              <ul className={openColumn === 1 && isSmallScreen ? Styles.active : ''}>
                <li><a className={Styles.column_item} href="https://drive.google.com/file/d/1r1duntiYfC_eTOw-I71YMWEsy2oh5DJM/view" target='blank'>Mahatman Pizza</a></li>
                <li><a className={Styles.column_item} href="https://api.whatsapp.com/send?phone=5511914339374" target='blank'>Brasserie Reserva</a></li>
                <li><a className={Styles.column_item} href="https://api.whatsapp.com/send?phone=5511914339374" target='blank'>DropBurger</a></li>
              </ul>
            </div>

            <div className={Styles.column}>
              <h3 className={Styles.column_title} onClick={() => isSmallScreen && toggleColumn(2)}>
                Eventos
              </h3>
              <ul className={openColumn === 2 && isSmallScreen ? Styles.active : ''}>
                <li><a className={Styles.column_item} href="#em_cartaz">Eventos Realizados</a></li>
                <li><a className={Styles.column_item} href="#em_cartaz">Parcerias</a></li>
              </ul>
            </div>

            <div className={Styles.column}>
              <h3 className={Styles.column_title} onClick={() => isSmallScreen && toggleColumn(3)}>
                O Reserva
              </h3>
              <ul className={openColumn === 3 && isSmallScreen ? Styles.active : ''}>
                <li><a className={Styles.column_item} href="/Concept">O Conceito</a></li>
                <li><a className={Styles.column_item} href="/Loyalty">Fidelidade</a></li>
                <li><a className={Styles.column_item} href="https://www.google.com/maps/place/Av.+Visconde+do+Rio+Branco,+880+-+S%C3%A3o+Domingos,+Niter%C3%B3i+-+RJ,+24210-200/@-22.8982811,-43.1332801,17z/data=!3m1!4b1!4m6!3m5!1s0x9983e476739ca3:0x100a0ab61b58ef51!8m2!3d-22.8982861!4d-43.1307052!16s%2Fg%2F11pvbz_pzn?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D" target="blank">Estacionamento Conveniado</a></li>
                <li><a className={Styles.column_item} href="/TrabalheConosco">Trabalhe Conosco</a></li>
                <li><a className={Styles.column_item} href="/Contact">Contato</a></li>
              </ul>
            </div>

            <div className={Styles.column_News}>
              <NewsletterSignup />
              
              <div className={Styles.SocialMedia}>
                <h3 className={Styles.column_title}>Siga-nos</h3>
                <div className={Styles.SocialMedia_item}>
                  <a href="https://www.instagram.com/reserva_cultural/" target='blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faInstagram} />
                  </a>
                  <a href="https://www.facebook.com/ReservaCultural?locale=pt_BR" target='blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faFacebook} />
                  </a>
                  <a href="https://www.tiktok.com/@reservaculturalsp?_t=8oxvb6yoyzu&_r=1" target='blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faTiktok} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.institucional}>
          <div>
              <a href='https://www.google.com.br/maps/place/Reserva+Cultural/' target='blank'>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} className={Styles.icon} />
              Avenida Paulista, 900 - Térreo Baixo</p>
              </a>
          </div>

          <div>
            <h3 className={Styles.copyright}>
              Copyright &copy; 2024 - Reserva Cultural 
            </h3>
          </div>

          <div>
            <p className={Styles.Developer}>Desenvolvido por <a href='https://www.linkedin.com/in/matheus-ribeiro-465861231/' target='_blank' rel='noopener noreferrer'>Matheus Ribeiro</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
