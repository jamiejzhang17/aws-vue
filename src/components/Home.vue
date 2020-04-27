<template>
  <div id="Home">
    <router-view></router-view>
    <Animation id="animation" />
    <p>
      Hi there, my name is Jamie Zhang and I am a junior computer engineering student at the University of Notre Dame.
    </p>
    <p>
      Check out some of the work I have done!
    </p>
    <Menu id="menu" />
    <v-divider></v-divider>
  </div>
</template>

<script>
import Animation from "./Animation.vue";
import Menu from "./Menu.vue";

export default {
  name: 'Home',
  components: {
    Animation,
    Menu,
  }
}

</script>

<style>
p {
  font-weight: 200;
  margin: 0.4em 0;
  color: #222;
  font-size: 1em;
}
</style>
