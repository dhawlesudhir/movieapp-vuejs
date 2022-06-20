import { createStore } from "vuex";

const store = createStore({
    state: {
        movieData: {
            movies: [],
        },
        token: import.meta.env.VITE_API_KEY,
        search:'',
    },
    getters: {},
    actions: {
        search({commit},moviename ){
            return fetch(`https://www.omdbapi.com/?apikey=`+store.state.token+`&s=`+store.state.search,{
                method:"GET",
            })
            .then((res) => res.json())
            .then((res) => {
                commit("setMovie", res.Search);
            })
        },
    },
    mutations: {
        notFound: (state) => { state.movieData.data = {}; },
        setMovie: (state, movies) => {
            // state.movieData.movies = Object.entries(movies);
            // console.log(state.movieData.movies);
            const movies1 = movies.map(movie => ({
                Title:movie.Title,
                Year:movie.Year,
                imdbID:movie.imdbID,
                Type:movie.Type,
                Poster:movie.Poster,
            }))

            state.movieData.movies = movies1;
          },
    },
    modules: {},
});

export default store;
