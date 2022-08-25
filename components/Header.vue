<template>
  <header class="header">
    <a href="#" target="_blank">
      <img src="@/static/images/logo-header.svg" class="header__logo" alt="Логотип">
    </a>
    <div class="header__contacts_version_mobile">
      <button class="header__button header__button_type_phone" type="button"></button>
      <button class="header__button header__button_type_mail" type="button"></button>
    </div>
    <div class="header__contacts_version_desktop">
      <p class="header__contact">8 800 000 00 00</p>
      <p class="header__contact">sales@logo.ru</p>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  background-color: white;
  width: calc(100% - 32px);
  margin: 0;
  padding: 16px 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}

@media screen and (min-width: 768px) {
  .header {
    padding: 16px 0 0;
    width: 100%;
  }
}

.header__logo {
  width: 95px;
  height: 24px;
}

@media screen and (min-width: 768px) {
  .header__logo {
    width: 120px;
    height: 30px;
    margin-left: 138px;
  }
}

@media screen and (min-width: 768px) {
  .header__contacts_version_mobile {
    display: none
  }
}

.header__button {
  width: 20px;
  height: 20px;
  padding: 3px;
  margin: 0;
  margin-left: 16px;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center center;
}

.header__button_type_mail {
  background-image: url(@/static/images/mail.svg);
}

.header__button_type_phone {
  background-image: url(@/static/images/phone.svg);
}

.header__contacts_version_desktop {
  display: none
}

@media screen and (min-width: 768px) {
  .header__contacts_version_desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 138px;
  }
}

.header__contact {
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #888888;
  margin-left: 40px;
}
</style>
