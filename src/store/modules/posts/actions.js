import API_URL from '@/api';

export default {
  async loadPosts({ commit }, params) {
    const url = new URL(`${API_URL}/posts`);
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    await fetch(url)
      .then((response) => response.json())
      .then((payload) => {
        commit('setPosts', payload);
      });
  },
  async loadSinglePost({ commit }, id) {
    const url = new URL(`${API_URL}/post/${id}`);
    await fetch(url)
      .then((response) => response.json())
      .then((payload) => {
        commit('setCurrentPust', payload);
      });
  },
  async loadPostsForUser({ commit }, params) {
    const url = new URL(`${API_URL}/posts/${params.userId}`);
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    await fetch(url)
      .then((response) => response.json())
      .then((payload) => {
        commit('setPosts', payload);
      });
  },
};
