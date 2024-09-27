import React from "react";
import NavBar from "../../Components/navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import Styles from './MeiaEntradaSp.module.css';
import Info from "../../Components/Info/Info";


function MeiaEntradaSp () {
    return (
        <div>
            <NavBar />
                <div className={Styles.Image} >
                    <img alt="Informações sobre quem tem direito à meia-entrada no Brasil, incluindo estudantes, idosos, crianças, pessoas com deficiência, jovens de baixa renda e doadores de sangue. Também são listados os documentos aceitos para comprovação do benefício e um trecho da Lei 12.933/2013."
                         src="./images/meia-entrada.png"/>
                </div>
                <Info />
            <Footer />
        </div>
    );
};

export default MeiaEntradaSp;