<template>
  <div class="container">
    <div class="story__banner">
      <div class="story__image-wrapper">
        <div class="story__image"></div>
      </div>
      <div class="story__text-wrapper">
        <h1 class="story__title">
          <span class="story__title_bold">Имя: </span> текст истории
        </h1>
        <div class="story-text-wrapper_bottom">
          <a href="#" class="story__share">Поделитесь &#8599;</a>
          <p class="story__share">20 апреля 2018</p>
        </div>
      </div>
    </div>
    <div class="story__itself">
      <p class="story__paragraph">
        Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
        ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
      </p>
      <p class="story__paragraph">
        У меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны
        особо — я сам чувствую, опаздываю куда-то или нет, отстаю от нужного
        графика или опережаю. Вот такие встроенные внутренние часы! Будильник
        мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в
        армии, за 45 секунд.
      </p>
      <p class="story__paragraph story__paragraph_bold">
        «В футболе если команда опоздала на 15 минут, ей засчитывается
        поражение».
      </p>
      <p class="story__paragraph">
        Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если знаю,
        что могу попасть по дороге в пробку, то не еду на машине. В аэропорт
        приезжаю задолго до начала регистрации. Лучше подожду и кофе попью, чем
        опоздаю!
      </p>
      <p class="story__paragraph">
        Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать. Я
        билеты выучил, знал абсолютно все. Пришел в нужное время, а учительница
        — нет. Ну, я какое-то время подождал ее и ушел. Потом она спрашивала:
        «Почему не дождался?». Я ответил: «В футболе если команда опоздала на 15
        минут, ей засчитывается поражение». Экзамен мне все-таки поставили!
        Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится. В отличие от рака.
      </p>
      <p class="story__paragraph">
        «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится».
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: '_id',
};
</script>

<style scoped>
.container {
  font-family: 'Inter', sans-serif;
  display: flex;
  margin-top: 100px;
  max-width: 1440px;
}
.story__banner {
  display: flex;
  width: calc(100% - 60px - 60px);
  margin: 100px auto 130px;
}
.story__image-wrapper {
  width: 580px;
  height: 580px;
}
.story__image {
  background-color: wheat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.story__text-wrapper {
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.story-text-wrapper_bottom {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;
}
.story__title {
  max-width: 680px;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  padding-top: 30px;
  border-top: 1px solid #efefef;
  text-align: left;
}
.story__title_bold {
  font-weight: bold;
}
.story__bottom-wrapper {
  display: flex;
}
.story__share {
  text-decoration: none;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
.story__date {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
.story__itself {
  margin: 0 auto 70px;
  max-width: 780px;
}
.story__paragraph {
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: #000;
  text-align: left;
  margin-bottom: 30px;
}
.story__paragraph:last-of-type {
  margin-bottom: 0;
}
.story__paragraph_bold {
  font-weight: bold;
}
</style>
