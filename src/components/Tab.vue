<template>
  <div class="tab">
        <ul>
            <li :class="{active:currentId == i.id}" v-for='(i,index) in list' @click='turn(i)' @dblclick='delTab(i,index)'>{{i.name}}</li>
        </ul>
  </div>
</template>

<script>
import  {mapState} from 'vuex'
export default {
    name: 'tab',
    methods:{
      delTab(ele,index) {
        //如果是第一个不删除
        if(index ==0){
            return;
        }
        //从新定向路由
        var _obj = this.$store.state.tabList[index+1];
        if(_obj) {
          this.$router.push(_obj.name);
        }else {
          this.$router.push('后台首页');
        }
        this.$store.commit('delTab',index);
        
      },
      turn(ele) {
        this.$router.push(ele.name);
        this.$store.commit('turn',ele);
      }
    },

    /*使用 mapstate 获取多个state中的数据*/
    computed:mapState({
      list: state => state.tabList,
      currentId: state => state.currentId
    })

    /*computed:{
      list(){
        return this.$store.state.tabList
      },
      currentId(){
        console.log(this.$store.state.currentId)
        return this.$store.state.currentId
      }
    }*/

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{padding: 0;margin: 0;}
.active {background-color: red}
.tab {position: absolute;left: 200px;top: 50px;right:0;height: 50px;background-color: green;z-index: 9;color: #fff;}
.tab ul li {list-style: none;display: inline-block;color: #fff;margin: 4px 10px;cursor: pointer;}
</style>
