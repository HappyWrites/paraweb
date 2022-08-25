<template>
  <li class="filter__list-item canceling-standart">
    <p v-if="this.$store.state.filterOnAuthorIsActive" class="filter__item" @click="searchAuthor(author)">{{ author }}
    </p>
  </li>
</template>
<script>
export default {
  props: {
    author: String
  },

  methods: {
    searchAuthor(author) {
      this.$store.commit('getSearchAuthor', author)
      this.$store.commit('activateFilterCardsWithDesiredAuthor')
      this.$store.commit('toggleFilterOnAuthor')
    }
  }
}
</script>
<style scoped>
.filter__item {
  padding: 16px 16px 0;
  margin: 0;
}

.filter__item:hover {
  background-color: #F6F9FF;
}

.canceling-standart {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
</style>
