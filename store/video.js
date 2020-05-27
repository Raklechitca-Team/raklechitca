const state = () => ({
  video: [],
});

const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

const actions = {
  async fetchVideo({ commit }) {
    const video = await this.$axios.$get(process.env.baseUrl + '/videos');
    commit('setState', {
      name: 'video',
      value: video,
    });
  },
};

const getters = {
  video: s => s.video,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
