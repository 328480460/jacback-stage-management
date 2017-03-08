<template>
  <div class="section">
       {{subPage_2}}
  </div>
</template>

<script>
export default {
  name: 'section',
  data () {
    return {
    	subPage_2:'修改密码'
    }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{padding: 0;margin: 0;}
.section {position: absolute;left: 200px;top: 100px;right:0;bottom: 0;}

</style>