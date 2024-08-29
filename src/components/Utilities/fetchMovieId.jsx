const API_KEY = 'd69cb7e92473b2944af9f61f30ebf1a4';

const fetchMovieId = async (title) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}&language=pt-BR`);
    const data = await response.json();
    if (data.results.length > 0) {
        return data.results[0].id; // Retorna o ID do primeiro resultado
    } else {
        console.warn(`Filme "${title}" não encontrado`);
        return null;
    }
};

const getMovieIds = async () => {
    const movieTitles = [
        'Alien: Romulus',
        'Harold e o lápis mágico',
        'Longlegs - vínculo mortal',
        'O Corvo',
        'Deadpool & Wolverine',
        'É assim que acaba',
        'Armadilha'
    ];

    const ids = [];
    for (const title of movieTitles) {
        const id = await fetchMovieId(title);
        if (id) ids.push(id);
    }
    return ids;
};

export default getMovieIds;
