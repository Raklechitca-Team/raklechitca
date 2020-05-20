const state = () => ({
  video: [
    {
      src: 'https://www.youtube.com/embed/coOppM34GtI',
    },
    {
      src: 'https://www.youtube.com/embed/ZKWilQnPovg',
    },
    {
      src: 'https://www.youtube.com/embed/FFrioIZ65q0',
    },
  ],
});

const mutations = {};

const actions = {};

const getters = {
  video: s => s.video,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
