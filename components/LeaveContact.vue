<template>
  <form class="contact">
    <h1 class="contact__title">Оставьте контакт для связи</h1>
    <p class="contact__subtitle">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.
    </p>
    <label for="name" class="contact__question"
      >Как вас зовут?<input
        type="text"
        class="contact__answer"
        id="name"
        placeholder="Напишите тут"
        required
    /></label>
    <div class="contact__table">
      <label
        for="email"
        class="contact__question contact__question_margin-in-table"
        >Электронная почта<input
          type="email"
          class="contact__answer"
          id="email"
          placeholder="pochta@example.com"
          required
      /></label>
      <label for="number" class="contact__question"
        >Телефон<input
          type="tel"
          class="contact__answer"
          id="number"
          placeholder="+7 000 000 00 00"
          required
      /></label>
    </div>
    <label for="name" class="contact__question"
      >Напишите, если есть предпочтительный способ связи и удобное время<input
        type="text"
        class="contact__answer"
        id="name"
        placeholder="Телефон / почта и удобное время"
        required
    /></label>
    <div class="contact__table">
      <contact-button class="contact__button"
        ><slot>Отправить</slot></contact-button
      >
      <p class="contact__to-policy">
        Нажимая на кнопку «отправить», вы даете согласие на
        <a class="contact__link" href="#">обработку персональных данных</a>
      </p>
    </div>
  </form>
</template>

<script>
import ButtonFillFormVue from './ui/ButtonFillForm.vue';
export default {
  components: {
    'contact-button': ButtonFillFormVue,
  },
};
</script>

<style scoped>
.contact {
  width: 840px;
  display: flex;
  flex-direction: column;
}

.contact__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.contact__subtitle {
  margin: 40px 0 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
}

.contact__table {
  display: flex;
}

.contact__question {
  margin: 40px 0 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact__question_margin-in-table {
  margin: 40px 40px 0 0;
}

.contact__answer {
  margin: 40px 0 0;
  border: 0;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #e7e7e7;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
}

.contact__button {
  width: 86px;
  padding: 16px 70px;
  margin: 50px 30px 0 0;
}

.contact__to-policy {
  margin: auto 0 10px;
  max-width: 380px;
  align-self: flex-start;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
}

.contact__link {
  color: #666666;
}

@media screen and (max-width: 1280px) {
  .contact {
    max-width: 720px;
  }

  .contact__title {
    font-size: 28px;
    line-height: 32px;
  }

  .contact__subtitle {
    font-size: 16px;
    line-height: 22px;
  }

  .contact__question {
    font-size: 16px;
    line-height: 22px;
  }

  .contact__answer {
    font-size: 16px;
    line-height: 22px;
  }
}

@media screen and (max-width: 820px) {
  .contact {
    max-width: 500px;
  }

  .contact__title {
    font-size: 26px;
    line-height: 30px;
  }

  .contact__subtitle {
    margin: 40px 0 0;
    font-size: 15px;
    line-height: 19px;
  }

  .contact__question {
    font-size: 15px;
    line-height: 19px;
  }

  .contact__answer {
    font-size: 15px;
    line-height: 19px;
  }

  .contact__button {
    padding: 13px 57px;
  }

  .contact__to-policy {
    font-size: 11px;
    line-height: 13px;
  }
}

@media screen and (max-width: 650px) {
  .contact {
    max-width: 260px;
  }

  .contact__title {
    max-width: 190px;
    font-size: 18px;
    line-height: 21px;
  }

  .contact__subtitle {
    margin: 35px 0 0;
    font-size: 13px;
    line-height: 16px;
  }

  .contact__table {
    flex-direction: column;
  }

  .contact__question {
    margin: 30px 0 0;
    font-size: 13px;
    line-height: 16px;
  }

  .contact__question_margin-in-table {
    margin: 30px 0 0;
  }

  .contact__answer {
    margin: 20px 0 0;
    font-size: 13px;
    line-height: 16px;
  }

  .contact__button {
    padding: 12px 87px;
    margin: 35px 0 0;
  }

  .contact__to-policy {
    margin: 10px 0 0;
    font-size: 11px;
    line-height: 13px;
  }
}
</style>
