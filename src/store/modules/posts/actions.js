export default {
  async loadPosts({ commit }, params) {
    const url = new URL('http://localhost:5000/vuejs-c6236/us-central1/api/posts');
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    await fetch(url)
      .then((response) => response.json())
      .then((payload) => {
        commit('setPosts', payload);
      });
  },
  async loadSinglePost({ commit }, id) {
    const url = new URL(`http://localhost:5000/vuejs-c6236/us-central1/api/post/${id}`);
    await fetch(url)
      .then((response) => response.json())
      .then((payload) => {
        commit('setCurrentPust', payload);
      });
  },
  async loadPostsForUser({ commit }, params) {
    const url = new URL(`http://localhost:5000/vuejs-c6236/us-central1/api/posts/${params.userId}`);
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    await fetch(url)
      .then((response) => response.json())
      .then((payload) => {
        commit('setPosts', payload);
      });
  },
};
