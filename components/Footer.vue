<template>
  <footer class="footer">
    <a href="#" target="_blank">
      <img src="@/static/images/logo-footer.svg" class="footer__logo" alt="Логотип">
    </a>

    <div class="footer__menu">
      <nav>
        <ul class="footer__links">
          <li class="canceling-standart footer__links-item"><a href="#" target="_blank" class="footer__link">Готовые
              решения</a></li>
          <li class="canceling-standart footer__links-item "><a href="#" target="_blank" class="footer__link">Блог</a>
          </li>
          <li class="canceling-standart footer__links-item"><a href="#" target="_blank" class="footer__link">О нас</a>
          </li>
          <li class="canceling-standart footer__links-item"><a href="#" target="_blank"
              class="footer__link">Контакты</a></li>
        </ul>
      </nav>

      <nav>
        <ul class="footer__social">
          <li class="canceling-standart">
            <a href="#" class="" target="_blank">
              <img src="@/static/images/telegram.svg" class="footer__social-icon" alt="Иконка телеграм">
            </a>
          </li>
          <li class="canceling-standart">
            <a href="#" class="" target="_blank">
              <img src="@/static/images/VK.svg" class="footer__social-icon" alt="Иконка ВК">
            </a>
          </li>
          <li class="canceling-standart">
            <a href="#" class="" target="_blank">
              <img src="@/static/images/twitter.svg" class="footer__social-icon" alt="Иконка твиттер">
            </a>
          </li>
          <li class="canceling-standart">
            <a href="#" class="" target="_blank">
              <img src="@/static/images/youtube.svg" class="footer__social-icon" alt="Иконка ютуб">
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <p class="footer__author">&copy; ООО «Лого», 2008—2022</p>
  </footer>
</template>
<script>
export default {

}
</script>
<style>
.footer {
  background-color: #011846;
  padding: 24px 110px 24px 12px;
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 430px) {
  .footer {
    padding-right: 0;
  }
}


@media screen and (min-width: 768px) {
  .footer {
    padding: 48px 138px;
  }
}

@media screen and (min-width: 1024px) {
  .footer {
    padding: 48px 138px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

.footer__logo {
  width: 138px;
  height: 32px;
}

@media screen and (min-width: 768px) {
  .footer__logo {
    width: 194px;
    height: 48px;
  }
}

@media screen and (min-width: 1024px) {
  .footer__menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

@media screen and (min-width: 1108px) {
  .footer__menu {
    margin-left: 180px;
  }
}

@media screen and (min-width: 1280px) {
  .footer__menu {
    margin-left: 335px;
  }
}

@media screen and (min-width: 1360px) {
  .footer__menu {
    margin-left: 430px;
  }
}

.canceling-standart {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.footer__links {
  padding: 28px 5px 15px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media screen and (min-width: 1024px) {
  .footer__links {
    padding: 14px 0 0 0;
  }
}

.footer__links-item {
  margin: 0 40px 16px 0;
}


@media screen and (min-width: 1024px) {
  .footer__links-item {
    margin: 0 60px 45px 0;
  }

  .footer__links-item:last-of-type {
    margin-right: 0;
  }
}

.footer__link {
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  padding: 0;
}


@media screen and (min-width: 768px) {
  .footer__link {
    font-size: 16px;
    line-height: 20px;
  }
}

.footer__social {
  padding: 0 7px 19px;
  margin: 0;
  display: flex;
}

@media screen and (min-width: 1024px) {
  .footer__social {
    justify-content: end;
    padding: 0;
  }
}

.footer__social-icon {
  width: 15px;
  height: 13px;
  margin-right: 20px;
  transition: all 0.2s ease-in-out;
}

.footer__social-icon:hover {
  transform: scale(1.2);
}


@media screen and (min-width: 1024px) {
  .footer__social-icon {
    margin: 0;
    padding: 40px 0 0 20px;
  }
}

.footer__author {
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  padding: 0;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .footer__author {
    font-size: 14px;
    line-height: 20px;
  }
}

@media screen and (min-width: 1024px) {
  .footer__author {
    margin-top: -20px;
  }
}
</style>
