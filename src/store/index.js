import Vue from "vue";
import Vuex from "vuex";
import * as pokeList from '@/store/modules/pokeList.js'
import * as user from '@/store/modules/user.js'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    pokeList,
    user
  }
});
