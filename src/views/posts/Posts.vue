<template>
  <div class="posts-list">
    <div v-if="posts.length" class="posts-list__wrapper">
      <post-card v-for="post in posts" :post="post" :key="post.id"></post-card>
      <posts-pagination @perPageChange="handleSelect" :meta="meta"></posts-pagination>
    </div>
    <posts-placeholder v-else></posts-placeholder>
  </div>

</template>

<script>

import PostCard from '@/views/posts/partials/PostCard.vue';
import PostsPlaceholder from '@/views/posts/partials/PostsPlaceholder.vue';
import PostsPagination from '@/views/posts/partials/PostsPagination.vue';

export default {
  name: 'Posts',
  components: {
    PostCard,
    PostsPlaceholder,
    PostsPagination,
  },
  data() {
    return {
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    this.loadPosts();
    this.loading = false;
  },
  methods: {
    async loadPosts() {
      const params = this.$route.query;
      await this.$store.dispatch('posts/loadPosts', params);
    },

    handleSelect(data) {
      this.$router.push({
        name: 'posts.index',
        query: { currentPage: 1, perPage: data },
      });
    },
  },
  watch: {
    $route() {
      this.loadPosts();
    },
  },
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts'];
    },
    meta() {
      return this.$store.getters['posts/getPostsMeta'];
    },
  },
};
</script>

<style lang="scss">
.posts-list {
  .post-card {
    flex: 1 0 calc(33.3% - 30px);
    max-width: calc(33.3% - 30px);
    margin: 15px;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 104px);
  }

  &__placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 104px);
  }
}
</style>
