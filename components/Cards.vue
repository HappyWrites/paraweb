<template>
  <section class="cards">
    <ul class="cards__items">
      <Card v-for="card in items" :card="card" :key="card.id" />
    </ul>
  </section>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch('getCards')
  },

  computed: {
    items() {
      if (this.$store.state.filterCardsWithDesiredAuthor) {
        return this.$store.getters.getCardsWithDesiredAuthor;
      }
      return this.$store.getters.getCardsWithDesiredDate;
    }
  }
}
</script>
<style>
.cards {
  padding-bottom: 35px;
}

@media screen and (min-width: 768px) {
  .cards {
    padding: 0 138px 65px;
  }
}

.cards__items {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  gap: 20px 20px;
}
</style>
