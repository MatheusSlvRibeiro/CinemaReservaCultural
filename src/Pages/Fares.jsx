import React from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/Footer/Footer";
import Styles from "../components/Css/Fares.module.css"

function Tarifas () {
    return (
        <div>
            <NavBar />
            <img className={Styles.Ingressos}
                src="../images/Tarifas.jpg" 
                alt="Tarifas de ingressos: Quinta a Domingo - Inteira: R$44 / 3D: R$50, Meia: R$22 / 3D: R$25. Segunda e Terça - Inteira: R$36 / 3D: R$40, Meia: R$18 / 3D: R$20. Quarta-feira - Inteira: R$34 / 3D: R$38, Meia: R$17 / 3D: R$19, Crianças até 3 anos: Gratuito. Vendas pela internet: www.ingresso.com.br. Programa de Fidelidade: Cadastre-se e ganhe ingressos. Mais informações na bilheteira do cinema." />
                
                <div className={Styles.Container}>
                    <div>
                        <p  className={Styles.Title}>Saiba mais</p>
                    </div>
                <div className={Styles.Content}>

                    <div className={Styles.Img}>
                       <a href="/ReducedFare">
                        <img src="/images/Meiaentrada.jpg" alt="Cartaz do cinema Reserva Cultural informando sobre o direito à meia-entrada de acordo com a Lei N° 12.933/2013, com ícones de pipoca, refrigerante, ingresso e um botão escrito Saiba Mais" />
                       </a>
                    </div>
                    
                    <div className={Styles.Img}>
                        <a href="/loyalty">
                            <img src="/images/Fidelidade.jpg" alt="Cartaz do programa de fidelidade do cinema Reserva Cultural com as seguintes informações: Ganhe 1 ingresso a cada 10 comprados; Adquira descontos em sessões especiais; Receba a programação semanal com novidades exclusivas." />
                        </a>
                    </div>
                    
                    <div className={Styles.Img}>
                        <a href="/Guide">
                            <img src="/images/Guide.jpg" alt="Banner Guia do Bom Espectador com ícones de cinema e botão 'Saiba Mais" />
                        </a>
                    </div>
                </div>
                </div>
            <Footer />
        </div>
    )
}

export default Tarifas;