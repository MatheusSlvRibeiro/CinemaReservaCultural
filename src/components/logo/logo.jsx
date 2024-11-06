import React from "react";
import style from './logo.module.css'

const Logo = () => {
    return (
                <a className={style.logoReserva} href="/">
                    <img className={style.logoReserva} src="/images/logoReservaCultural.png" alt="Logo Cinema Reserva Cultural"></img>
                </a>
    )
}

export default Logo;