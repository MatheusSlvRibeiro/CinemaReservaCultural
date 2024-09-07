import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Movies.module.css';

import getMovieIds from './fetchMovieId';

// Função para truncar o título do filme
const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
        return `${title.slice(0, maxLength)}...`;
    }
    return title;
};

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

const API_KEY = 'd69cb7e92473b2944af9f61f30ebf1a4';

const MovieSlider = () => {
    const [movies, setMovies] = useState([]);
    const [slidesToShow, setSlidesToShow] = useState(4); // Valor inicial

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

    useEffect(() => {
        // Função para ajustar o número de slides com base no tamanho da tela
        const handleResize = () => {
            const width = window.innerWidth;
            const quantidade = Math.floor(width / 250);
            setSlidesToShow(quantidade > 0 ? quantidade : 1); // Definir um número mínimo de slides
        };

        // Definir slides iniciais com base na largura atual da tela
        handleResize();

        // Adicionar um event listener para monitorar o redimensionamento da janela
        window.addEventListener('resize', handleResize);

        // Limpar o event listener quando o componente desmontar
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Configurações do slider
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: true,
    };

    if (movies.length <= 0) {
        return null;
    }

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
