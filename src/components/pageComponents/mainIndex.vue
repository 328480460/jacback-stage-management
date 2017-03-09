<template>
  <div class="mianIndex">
       <search-box></search-box>
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

Vue.use(VueResource)
export default {
  name: 'section',
  mounted: function(){
    // this.getData();
  },
  data () {
    return {
    	url:'htttp://www.baidu.com',
      gridData:[{id:'',name:'操作人',file:'文件',module:'模块',control:'控制器',fn:'方法',detailArg:'详细参数',operation:'操作方法'},{id:'1',name:'zhang',file:'vue',module:'vuex',control:'ctrl',fn:'dosomething',detailArg:'12.12.2',operation:'just do it'},{id:'2',name:'zhang',file:'vue',module:'vuex',control:'ctrl',fn:'dosomething',detailArg:'12.12.2',operation:'just do it'},{id:'3',name:'zhang',file:'vue',module:'vuex',control:'ctrl',fn:'dosomething',detailArg:'12.12.2',operation:'just do it'},{id:'4',name:'zhang',file:'vue',module:'vuex',control:'ctrl',fn:'dosomething',detailArg:'12.12.2',operation:'just do it'},{id:'5',name:'zhang',file:'vue',module:'vuex',control:'ctrl',fn:'dosomething',detailArg:'12.12.2',operation:'just do it'}
      ],
      pagesList:10
    }
  },
  methods:{
    getData() {
      this.$http.get(this.url).then((response)=>{
          console.log(response.data)
      })
    },
    showParentName(childsay) {
      console.log('parents' + childsay );
    },
    getPageData(index) {
      console.log(index);
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