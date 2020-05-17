export const state = () => ({
  popupShown: false,
});

export const mutations = {
  togglePopup(state) {
    return (state.popupShown = !state.popupShown);
  },
};

const actions = {};

export const getters = {
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
