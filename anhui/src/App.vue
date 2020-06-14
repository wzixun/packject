<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-link to="/Excel">Excel</router-link>
    <span v-text="$route.query.title || $route.meta.title"></span>
    
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
