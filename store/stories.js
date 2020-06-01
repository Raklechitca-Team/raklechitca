const state = () => ({
  stories: [],
});

const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

const actions = {
  async fetchStories({ commit }) {
    const stories = await this.$axios.$get(process.env.baseUrl + '/stories');
    commit('setState', {
      name: 'stories',
      value: stories,
    });
  },
};

const getters = {
  stories: s => s.stories,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
