<template>
  <div class="mianIndex">
       <search-box @searchLimit ='search'></search-box>
       <grid :tabledata ='gridData' v-on:child-say='showParentName'></grid>
       <page-limit :pagesList = 'pagesList' v-on:getPageData ="getPageData"></page-limit>
  </div>
</template>

<script>
import Vue from 'vue'
import SearchBox from './toolComponents/SearhBox.vue'
import Grid from './toolComponents/Grid.vue'
import PageLimit from './toolComponents/PageLimit.vue'
import VueResource from 'vue-resource'
import {falseGridData} from '../../falsedata/falsedata.js'

Vue.use(VueResource)

export default {
  name: 'section',
  mounted: function(){
    this.gridData = this.falseGridData.slice(this.currenIndex-1,this.showListCount)
  },
  data () {
    return {
    	url:'htttp://www.baidu.com',
      falseGridData:falseGridData,
      gridData:'',
      showListCount: 5,
      currenIndex :1,
      searchLimit:'',
      keyword:''
    }
  },
  computed: {
    pagesList() {
      return Math.ceil(this.falseGridData.length/this.showListCount)
    },
    filterData(){
      var vm = this;
      return vm.falseGridData.filter((item)=>{

          return item.name == vm.keyword;
      });
    }

  },
  methods:{
   /* getData() {
      this.$http.get(this.url).then((response)=>{
          console.log(response.data)
      })
    },*/
    search(keyword) {
      this.keyword = keyword;
      this.gridData = this.filterData;
    },
    showParentName(childsay) {
      console.log('parents' + childsay );
    },
    getPageData(index) {
      //去后台请求分页数据
      this.currenIndex = index;
      var start = (this.currenIndex-1)*this.showListCount;
      var end = (this.currenIndex)*this.showListCount;
      this.gridData = this.falseGridData.slice(start, end);
    }
  },
  components: {
      SearchBox,
      Grid,
      PageLimit
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