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
                <li><a className={Styles.column_item} href="/Niteroi/#em_cartaz">Em Cartaz</a></li>
                <li><a className={Styles.column_item} href="https://www.ingresso.com/cinema/cinema-reserva-cultural-niteroi?city=niteroi&fbclid=PAAaZB24B0WsL6h5UzGOKszZ6a41OFflpwijRlKQjVP6mboggyYeZucZ5RiIU_aem_AZz3fNqnLrN-RenAQi7V-CQy_yPkgKGewWRa0bKJA5Yu0mohXX3JSACnM7CHL6f49dE%23%21%23data%3D20230615" 
                                                            rel='noopener noreferrer' 
                                                            target='blank'>Ingressos</a></li>
                <li><a className={Styles.column_item} href='/Tarifas'>Tarifas</a></li>
                <li><a className={Styles.column_item} href='/MeiaEntrada'>Meia-Entrada</a></li>
                <li><a className={Styles.column_item} href="/Guia">Guia do Bom Espectador</a></li>
              </ul>
            </div>

            <div className={Styles.column}>
              <h3 className={Styles.column_title} onClick={() => isSmallScreen && toggleColumn(1)}>
                Gastronomia
              </h3>
              <ul className={openColumn === 1 && isSmallScreen ? Styles.active : ''}>
                <li><a className={Styles.column_item} href="https://www.instagram.com/mahatmapizza/" target='_blank'>Mahatma Pizza</a></li>
                <li><a className={Styles.column_item} href="https://www.instagram.com/brasseriereserva/" target='_blank'>Brasserie Reserva</a></li>
                <li><a className={Styles.column_item} href="https://www.instagram.com/dropburger/" target='_blank'>DropBurger</a></li>
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
                <li><a className={Styles.column_item} href="/Conceito">O Conceito</a></li>
                <li><a className={Styles.column_item} href="/Fidelidade">Fidelidade</a></li>
                <li><a className={Styles.column_item} href="https://www.google.com/maps/place/Av.+Visconde+do+Rio+Branco,+880+-+S%C3%A3o+Domingos,+Niter%C3%B3i+-+RJ,+24210-200/@-22.8982811,-43.1332801,17z/data=!3m1!4b1!4m6!3m5!1s0x9983e476739ca3:0x100a0ab61b58ef51!8m2!3d-22.8982861!4d-43.1307052!16s%2Fg%2F11pvbz_pzn?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D" target="blank">Estacionamento</a></li>
                <li><a className={Styles.column_item} href="/TrabalheConosco">Trabalhe Conosco</a></li>
                <li><a className={Styles.column_item} href="/Contato">Contato</a></li>
              </ul>
            </div>

            <div className={Styles.column}>
              <NewsletterSignup />
              
              <div className={Styles.SocialMedia}>
                <h3 className={Styles.column_title}>Siga-nos</h3>
                <div className={Styles.SocialMedia_item}>
                  <a href="https://www.instagram.com/reservaculturalniteroi/" target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faInstagram} />
                  </a>
                  <a href="https://www.facebook.com/ReservaCulturalNiteroi?locale=pt_BR" target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faFacebook} />
                  </a>
                  <a href="https://www.tiktok.com/@reservaculturalniteroi" target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faTiktok} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.institucional}>
          <div>
              <a href='https://www.google.com.br/maps/place/Reserva+Cultural/' target='_blank'>
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
