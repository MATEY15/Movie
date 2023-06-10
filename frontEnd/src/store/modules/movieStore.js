import axios from "axios";
import {ref} from "vue";

export default {
    namespaced: true,
    state: {
        movies: []
    },
    getters: {
        getMovies(state) {
            return state.movies
        }
    },
    mutations: {
        updateMovie(state, payload) {
            state.movies = payload
        }
    },
    actions: {
        async asyncGetMovie({commit}) {
            return await axios
                .get("http://localhost:3000/movies")
                .then(
                    (res) => {
                        commit('updateMovie', res.data)
                    }
                )
                .catch((err) => console.log(err));
        },
    },
    modules: {}
}
