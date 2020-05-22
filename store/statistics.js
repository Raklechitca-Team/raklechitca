import axios from 'axios';
const state = () => ({
  statistics: [],
});

const mutations = {
  setState(state, { id, value }) {
    return (state[id] = value);
  },
};

const actions = {
  fetchStatistics(state) {
    return axios.get('/statistics').then(response => {
      console.log(response);
      return state.commit('setState', {
        id: response.id,
        summary: response.summary,
        source: response.source,
        description: response.description,
        oldValue: response.oldValue,
        currentValue: response.currentValue,
        maxValue: response.maxValue,
      });
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
