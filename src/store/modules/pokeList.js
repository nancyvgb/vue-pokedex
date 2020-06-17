import PokedeskService from '@/services/PokedeskService.js';
export const namespaced = true;

export const state = {
    pokeList: [],
}
export const mutations = {
    SET_POKEMON_LIST(state, pokeList) {
        state.pokeList = pokeList
    }
};

export const actions = {
    fetchPokemonList({commit}, { perPage, page }) {
        PokedeskService.getEvents(perPage, page).then(response => {
            commit('SET_POKEMON_LIST', response)
            console.log('response.data', response)
        }).catch(error => {
         
            console.log("there was an error", error)
        });
    }
}