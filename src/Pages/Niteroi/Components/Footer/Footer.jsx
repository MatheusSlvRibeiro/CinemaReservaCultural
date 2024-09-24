import React from 'react';
import Styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer_container}>
        <div className={Styles.footerTop}>
          <div className={Styles.newsLetter}></div>
          <div className={Styles.socialMedia}></div>
        </div>

        <div className={Styles.footerBottom}>
          <div className={Styles.Links}>
            <div className={Styles.column}>
              <h3 className={Styles.column_title}>Programação</h3>
              <ul>
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
              <h3 className={Styles.column_title}>Gastronomia</h3>
              <ul>
                <li><a className={Styles.column_item} href="https://drive.google.com/file/d/1r1duntiYfC_eTOw-I71YMWEsy2oh5DJM/view" target='blank'>Buffet Pain de France</a></li>
                <li><a className={Styles.column_item} href="https://api.whatsapp.com/send?phone=5511914339374" target='blank'>Bistro Reserva</a></li>
              </ul>
            </div>

            <div className={Styles.column}>
              <h3 className={Styles.column_title}>Eventos</h3>
              <ul>
                <li><a className={Styles.column_item} href="#em_cartaz">Eventos Realizados</a></li>
                <li><a className={Styles.column_item} href="#em_cartaz">Parcerias</a></li>
              </ul>
            </div>

            <div className={Styles.column}>
              <h3 className={Styles.column_title}>O Reserva</h3>
              <ul>
                <li><a className={Styles.column_item} href="/Concept">O Conceito</a></li>
                <li><a className={Styles.column_item} href="/Loyalty">Fidelidade</a></li>
                <li><a className={Styles.column_item} href="https://maps.app.goo.gl/U6HPjZcaDLxMZm5d7" target="blank">Estacionamento</a></li>
                <li><a className={Styles.column_item} href="/TrabalheConosco">Trabalhe Conosco</a></li>
                <li><a className={Styles.column_item} href="/Contact">Contato</a></li>
              </ul>
            </div>
            
            <div className={Styles.column_News}>
              
              <NewsletterSignup />
              
              <div className={Styles.SocialMedia}>
                <h3 className={Styles.column_title}>Siga-nos</h3>
                <div className={Styles.SocialMedia_item}>
                  <a href="https://www.instagram.com/reservaculturalniteroi/" target='blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faInstagram} />
                  </a>

                  <a href="https://www.facebook.com/ReservaCulturalNiteroi" target='blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faFacebook} />
                  </a>
                  <a href="https://www.tiktok.com/@reservaculturalniteroi" target='blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faTiktok} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.institucional}>
          <div>
              <a href='https://www.google.com/maps/place/Cinema+Reserva+Cultural+Niter%C3%B3i/@-22.898391,-43.1307519,15z/data=!4m2!3m1!1s0x0:0xbcab540fbcede176?sa=X&ved=1t:2428&ictx=111' target='blank'>
                <p><FontAwesomeIcon icon={faMapMarkerAlt}
                                  className={Styles.icon} />
              Av. Visconde do Rio Branco, 880 - São Domingos</p>
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
