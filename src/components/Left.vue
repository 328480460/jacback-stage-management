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
  left_list.style.height = windowH-50 +'px';
}
import {mapMutations} from 'vuex'
export default {
  name: 'left',
  data () {
    return {
      controlList:[
        {id:0,name:'后台首页','isOpen':false,'isClick':true},
        {id:2,name:'我的面板','isOpen':false,'isClick':false,children:[{id:21,name:'个人信息','isOpen':false,'isClick':false},{id:22,name:'修改密码','isOpen':false,'isClick':false},{id:23,name:'日志信息','isOpen':false,'isClick':false}]},
        {id:3,name:'用户管理','isOpen':false,'isClick':false,children:[{id:31,name:'用户列表','isOpen':false,'isClick':false},{id:32,name:'角色列表','isOpen':false,'isClick':false},{id:33,name:'菜单管理','isOpen':false,'isClick':false}]},
        {id:4,name:'内容管理','isOpen':false,'isClick':false,children:[{id:41,name:'网站栏目管理','isopen':false,'isClick':false},{id:42,name:'所有档案列表','isOpen':false,'isClick':false},{id:43,name:'待审核档案','isOpen':false,'isClick':true},{id:44,name:'我发布的档案','isOpen':false,'isClick':false},{id:45,name:'我发布的文档','isOpen':false,'isClick':false}]}
      ]
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

      // this.$store.commit('addTab',ele);
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
<style scoped>
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
