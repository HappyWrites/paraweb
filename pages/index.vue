<template>
  <div class="page">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.page {
  min-width: 320px;
  margin: 0 auto;
  text-rendering: optimizeLegibility;
  font-family: 'Montserrat', Arial, sans-serif;
  padding: 0;
  padding-top: 56px;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
}

@media screen and (min-width: 768px) {
  .page {
    padding-top: 88px;
  }
}
</style>
