import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Styles from './MeiaEntrada.module.css';
import Info from "../../../components/Info/Info";
import data from '../../../data/data.json'

function MeiaEntrada () {
    return (
        <div>
            <Navbar 
                cidade={data.saoPaulo.cidade}/>
            <div className={Styles.Image} >
                <img 
                    alt="Informações sobre quem tem direito à meia-entrada no Brasil, incluindo estudantes, idosos, crianças, pessoas com deficiência, jovens de baixa renda e doadores de sangue. Também são listados os documentos aceitos para comprovação do benefício e um trecho da Lei 12.933/2013."
                    src={require('../../../images/reservaCultural/meia-entrada.png')}/>
            </div>
            <Info />
            <Footer />
        </div>
    );
};

export default MeiaEntrada;