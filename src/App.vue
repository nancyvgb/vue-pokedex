<template>
  <div id="app">
    <app-nav />
    <router-view class="page" :key="$route.fullPath" />
  </div>
</template>

<script>
import AppNav from "./components/AppNav";

export default {
  components: { AppNav }
};
</script>

<style>
@import "./assets/styles/global.scss";
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
  background-image: url("./assets/container_bg.png");
  background-size: cover;
  height: 100%;
  overflow: hidden;
}
/* #app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image:url('./assets/container_bg.png');
  background-size: cover;
  height: 100%;
  overflow: hidden;
} */

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 0;
  height: 100%;
}
p {
  margin: 0;
}
</style>
