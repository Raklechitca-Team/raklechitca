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
      oldValue: 40,
      maxValue: 100,
      newValue: 28,
    },
  ],
});

const getters = {
  statistics: s => s.statistics,
};

/* Адапитровать под формирования запроса для статитики*/
// const mutations = {
//     setState(state, { name, value }) {
//       return (state[name] = value);
//     },
//   };

//   const actions = {
//     примеры запросов
//     fetchLessons(state) {
//       return axios.get('https://api-test.pa7lux.ru/streams').then(response => {
//         return state.commit('setState', {
//           name: 'stories',
//           value: response.data,
//         });
//       });
//     },
//     fetchLessonWithId(state, payload) {
//       return axios
//         .get(`https://api-test.pa7lux.ru/streams/${payload.id}`)
//         .then(response => {
//           return state.commit('setState', {
//             name: 'currentStory',
//             value: response.data,
//           });
//         });
//     },
//   };

export default {
  state,
  getters,
};
