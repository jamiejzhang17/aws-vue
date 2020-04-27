import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import Research from './components/Research.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/research', component: Research },
]

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
