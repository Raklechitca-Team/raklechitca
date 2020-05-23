import axios from 'axios';
const state = () => ({
  statistics: [
    {
      title: '1 из 3',
      source: 'Левада-Центр 2018',
      description:
        'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
      value: 1,
      maxValue: 3,
    },
    {
      title: '3 700 000',
      source: '2,6% Россиян имеют онкозаболевания.',
      description: '2,6% Россиян имеют онкозаболевания.',
      value: 3,
      maxValue: 100,
    },
    {
      title: '↑28%',
      source: 'МНИОИ Герцена 2018',
      description:
        'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
      oldValue: 40,
      maxValue: 100,
      newValue: 28,
    },
    {
      title: '↓25%',
      source: 'МНИОИ Герцена 2018',
      description:
        'На 25% снизилась смертность в течение первого года после постановки диагноза.',
      oldValue: 60,
      maxValue: 100,
      newValue: 10,
    },
  ],
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
