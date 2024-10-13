import React from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faFilm, faClock, faInfoCircle, faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Styles from "./admin.module.css";

function Admin() {
   const navigate = useNavigate();

   return (
      <article className={Styles.AdminContainer}>
         <div className={Styles.div}>
            <nav className={Styles.Nav}>
               <ul className={Styles.Lista}>
                  <h3 className={Styles.Title}>
                     Admin <FontAwesomeIcon icon={faUserShield} className={Styles.NavIcon}/>
                  </h3>
                  <li className={Styles.navItem}>
                     <a href="#emcartaz">
                        <FontAwesomeIcon icon={faFilm} className={Styles.NavIcon}/> Em cartaz
                     </a>
                  </li>
                  <li className={Styles.navItem}>
                     <a href="#embreve">
                        <FontAwesomeIcon icon={faClock} className={Styles.NavIcon}/> Em breve
                     </a>
                  </li>
                  <li className={Styles.navItem}>
                     <a href="#redesSociais">
                        <FontAwesomeIcon icon={faInfoCircle} className={Styles.NavIcon}/> Informações Gerais
                     </a>
                  </li>
                  <li className={Styles.navItem}>
                     <a href="#administradores">
                        <FontAwesomeIcon icon={faUserCog} className={Styles.NavIcon}/> Administradores
                     </a>
                  </li>
                  <li>
                     <button href="#"
                        className={Styles.buttonLeave}
                        onClick={() => navigate('/LoginAdmin')}>
                        <FontAwesomeIcon icon={faSignOutAlt} className={Styles.NavIcon}/> Sair
                     </button>
                  </li>
               </ul>
            </nav>
         </div>
         <div className={Styles.bside}>
            <h2>Conteúdo</h2>
         </div>
      </article>
   );
}

export default Admin;
