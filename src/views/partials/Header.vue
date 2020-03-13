<template>
  <header class="header">
    <router-link :to="{name: 'home.index'}" class="logo">
      <img src="/images/logo.png" alt="">
    </router-link>
    <nav class="nav">
      <router-link :to="{name: 'posts.index'}" class="nav__link">Posts</router-link>
      <router-link :to="{name: 'auth.index'}" class="nav__link">Registration</router-link>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
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

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
