const state = () => ({
  quizDate: {},
});

const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

const actions = {};

const getters = {
  quizDate: s => s.quizDate,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
