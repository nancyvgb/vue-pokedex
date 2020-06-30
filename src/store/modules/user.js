import axios from "axios";
export const namespaced = true;

export const state = {
  user: null
};
export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData;
    localStorage.setItem("user", JSON.stringify(userData));
    axios.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
  },
  CLEAR_USER_DATA(state) {
    state.user = null;
    //location.reload();
   localStorage.removeItem("user");
    axios.defaults.headers.common["Authorization"] = null;
  }
};
export const actions = {
  register({ commit }, credentials) {
    return axios
      .post("//localhost:3000/register", credentials)
      .then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
  },
  login({ commit }, credentials) {
    return axios
      .post("//localhost:3000/login", credentials)
      .then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
  },
  logout({ commit }) {
    commit("CLEAR_USER_DATA");
  }
};
export const getters = {
  loggedIn(state) {
    return !!state.user;
  }
};
