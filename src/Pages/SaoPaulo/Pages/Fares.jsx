import React from "react";
import NavBar from "../Components/navbar/navbar";
import Footer from "../Components/Footer/Footer";
import Styles from "../Components/Css/Fares.module.css"
import Info from "../Components/Info/Info";

function TarifasSP () {
    return (
        <div>
            <NavBar />
            <img className={Styles.Ingressos}
                src="../images/Tarifas.jpg" 
                alt="Tarifas de ingressos: Quinta a Domingo - Inteira: R$44 / 3D: R$50, Meia: R$22 / 3D: R$25. Segunda e Terça - Inteira: R$36 / 3D: R$40, Meia: R$18 / 3D: R$20. Quarta-feira - Inteira: R$34 / 3D: R$38, Meia: R$17 / 3D: R$19, Crianças até 3 anos: Gratuito. Vendas pela internet: www.ingresso.com.br. Programa de Fidelidade: Cadastre-se e ganhe ingressos. Mais informações na bilheteira do cinema." />
                
            <Info />
            <Footer />
        </div>
    )
}

export default TarifasSP;