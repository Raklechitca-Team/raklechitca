const state = () => ({
  currentQuestion: 1,
  answers: {},
  keysAnswer: [
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
  questions: QUESTIONS,
});

const mutations = {
  saveAnswer(state, { answer, currentQuestion }) {
    state.answers[currentQuestion] = answer;
  },
  setCurrentQuestion(state, { currentQuestion }) {
    state.currentQuestion = currentQuestion;
  },
  setQuestions(state, questions) {
    state.questions = questions;
  },
};

const actions = {
  GET_QUESTIONS({ commit }) {
    commit('setQuestions', QUESTIONS);
  },
  SAVE_ANSWER({ commit }, { answer, currentQuestion }) {
    commit('saveAnswer', { answer, currentQuestion });
  },
  SET_QUESTION({ commit }, { currentQuestion }) {
    commit('setCurrentQuestion', { currentQuestion });
  },

  async NEXT_QUESTION({ commit, state }, { answer }) {
    const { currentQuestion } = state;
    await commit('saveAnswer', { answer, currentQuestion });
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion + 1,
    });
  },
  async PREV_QUESTION({ commit, state }) {
    const { currentQuestion } = state;
    if (currentQuestion === 1) {
      return;
    }
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion - 1,
    });
  },
};

const QUESTIONS = {
  1: {
    title: 'Шаг 1 из 12',
    question: 'Как вас зовут?',
  },
  2: {
    title: 'Шаг 2 из 12',
    question: 'Было ли у вас онкологическое заболевание?',
    questionAdditional:
      'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
  },
  3: {
    title: 'Шаг 3 из 12',
    question: 'Какие занятия приносят Вам наибольшее удовольствие?',
    questionAdditional:
      'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
  },
  4: {
    title: 'Шаг 4 из 12',
    question: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
  },
  5: {
    title: 'Шаг 5 из 12',
    question: 'Какие сильные увлечения у Вас есть?',
    questionAdditional:
      'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
  },
  6: {
    title: 'Шаг 6 из 12',
    question:
      'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
  },
  7: {
    title: 'Шаг 7 из 12',
    question:
      'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
    questionAdditional: 'Кроме необходимых, таких, как чистка зубов.',
  },
  8: {
    title: 'Шаг 8 из 12',
    question:
      'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
  },
  9: {
    title: 'Шаг 9 из 12',
    question: 'Что Вас успокаивает/умиротворяет лучше всего?',
  },
  10: {
    title: 'Шаг 10 из 12',
    question:
      'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
  },
  11: {
    title: 'Шаг 11 из 12',
    question: 'Как вы обычно проводите выходные?',
  },
  12: {
    title: 'Шаг 12 из 12',
    question: 'Почта или телефон для связи.',
    questionAdditional:
      'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
  },
  13: {
    title: 'Спасибо, что приняли участие!',
    question: '',
  },
};

const getters = {
  questions: s => s.questions,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
