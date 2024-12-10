import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import PlayingNow from "../../../components/PlayingNow/PlayingNow";
import Footer from "../../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Movie.module.css";
import { useCidade } from "../../../context/context";

    const Filme = () => {
    const { state } = useLocation();
    const movie = state?.movie;
    const { dadosCidade } = useCidade();
    const [showTrailer, setShowTrailer] = useState(false);

    const handlePlayClick = () => {
        setShowTrailer(true);
    };

    const handleCloseClick = () => {
        setShowTrailer(false);
    };

    if (!movie) {
        return (
        <div>
          <div className={styles.movieUndefined}>
            <h1>Filme não encontrado</h1>
            <p>Volte para a página anterior e selecione um filme válido.</p>
            <button>Voltar</button>
          </div>


        </div>
        );
    }

    const ratedMovies = {
        'L': styles.livre,
        '10': styles.dez,
        '12': styles.doze,
        '14': styles.quatorze,
        '16': styles.dezesseis,
        '18': styles.dezoito,
    }

    const getCertificationClass = (certification) => {
        return ratedMovies[certification] || styles.naoDisponivel;
};  

return (
    <div>
      <Navbar />
      <section className={styles.movieSection}>
        <h1 className={styles.movieTitle}>{movie.titulo}</h1>
        <article className={styles.movieDetails}>
          <div className={styles.trailerContainer}>
            {!showTrailer ? (
              <>
                <img
                  className={styles.movieBackdrop}
                  src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                  alt={movie.title}
                />

                <h1 className={styles.movieTitle}>{movie.title}</h1>

                <div className={styles.playButtonOverlay} onClick={handlePlayClick}>
                  <FontAwesomeIcon icon={faPlayCircle} className={styles.playIcon}></FontAwesomeIcon>
                </div>
              </>
            ) : movie.trailerKey ? (
              <div className={styles.trailerWrapper}>
                <button className={styles.closeButton} onClick={handleCloseClick}>
                  X
                </button>

                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${movie.trailerKey}?autoplay=1`}
                  title={movie.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <p className={styles.undefined}>Trailer não disponível</p>
            )}
          </div>
        </article>
        <article className={styles.movieContent}>
            <div className={styles.aside}>
                <img 
                    className={styles.moviePoster} 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title}/>
                <div className={styles.description}>
                    <p>{movie.mainGenre}</p>
                    <p>{movie.runtime}m</p>
                    <p className={`${styles.certification} ${getCertificationClass(movie.certification)}`}>
                        {movie.certification === 'Não disponível' ? '?' : movie.certification}
                    </p>
                </div>       
            </div>

            <div className={styles.additionalInfo}>
                <h1 className={movie.Title}>Sinopse</h1>
                <p className={styles.movieSynopsis}>{movie.sinopse}</p>
                <br/>

                <h1 className={styles.movieCredit}>Créditos e distribuição</h1>
                <p><strong>Elenco:</strong> {movie.elenco}</p>
                <p><strong>Direção:</strong> {movie.direcao}</p>
                <p><strong>Roteiro:</strong> {movie.roteiro}</p>
                <p><strong>Produção:</strong> {movie.producao}</p>
                <p><strong>Distribuidora:</strong> {movie.distribuidora}</p>
            
                <button 
                    onClick={() => { 
                        window.open(dadosCidade.ingressos, "_blank", "noopener, noreferrer");
                    }}
                    className={styles.ingressos}>Comprar ingressos</button>

            </div>
        </article>
      </section>
      <PlayingNow />
      <Footer />
    </div>
  );
};

export default Filme;
