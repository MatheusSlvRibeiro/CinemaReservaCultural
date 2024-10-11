import React from "react";
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/Footer/Footer'
import Styles from './Parcerias.module.css'
import data from '../../../data/data.json'

const Parcerias = () => {
    return (
        <div>
            <Navbar 
                cidade={data.saoPaulo.cidade}/>
            <article>
                <h1 className={Styles.Title}>Parcerias</h1>
                <div>
                    <div>
                        <a  href="https://www.radiotrianon.com.br/"
                            target="_blank">
                            <img    src={require('../../Components/Images/Parceiros/08_RADIO_TRIANON_AM_SAO_PAULO.png')} 
                                    alt="Logo rádio Triano"/>
                        </a>

                        <a  href="https://www.imovision.com.br/" 
                            target="_blank">
                            <img 
                                    src={require('../../Components/Images/Parceiros/09_Imovision-300x114.png')} 
                                    alt="Logo Imovision" />
                        </a>

                        <a  href="https://dancarmarketing.com.br/en/" 
                            target="_blank">
                            <img    src={require('../../Components/Images/Parceiros/11_dmkt.png')} 
                                    alt="Logo empresa dançar" />
                        </a>
                    </div>                  
                    
                    <div>
                        <a  href="#"
                            target="_blank">
                            <img    src={require('../../Components/Images/Parceiros/01.estadao-300x100.png')} 
                                    alt="Logo do estadão" />
                        </a>

                        <a  href="#"
                            target="_blank">
                            <img    src="" 
                                    alt="" />
                        </a>

                        <a  href="#"
                            target="_blank">
                            <img    src="" 
                                    alt="" />
                        </a>

                        <a  href="#"
                            target="_blank">
                            <img    src="" 
                                    alt="" />
                        </a>

                        <a  href="#"
                            target="_blank">
                            <img    src="" 
                                    alt="" />
                        </a>
                        
                        <a  href="#"
                            target="_blank">
                            <img    src="" 
                                    alt="" />
                        </a>

                        <a  href="#"
                            target="_blank">
                            <img    src="" 
                                    alt="" />
                        </a>

                        <a  href="#"
                            target="_blank">
                            <img    src="" 
                                    alt="" />
                        </a>
                    </div>                  
                </div>
            </article>
            <Footer />
        </div>
    );
};

export default Parcerias;