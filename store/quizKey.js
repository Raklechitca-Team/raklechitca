const state = () => ({
  quizKey: [
    'name',
    'cancerStory',
    'pleasureActivities',
    'commonActivities',
    'hobbies',
    'habits',
    'regularActivities',
    'aloneActivities',
    'calmDownActivities',
    'events',
    'weekends',
    'phone',
    'email',
  ],
});

const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

const actions = {};

const getters = {
  quizKey: s => s.quizKey,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
