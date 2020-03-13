import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import modules from '@/store/modules';

Vue.use(Vuex);

const store = {
  modules,
};

export default new Vuex.Store(store);
