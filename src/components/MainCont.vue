<template>
  <div class="section">
  	<transition name='router-fade'>
       <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'section'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>

*{padding: 0;margin: 0;}
.section {position: absolute;left: 200px;top: 100px;right:0;bottom: 0;overflow: hidden;}
.router-fade-enter-active, .router-fade-leave {
  transition: all .5s; 
  transform: translate3d(0,0,0);
}
.router-fade-enter, .router-fade-leave-active {
  transform: translate3d(100%,0,0);
}
</style>
