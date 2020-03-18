<template>
  <div class="post-card">
    <h1> {{ post.title }} </h1>
    <p> {{ post.body }} </p>
    <button @click="redirectToDetails">Read more</button>
  </div>
</template>

<script>

export default {
  name: 'PostCard',
  props: ['post'],
  methods: {
    redirectToDetails() {
      this.$router.push({
        name: 'posts.details',
        params: {
          id: this.post.id,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.post-card {
  border: 1px solid black;
  padding: 24px;
}
</style>
