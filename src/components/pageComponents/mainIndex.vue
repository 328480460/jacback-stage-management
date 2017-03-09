<template>
  <div class="mianIndex">
       <search-box></search-box>
  </div>
</template>

<script>
import Vue from 'vue'
import SearchBox from './toolComponents/SearhBox.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
export default {
  name: 'section',
  mounted: function(){
    // this.getData();
  },
  data () {
    return {
    	url:'htttp://www.baidu.com',
      gridData:''
    }
  },
  methods:{
    getData() {
      this.$http.get(this.url).then((response)=>{
          console.log(response.data)
      })
    }
  },
  components: {
      SearchBox
  }
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