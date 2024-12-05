import React from "react";
import { useLocation} from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import PlayingNow from "../../../components/PlayingNow/PlayingNow";
import Footer from "../../../components/Footer/Footer";
import styles from "./Movie.module.css";

const Filme = () => {
    const { state } = useLocation(); 
    const movie = state?.movie; 

    if (!movie) {
        return (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <h1>Filme não encontrado</h1>
                <p>Volte para a página anterior e selecione um filme válido.</p>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <section className={styles.movieSection}>
                <article className={styles.movieDetails}>

                    <div className={styles.trailerContainer}>
                        <img className={styles.moviePoster}
                        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                        alt={movie.title}></img>

                        {movie.trailerKey ? (
                            <iframe
                                width="100%"
                                height="400"
                                src={`https://www.youtube.com/embed/${movie.trailerKey}`}
                                title={movie.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <p>Trailer não disponível</p>
                        )}
                    </div>
                </article>
            </section>
            <PlayingNow />
            <Footer />
        </div>
    );
};

export default Filme;
