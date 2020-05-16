const state = () => ({
  instaImage: [
    {
      id: 1,
      name: 'Татьяна Полетаева',
      text:
        'Я всегда стремлюсь получать новые знания, и это не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild6532-6663-4137-a630-353162653263/IMG-20200414-WA0010.jpg',
    },
    {
      id: 2,
      name: 'Марина Казнина',
      text:
        'Моя любовь к пилону и сложным трюкам не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild6663-3963-4232-b733-373664333231/WhatsApp_Image_2020-.jpeg',
    },
    {
      id: 3,
      name: 'Анастасия Жохова',
      text:
        'Я всегда буду ходить на концерты любимых исполнителей, и это не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild3564-6165-4264-b432-313661386234/image-31-03-20-01-12.jpeg',
    },
    {
      id: 4,
      name: 'Владимир Тен',
      text: 'Моя любовь к чтению книг с конца не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
    },
    {
      id: 5,
      name: 'Тамила',
      text:
        'Я никогда не перестану шутить, и это не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild3239-6631-4836-a634-363933353261/WhatsApp_Image_2020-.jpeg',
    },
    {
      id: 6,
      name: 'Наталья Карика',
      text: 'Моя любовь к жажде деятельности не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild6439-3131-4637-b163-323366393135/CqAusB2YT2E.jpg',
    },
    {
      id: 7,
      name: 'Мария Кочеткова',
      text:
        'Моя страсть к кислым мармеладным червячкам не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild3630-6132-4661-b362-656435346530/Es9z9PUrsjI.jpg',
    },
    {
      id: 8,
      name: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild6166-3733-4364-b838-393832636136/WhatsApp_Image_2019-.jpeg',
    },
  ],
  currentStory: {},
});

const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

const actions = {
  // примеры запросов
  // fetchLessons(state) {
  //   return axios.get('https://api-test.pa7lux.ru/streams').then(response => {
  //     return state.commit('setState', {
  //       name: 'stories',
  //       value: response.data,
  //     });
  //   });
  // },
  // fetchLessonWithId(state, payload) {
  //   return axios
  //     .get(`https://api-test.pa7lux.ru/streams/${payload.id}`)
  //     .then(response => {
  //       return state.commit('setState', {
  //         name: 'currentStory',
  //         value: response.data,
  //       });
  //     });
  // },
};

const getters = {
  instaImage: i => i.instaImage,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
