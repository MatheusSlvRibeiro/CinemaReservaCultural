import React, { useState } from "react";
import NowPlaying from "../../../components/PlayingNow/PlayingNow";
import Styles from './emcartaz.module.css';
import filmes from '../../../data/filmes.json';

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

    const filmesCidade = filmes[selectedCity] || [];

    return (
        <article className={Styles.divContainer}>
            <nav className={Styles.navBar}>
                <div className={Styles.citySelect}>
                    <label htmlFor="city">Selecione a unidade: </label>
                    <select id="city" onChange={(e) => handleCityChange(e.target.value)}>
                        <option value="saoPaulo">Unidades</option>
                        <option value="saoPaulo">São Paulo</option>
                        <option value="niteroi">Niterói</option>
                    </select>
                </div>
            </nav>

            <div className={Styles.tabela}>  
                <h2>Filmes cadastrados no sistema</h2>
                {filmesCidade.length > 0 ? (
                    <table className={Styles.movieTable}>
                        <thead className={Styles.tableHeader}>
                            <tr className={Styles.tableRow}>
                                <th className={Styles.tableHeaderCell}>Título</th>
                                <th className={Styles.tableHeaderCell}>Faixa Etária</th>
                                <th className={Styles.tableHeaderCell}>Ações</th>
                            </tr>
                        </thead>
                        <tbody className={Styles.tableBody}>
                            {filmesCidade.map((filme, index) => (
                                <tr key={index} className={Styles.tableRow}>
                                    <td className={Styles.tableCellTitle}>{filme.titulo}</td>
                                    <td className={Styles.tableCell}>{filme.faixaEtaria}</td>
                                    <td className={Styles.tableCell}>
                                    <button 
                                            className={Styles.button} 
                                            onClick={() => handleEdit(filme)}
                                        >
                                            Editar
                                        </button>
                                        <button 
                                            className={Styles.button} 
                                            onClick={() => handleDelete(filme)}
                                        >
                                            Remover
                                        </button> 
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Nenhum filme disponível para a cidade selecionada.</p>
                )}
                <div className={Styles.buttonContainer}>
        <button 
            className={Styles.AddButton} 
            onClick={() => handleAdd()}
        >
            Adicionar filmes
        </button>
    </div>
            </div>
            <NowPlaying cidade={selectedCity} />
        </article>
    );
}

export default EmCartazAdmin;
