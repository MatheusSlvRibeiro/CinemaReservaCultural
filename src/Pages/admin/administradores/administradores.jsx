import React from "react";
import Styles from './administradores.module.css'

function Administradores(){
    return (
        <div>
            <article >
            <nav className={Styles.navBar}>
                <h2 className=" ">Gerenciamento de administradores</h2>
            </nav>
                <div className={Styles.Users}>
                    <div className={Styles.User}>

                    </div>
                    
                    <div className={Styles.User}>
                    
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Administradores;