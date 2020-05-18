<template>
  <form class="quiz">
    <h3 class="quiz__title">{{ currentQuestion.title }}</h3>
    <p class="quiz__question">
      <span class="quiz__question-main">{{ currentQuestion.question }}</span>
      <span
        v-if="currentQuestion.questionAdditional"
        class="quiz__question-additional"
        >{{ currentQuestion.questionAdditional }}</span
      >
    </p>
    <quiz-input
      v-if="this.$store.state.quiz.currentQuestion !== 13"
      className="quiz__input"
      placeholder="Напишите тут"
      :bottomBordered="true"
      v-model="answer"
    ></quiz-input>
    <div class="quiz__buttons">
      <quiz-button
        :disabled="this.$store.state.quiz.currentQuestion === 1"
        class="quiz__button_back"
        @click="prevQuestion"
        >Назад</quiz-button
      >
      <quiz-button
        :disabled="this.$store.state.quiz.currentQuestion === 13"
        class="quiz__button_next"
        @click="nextQuestion"
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
  data() {
    return {
      answer: '',
    };
  },
  computed: {
    currentQuestion() {
      const { quiz } = this.$store.state;
      const { currentQuestion, questions } = quiz;
      return questions[currentQuestion];
    },
    prevButtonDisabled() {
      const { quiz } = this.$store.state;
      const { currentQuestion } = quiz;
      return currentQuestion === 1;
    },
    initialAnswer() {
      const { quiz } = this.$store.state;
      const { currentQuestion, answers } = quiz;
      return answers[currentQuestion];
    },
  },
  methods: {
    async nextQuestion() {
      await this.$store.dispatch('quiz/NEXT_QUESTION', {
        answer: this.answer,
      });
      this.answer = this.initialAnswer || '';
    },
    async prevQuestion() {
      await this.$store.dispatch('quiz/PREV_QUESTION');
      this.answer = this.initialAnswer || '';
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
  color: #000;
}

.quiz__title_last {
  margin: 40px auto;
  align-self: center;
  justify-content: center;
}

.quiz__question {
  display: inline;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin: 40px 0 0;
}

.quiz__question-main {
  color: #000;
}

.quiz__question-additional {
  color: #666;
  font-weight: normal;
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
  color: #666;
  border-bottom: 1px solid #e7e7e7;
}

.quiz__input:focus {
  outline: none;
}

.quiz__buttons {
  display: flex;
  align-self: flex-start;
  justify-self: flex-end;
  position: absolute;
  bottom: 40px;
  margin: 0;
}

.quiz /deep/ .quiz__button_back {
  margin: 0;
  color: #c0c0c0;
  padding: 18px 30px;
  background: transparent;
}
</style>
