<template>
    <div>
      <h2 v-show="person.name">姓名： {{person.name}}</h2>
      <h2>年龄： {{person.age}}</h2>
      <h2 v-show="person.sex">性别： {{person.sex}}</h2>
      <h2>爱好：{{person.hobby}}</h2>
      <button @click="addSex">添加一个sex属性</button>
      <button @click="deleteName">删除name属性</button>
      <button @click="updateHobby">更新hobby</button>
    </div>
</template>

<script>

import Vue from "vue";

export default {
  name: "App",
  data(){
    return {
      person:{
        name:'张三',
        age:18,
        hobby:['抽烟','喝酒']
      }
    }
  },
  methods:{
    addSex(){
      // this.person.sex='女'

      // this.$set(this.person,'sex','女')

      Vue.set(this.person,'sex','女')
    },
    deleteName(){
      // delete this.person.name
      // console.log(this.person.name)

      this.$delete(this.person,'name')
    },
    updateHobby(){
      this.$set(this.person.hobby,0,'逛街')
    }
  }
}
</script>

<style scoped>

</style>
