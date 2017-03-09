<template>
  <div class="mianIndex">
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
.mianIndex {
	.name {
		color: blue;
	} 
}
</style>