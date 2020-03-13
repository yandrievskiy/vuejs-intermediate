<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppHeader from '@/views/partials/Header.vue';
import AppFooter from '@/views/partials/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
