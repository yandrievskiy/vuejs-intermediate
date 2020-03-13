export default {
  async loadPosts({ commit }) {
    await fetch('http://localhost:5000/vuejs-c6236/us-central1/api/posts')
      .then((response) => response.json())
      .then((payload) => {
        commit('setPosts', payload);
      });
  },
};
