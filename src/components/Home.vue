<template>
  <div id="Home">
    <router-view></router-view>
    <h1 class="line-1 typewriter">
      Jamie Zhang
    </h1>    
    <p>
      Hi there, my name is Jamie Zhang and I am a computer engineering student at the University of Notre Dame.
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

/* Global */
html{
  min-height: 100%;
  overflow: hidden;
}

body{
  height: calc(100vh - 8em);
  padding: 4em;
  font-family: 'Raleway', monospace;  
}

.line-1{
  max-width: 225px;
  position: relative;
  top: 50%;  
  margin: 0 auto;
  border-right: 2px solid black;
  font-size: 240%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);    
}

/* Animation */
.typewriter{
  animation: typewriter 6s steps(44) 1s 1 normal both,
             blinkTextCursor 1000ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: grey;}
  to{border-right-color: transparent;}
}

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

h1 {
  font-weight: 200;
  margin: 0.4em 0;
  font-size: 3em;
}

</style>
