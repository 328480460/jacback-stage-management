<template>
  <div class="grid">
      <table border="0">
        <tr>
          <td>id</td>
          <td>操作人</td>
          <td>文件</td>
          <td>模块</td>
          <td>控制器</td>
          <td>方法</td>
          <td>详细参数</td>
          <td>操作方法</td>
        </tr>
        <tr v-for='(i,key,value) in tabledata'>
          <td  @click='say'> {{i.id}}</td>
          <td  @click='say'> {{i.name}}</td>
          <td  @click='say'> {{i.file}}</td>
          <td  @click='say'> {{i.module}}</td>
          <td  @click='say'> {{i.control}}</td>
          <td  @click='say'> {{i.fn}}</td>
          <td  @click='say'> {{i.detailArg}}</td>
          <td  @click='say'> {{i.operation}}</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: 'grid',
  data () {
    return {
      childData:'childData'
    }
  },
  methods:{
    say(){
      this.$emit('child-say',this.childData);
    }
  },
  props:['tabledata']
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
*{padding: 0;margin: 0;}
table {
  border: 1px solid #333;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  tr {
    min-height: 40px;
    height: 30px;
    text-align: center;
  }
}
</style>