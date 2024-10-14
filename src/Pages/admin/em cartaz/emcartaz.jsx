import React, { useState } from "react";
import NowPlaying from "../../../components/PlayingNow/PlayingNow";
import Styles from './emcartaz.module.css'

function EmCartazAdmin() {
    const [selectedCity, setSelectedCity] = useState("saoPaulo");

    const handleCityChange = (city) => {
        setSelectedCity(city);
    };

    const handleAdd = () => {
        console.log("Adicionar filme");
    };

    const handleEdit = () => {
        console.log("Editar filme");
    };

    const handleDelete = () => {
        console.log("Excluir filme");
    };

    return (
        <article className={Styles.divContainer}>
            <nav className={Styles.navBar}>
                <h2>EM CARTAZ - Administração</h2>
                
                <div className={Styles.citySelect}>
                    <label htmlFor="city">Selecione uma unidade:</label>
                    <select id="city" onChange={(e) => handleCityChange(e.target.value)}>
                        <option value="saoPaulo">Unidades</option>
                        <option value="saoPaulo">São Paulo</option>
                        <option value="niteroi">Niterói</option>
                    </select>
                </div>
            </nav>


            <NowPlaying cidade={selectedCity} />

            <div className={Styles.buttonContainer}>
                <button onClick={handleAdd}>Adicionar</button>
                <button onClick={handleEdit}>Editar</button>
                <button onClick={handleDelete}>Excluir</button>
            </div>
            
        </article>
    );
}

export default EmCartazAdmin;
