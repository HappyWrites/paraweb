<template >
  <section class="carousel">
    <div class="carousel__slide">
      <img src="@/static/images/background.svg" class="carousel__image" alt="парень за столом">
      <div class="carousel__content">
        <h1 class="carousel__title">
          Как бизнесу сохранять <br> IT-кадры на фоне кризиса
        </h1>
        <p class="carousel__subtitle">
          Инструменты, которые могут использовать компании для удержания сотрудников
        </p>
        <button class="carousel__button" type="button">Подробнее</button>
      </div>
    </div>

    <div class="carousel__navigation">
      <div class="carousel__switch carousel__switch_active"></div>
      <div class="carousel__switch"></div>
      <div class="carousel__switch"></div>
    </div>
  </section>
</template>
<script>
export default {

}
</script>

<style scoped>
.carousel {
  background: linear-gradient(100.68deg, #5991FF 13.6%, #0050EF 94.69%);
  width: 100%;
  position: relative;
  min-height: 365px;
}

@media screen and (min-width: 730px) {
  .carousel {
    min-height: 546px;
  }
}

.carousel__image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  object-fit: cover;
  object-position: left bottom;
}

@media screen and (min-width: 515px) {
  .carousel__image {
    width: 68%;
  }
}

.carousel__content {
  padding: 20px 56px 0 16px;
  position: relative;
  z-index: 2;
}

@media screen and (min-width: 768px) {
  .carousel__content {
    padding: 100px 0 0 137px;
    max-width: 574px;
  }
}

.carousel__title {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  padding: 0 0 20px;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .carousel__title {
    font-size: 40px;
    line-height: 56px;
    padding-bottom: 24px;
  }
}

.carousel__subtitle {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  padding: 0 0 24px;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .carousel__subtitle {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 32px;
  }
}

.carousel__button {
  background-color: white;
  color: #0050EF;
  min-height: 46px;
  border: none;
  border-radius: 10px;
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  padding: 14px 24px;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
}

.carousel__button:hover {
  opacity: 0.6;
}

@media screen and (min-width: 768px) {
  .carousel__button {
    font-size: 16px;
    line-height: 20px;
    padding: 16px 38px;
  }
}

.carousel__navigation {
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
}

@media screen and (min-width: 768px) {
  .carousel__navigation {
    bottom: 64px;
    left: 138px;
  }
}

.carousel__switch {
  width: 20px;
  height: 3px;
  margin: 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.carousel__switch:hover {
  opacity: 1;
  transform: scale(1.1);
}

.carousel__switch_active {
  background-color: white;
}
</style>
