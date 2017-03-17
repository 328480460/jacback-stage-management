<template>
  <div class="header">
    <h1 @mouseenter="openList" @mouseleave='hideList'>{{ msg }}
    <div class="list ">
      <ul>
          <li v-for='i in list'>{{i}}</li>
      </ul>
    </div>
    </h1>q
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: '个人中心',
      list:["账号详情","账号管理","退出登录"]
    }
  },
  methods: {
    openList(){
        this.$el.querySelector('.list').classList.add('show');
    },
    hideList(){
        this.$el.querySelector('.list').classList.remove('show');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
*{padding:0;margin: 0;}
.header {height: 50px;background-color: blue;line-height: 50px;}
.header h1 {font-size: 16px; color: #000;float: right;width: 100px;position: relative;margin-right: 100px;}
.list.show {display: block}
.list {display: none;background-color: red;font-size: 16px;position: absolute;width: 100px;z-index: 999;}
.list ul li {display: block;line-height: 2;width: 100%;}
.list ul li:hover {background-color: yellow}
</style>
