import React, { useEffect, useState } from 'react';
import styles from './Movies.module.css'

// Função para buscar IDs dos filmes
import getMovieIds from './fetchMovieId';

const API_KEY = 'd69cb7e92473b2944af9f61f30ebf1a4';

const MovieCards = () => {
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

                    return {
                        ...movieData,
                        certification,
                    };
                })
            );
            setMovies(movieDetails);
        };

        fetchMovieDetails();
    }, []);

    return (
        <section className={styles.MovieCard}>
            {movies.map(movie => (
                <div key={movie.id}>
                   <img className={styles.moviePoster} 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movieContent">
                        <h1 className={styles.movieTitle}>{movie.title}</h1>
                        <div className={styles.infoMovies}>
                            <p>{movie.runtime}m</p>
                            <p>{movie.genres.map(genre => genre.name).join(' - ')}</p>
                            <p>{movie.certification}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default MovieCards;
