<template>
  <footer class="footer">
    <p class="footer__text">Спасибо всем, кто помог состояться этому проекту</p>

    <nav class="footer__menu">
      <ul class="footer__links">
        <li class="footer__links-list">
          <a href="/" target="_blank" class="footer__link">Главная</a>
        </li>
        <li class="footer__links-list">
          <a href="/stories" target="_blank" class="footer__link">Истории</a>
        </li>
      </ul>
      <ul class="footer__social">
        <li class="footer__social-list">
          <p class="footer__social-list_text">
            Мы в&nbsp;<a
              href="https://www.instagram.com/raklechitsa"
              target="_blank"
              class="footer__link"
              >Инстаграме</a
            >&nbsp;и&nbsp;<a
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              target="_blank"
              class="footer__link"
              >Youtube</a
            >
          </p>
        </li>
        <li class="footer__social-list">
          <a href="" target="_blank" class="footer__link">Поделитесь ↗</a>
        </li>
      </ul>
    </nav>

    <div class="footer__content">
      <p class="footer__content_info">Рак Лечится 2020</p>
      <p class="footer__content_info">Сделано студентами Яндекс Практикум</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  max-width: 1440px;
  width: 100%;
  min-height: 356px;
  background-color: #fbfbfb;
  bottom: 0;
  display: flex;
  padding: 60px;
  flex-wrap: wrap;
}

.footer__text {
  color: #000000;
  font-size: 32px;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  margin: 0 113px 0 0;
  max-width: 340px;
  text-align: left;
  position: relative;
}

.footer__menu {
  display: flex;
  max-width: 867px;
  width: 100%;
  justify-content: space-between;
}

@media screen and (max-width: 1439px) {
  .footer__menu {
    max-width: 700px;
  }
}

@media screen and (max-width: 1280px) {
  .footer {
    min-height: 316px;
  }

  .footer__menu {
    max-width: 600px;
  }

  .footer__text {
    font-size: 28px;
    line-height: 32px;
    margin: 0 113px 30px 0;
  }

  .footer__content_info {
    font-size: 16px;
    line-height: 18px;
  }

  .footer__link {
    font-size: 16px;
  }
}

@media screen and (max-width: 630px) {
  .footer__menu {
    flex-wrap: wrap;
  }

  .footer__text {
    font-size: 24px;
    line-height: 26px;
    margin: 0 0 30px 0;
  }

  .footer__content {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer__social-list_text {
    display: flex;
    flex-wrap: wrap;
  }

  .footer__content_info {
    align-self: flex-start;
    margin: 0 0 20px;
    text-align: left;
    font-size: 16px;
    line-height: 18px;
  }

  .footer__link {
    font-size: 16px;
    margin: 0 0 20px;
  }
}

@media screen and (max-width: 320px) {
  .footer__menu {
    max-width: 200px;
    flex-wrap: wrap;
  }

  .footer__text {
    font-size: 20px;
    line-height: 22px;
    margin: 0;
    margin: 0 0 30px;
  }

  .footer__link {
    margin: 0 0 20px;
  }

  .footer__social-list_text {
    display: flex;
    flex-wrap: wrap;
  }

  .footer__content {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer__content_info {
    align-self: flex-start;
    margin: 0 0 20px;
    text-align: left;
    font-size: 16px;
    line-height: 18px;
  }

  .footer__link {
    font-size: 16px;
  }
}

.footer__links {
  display: flex;
  padding: 0;
  margin: 0;
  max-width: 188px;
  width: 100%;
  justify-content: space-between;
}

.footer__social {
  display: flex;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  list-style-type: none;
  flex-direction: column;
  width: auto;
  width: 300px;
}

.footer__social-list {
  padding: 0 0 44px 0;
}

.footer__social-list_text {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  text-decoration: none;
  color: #000000;
  text-align: left;
}

.footer__links-list {
  display: flex;
  margin: 0;
  list-style-type: none;
}

.footer__link {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  text-decoration: none;
  color: #000000;
  text-align: left;
}

.footer__content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.footer__content_info {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
  align-self: flex-end;
}
</style>
