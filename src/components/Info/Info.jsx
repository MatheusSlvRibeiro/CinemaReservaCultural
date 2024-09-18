import React from "react";
import Styles from './Info.module.css'

function Info () {
    return(
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
    );
};

export default Info;