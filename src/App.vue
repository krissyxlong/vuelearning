<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    --- 初始化 ---
    <HelloWorld msg="Welcome to Your Vue.js App" />
    --- 测试模板 ---
    <test></test>
    --- 测试路由 ---
    <Router></Router>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import test from "./components/text.vue";
import Router from "./components/router.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    test,
    Router
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
