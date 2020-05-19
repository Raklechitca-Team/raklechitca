<template>
  <form class="quiz">
    <h3 v-if="this.$store.state.quiz.currentQuestion <= 12" class="quiz__title">
      {{ currentQuestion.title }}
    </h3>
    <h3
      v-if="this.$store.state.quiz.currentQuestion === 13"
      class="quiz__title quiz__title_last"
    >
      {{ currentQuestion.title }}
    </h3>
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
        v-if="this.$store.state.quiz.currentQuestion <= 12"
        :disabled="this.$store.state.quiz.currentQuestion === 1"
        class="quiz__button-back"
        @click="prevQuestion"
        >Назад</quiz-button
      >
      <quiz-button
        v-if="this.$store.state.quiz.currentQuestion <= 11"
        class="quiz__button-next"
        @click="nextQuestion"
        >Далее</quiz-button
      >
      <quiz-button
        v-if="this.$store.state.quiz.currentQuestion === 12"
        class="quiz__button-send"
        @click="nextQuestion"
        >Отправить</quiz-button
      >
      <p
        v-if="this.$store.state.quiz.currentQuestion === 12"
        class="quiz__paragraph"
      >
        Нажимая на кнопку «отправить», вы даете согласие на
        <a href="" target="_blank" class="quiz__link"
          >обработку персональных данных</a
        >
      </p>
    </div>
    <quiz-button
      v-if="this.$store.state.quiz.currentQuestion === 13"
      class="quiz__button-close"
      @click="$emit('closeClick')"
      >Закрыть</quiz-button
    >
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
  justify-content: flex-start;
  position: absolute;
  bottom: 40px;
  margin: 0;
}

.quiz__button-back {
  font-size: 16px;
  line-height: 19px;
  margin: 0;
  color: #c0c0c0;
  padding: 16px 30px;
  background: transparent;
}

.quiz__button-next {
  font-size: 16px;
  line-height: 19px;
  padding: 16px 90px;
}

.quiz__button-send {
  font-size: 16px;
  line-height: 19px;
  padding: 16px 74px;
}

.quiz__button-close {
  font-size: 16px;
  line-height: 19px;
  align-self: center;
  bottom: 40px;
  margin: 0;
  position: absolute;
  padding: 16px 80px;
}

.quiz__paragraph {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666;
  padding: 9px 0 9px 30px;
  max-width: 378px;
  justify-content: center;
  align-items: center;
}

.quiz__link {
  text-decoration: none;
  border-bottom: 1px solid #666;
  color: #666;
}

.quiz__link:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}

@media screen and (max-width: 1280px) {
  .quiz {
    width: 720px;
    height: 440px;
  }

  .quiz__title {
    font-size: 28px;
    line-height: 32px;
  }

  .quiz__question {
    font-size: 16px;
    line-height: 22px;
  }

  .quiz__input {
    max-width: 720px;
    font-size: 16px;
    line-height: 22px;
    bottom: 258px;
  }

  .quiz__button-back {
    padding: 14px 30px;
  }

  .quiz__button-next {
    padding: 14px 67px;
  }

  .quiz__button-send {
    padding: 14px 51px;
  }

  .quiz__button-close {
    padding: 14px 60px;
  }

  .quiz__paragraph {
    font-size: 12px;
    line-height: 15px;
    padding: 7px 0 7px 30px;
    max-width: 340px;
  }
}

@media screen and (max-width: 1024px) {
  .quiz__title {
    font-size: 26px;
    line-height: 30px;
  }

  .quiz__question {
    font-size: 15px;
  }

  .quiz__input {
    font-size: 15px;
    bottom: 260px;
  }

  .quiz__button-back {
    font-size: 15px;
    line-height: 18px;
    padding: 13px 30px;
  }

  .quiz__button-next {
    font-size: 15px;
    line-height: 18px;
    padding: 13px 67px;
  }

  .quiz__button-send {
    font-size: 15px;
    line-height: 18px;
    padding: 13px 52px;
  }

  .quiz__button-close {
    font-size: 15px;
    line-height: 18px;
    padding: 13px 60px;
  }

  .quiz__paragraph {
    padding: 6px 0 6px 30px;
    max-width: 378px;
  }
}

@media screen and (max-width: 768px) {
  .quiz {
    width: 500px;
  }

  .quiz__question {
    line-height: 19px;
  }

  .quiz__input {
    line-height: 19px;
    bottom: 270px;
    max-width: 500px;
  }

  .quiz__paragraph {
    padding: 0 0 0 20px;
    max-width: 210px;
  }
}

@media screen and (max-width: 320px) {
  .quiz {
    width: 260px;
  }

  .quiz__title {
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }

  .quiz__title_last {
    text-align: center;
    padding: 60px 0 0;
  }

  .quiz__question {
    font-size: 13px;
    line-height: 16px;
    margin: 30px 0 0;
  }

  .quiz__input {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
    bottom: 250px;
    padding: 0 0 2px;
  }

  .quiz__buttons {
    bottom: 15px;
    flex-wrap: wrap;
  }

  .quiz__button-back {
    font-size: 13px;
    line-height: 16px;
    padding: 12px 15px 12px 0;
  }

  .quiz__button-next {
    font-size: 13px;
    line-height: 16px;
    padding: 12px 84px;
  }

  .quiz__button-send {
    font-size: 13px;
    line-height: 16px;
    padding: 13px 71px;
  }

  .quiz__button-close {
    font-size: 13px;
    line-height: 16px;
    padding: 13px 78px;
    bottom: 15px;
  }

  .quiz__paragraph {
    padding: 15px 0 0;
    max-width: 260px;
  }
}
</style>
