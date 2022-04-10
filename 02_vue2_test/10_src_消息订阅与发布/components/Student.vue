<template>
  <div class="demo">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <hr>
    <button @click="sendStudentName">把学生名给school组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data(){
    return{
      name:'张三',
      age:18
    }
  },
  methods:{
    sendStudentName(){
      // this.$bus.$emit('hello',666)
      pubsub.publish("hello",6666)
    }
  },
  mounted() {
    console.log(this.$bus);
  }
}
</script>

<style scoped>
.demo{
  background-color: orange;
}
</style>
