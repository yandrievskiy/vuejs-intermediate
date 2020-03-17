export default {
  async auth({ commit }) {
    const url = new URL('http://localhost:5000/vuejs-c6236/us-central1/api/auth');
    await fetch(url)
      .then((response) => response.json())
      .then((payload) => {
        commit('setPosts', payload);
      });
  },
};
