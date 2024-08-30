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
        'O MAL NÃO EXISTE',
        'Estômago 2 - O Poderoso Chef',
        'BERNADETTE',
        'PEQUENAS CARTAS OBSCENAS',
        'motel destino',
        'baile das loucas',
        'A VIÚVA CLICQUOT - A MULHER QUE FORMOU UM IMPÉRIO',
        'Fernanda young',
        'o mensageiro',
    ];

    const ids = [];
    for (const title of movieTitles) {
        const id = await fetchMovieId(title);
        if (id) ids.push(id);
    }
    return ids;
};

export default getMovieIds;
