import React, { useState } from "react";
import styles from "./emCartaz.module.css";
import filmesSaoPaulo from '../../../data/saoPaulo/filmesSaoPaulo.json';
import filmesNiteroi from '../../../data/Niteroi/filmesNiteroi.json';
import OnShow from "../../../components/dataTable/dataTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function EmCartaz({ cidade }){

    const [selectedCity, setSelectedCity] = useState(cidade === 'saoPaulo' ? "São Paulo" : "Niterói");
    const [localMovies, setLocalMovies] = useState(cidade === 'saoPaulo' ? filmesSaoPaulo : filmesNiteroi);

    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        if (city === "São Paulo") {
            setLocalMovies(filmesSaoPaulo)
        } else if (city === "Niterói") {
            setLocalMovies(filmesNiteroi)
        }
    };

    return (
        <article className={styles.Article}>
            <header className={styles.Header}>
                <nav>
                    <div className={styles.LocationContainer}>
                        <FontAwesomeIcon className={styles.Icon} icon={faLocationDot} aria-label="Ícone de localização" />
                        <label className={styles.LocationLabel}>
                            <select value={selectedCity} onChange={handleCityChange} className={styles.CitySelect}>
                                <option className={styles.Option} value="São Paulo">São Paulo - SP</option>
                                <option className={styles.Option} value="Niterói">Niterói - RJ</option>
                            </select>
                        </label>
                    </div>
                </nav>
            </header>

            <main>
                <section>
                    <OnShow 
                        cidade={selectedCity === 'São Paulo' ? "saoPaulo" : "niteroi"}
                        localMovies={localMovies}/>       
                </section>
            </main>
        </article>
    )
};

export default EmCartaz;