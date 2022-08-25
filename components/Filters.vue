<template >
  <section class="filter">
    <button @click="toggleFilterOnAuthor" class="filter__forms filter__author" type="button">
      <div class="filter__author-user">
        <img src="@/static/images/user.svg" class="filter__image" alt="юзер">
        <input class="filter__author-text" placeholder="Выбор автора" v-model="inputValueAuthor" />
      </div>
      <div class="filter__author-arrow">
        <img src="@/static/images/arrow.svg" alt="стрелка">
      </div>
    </button>
    <ul class="filter__menu filter__menu_active">
      <Authors v-for="(author, index) in getAuthors" :author="author" :key="index" />
    </ul>

    <div class="filter__forms filter__date">
      <input @input="changeInput" class="filter__date-input" type="text" placeholder="От"
        v-model="inputValueDateFrom" />
      <p class="filter__minus">–</p>
      <input @input="changeInput" class="filter__date-input" type="text" placeholder="До"
        v-model="inputValueDateBefore" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      inputValueAuthor: '',
      inputValueDateFrom: '',
      inputValueDateBefore: ''
    }
  },

  methods: {
    toggleFilterOnAuthor() {
      this.$store.commit('toggleFilterOnAuthor');
      this.$store.commit('lockFilterCardsWithDesiredAuthor')
    },

    changeInput() {
      let inputValueDate = [this.inputValueDateFrom, this.inputValueDateBefore];
      this.$store.commit('getSearchDate', inputValueDate);
    }
  },

  computed: {
    getAuthors() {
      if (this.inputValueAuthor) {
        return this.$store.getters.getAuthors.filter(item => {
          return item.includes(this.inputValue)
        })
      }
      return this.$store.getters.getAuthors;
    },
  }
}
</script>

<style scoped>
.filter {
  display: flex;
  flex-direction: column;
  color: #888888;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  padding: 32px 16px;
  position: sticky;
  top: 5px;
}

@media screen and (min-width: 768px) {
  .filter {
    flex-direction: row;
    padding: 40px 138px 55px;
    top: 20px;
  }
}

.filter__forms {
  min-height: 50px;
  display: flex;
  background-color: white;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(136, 136, 136, 0.2);
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}

.filter__forms:hover {
  transform: scale(1.05);
}


@media screen and (min-width: 768px) {
  .filter__forms {
    max-width: 330px;
  }
}

.filter__author {
  border: none;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}


@media screen and (min-width: 768px) {
  .filter__author {
    margin: 0 20px 0 0;
  }
}

.filter__author-user {
  display: flex;
  justify-content: center;
}

.filter__image {
  width: 18px;
  height: 18px;
}

@media screen and (min-width: 768px) {
  .filter__image {
    width: 20px;
    height: 20px;
  }
}

.filter__author-text {
  padding: 2px 10px 0;
  border: none;
  margin: 0;
  color: #888888;
}

.filter__menu {
  visibility: hidden;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  width: calc(100% - 32px);
  top: 60px;
  padding: 0;
}

@media screen and (min-width: 768px) {
  .filter__menu {
    width: calc(100%/2 - 140px)
  }
}

@media screen and (min-width: 940px) {
  .filter__menu {
    max-width: 330px;
  }
}

.filter__menu_active {
  visibility: visible;
  padding-bottom: 10px
}

.filter__date-input {
  width: calc((100% - 104px) / 2);
  border: none;
  margin: 16px;
  padding: 0;
}

.filter__date-input:invalid {
  color: red;
}
</style>
