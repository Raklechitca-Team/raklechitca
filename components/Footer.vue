<template>
  <footer class="footer">
    <nav class="footer__menu">
      <p class="footer__tag">#раклечится</p>
      <ul class="footer__links">
        <li class="footer__links-list">
          <a href="" target="_blank" class="footer__link">
            <img
              src="@/static/social/fb.svg"
              alt="Facebook"
              class="footer__image footer__image_facebook"
            />
          </a>
        </li>
        <li class="footer__links-list">
          <a href="" target="_blank" class="footer__link">
            <img
              src="@/static/social/vk.svg"
              alt="VK"
              class="footer__image footer__image_vk"
            />
          </a>
        </li>
        <li class="footer__links-list">
          <a href="" target="_blank" class="footer__link">
            <img
              src="@/static/social/ok.svg"
              alt="OK"
              class="footer__image footer__image_ok"
            />
          </a>
        </li>
        <li class="footer__links-list">
          <a href="" target="_blank" class="footer__link">
            <img
              src="@/static/social/twitter.svg"
              alt="Twitter"
              class="footer__image footer__image_twitter"
            />
          </a>
        </li>
        <li class="footer__links-list">
          <a href="" target="_blank" class="footer__link">
            <img
              src="@/static/social/youtube.svg"
              alt="Youtube"
              class="footer__image footer__image_youtube"
            />
          </a>
        </li>
        <li class="footer__links-list">
          <a href="" target="_blank" class="footer__link">
            <img
              src="@/static/social/instagram.svg"
              alt="Instagram"
              class="footer__image footer__image_instagram"
            />
          </a>
        </li>
      </ul>
    </nav>
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
  height: 123.64px;
  background-color: #04314a;
  display: flex;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  padding: 0 auto;
}

.footer__tag {
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
  font-family: 'Intro', 'Arial', sans-serif;
  text-transform: uppercase;
}

.footer__menu {
  display: flex;
  position: relative;
  width: 560px;
  height: 34px;
  align-items: center;
  justify-content: space-between;
  vertical-align: middle;
  box-sizing: content-box;
  margin: 30px auto 0;
}

.footer__links {
  display: flex;
  list-style-type: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
}

.footer__links-list {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0;
}

.footer__link {
  display: flex;
  width: 28px;
  height: 28px;
  margin: 0 0 0 10px;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.footer__image {
  width: 20px;
  height: 20px;
  align-self: center;
}

.footer__image_instagram {
  width: 30px;
  height: 30px;
  margin: 0 0 0 15px;
}

.footer__image_youtube {
  width: 30px;
  height: 30px;
  margin: 0 0 0 5px;
}

@media screen and (max-width: 1200px) {
  .footer__menu {
    max-width: 460px;
  }
}
</style>
