<template>
  <div class="cardList">
    <app-card :name="cards[0].name" :text="cards[0].text" :url="cards[0].url" />
    <app-card :name="cards[1].name" :text="cards[1].text" :url="cards[1].url" />
    <app-card :name="cards[2].name" :text="cards[2].text" :url="cards[2].url" />
    <app-card :name="cards[3].name" :text="cards[3].text" :url="cards[3].url" />
    <app-card :name="cards[4].name" :text="cards[4].text" :url="cards[4].url" />
    <app-card :name="cards[5].name" :text="cards[5].text" :url="cards[5].url" />
    <app-card :name="cards[6].name" :text="cards[6].text" :url="cards[6].url" />
    <app-card :name="cards[7].name" :text="cards[7].text" :url="cards[7].url" />
  </div>
</template>

<script>
import Card from '@/components/Card';
export default {
  components: {
    'app-card': Card,
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
            'https://static.tildacdn.com/tild6532-6663-4137-a630-353162653263/IMG-20200414-WA0010.jpg',
        },
        {
          name: 'Тамила',
          text:
            'Я никогда не перестану шутить, и это не лечится, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild6663-3963-4232-b733-373664333231/WhatsApp_Image_2020-.jpeg',
        },
        {
          name: 'Наталья Карика',
          text: 'Моя любовь к жажде деятельности не лечится, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild3564-6165-4264-b432-313661386234/image-31-03-20-01-12.jpeg',
        },
        {
          name: 'Мария Кочеткова',
          text:
            'Моя страсть к кислым мармеладным червячкам не лечится, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild6532-6663-4137-a630-353162653263/IMG-20200414-WA0010.jpg',
        },
        {
          name: 'Александр Тарханов',
          text: 'Я не могу победить свою пунктуальность, в отличие от рака',
          url:
            'https://static.tildacdn.com/tild3564-6165-4264-b432-313661386234/image-31-03-20-01-12.jpeg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.cardList {
  max-width: 1440px;
  margin: 70px auto 160px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 300px 300px 300px 300px;
  grid-gap: 70px 40px;
}
</style>
