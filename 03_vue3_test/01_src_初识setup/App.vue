<template>
  <h1>我是APP组件</h1>
  <h2>姓名： {{name}}</h2>
  <h2>年龄： {{age}}</h2>
  <button @click="sayHello">说话（VUE3所配置的sayHello）</button>
  <br>
  <button @click="sayWelcome">说话（VUE2所配置的sayWelcome）</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',
  components: {

  },
  methods:{
    sayWelcome(){
      alert("欢迎来到尚硅谷学习")
    }
  },
  setup(){
    // 数据
    let name = '张三'
    let age = 18

    function sayHello() {
      alert(`我叫${name},我今年${age}`)
    }

    // return{
    //   name,
    //   age,
    //   sayHello
    // }

    // 返回一个渲染函数
    return ()=>{return h('h1','shf')}
  }
}
</script>

<style>

</style>
