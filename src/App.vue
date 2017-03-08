<template>
  <div id="app" >
    <Head_my></Head_my>
    <Left></Left>
    <Tab></Tab>  
    <MainCont></MainCont>
  </div>
</template>

<script>
import Head_my from 'components/Head_my.vue'
import Left from 'components/Left.vue'
import MainCont from 'components/MainCont.vue'
import Tab from 'components/Tab.vue'

export default {
  name: 'app',
  methods:{
    showName:function(){
      alert('qwe');
    }
  },
  components: {
      Head_my,
      Left,
      MainCont,
      Tab
    } 
}
</script>
<style>
*{padding: 0;margin: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  *{padding:0;margin: 0}
}
</style>
