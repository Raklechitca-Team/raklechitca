<template>
  <footer class="footer">
    <app-container class="footer__container">
      <app-section-title class="footer__text">{{
        footerTextData.title
      }}</app-section-title>

      <nav class="footer__menu">
        <app-menu class="footer__menu-links" />
        <ul class="footer__social">
          <li class="footer__social-list">
            <p class="footer__social-list_text">
              Мы в&nbsp;<a
                href="https://www.instagram.com/raklechitsa"
                target="_blank"
                class="footer__social-link"
                >Инстаграме</a
              >&nbsp;и&nbsp;<a
                href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
                target="_blank"
                class="footer__social-link"
                >Youtube</a
              >
            </p>
          </li>
          <li class="footer__social-list">
            <button class="footer__button" @click="showSharePopup">
              Поделитесь &#8599;
            </button>
          </li>
        </ul>
      </nav>

      <div class="footer__content">
        <div class="footer__content__name">
          <div class="footer__content_info" v-html="footerTextData.text" />
          <p class="footer__content_info footer__content_year">{{ year() }}</p>
        </div>
        <a
          href="https://praktikum.yandex.ru/"
          target="_blank"
          class="footer__content_info footer__content_info-link"
          >Сделано студентами Яндекс Практикум</a
        >
      </div>
    </app-container>
  </footer>
</template>

<script>
import Container from '@/components/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Menu from '@/components/ui/Menu';
export default {
  name: 'Footer',
  components: {
    'app-container': Container,
    'app-section-title': SectionTitle,
    'app-menu': Menu,
  },
  props: {
    footerTextData: Object,
  },
  methods: {
    year() {
      return new Date().getFullYear();
    },
    showSharePopup() {
      this.$store.commit('popup/toggleSharePopup');
    },
  },
  computed: {
    footer() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'footer');
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #fbfbfb;
}

.footer__container {
  display: flex;
  padding: 60px;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;
}

.footer__text {
  color: #000;
  font-size: 32px;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  margin: 0 0 110px 0;
  max-width: 340px;
  text-align: left;
}

.footer__menu {
  display: flex;
  justify-content: space-between;
}

.footer__menu-links {
  display: flex;
  justify-content: space-between;
}

.footer__links {
  display: flex;
  padding: 0;
  align-self: flex-start;
}

.footer__social {
  display: flex;
  padding: 0 0 0 339px;
  margin: 0;
  flex-wrap: wrap;
  list-style-type: none;
  flex-direction: column;
}

.footer__social-list {
  padding: 0 0 44px 0;
  width: 300px;
}

.footer__social-list_text {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  text-decoration: none;
  color: #000;
  text-align: left;
}

.footer__links-list {
  display: flex;
  margin: 0;
  list-style-type: none;
  padding: 0 40px 0 0;
}

.footer__link {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  text-decoration: none;
  color: #000;
  text-align: left;
}

.footer__link:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  transition-delay: 0s;
}

.footer__social-link {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: #000;
  border-bottom: 1px solid #000;
}

.footer__social-link:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  transition-delay: 0s;
}

.footer__button {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  text-decoration: none;
  color: #000;
  text-align: left;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background-color: #fbfbfb;
}

.footer__button:focus {
  outline: none;
}

.footer__button:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  transition-delay: 0s;
}

.footer__content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.footer__content__name {
  display: flex;
}

.footer__content_year {
  margin-left: 10px;
}

.footer__content_info {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
  align-self: flex-end;
  text-decoration: none;
}

.footer__content_info-link:hover {
  color: #000;
  transition: color 0.3s ease-in-out;
}

@media screen and (max-width: 1280px) {
  .footer__container {
    padding: 50px;
  }

  .footer__text {
    font-size: 28px;
    line-height: 32px;
    margin: 0 0 104px 0;
    max-width: 305px;
  }

  .footer__link,
  .footer__social-link,
  .footer__social-list_text,
  .footer__button,
  .footer__content_info {
    font-size: 16px;
  }

  .footer__social {
    padding: 0 0 0 336px;
  }

  .footer__social-list_text,
  .footer__button {
    width: 265px;
  }
}

@media screen and (max-width: 1024px) {
  .footer__text {
    max-width: 288px;
    margin: 0 0 90px;
    font-size: 24px;
    line-height: 28px;
  }

  .footer__menu {
    padding: 0 0 50px;
  }

  .footer__links-list {
    padding: 0 30px 0 0;
  }

  .footer__social {
    padding: 0 0 0 193px;
  }

  .footer__social-list_text {
    padding: 0 0 30px 0;
    width: 230px;
    margin: 0;
  }

  .footer__social-list {
    width: 230px;
    padding: 0;
  }
}

@media screen and (max-width: 768px) {
  .footer__text {
    max-width: 268px;
    margin: 0 0 90px;
  }

  .footer /deep/ .menu__links {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  .footer /deep/ .menu {
    align-items: flex-start;
  }

  .footer /deep/ .menu__link {
    margin: 0;
  }

  .footer /deep/ .menu__links-list {
    margin: 0 0 14px;
  }

  .footer__links {
    flex-direction: column;
  }

  .footer__links-list {
    padding: 0 0 14px;
  }

  .footer__social {
    padding: 0 0 0 85px;
  }

  .footer__social-list_text {
    padding: 0 0 14px;
    width: 225px;
    margin: 0;
  }

  .footer__social-list {
    width: 225px;
    padding: 0;
  }
}

@media screen and (max-width: 480px) {
  .footer__text {
    margin: 0 0 50px;
  }

  .footer__menu {
    flex-direction: column;
  }

  .footer__social {
    padding: 0;
  }

  .footer__content {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer__content_info {
    padding: 0 0 14px;
    align-self: flex-start;
  }

  .footer__content_info:last-child {
    padding: 0;
  }
}

@media screen and (max-width: 400px) {
  .footer__container {
    padding: 50px 15px;
  }

  .footer__text {
    margin: 0 0 50px;
    font-size: 18px;
    line-height: 21px;
  }

  .footer__menu-links {
    flex-direction: column;
    padding: 0;
  }

  .footer__links {
    flex-direction: column;
  }

  .footer__link {
    font-size: 13px;
    line-height: 15px;
    margin: 0 0 18px;
  }

  .footer__links-list {
    padding: 0;
  }

  .footer__social {
    padding: 0;
  }

  .footer__social-list_text {
    padding: 0 0 18px;
    width: 225px;
    margin: 0;
    font-size: 13px;
    line-height: 15px;
  }

  .footer__button {
    font-size: 13px;
    line-height: 15px;
  }

  .footer__social-link {
    font-size: 13px;
    line-height: 15px;
  }

  .footer__social-list {
    padding: 0;
  }

  .footer__content {
    flex-direction: column;
  }

  .footer__content_info {
    font-size: 13px;
    padding: 0 0 10px;
    align-self: flex-start;
  }

  .footer__content_info:last-child {
    padding: 0;
  }

  .footer__content_link {
    text-decoration: none;
  }
}
</style>
