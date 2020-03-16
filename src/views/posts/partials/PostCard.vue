<template>
  <div class="post-card">
    <h1> {{ post.title }} </h1>
    <p> {{ post.body }} </p>
    <button>Read more</button>
  </div>
</template>

<script>

export default {
  name: 'PostCard',
  props: ['post'],
};
</script>

<style lang="scss">
.post-card {
  border: 1px solid black;
  padding: 24px;
}
</style>
