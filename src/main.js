import Vue from 'vue'
import Vuex from 'vuex'
import App from "./App.vue";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count2: function (state) {
      return state.count + 10
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");