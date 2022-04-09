<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <hr>
    <School ref="sch"/>
    <hr>
    <Student/>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components:{
    School,
    Student
  },
  data(){
    return{
      msg:"欢迎━(*｀∀´*)ノ亻!"
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs)
    }
  }
}
</script>

<style scoped>

</style>
