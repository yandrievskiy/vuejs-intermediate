<template>
  <div class="pagination">
    <div class="pagination__wrapper">
      <router-link
      :class="['pagination__link', { selected: page === currentPage }]"
      v-for="page in pages"
      :to="{name: 'posts.index', query: {currentPage: page, perPage: meta.perPage}}"
      :key="page">
      {{ page }}
      </router-link>
    </div>
    <label for="perPage">
      Per Page:
      <select name="perPage" @input="handleInput">
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
    </label>
  </div>
</template>

<script>

export default {
  name: 'PostsPagination',
  props: ['meta'],
  data() {
    return {
      currentPage: this.meta.currentPage,
      total: this.meta.totalPages,
    };
  },
  methods: {
    handleInput(data) {
      this.$emit('perPageChange', data.srcElement.value);
    },
    updateMeta() {
      this.currentPage = this.meta.currentPage;
      this.total = this.meta.totalPages;
    },
  },
  watch: {
    meta() {
      this.updateMeta();
    },
  },
  computed: {
    pages() {
      const pages = [];
      for (let i = 1; i <= this.total; i += 1) {
        pages.push(i);
      }
      return pages;
    },
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  flex: 1 0 100%;
  padding: 15px;
  margin-top: auto;
  align-self: flex-end;
  justify-content: space-between;

  &__wrapper {
    display: flex;
  }

  &__link {
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-width: 1px 0 1px 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;

    &:last-of-type {
      border-width: 1px;
    }

    &.selected {
      background-color: #000;
      color: #fff;
    }
  }
}
</style>
