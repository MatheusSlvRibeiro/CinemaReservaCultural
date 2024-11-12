import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Styles from './MeiaEntrada.module.css';
import Info from "../../../components/Info/Info";
import data from '../../../data/data.json'

function MeiaEntrada () {
    return (
        <div>
            <Navbar
                estacionamento="/"/>
            <div className={Styles.Image} >
                <img 
                    alt="Informações sobre quem tem direito à meia-entrada no Brasil, incluindo estudantes, idosos, crianças, pessoas com deficiência, jovens de baixa renda e doadores de sangue. Também são listados os documentos aceitos para comprovação do benefício e um trecho da Lei 12.933/2013."
                    src="/images/meia-entrada.png"/>
            </div>
            <Info />
        </div>
    );
};

export default MeiaEntrada;