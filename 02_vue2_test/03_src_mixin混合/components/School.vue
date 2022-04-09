<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
// 引入一个混合
import {minxin,minxin2} from "@/minxin";

export default {
  name: "School",
  data(){
    return{
      name:'尚硅谷',
      address:"武汉"
    }
  },
  mixins:[minxin,minxin2]
}
</script>

<style scoped>
.demo{
  background-color: orange;
}
</style>
