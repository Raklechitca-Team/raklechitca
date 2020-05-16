const state = () => ({
  stories: [
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
    {
      id: 9,
      name: 'Оксана Вегнер',
      text:
        'Я хочу брать от жизни тотальные впечатления, и это не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild3836-3866-4731-a132-383134316461/__.jpeg',
    },
    {
      id: 10,
      name: 'Оксана Андриенко',
      text: 'Моя любовь к жизни не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild6439-3162-4362-b338-626665613834/IMG_9745_1.jpg',
    },
    {
      id: 11,
      name: 'Ирина Козлова',
      text:
        'Мое обостренное чувство справедливости не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild3931-3036-4164-a531-393138613930/WhatsApp_Image_2020-.jpeg',
    },
    {
      id: 12,
      name: 'Варя Цымбал',
      text: 'Моя нелюбовь к опозданиям не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild3939-3030-4738-b938-623534666534/WhatsApp_Image_2020-.jpeg',
    },
    {
      id: 13,
      name: 'Юлия Мышкина',
      text:
        'Моя любовь к воплощению своих желаний не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild3764-3630-4936-a464-396261633965/IMG_0569.JPG',
    },
    {
      id: 14,
      name: 'Жаннета Ман',
      text:
        'Я продолжаю смеяться над шутками своего внука, и это не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild6461-3038-4633-b866-336466353330/Man.jpg',
    },
    {
      id: 15,
      name: 'Анастасия Бреева',
      text:
        'Я не смогла победить свой невероятный перфекционизм, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild6239-3132-4831-b338-616234376664/noroot.png',
    },
    {
      id: 16,
      name: 'Наталья Мерзликина',
      text: 'Я не смогла победить свое желание творить, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild3762-3934-4230-b630-653535666566/noroot.png',
    },
    {
      id: 17,
      name: 'Ирина Самм',
      text:
        'Моя смелость говорить открыто о своем диагнозе не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild3561-6536-4531-b063-346334636439/noroot.png',
    },
    {
      id: 18,
      name: 'Юлия Черная',
      text: 'Мой активный образ жизни не лечится, в отличие от рака',
      url:
        'https://static.tildacdn.com/tild3932-3062-4465-a463-376237393635/WhatsApp_Image_2020-.jpeg',
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
  stories: s => s.stories,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
