<template>
  <div class="home">
    <div class="theme"></div>
    <headers/>
    <div class="home-content">
      <router-view/>
    </div>
    <footers/>
  </div>
</template>

<script>
  import headers from '../components/headers/headers'
  import footers from '../components/footer'

  export default {
    name: 'home',
    components: {
      headers, footers
    },
  }
</script>

<style scoped>
  .home-content{
    min-height: 1000px;
    position: relative;
  }
  .theme{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(https://xiaoyou66.com/wp-content/uploads/2019/09/01.jpg);
    background-size: cover;
    background-attachment: fixed;
    background-position: right bottom;
    background-repeat: no-repeat;
  }
</style>
