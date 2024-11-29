import React from "react";
import Navbar from '../../../components/navbar/Navbar'
import Info from '../../../components/Info/Info'
import Styles from './Parcerias.module.css'
import Footer from "../../../components/Footer/Footer";

const Parcerias = () => {
    return (
        <div className={Styles.PageContainer}>
            <Navbar/>

            <article className={Styles.Article}>
                <h1 className={Styles.Title}>Parcerias</h1>
                    <div className={Styles.Parcerias}>
                        <a  href="https://dancarmarketing.com.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img src={require('../../../images/Parceiros/11_dmkt.png')} alt="Logo Dançar Marketing" />
                        </a>
                        
                        <a  href="https://diplomatique.org.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img src={require('../../../images/Parceiros/logo-le-monde-diplomatique-brasil-300px.png')} alt="Logo le monde Diplomatique" />
                        </a>

                        <a  href="https://reservaimovision.com.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img src={require('../../../images/Parceiros/09_Imovision-300x114.png')} alt="Logo Reserva Imotivision" />
                        </a>

                        <a  href="https://www.radiotrianon.com.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/08_RADIO_TRIANON_AM_SAO_PAULO.png')} 
                                alt="Logo rádio Triano"/>
                        </a>

                        <a  href="https://www.ctv.ca/discovery-velocity"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/discoveryVelocity.png')} 
                                alt="Logo Discovery Velocity"/>
                        </a>
                        
                        <a  href="https://masp.org.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/04_MASP.svg_-300x134.png')} 
                                alt="Logo Museu de arte de são paulo"/>
                        </a>
                        
                        <a  href="https://pinacoteca.org.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/Logo-Pinacoteca.jpg')} 
                                alt="Logo Pinacoteca de são paulo"/>
                        </a>

                        <a  href="https://mam.org.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/LogoMuseuArteModerna.jpg')} 
                                alt="Logo Museu de arte moderna"/>
                        </a>
                        
                        <a  href="https://www.cartacapital.com.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/LogoCartaCapital.jpg')} 
                                alt="Logo Carta Capital"/>
                        </a>
                        
                        <a  href="https://www.estadao.com.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/Estadao_logo.jpg')} 
                                alt="Logo Estadão"/>
                        </a>
                        
                        <a  href="https://auwe.com/"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/auwe-qube_green-420x150.jpg')} 
                                alt="Logo AUWE Digital"/>
                        </a>

                        <a  href="https://revistacult.uol.com.br/home/"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/06.jpg')} 
                                alt="Logo revista Cult"/>
                        </a>

                    </div>
            </article>
            
            <Info />
            <Footer />
        </div>
    );
};

export default Parcerias;