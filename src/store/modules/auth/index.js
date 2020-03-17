import state from '@/store/modules/auth/state';
import getters from '@/store/modules/auth/getters';
import actions from '@/store/modules/auth/actions';
import mutations from '@/store/modules/auth/mutations';

const auth = {
  state,
  actions,
  mutations,
  getters,
};

export default auth;
