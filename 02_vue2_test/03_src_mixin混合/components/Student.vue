<template>
  <div class="demo">
    <h2 @click="showName">姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
// 引入一个混合
import {minxin,minxin2} from "@/minxin";

export default {
  name: "Student",

  data(){
    return{
      name:'张三',
      sex:'男',
      x:6565
    }
  },
  mixins:[minxin,minxin2],
  mounted() {
    console.log("566666666666666")
  }
}
</script>

<style scoped>
.demo{
  background-color: orange;
}
</style>
