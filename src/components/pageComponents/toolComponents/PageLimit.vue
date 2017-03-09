<template>
  <div class="pagelimit">
    <ul>
        <li :class="{'active':index == i}" v-for='i in pagesList' @click='turn(i)'>{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pagelimit',
  props:['pagesList'],
  methods:{
    turn(curr) {
      this.index = curr;
      /*去请求页面数据*/
      this.$emit('getPageData',curr);
    }
  },
  data(){
    return {
      index:1
    }
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
*{padding: 0;margin: 0;}
ul {
  font-size: 0;
  text-align: left;
  margin-left: 110px;
  margin-top: 30px;
  li {
    font-size: 16px;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #999999;
    display: inline-block;
    cursor: pointer;
  }
  .active {
    background-color: yellow;
  }
}
</style>