<template>
  <div id="app">
    <vue-headful title="Jamie Zhang" />
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:200,100,400"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
      rel="stylesheet"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import vueHeadful from "vue-headful";

export default {
  name: "App",
  components: {
    vueHeadful,
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
