const key = import.meta.env.VITE_TMDB

const requests = [
    {
        key: 1,
        title: 'Popular',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    },
    {
        key: 2,
        title: 'TopRated',
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    },
    {
        key: 3,
        title: 'Trending',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    },
    {
        key: 4,
        title: 'Horror',
        url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    },
    {
        key: 5,
        title: 'Upcoming',
        url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    },
]

export default requests
