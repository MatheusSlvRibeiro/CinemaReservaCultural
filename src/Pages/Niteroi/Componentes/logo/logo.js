import React from "react";
import style from './logo.module.css'

const Logo = () => {
    return (
                <a className={style.logoReserva} href="#home">
                    <img className={style.logoReserva} src="/images/Logo_reserva01.png" alt="Logo Cinema Reserva Cultural"></img>
                </a>
    )
}

export default Logo;