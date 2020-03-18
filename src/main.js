import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from '@/routes';
import store from '@/store';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import App from './App.vue';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
