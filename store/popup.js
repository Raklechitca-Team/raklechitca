const state = () => ({
  popupShown: false,
});

const mutations = {
  togglePopup(state) {
    return (state.popupShown = !state.popupShown);
  },
};

const actions = {};

const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
