import React from "react";
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import Styles from './Parcerias.module.css'

const Parcerias = () => {
    return (
        <div>
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
                        
                        <a  href="https://pinacoteca.org.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/05_Pinacoteca.png')} 
                                alt="Logo Pinacoteca de são paulo"/>
                        </a>

                        <a  href="https://masp.org.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/04_MASP.svg_-300x134.png')} 
                                alt="Logo Museu de arte de são paulo"/>
                        </a>

                        <a  href="https://mam.org.br/"
                            target="_blank" rel="noreferrer noopener">
                            <img    
                                src={require('../../../images/Parceiros/03_mam-300x90.png')} 
                                alt="Logo Museu de arte moderna"/>
                        </a>

                    </div>
            </article>
            <Footer />
        </div>
    );
};

export default Parcerias;