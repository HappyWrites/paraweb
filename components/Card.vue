<template>
  <li class="card canceling-standart">
    <div class="card__container">
      <p class="card__date">{{ date }}</p>
      <h3 class="card__title">{{ card.title }}</h3>
      <p class="card__text">{{ text }}</p>
    </div>
    <div class="card__container-author">
      <p class="card__author">{{ card.author ? card.author : 'Without an author' }}</p>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    card: Object
  },

  computed: {
    text() {
      let str = this.card.description;

      if (str.length > 137) {
        return str = str.slice(0, str.indexOf('.', 100) + 1) + '..'
      }
      return str
    },

    date() {
      const MONTHS = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
      let date = this.card.publishedAt.slice(0, 10);
      let day = date.slice(8);
      let month = MONTHS[date.slice(6, 7) - 1];
      let year = date.slice(0, 4)

      return `${day} ${month} ${year}`
    }
  }
}
</script>
<style scoped>
.canceling-standart {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.card {
  list-style-type: none;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  margin: 0 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (min-width: 768px) {
  .card {
    margin: 0 20px 10px 0;
    padding: 24px;
  }
}

.card__date {
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #10B2D0;
  padding: 0;
  margin: 0;
}

.card__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(0, 0, 0, 0.65);
  padding: 8px 0 16px;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .card__title {
    font-size: 20px;
    line-height: 32px;
  }
}

.card__text {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(136, 136, 136, 1);
  padding: 0 0 20px;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .card__text {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 32px;
  }
}

.card__container-author {
  background-color: rgba(0, 80, 239, 0.06);
  border-radius: 10px;
  width: 124px;
  height: 34px;
}

.card__author {
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(0, 80, 239, 1);
  padding: 8px 0 0;
  margin: 0;
  text-align: center;
}
</style>
