import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faFilm, faInfoCircle, faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Styles from "./admin.module.css";
import EmCartaz from "./emCartaz/emCartaz";


function Admin({ onLogout }) {

   const [activeSection, setActiveSection] = useState("emCartaz");

   return (
      <article className={Styles.AdminContainer}>
         <div className={Styles.div}>
            <nav className={Styles.Nav}>
               <img 
                  className={Styles.logoReserva}
                  src="/images/logoReservaCultural.png" alt="Logo Reserva Cultural"/>
               <ul className={Styles.Lista}>
                  <h3 className={Styles.Title}>
                     Admin <FontAwesomeIcon icon={faUserShield} className={Styles.NavIcon}/>
                  </h3>
                  <li className={Styles.navItem}>
                     <button 
                        className={Styles.NavButton} 
                        onClick={() => setActiveSection("emCartaz")}
                     >
                        <FontAwesomeIcon icon={faFilm} className={Styles.NavIcon}/> Em cartaz
                     </button>
                  </li>
                  <li className={Styles.navItem}>
                     <button 
                        className={Styles.NavButton} 
                        onClick={() => setActiveSection("infoGerais")}
                     >
                        <FontAwesomeIcon icon={faInfoCircle} className={Styles.NavIcon}/> Informações Gerais
                     </button>
                  </li>
                  <li className={Styles.navItem}>
                     <button 
                        className={Styles.NavButton} 
                        onClick={() => setActiveSection("administradores")}
                     >
                        <FontAwesomeIcon icon={faUserCog} className={Styles.NavIcon}/> Administradores
                     </button>
                  </li>
                  <li>
                     <button 
                        className={Styles.NavButton} 
                        onClick={onLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} className={Styles.NavIcon}/> Sair
                     </button>
                  </li>
               </ul>
            </nav>
         </div>
         <div className={Styles.bside}>
            {activeSection === "emCartaz" && <EmCartaz />}
            
            {activeSection === "infoGerais"}
            
            {activeSection === "administradores"}
         </div>
      </article>
   );
}

export default Admin;
