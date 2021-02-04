import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import GamesList from './containers/GamesList';
import GameDetails from './containers/GameDetails';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: GamesList },
    // There is no getGameById or something like this .. so used vuex for this
    {
      path: '/details',
      component: GameDetails,
    },
  ],
});
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
