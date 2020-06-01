const state = () => ({
  blocks: [],
});

const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

const actions = {
  async fetchBlocks({ commit }) {
    const blocks = await this.$axios.$get(process.env.baseUrl + '/blocks');
    commit('setState', {
      name: 'blocks',
      value: blocks,
    });
  },
};

const getters = {
  blocks: s => s.blocks,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
