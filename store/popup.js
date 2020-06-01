const state = () => ({
  popupShown: false,
  popupShareShown: false,
  popupContact: false,
});

const mutations = {
  togglePopup(state) {
    return (state.popupShown = !state.popupShown);
  },
  toggleSharePopup(state) {
    return (state.popupShareShown = !state.popupShareShown);
  },
  togglePopupContact(state) {
    return (state.popupContact = !state.popupContact);
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
  getPopupContact(state) {
    return state.popupContact;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
