import React from "react";
import Styles from './Home.module.css'

function Home () {
    return (
        <div>
            <article className={Styles.Article}>
            <div>
                <img className={Styles.image} src={require("../../../images/reservaCultural/logoReservaCultural.png")} alt="Logo reserva cultural" />
                <h2 className={Styles.subtitle}>Escolha sua unidade de preferência </h2>
                <div className={Styles.SideBySide}>
                    <div className={Styles.Object}>
                        <img className={Styles.Image} src="./images/ReservaSaopaulo.jpg" alt="Imagem da fachada do Reserva Cultural são paulo" />
                        <a href="/SãoPaulo"><p>sao paulo - sp</p></a>
                    </div>
                    
                    <div className={Styles.Object}>
                        <img className={Styles.Image} src="./images/ReservaNiteroi.jpg" alt="Imagem da fachada do Reserva Cultural niterói" />
                        <a href="/niteroi">Niteroi - RJ</a>
                    </div>
                </div>
            </div>
            </article>

            <div className={Styles.Footer}>
                <div className={Styles.Address}>
                    <a href="/SaoPaulo">Reserva Cultural São Paulo - SP</a>
                    <p>|</p>
                    <a href="/Niteroi">Reserva Cultural Niterói - RJ</a>
                </div>

                <div className={Styles.Copyright}>
                    <p>Copyright &copy; 2024 - Reserva Cultural</p>
                </div>

                <div>
                    <p className={Styles.Developer}>Desenvolvido por <a href='https://www.linkedin.com/in/matheus-ribeiro-465861231/' target='_blank' rel='noopener noreferrer'>Matheus Ribeiro</a></p>
                </div>
            </div>
        </div>
    )
}

export default Home;