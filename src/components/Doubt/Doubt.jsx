import React from "react";
import Styles from "./Doubt.module.css"

const Doubt = () => {
    return (
        <div className={Styles.Doubt_Container}>
                <div className={Styles.DoubtTitle}>
                    <p>TEM DÚVIDAS? <br />
                    TIRE AQUI</p>
                </div>
            <div className={Styles.Doubt_content}>

                <div className={Styles.DoubtImg}>
                    <img src="/images/Meiaentrada.jpg" alt="Cartaz do cinema Reserva Cultural informando sobre o direito à meia-entrada de acordo com a Lei N° 12.933/2013, com ícones de pipoca, refrigerante, ingresso e um botão escrito Saiba Mais" />
                </div>
                
                <div className={Styles.DoubtImg}>
                    <img src="/images/Fidelidade.jpg" alt="Cartaz do programa de fidelidade do cinema Reserva Cultural com as seguintes informações: Ganhe 1 ingresso a cada 10 comprados; Adquira descontos em sessões especiais; Receba a programação semanal com novidades exclusivas." />
                </div>
                
                <div className={Styles.DoubtImg}>
                    <img src="/images/Meiaentrada.jpg" alt="Cartaz do cinema Reserva Cultural informando sobre o direito à meia-entrada de acordo com a Lei N° 12.933/2013, com ícones de pipoca, refrigerante, ingresso e um botão escrito Saiba Mais" />
                </div>
            </div>
        </div>
    )
}

export default Doubt;