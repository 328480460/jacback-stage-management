<template>
  <div class="left-list" >
      <ul>
          <li v-for='i in controlList'  :class="{active:currentId == i.id}" @click.prevent='addTab(i)'  @click="showCList(i)">
            <a href="javascript:;"> {{i.name}}</a>
            <ul :class='{show:i.isOpen,hide:!i.isOpen}' class="text-indent-60">
                <li :class="{active:currentId == j.id}" v-for= 'j in i.children' @click.prevent='addTab(j)'  @click="showCList(i)">
                     <router-link :to="j.name">{{j.name}}</router-link>
                </li>
            </ul>
          </li>
      </ul>
  </div>
</template>
<script>
window.onload=function(){
  var windowH = window.innerHeight;
  var left_list = document.querySelector('.left-list');
  left_list.style.height = windowH- 50 +'px';
}
import {mapMutations} from 'vuex'
import {controlList} from '../falsedata/falsedata.js'

export default {
  name: 'left',
  data () {
    return {
      controlList:controlList
    }
  },
  methods:{
    showCList(ele){
      ele.isOpen = !ele.isOpen; 
    },
    addTab(ele) {
      if(ele.id == 0) {
        this.$router.push(ele.name);
      }
      if(!ele.children) {
        this.$store.commit('addTab',ele);
        return
      }
    }
  },
 /* methods: {
    showCList(ele){
      ele.isOpen = !ele.isOpen;
    },
    ...mapMutations({
      addTab:'addTab'
    })
  },*/
  computed:{
      currentId(){
        return this.$store.state.currentId
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
*{padding: 0;margin:0;}
ul li {list-style: none}
.left-list{;height: 800px;background-color: #333;width: 200px;color: #ffffff;text-align: left;text-indent: 30px}
.left-list >ul>li {width: 100%;height: auto;line-height: 2;}
.active{background-color: red};
.left-list >ul>li>a {display: block;width: 100%;color: #fff;}
.left-list >ul>li>a:hover {background-color: yellow;color: red}
.left-list >ul>li>ul>li>a {display: block;width: 100%;color: #fff;}
.left-list >ul>li>ul>li>a:hover {background-color: yellow;color: red;}
.show {display: block;}
.hide {display: none;}
.mgl-20 {margin-left: 30px;}
.text-indent-60 {text-indent: 60px}
</style>
