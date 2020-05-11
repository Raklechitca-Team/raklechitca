<template>
  <form class="quiz">
    <h3 class="quiz__title">{{ data[currentQuestion].title }}</h3>
    <p class="quiz__question">{{ data[currentQuestion].question }}</p>
    <quiz-input
      class="quiz__input"
      placeholder="Напишите тут"
      :bottomBordered="true"
    ></quiz-input>
    <div class="quiz__buttons">
      <quiz-button class="quiz__button_back" @click="prevQuestion"
        >Назад</quiz-button
      >
      <quiz-button class="quiz__button_next" @click="nextQuestion"
        >Далее</quiz-button
      >
    </div>
  </form>
</template>

<script>
import QuizInput from '@/components/ui/QuizInput';
import QuizButton from '@/components/ui/QuizButton';
export default {
  name: 'Quiz',
  components: {
    'quiz-input': QuizInput,
    'quiz-button': QuizButton,
  },
  props: {
    title: {
      required: true,
      default: 'Шаг 0 из 12',
      type: String,
    },
    question: {
      required: true,
      type: String,
    },
    nextQuestion: Function,
    prevQuestion: Function,
  },
  data() {
    return {
      currentQuestion: 1,
      data: {
        1: {
          title: 'Шаг 1 из 12',
          question: 'Как вас зовут?',
        },
        2: {
          title: 'Шаг 2 из 12',
          question:
            'Было ли у вас онкологическое заболевание? Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
        },
        3: {
          title: 'Шаг 3 из 12',
          question:
            'Какие занятия приносят Вам наибольшее удовольствие? Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
        },
      },
    };
  },
  methods: {
    nextQuestion() {
      this.currentQuestion = this.currentQuestion + 1;
    },
    prevQuestion() {
      if (this.currentQuestion == 1) {
        return;
      }
      this.currentQuestion = this.currentQuestion - 1;
    },
  },
};
</script>

<style scoped>
.quiz {
  width: 840px;
  height: 520px;
  display: flex;
  flex-direction: column;
}

.quiz__title {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  display: flex;
  color: #000000;
}

.quiz__question {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  color: #000000;
  margin: 40px 0 0;
}

.quiz__input {
  width: 100%;
  max-width: 840px;
  margin: 0;
  padding: 0 0 10px;
  position: absolute;
  border: 0;
  bottom: 292px;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666666;
  border-bottom: 1px solid #e7e7e7;
}

.quiz__input:focus {
  outline: none !important;
}

.quiz__buttons {
  display: flex;
  align-self: flex-start;
  justify-self: flex-end;
  position: absolute;
  bottom: 40px;
  margin: 0;
  width: 334px;
}

.quiz /deep/ .quiz__button_back {
  margin: 16px 30px;
  color: #c0c0c0;
  padding: 0;
}

.quiz /deep/ .quiz__button_back:focus {
  outline: none !important;
}

.quiz /deep/ .quiz__button_next {
  width: 226px;
  height: 52px;
  background-color: #613a93;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quiz /deep/ .quiz__button_next:focus {
  outline: none !important;
}
</style>
