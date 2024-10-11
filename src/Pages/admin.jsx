import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield , faFilm, faClock,faComments, faMapMarkerAlt, faCar } from '@fortawesome/free-solid-svg-icons';
import Styles from "./admin.module.css";

function Admin() {
   return (
      <article className={Styles.AdminContainer}>
         <div>
            <nav className={Styles.Nav}>
               <ul className={Styles.Lista}>
                  <h3 className={Styles.Title}>
                        Admin <FontAwesomeIcon icon={faUserShield} className={Styles.NavIcon}/>
                  </h3>
                  <li className={Styles.navItem}>
                     <a href="#emcartaz">
                     <FontAwesomeIcon icon={faFilm} className={Styles.NavIcon}/> Em cartaz</a>
                  </li>
                  <li className={Styles.navItem}>
                     <a href="#embreve">
                     <FontAwesomeIcon icon={faClock} className={Styles.NavIcon}/> Em breve</a>
                  </li>
                  <li className={Styles.navItem}>
                     <a href="#redesSociais">
                     <FontAwesomeIcon icon={faComments} className={Styles.NavIcon}/>Redes sociais</a>
                  </li>
                  <li className={Styles.navItem}>
                     <a href="endereco">
                     <FontAwesomeIcon icon={faMapMarkerAlt } className={Styles.NavIcon}/>Endereço</a>
                  </li>
                  <li className={Styles.navItem}>
                     <a href="estacionamento">
                     <FontAwesomeIcon icon={faCar} className={Styles.NavIcon}/>Estacionamento</a>
                  </li>
               </ul>
            </nav>
         </div>
         <div>
            <h2>Conteúdo</h2>
         </div>
      </article>
   );
}

export default Admin;
