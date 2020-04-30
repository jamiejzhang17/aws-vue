<template>
  <div id="Home">
    <router-view></router-view>
    <p class="line-1 anim-typewriter">
      Jamie Zhang
    </p>    
    <p>
      Hi there, my name is Jamie Zhang and I am a junior computer engineering student at the University of Notre Dame.
    </p>
    <p>
      Check out some of the work I have done!
    </p>
    <v-col cols="12">
      <v-btn text>
        <router-link to='/'>
          Work
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link to='/research'>
          Research
        </router-link>
      </v-btn>
      <v-btn text href="https://github.com/jamiejzhang17">
        Programming
      </v-btn>
    </v-col>    
    <v-divider></v-divider>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}

</script>

<style>
a, span.v-btn__content {
  text-decoration: underline;
  font-family: 'Raleway', sans-serif;
  color: #220;
  font-weight: normal;
}

p {
  font-weight: 200;
  margin: 0.4em 0;
  color: #222;
  font-size: 1em;
}

/* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

/* Global */
html{
  min-height: 100%;
  overflow: hidden;
}
body{
  height: calc(100vh - 8em);
  padding: 4em;
  color: rgba(255,255,255,.75);
  font-family: 'Anonymous Pro', monospace;  
  /* background-color: rgb(25,25,25);   */
}
.line-1{
  max-width: 166px;
  position: relative;
  top: 50%;  
  width: 24em;
  margin: 0 auto;
  border-right: 2px solid black;
  font-size: 180%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);    
}

/* Animation */
.anim-typewriter{
  animation: typewriter 6s steps(44) 1s 1 normal both,
             blinkTextCursor 600ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: grey;}
  to{border-right-color: transparent;}
}

</style>
