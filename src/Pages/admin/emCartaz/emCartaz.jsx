import React, { useState } from "react";
import styles from "./emCartaz.module.css";
import OnShow from "../../../components/dataTable/dataTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function EmCartaz({ cidade }){

    const [selectedCity, setSelectedCity] = useState(cidade === 'saoPaulo' ? "São Paulo" : "Niterói");

    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
    };

    return (
        <article className={styles.Article}>
            <header className={styles.Header}>
                <nav>
                    <h2 className={styles.title}>Edite os filmes em cartaz</h2>
                    <div>
                        <h2 className={styles.Subtitle}>Selecione a unidade desejada: </ h2>
                        <div className={styles.LocationContainer}>
                            <FontAwesomeIcon className={styles.Icon} icon={faLocationDot} aria-label="Ícone de localização" />
                            <label className={styles.LocationLabel}>
                                <select value={selectedCity} onChange={handleCityChange} className={styles.CitySelect}>
                                    <option className={styles.Option} value="São Paulo">São Paulo - SP</option>
                                    <option className={styles.Option} value="Niterói">Niterói - RJ</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <section>
                    <OnShow 
                        cidade={selectedCity === 'São Paulo' ? "saoPaulo" : "niteroi"}/>       
                </section>
                
            </main>
        </article>
    )
};

export default EmCartaz;