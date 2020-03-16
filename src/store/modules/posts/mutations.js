export default {
  setPosts(state, payload) {
    state.data = payload.data;
    state.meta = payload.meta;
  },

  // setMeta(state, payload) {
  //   state.meta = {
  //     ...state.meta,
  //     ...payload,
  //   };
  // },
};
