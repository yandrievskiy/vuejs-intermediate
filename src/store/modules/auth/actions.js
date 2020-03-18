export default {
  async signup({ commit }, data) {
    const url = new URL('http://localhost:5000/vuejs-c6236/us-central1/api/auth');
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.success) {
          commit('setErrors', json.errors);
          commit('setUser', {});
          return;
        }

        commit('setUser', json.user);
        commit('clearErrors');
      });
  },
  logout({ commit }) {
    commit('setUser', {});
  },
};
