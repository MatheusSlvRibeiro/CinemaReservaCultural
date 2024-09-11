import React from 'react';
import Styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <li><a className={Styles.column_item} href="#em_cartaz">Em Cartaz</a></li>
                <li><a className={Styles.column_item} href="https://www.ingresso.com/cinema/cinema-reserva-cultural-sao-paulo?city=sao-paulo" 
                                                      rel='noopener noreferrer' 
                                                      target='blank'>Ingressos</a></li>
                <li><a className={Styles.column_item} href='#em_cartaz'>Tarifas</a></li>
                <li><a className={Styles.column_item} href="#em_cartaz">Guia do Bom Espectador</a></li>
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
                <li><a className={Styles.column_item} href="#em_cartaz">O Conceito</a></li>
                <li><a className={Styles.column_item} href="#em_cartaz">Fidelidade</a></li>
                <li><a className={Styles.column_item} href="#em_cartaz">Livros e DVDs</a></li>
                <li><a className={Styles.column_item} href="https://maps.app.goo.gl/U6HPjZcaDLxMZm5d7" target="blank">Estacionamento <br />conveniado</a></li>
                <li><a className={Styles.column_item} href="#em_cartaz">Trabalhe Conosco</a></li>
                <li><a className={Styles.column_item} href="#em_cartaz">Contato</a></li>
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
              <img className={Styles.footer_img} src="./images/Logo_reserva01.png" alt="Logo Reserva Cultural" />
          </div>

          <div>
            <h3 className={Styles.copyright}>
              Copyright &copy; 2024 Cinema Reserva Cultural 
            </h3>
          </div>

          <div>
            <p>Desenvolvido por <a href='https://www.linkedin.com/in/matheus-ribeiro-465861231/' target='_blank' rel='noopener noreferrer'>Matheus Ribeiro</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
