<template>
  <div class="mianIndex">
       <search-box @searchLimit ='search'></search-box>
       <grid :tabledata ='firstPageData' v-on:child-say='showParentName'></grid>
       <page-limit :pagesList = 'pagesList' :index = 'currenIndex' v-on:getPageData ="getPageData"></page-limit>
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
    this.firstPageData = this.filterData.slice(this.currenIndex-1,this.showListCount)
  },
  data () {
    return {
    	url:'htttp://www.baidu.com',
      falseGridData:falseGridData,  //全部数据
      firstPageData:'',             //首页
      showListCount: 5,             //每页显示条数
      currenIndex :1,               //当前页
      keyword:''                    //查询关键字
    }
  },
  computed: {
    pagesList() {
      return Math.ceil(this.filterData.length/this.showListCount)
    },
    filterData(){
      if(!this.keyword) {
        return this.falseGridData;
      }
      var vm = this;
      return this.falseGridData.filter((item)=>{
          return item.id == vm.keyword || item.name == vm.keyword || item.file ==vm.keyword || item.module ==vm.keyword || item.control ==vm.keyword || item.fn ==vm.keyword || item.detailArg ==vm.keyword || item.operation ==vm.keyword;
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
      //重新加载首页
      this.firstPageData = this.filterData.slice(this.currenIndex-1,this.showListCount);
      this.currenIndex = 1;

    },
    showParentName(childsay) {
      console.log('parents' + childsay );
    },
    getPageData(index) {
      //去后台请求分页数据
      this.currenIndex = index;
      var start = (this.currenIndex-1)*this.showListCount;
      var end = (this.currenIndex)*this.showListCount;
      this.firstPageData = this.filterData.slice(start, end);
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