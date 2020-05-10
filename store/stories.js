const state = () => ({
  stories: [
    {
      name: 'Егор Шкиря',
      link: 'https://ca.slack-edge.com/TPV9DP0N4-UQPV7A3EY-38f2d8db61c9-512',
      contacts: 'TG: @egorshkirya',
    },
    {
      name: 'Полина Задорожная',
      link: 'https://ca.slack-edge.com/TPV9DP0N4-UQTQJBPGV-9bcfaf845798-512',
      contacts: 'TG: @LekaRen',
    },
  ],
});

const mutations = {
  setStories(state, stories) {
    state.stories = stories;
  },
};

const actions = {
  async fetch({ commit }) {
    const stories = await this.$axios.$get(
      'https://jsonplaceholder.typicode.com/users'
    );
    commit('setStories', stories);
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
