import React, { useState } from "react";
import styles from "./emCartaz.module.css";
import filmesSaoPaulo from '../../../data/saoPaulo/filmesSaoPaulo.json';
import filmesNiteroi from '../../../data/niteroi/filmesNiteroi.json';

function EmCartaz({ cidade }){

    const localMovies = cidade === 'saoPaulo' ? filmesSaoPaulo : filmesNiteroi;

    return (
        <article className={styles.Article}>
            <header>
                <nav>
                    <h2 className={styles.subtitle}>Mostrando Programação de {cidade}</h2>
                </nav>
            </header>

            <main>
                <section>

                </section>
            </main>
        </article>
    )
};

export default EmCartaz;