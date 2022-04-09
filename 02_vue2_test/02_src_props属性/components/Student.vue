<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <h2>年龄：{{myAge}}</h2>

    <button @click="updateAge">尝试修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",

  // 简单声明接收
  // props:['name','age','sex'],

  // 接收的同时对数据进行类型限制
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // },

  // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props:{
    name:{
      type:String,  // name的类型是字符串
      require:true
    },
    age:{
      type:Number,
      default:99
    },
    sex:{
      type:String,
      require: true
    }
  },

  data(){
    return{
      msg:'我是尚硅谷的学生',
      myAge:this.age
    }
  },
  methods:{
    updateAge(){
      this.myAge++
    }
  }
}
</script>

<style scoped>
.demo{
  background-color: orange;
}
</style>
