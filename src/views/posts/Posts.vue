<template>
  <div class="posts-list">
    <div v-if="posts.length" class="posts-list__wrapper">
      <post-card v-for="post in posts" :post="post" :key="post.id"></post-card>
    </div>
    <posts-placeholder v-else></posts-placeholder>
  </div>

</template>

<script>

import PostCard from '@/views/posts/partials/PostCard.vue';
import PostsPlaceholder from '@/views/posts/partials/PostsPlaceholder.vue';

export default {
  name: 'Posts',
  components: {
    PostCard,
    PostsPlaceholder,
  },
  data() {
    return {
      posts: [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
          userId: 1,
          id: 2,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
          userId: 1,
          id: 3,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
          userId: 1,
          id: 4,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
          userId: 1,
          id: 5,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
          userId: 1,
          id: 6,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
      ],
    };
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
  }

  &__placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 104px);
  }
}
</style>
