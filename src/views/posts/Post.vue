<template>
  <div v-if="post" class="post">
    <h1> {{ post.title }} </h1>
    <p> {{ post.body }} </p>
  </div>
</template>

<script>

export default {
  name: 'Post',
  async created() {
    if (!this.userLoggedIn) {
      this.$router.push({
        name: 'auth.index',
      });
    }

    await this.$store.dispatch('posts/loadSinglePost', this.$route.params.id);
  },
  computed: {
    post() {
      return this.$store.getters['posts/getCurrentPost'];
    },
    userLoggedIn() {
      return this.$store.state.auth.user && Object.keys(this.$store.state.auth.user).length;
    },
  },
};
</script>

<style lang="scss">
</style>
