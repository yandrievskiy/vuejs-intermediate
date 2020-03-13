import state from '@/store/modules/posts/state';
import getters from '@/store/modules/posts/getters';
import actions from '@/store/modules/posts/actions';
import mutations from '@/store/modules/posts/mutations';

const posts = {
  state,
  actions,
  mutations,
  getters,
};

export default posts;
