<template>
  <div id="Menu">
    <v-container fluid>
      <v-row>
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
      </v-row>
    </v-container>          
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style>
a, span.v-btn__content {
  text-decoration: underline;
  font-family: 'Raleway', sans-serif;
  color: #220;
  font-weight: normal;
}
</style>
