<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <hr>
    <School/>
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

  }
}
</script>

<style scoped>

</style>
