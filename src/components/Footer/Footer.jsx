import React, { useState } from 'react';
import { useCidade } from "../../context/context";  

import Styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';

const Footer = () => {

  const [openColumn, setOpenColumn] = useState(null);
  const { dadosCidade, cidade } = useCidade();
  const isSmallScreen = window.innerWidth <= 580;

  const toggleColumn = (index) => {
    setOpenColumn(openColumn === index ? null : index);
  };

  if (!dadosCidade) {
    return <p style={{textAlign: 'center', marginTop: '2rem', fontSize: '2rem'}}>Cidade não encontrada!</p>
  }

  if(!dadosCidade.redesSociais || !dadosCidade.gastronomia) return null;

  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer_container}>
        <div className={Styles.footerBottom}>
          <div className={Styles.Links}>
            <div className={Styles.column}>
              <h3 className={Styles.column_title} onClick={() => isSmallScreen && toggleColumn(0)}>
                Programação
              </h3>
              <ul className={openColumn === 0 && isSmallScreen ? Styles.active : ''}>
                <li><a className={Styles.column_item} href={`/${cidade}#em_cartaz`}>Em Cartaz</a></li>
                <li><a className={Styles.column_item} href={dadosCidade.ingressos} 
                                                            rel='noopener noreferrer' 
                                                            target='blank'>Ingressos</a></li>
                <li><a className={Styles.column_item} href={`/${cidade}/Tarifas`}>Tarifas</a></li>
                <li><a className={Styles.column_item} href={`/${cidade}/MeiaEntrada`}>Meia-Entrada</a></li>
                <li><a className={Styles.column_item} href={`/${cidade}/guia`}>Guia do Bom Espectador</a></li>
              </ul>
            </div>

            <div className={Styles.column}>
              <h3 className={Styles.column_title} onClick={() => isSmallScreen && toggleColumn(1)}>
                Gastronomia
              </h3>
              
              <ul className={openColumn === 1 && isSmallScreen ? Styles.active : ''}>
                {dadosCidade.gastronomia.map((item, index) => (
                  <li key={index}>
                    <a className={Styles.column_item} href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.titulo}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

            <div className={Styles.column}>
              <h3 className={Styles.column_title} onClick={() => isSmallScreen && toggleColumn(2)}>
                Eventos
              </h3>
              <ul className={openColumn === 2 && isSmallScreen ? Styles.active : ''}>
                <li><a className={Styles.column_item} href={`/${cidade}/eventos`}>Faça seu evento</a></li>
                <li><a className={Styles.column_item} href={`/${cidade}/eventos#Parcerias`}>Parcerias</a></li>
              </ul>
            </div>

            <div className={Styles.column}>
              <h3 className={Styles.column_title} onClick={() => isSmallScreen && toggleColumn(3)}>
                O Reserva
              </h3>
              <ul className={openColumn === 3 && isSmallScreen ? Styles.active : ''}>
                <li><a className={Styles.column_item} href={`/${cidade}/Conceito`}>O Conceito</a></li>
                <li><a className={Styles.column_item} href={`/${cidade}/Fidelidade`}>Fidelidade</a></li>
                <li><a className={Styles.column_item} href={dadosCidade.estacionamento} target="blank">Estacionamento</a></li>
                <li><a className={Styles.column_item} href={`/${cidade}/TrabalheConosco`}>Trabalhe Conosco</a></li>
                <li><a className={Styles.column_item} href={`/${cidade}/Contato`}>Contato</a></li>
              </ul>
            </div>

            <div className={Styles.column}>
              <NewsletterSignup />
              
              <div className={Styles.SocialMedia}>
                <h3 className={Styles.column_title}>Siga-nos</h3>
                <div className={Styles.SocialMedia_item}>
                  <a href={dadosCidade.redesSociais.instagram} target='blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faInstagram} />
                  </a>
                  <a href={dadosCidade.redesSociais.facebook} target='blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faFacebook} />
                  </a>
                  <a href={dadosCidade.redesSociais.tikTok} target='blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon className={Styles.SocialMedia_icon} icon={faTiktok} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.institucional}>
          <div>
              <a href={dadosCidade.endereçoUrl} target='blank'>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} className={Styles.icon} />
              {dadosCidade.endereço}</p>
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