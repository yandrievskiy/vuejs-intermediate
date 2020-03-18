export default {
  setPosts(state, payload) {
    state.data = payload.data;
    state.meta = payload.meta;
    state.authors = payload.authors;
  },
  setCurrentPust(state, payload) {
    state.currentPost = payload;
  },
};
