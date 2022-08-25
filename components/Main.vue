<template >
  <main class="content">
    <Carousel />
    <Filters />
    <Cards />
  </main>
</template>
<script>
export default {

}
</script>
<style scoped>
.content {
  padding-top: 16px;
  background-color: #F6F9FF;
  min-height: 80vh;
}

@media screen and (min-width: 768px) {
  .content {
    padding-top: 0;
  }
}
</style>
