<template>
  <div class="section">
       <div class="name"> {{subPage_1}}</div>
  </div>
</template>

<script>
export default {
  name: 'section',
  data () {
    return {
    	subPage_1:'后台首页'
    }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>

*{padding: 0;margin: 0;}
.section {position: absolute;left: 200px;top: 100px;right:0;bottom: 0;}
.section {
	.name {
		color: blue;
	} 
}
</style>