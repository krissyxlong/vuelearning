import Vue from "vue";
import Vuex from "vuex";
import Element from "element-ui";
// import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";

Vue.use(Vuex);
Vue.use(Element);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count2: function(state) {
      return state.count + 10;
    }
  },
  mutations: {
    increment(state) {
      // 该回调函数即为真正改变 state 的地方。为使该变化生效需要调用 store.commit 触发。
      state.count++;
    }
  },
  actions: {}
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
