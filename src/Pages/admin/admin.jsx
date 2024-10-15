import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faFilm, faClock, faInfoCircle, faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Styles from "./admin.module.css";
import EmCartazAdmin from "./em cartaz/emcartaz"; 
import Administradores from "./administradores/administradores";

function Admin() {
   const navigate = useNavigate();

   const [activeSection, setActiveSection] = useState("emCartaz");

   return (
      <article className={Styles.AdminContainer}>
         <div className={Styles.div}>
            <nav className={Styles.Nav}>
               <img 
                  className={Styles.logoReserva}
                  src={require('../../images/reservaCultural/logoReservaCultural.png')} alt="" srcset="" />
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
                        onClick={() => setActiveSection("emBreve")}
                     >
                        <FontAwesomeIcon icon={faClock} className={Styles.NavIcon}/> Em breve
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
                        onClick={() => navigate('/LoginAdmin')}>
                        <FontAwesomeIcon icon={faSignOutAlt} className={Styles.NavIcon}/> Sair
                     </button>
                  </li>
               </ul>
            </nav>
         </div>
         <div className={Styles.bside}>
            {activeSection === "emCartaz" && 
               <EmCartazAdmin />
               }
            
            {activeSection === "emBreve" && 
               <div><h2>Em breve</h2>
                  <p>Conteúdo de lançamentos futuros.</p>
               </div>}
            
            {activeSection === "infoGerais" && 
               <div>
                  <h2>Informações Gerais</h2>
                  <p>Informações sobre o cinema.</p>
               </div>}
            
            {activeSection === "administradores" && 
               <Administradores />}
         </div>
      </article>
   );
}

export default Admin;
