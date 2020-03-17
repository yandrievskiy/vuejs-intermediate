<template>
  <div class="filter">
    <label for="userId">
      Filter by user id:
      <select name="userId" @input="handleInput">
        <option v-for="author in authors" :value="author" :key="author">{{ author }}</option>
      </select>
    </label>
  </div>
</template>

<script>

export default {
  name: 'PostsFilter',
  props: ['filters', 'authorsList'],
  data() {
    return {
      authors: [],
    };
  },
  created() {
    this.authors = this.authorsList;
  },
  methods: {
    handleInput(data) {
      if (data.srcElement.value === 'All') {
        this.$emit('filterChange', null);
        return;
      }
      this.$emit('filterChange', data.srcElement.value);
    },
    setAuthors() {
      this.authors = this.authorsList;
    },
  },
  watch: {
    authorsList() {
      this.setAuthors();
    },
  },
};
</script>
<style lang="scss" scoped>
.filter {
  flex: 1 0 100%;
  padding: 15px;
  display: flex;
  justify-content: flex-end;
}
</style>
