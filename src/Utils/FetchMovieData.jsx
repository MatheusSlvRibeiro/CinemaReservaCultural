import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Movies.module.css';

import getMovieIds from './fetchMovieId'
import filmesSaoPaulo from '../data/filmesSaoPaulo.json';
import filmesNiteroi from '../data/filmesNiteroi.json';

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

const MovieSlider = ({cidade}) => {
    const [movies, setMovies] = useState([]);
    const [slidesToShow, setSlidesToShow] = useState(4); 

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const ids = await getMovieIds(cidade);

            const localMovies = cidade === 'saoPaulo' ? filmesSaoPaulo : filmesNiteroi;

            const movieDetails = await Promise.all(
                ids.map(async (id) => {
                    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
                    const movieData = await movieResponse.json();
                    
                    const movieTitle = movieData.title.toLowerCase();
                    const localMovie = localMovies.find(movie => movie.titulo.toLowerCase() === movieTitle);
                    const certification = localMovie ? localMovie.faixaEtaria : 'Não disponível';

                    let mainGenre = movieData.genres[0]?.name || 'Gênero não disponível';
                    if (mainGenre === 'Crime') {
                        mainGenre = 'Suspense';
                    } if (mainGenre === 'Ficção científica') {
                        mainGenre = 'Ficção'
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
    }, [cidade]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
    
            const baseWidth = width < 500 ? 200 : 400;
    
            let quantidade = Math.floor(width / baseWidth);
            
            if (width> 550){
                quantidade += 1;
            }

            setSlidesToShow(quantidade > 0 ? quantidade : 1);
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

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
                                    {truncateTitle(movie.title, 30)} 
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
