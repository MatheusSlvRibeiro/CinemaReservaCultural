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
            
            <div className={Styles.column}>
              
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
              <a href='https://www.google.com.br/maps/place/Reserva+Cultural/@-23.5655019,-46.6538209,17z/data=!3m2!4b1!5s0x94ce59b87c0b5d29:0x60f9c4ac5c968669!4m6!3m5!1s0x94ce59b87796941b:0xd50eab4c6b2373a4!8m2!3d-23.5655068!4d-46.651246!16s%2Fg%2F1vrqbs12?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D' target='blank'>
                <p><FontAwesomeIcon icon={faMapMarkerAlt}
                                  className={Styles.icon} />
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
