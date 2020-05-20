const state = () => ({
  popupShown: false,
  popupShareShown: false,
});

const mutations = {
  togglePopup(state) {
    return (state.popupShown = !state.popupShown);
  },
  toggleSharePopup(state) {
    return (state.popupShareShown = !state.popupShareShown);
  },
};

const actions = {};

const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },
  getPopupShareShown(state) {
    return state.popupShareShown;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
