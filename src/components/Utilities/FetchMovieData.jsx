import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive'; // Importei o hook
import styles from './Movies.module.css';

import getMovieIds from './fetchMovieId';

// Função para truncar o título do filme
const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
        return `${title.slice(0, maxLength)}...`;
    }
    return title;
};

// Função para obter a classe CSS com base na certificação
const getCertificationClass = (certification) => {
    switch (certification) {
        case 'L':
            return styles.livre;
        case '10':
            return styles.dez;
        case '12':
            return styles.doze;
        case '14':
            return styles.quatorze;
        case '16':
            return styles.dezesseis;
        case '18':
            return styles.dezoito;
        default:
            return styles.naoDisponivel;
    }
};

const API_KEY = 'd69cb7e92473b2944af9f61f30ebf1a4';

const MovieSlider = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const ids = await getMovieIds();
            const movieDetails = await Promise.all(
                ids.map(async (id) => {
                    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
                    const movieData = await movieResponse.json();
                    
                    // Buscar a classificação indicativa
                    const releaseResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${API_KEY}`);
                    const releaseData = await releaseResponse.json();
                    const brazilRating = releaseData.results.find(release => release.iso_3166_1 === 'BR');
                    const certification = brazilRating ? brazilRating.release_dates[0].certification : 'Não disponível';

                    let mainGenre = movieData.genres[0]?.name || 'Gênero não disponível';
                    if (mainGenre === 'Crime') {
                        mainGenre = 'Suspense';
                    }

                    return {
                        ...movieData,
                        certification,
                        mainGenre,
                    };
                })
            );
            setMovies(movieDetails);
        };

        fetchMovieDetails();
    }, []);

    // Verifica se a largura da tela é 425px ou menos
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
    // Verifica se a largura da tela é 2560px ou mais
    const is4K = useMediaQuery({ query: '(min-width: 1900px)' });

    // Configurações para telas maiores
    const settingsDesktop = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
    };

    // Configurações para telas menores que 425px
    const settingsMobile = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
    };

    // Configurações para telas 4K
    const settings4K = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
    };

    // Configurações baseadas na largura da tela
    const settings = is4K ? settings4K : isMobile ? settingsMobile : settingsDesktop;

    return (
        <div className={styles.slider_container}>
            <Slider {...settings}>
                {movies.map(movie => (
                    <div className={styles.MovieCard} key={movie.id}>
                        <a href="https://www.ingresso.com/cinema/cinema-reserva-cultural-sao-paulo?city=sao-paulo" target='blank' className={styles.movieLink}>
                            <img className={styles.moviePoster} 
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                alt={movie.title} 
                            />
                            <div className={styles.movieContent}>
                                <h1 className={styles.movieTitle}>
                                    {truncateTitle(movie.title, 30)} {/* Ajuste o valor conforme necessário */}
                                </h1>
                                <div className={styles.description}>
                                    <p>{movie.mainGenre}</p>
                                    <p>{movie.runtime}m</p>
                                    <p className={`${styles.certification} ${getCertificationClass(movie.certification)}`}>
                                        {movie.certification === 'Não disponível' ? '?' : movie.certification}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieSlider;
