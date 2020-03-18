<template>
  <header class="header">
    <router-link :to="{name: 'home.index'}" class="logo">
      <img src="/images/logo.png" alt="">
    </router-link>
    <nav class="nav">
      <router-link :to="{name: 'posts.index'}" class="nav__link">
        Posts
      </router-link>
      <router-link v-if="!userLoggedIn" :to="{name: 'auth.index'}" class="nav__link">
        Registration
      </router-link>
      <button v-else class="nav__link" @click="logout">
        Logout
      </button>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    },
  },
  computed: {
    userLoggedIn() {
      return this.$store.state.auth.user && !!Object.keys(this.$store.state.auth.user).length;
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

.logo {
  width: 70px;

  img {
    max-width: 100%;
  }
}

.nav {

  &__link {
    margin-right: 10px;
    background: transparent;
    border: none;
    color: #000;
    font-size: 16px;
    text-decoration: none;
    font-family: 'Arial';

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
