<template>
  <div class="cover">
    <h2 class="cover__title">
      #РАКЛЕЧИТСЯ
    </h2>
    <p class="cover__subtitle">О проекте</p>
    <div class="cover__info">
      <p class="cover__quote">
        Этот проект был создан благотворительным фондом Константина Хабенского.
      </p>
      <div class="cover__text">
        <div class="cover__author">
          <p class="cover__projcet">Рак Лечится</p>
          <p class="cover__name-project">Фонд Хабенского</p>
        </div>
        <p class="cover__excerpt">
          Есть вещи, которые не лечатся. Особенности характера, страстные
          увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
          приобрели в детстве. Список можно продолжать до бесконечности, но одна
          болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и
          лучшее доказательство — люди с их неизлечимыми особенностями, которые
          сумели победить рак. Рак лечится — проект Благотворительного Фонда
          Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
          изменить отношение людей к раку и заставить каждого поверить:
          онкологическое заболевание — это не приговор.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cover',
};
</script>

<style scoped>
.cover {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  background-color: #613a93;
  margin-bottom: 50px;
}

.cover__title {
  text-transform: uppercase;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  padding-top: 90px;
  margin: auto 0;
  text-align: center;
  width: 100%;
  color: #fff;
  font-family: 'Intro', Arial, sans-serif;
}

.cover__subtitle {
  width: 92%;
  padding-top: 50px;
  margin: 0 auto;
  text-align: left;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #ffffff;
}

.cover__info {
  padding-top: 30px;
  padding-bottom: 100px;
  width: 92%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cover__quote {
  max-width: 340px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  font-family: 'Intro', Arial, sans-serif;
}

.cover__text {
  display: flex;
}

.cover__author {
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-right: 40px;
}

.cover__projcet {
  color: #fff;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

.cover__name-project {
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #c9c9c9;
}

.cover__excerpt {
  text-align: left;
  max-width: 640px;
  color: #dedede;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
</style>
