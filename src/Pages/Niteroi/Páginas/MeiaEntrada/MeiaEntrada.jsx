import React from "react";
import Navbar from "../../Componentes/navbar/navbar";
import Footer from "../../Componentes/Footer/Footer";
import Styles from './MeiaEntrada.module.css';
import Info from "../../Componentes/Info/Info";


function MeiaEntrada () {
    return (
        <div>
            <Navbar />
                <div className={Styles.Image} >
                    <img alt="Informações sobre quem tem direito à meia-entrada no Brasil, incluindo estudantes, idosos, crianças, pessoas com deficiência, jovens de baixa renda e doadores de sangue. Também são listados os documentos aceitos para comprovação do benefício e um trecho da Lei 12.933/2013."
                         src="./images/meia-entrada.png"/>
                </div>
                <Info />
            <Footer />
        </div>
    );
};

export default MeiaEntrada;