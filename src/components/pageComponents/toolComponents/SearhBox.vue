<template>
  <div class="search-box">
       <div class="search-input-box"> 
			<label>搜索条件</label>
			<input type="text" name="search" v-model='keyword' @input='change'>
       </div>

  </div>
</template>

<script>
export default {
  name: 'search-box',
  data() {
    return {
      keyword:''
    }
  },
  methods:{
    change() {
      this.$emit('searchLimit',this.keyword);
    }
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
*{padding: 0;margin: 0;}
.search-box {

}

</style>