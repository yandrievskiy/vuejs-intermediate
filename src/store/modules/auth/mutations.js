export default {
  setUser(state, payload) {
    state.user = payload;
  },
  setErrors(state, payload) {
    state.errors = payload;
  },
  clearErrors(state) {
    state.errors = {};
  },
};
