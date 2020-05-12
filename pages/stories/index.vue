<template>
  <div class="container">
    <app-header />
    <app-cardlist :cards="cards" />
    <page-numbers />
    <app-footer />
  </div>
</template>

<script>
import CardList from '@/components/CardList';
import PageNumber from '@/components/ui/PageNumber';
export default {
  name: 'stories',
  components: {
    'app-cardlist': CardList,
    'page-numbers': PageNumber,
  },
  data() {
    return {
      cards: [
        {
          name: 'Татьяна Полетаева',
          text:
            'Я всегда стремлюсь получать новые знания, и это не лечится, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild6532-6663-4137-a630-353162653263/IMG-20200414-WA0010.jpg',
        },
        {
          name: 'Марина Казнина',
          text:
            'Моя любовь к пилону и сложным трюкам не лечится, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild6663-3963-4232-b733-373664333231/WhatsApp_Image_2020-.jpeg',
        },
        {
          name: 'Анастасия Жохова',
          text:
            'Я всегда буду ходить на концерты любимых исполнителей, и это не лечится, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild3564-6165-4264-b432-313661386234/image-31-03-20-01-12.jpeg',
        },
        {
          name: 'Владимир Тен',
          text:
            'Моя любовь к чтению книг с конца не лечится, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
        },
        {
          name: 'Тамила',
          text:
            'Я никогда не перестану шутить, и это не лечится, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild3239-6631-4836-a634-363933353261/WhatsApp_Image_2020-.jpeg',
        },
        {
          name: 'Наталья Карика',
          text: 'Моя любовь к жажде деятельности не лечится, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild6439-3131-4637-b163-323366393135/CqAusB2YT2E.jpg',
        },
        {
          name: 'Мария Кочеткова',
          text:
            'Моя страсть к кислым мармеладным червячкам не лечится, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild3630-6132-4661-b362-656435346530/Es9z9PUrsjI.jpg',
        },
        {
          name: 'Александр Тарханов',
          text: 'Я не могу победить свою пунктуальность, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild6166-3733-4364-b838-393832636136/WhatsApp_Image_2019-.jpeg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
</style>
