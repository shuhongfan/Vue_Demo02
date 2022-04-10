<template>
  <h1>我是APP组件</h1>
  <h2>姓名： {{name}}</h2>
  <h2>年龄： {{age}}</h2>
  <h3>工作种类： {{job.type}}</h3>
  <h3>工作薪水: {{job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {h, ref} from 'vue'
export default {
  name: 'App',
  setup(){
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type:"前端工程师",
      salary:'30K'
    })

    function changeInfo() {
      name.value='李四'
      age.value=66
      console.log(name,age)

      job.value.type='后端工程师'
      job.value.salary='40k'
    }

    return{
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

<style>

</style>
