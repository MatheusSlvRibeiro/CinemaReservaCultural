import React from 'react';
import Styles from './Footer.module.css'; // Certifique-se de importar o arquivo CSS correto

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
                        <li><a className={Styles.column_item} href="#">Em Cartaz</a></li>
                        <li><a className={Styles.column_item} href="#">Ingressos</a></li>
                        <li><a className={Styles.column_item} href="#">Tarifas</a></li>
                        <li><a className={Styles.column_item} href="#">Guia do Bom Espectador</a></li>
                        </ul>
            </div>
            
            <div className={Styles.column}>
                  <h3 className={Styles.column_title}>O Reserva</h3>
                        <ul>
                        <li><a className={Styles.column_item} href="#">O Conceito</a></li>
                        <li><a className={Styles.column_item} href="#">Fidelidade</a></li>
                        <li><a className={Styles.column_item} href="#">Livros e DVDs</a></li>
                        <li><a className={Styles.column_item} href="#">Estacionamento <br />conveniado</a></li>
                        <li><a className={Styles.column_item} href="#">Trabalhe Conosco</a></li>
                        <li><a className={Styles.column_item} href="#">Contato</a></li>
                        </ul>
            </div>


            <div className={Styles.column}>
                  <h3 className={Styles.column_title}>Gastronomia</h3>
                        <ul>
                        <li><a className={Styles.column_item} href="#">Buffet Pain de France</a></li>
                        <li><a className={Styles.column_item} href="#">Bistro Reserva</a></li>
                        </ul>
            </div>

            <div className={Styles.column}>
                  <h3 className={Styles.column_title}>Eventos</h3>
                        <ul>
                        <li><a className={Styles.column_item} href="#">Eventos Realizados</a></li>
                        <li><a className={Styles.column_item} href="#">Parcerias</a></li>
                        </ul>
            </div>
          </div>
        </div>

        <div className={Styles.institucional}>
          
          <a href="#">
            <img className={Styles.footer_img} src="./images/Logo_reserva01.png" alt="Logo Reserva Cultural" />
          </a>

          <h3 className={Styles.copyright}>
            &copy; 2024 Cinema Reserva Cultural. Todos os direitos reservados
          </h3>


          <p>Desenvolvido por <a href='https://www.linkedin.com/in/matheus-ribeiro-465861231/' target='_blank' rel='noopener noreferrer'>Matheus Ribeiro</a></p>


        </div>

      </div>
    </footer>
  );
};

export default Footer;
