<template>
  <div class="todo-container">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  components:{

  },
  data(){
    return{

    }
  },
  methods:{
    getStudents(){
      axios.get("http://localhost:8080/api/students")
          .then(response=>{
            console.log("请求成功",response.data)
      },error=>{
            console.log("请求失败",error)
          })
    },
    getCars(){
      axios.get("http://localhost:8080/demo/cars")
          .then(response=>{
            console.log("请求成功",response.data)
          },error=>{
            console.log("请求失败",error)
          })
    }
  }
}
</script>

<style>

</style>
