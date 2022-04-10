<template>
  <h1>我是APP组件</h1>
  <h2>姓名： {{person.name}}</h2>
  <h2>年龄： {{person.age}}</h2>
  <h2 v-show="person.sex">性别： {{person.sex}}</h2>
  <h3>工作种类： {{person.job.type}}</h3>
  <h3>工作薪水: {{person.job.salary}}</h3>
  <h3>三大爱好: {{person.hobby}}</h3>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除name属性</button>
</template>

<script>
import {h, reactive, ref} from 'vue'
export default {
  name: 'App',
  setup(){
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        type:"前端工程师",
        salary:'30K',
        a:{
          b:{
            c:666
          }
        }
      },
      hobby:['抽烟','喝酒','烫头']
    })

    function changeInfo() {
      person.name='李四'
      person.age=69
      person.job.type='后端工程师'
      person.job.salary='40k'
      person.job.a.b.c=8989
      person.hobby[0]='学习'
    }

    function addSex(){
      person.sex='男'
    }

    function deleteName(){
      delete person.name
    }

    return{
      person,
      changeInfo,
      addSex,
      deleteName
    }
  }
}
</script>

<style>

</style>
