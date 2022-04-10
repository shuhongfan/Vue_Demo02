<template>
  <div>
    <h1>{{ studentName }}</h1>
<!--    通过父组件给子组件传递函数类型的props实现： 子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>
    <hr>

<!--    通过父组件给子组件绑定一个自定义事件实现：子给父传递数据-->
    <Student v-on:shf="getStudentName" @demo="m1"/>
    <hr>

 <!--    通过父组件给子组件绑定一个自定义事件实现：子给父传递数据  使用ref-->
    <Student ref="student"/>
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
      studentName:''
    }
  },
  methods:{
    getSchoolName(name){
      console.log("app收到了学校名:",name)
    },
    getStudentName(name,...params){
      console.log("app收到了学生名:",name,...params)
      this.studentName=name
    },
    m1(){
      console.log("demo事件被触发了")
    }
  },
  mounted() {
    this.$refs.student.$on('shf',this.getStudentName)
  }
}
</script>

<style scoped>

</style>
