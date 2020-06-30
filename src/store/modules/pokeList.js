import PokedeskService from '@/services/PokedeskService.js';
export const namespaced = true;

export const state = {
    pokeList: [],
    pokemonsTotal: 0,
    perPage: 9
}
export const mutations = {
    SET_POKEMON_LIST(state, pokeList) {
        state.pokeList = pokeList
    },
  /*   SET_TOTAL_POKEMON(state, pokemonsTotal){
        state.pokemonsTotal = pokemonsTotal
    } */
};

export const actions = {
    fetchPokemonList({commit, state}, { page }) {
       return PokedeskService.getEvents(state.perPage, page).then(response => {
            commit('SET_POKEMON_LIST', response)
         //   commit('SET_TOTAL_POKEMON', response.count)
        }).catch(error => {
            console.log("there was an error", error)
        });
    }
}