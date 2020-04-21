<template>
  <div id="app">
    <vue-headful title="Jamie Zhang"/>
    <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <Animation id="main"/>
    <Home id="home"/>
    <Menu id="menu"/>
  </div>
</template>

<script>
import vueHeadful from 'vue-headful';
import Animation from './components/Animation.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    vueHeadful,
    Animation,
    Home,
    Menu
  }
}
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

#main {
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
