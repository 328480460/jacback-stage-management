<template>
  <div class="section">
       <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'section',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{padding: 0;margin: 0;}
.section {position: absolute;left: 200px;top: 100px;right:0;bottom: 0;}

</style>
