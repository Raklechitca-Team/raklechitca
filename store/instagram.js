const state = () => ({
  instagram: [],
});

const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

const getPosts = data => {
  return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
    const {
      node: { display_url, accessibility_caption, shortcode },
    } = post;
    return {
      display_url,
      accessibility_caption,
      url: `https://www.instagram.com/p/${shortcode}`,
    };
  });
};

const actions = {
  async fetchInstagram({ commit }) {
    const data = await this.$axios.$get(
      'https://www.instagram.com/raklechitsa/?__a=1'
    );
    const formatData = getPosts(data);
    commit('setState', {
      name: 'instagram',
      value: formatData,
    });
  },
};

const getters = {
  instagram: s => s.instagram,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
