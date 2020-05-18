<template>
  <section class="error">
    <h1 class="error__text">
      Такой страницы не существует
    </h1>
    <h2 class="error__text error__text_subtitle">
      Обратитесь к кому-нибудь из этих ребят:
    </h2>
    <div class="developers">
      <div class="developers__person" v-for="(obj, i) in developers" :key="i">
        <img class="developers__photo" :src="obj.link" />
        <p class="developers__description">{{ obj.name }}</p>
        <p class="developers__description">{{ obj.contacts }}</p>
      </div>
    </div>
    <div class="error__link">
      <nuxt-link to="/">Вернуться</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'error',
  data() {
    return {
      developers: [
        {
          name: 'Егор Шкиря',
          link:
            'https://ca.slack-edge.com/TPV9DP0N4-UQPV7A3EY-38f2d8db61c9-512',
          contacts: 'TG: @egorshkirya',
        },
        {
          name: 'Полина Задорожная',
          link:
            'https://ca.slack-edge.com/TPV9DP0N4-UQTQJBPGV-9bcfaf845798-512',
          contacts: 'TG: @LekaRen',
        },
        {
          name: 'Варя Лиханина',
          link:
            'https://ca.slack-edge.com/TPV9DP0N4-UQTA2HS3W-68b9c3570655-512',
          contacts: 'TG: @varyalikhanina',
        },
        {
          name: 'Мария Котлярова',
          link:
            'https://ca.slack-edge.com/TPV9DP0N4-U010ER340PK-908cd838ee2c-512',
          contacts: 'TG: @itwassoclear',
        },
        {
          name: 'Батыров Малик',
          link:
            'https://ca.slack-edge.com/TPV9DP0N4-UVC7N21JA-ac09c8d44237-512',
          contacts: 'TG: @Mate_MaliQ',
        },
      ],
    };
  },
};
</script>

<style scoped>
.error {
  max-width: 1024px;
  margin: 0 auto;
}
.error__text {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 30px;
  text-align: center;
  margin-top: 30px;
}
.error__text_subtitle {
  font-size: 16px;
  margin-top: 10px;
}
.error__link {
  text-decoration: none;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  margin: 0 auto;
  text-align: center;
}
.developers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.developers__person {
  margin: 30px;
}
.developers__photo {
  width: 200px;
  border-radius: 50%;
}
.developers__description {
  text-align: center;
}
</style>
