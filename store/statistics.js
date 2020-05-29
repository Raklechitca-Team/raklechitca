const state = () => ({
  statistics: [],
});

const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

const actions = {
  async fetchStatistics({ commit }) {
    const statistics = await this.$axios.$get(
      process.env.baseUrl + '/statistics'
    );
    commit('setState', {
      name: 'statistics',
      value: statistics,
    });
  },
};

const getters = {
  statistics: s => s.statistics,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
