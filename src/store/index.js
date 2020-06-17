import Vue from "vue";
import Vuex from "vuex";
import * as pokeList from '@/store/modules/pokeList.js'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    pokeList
  }
});
