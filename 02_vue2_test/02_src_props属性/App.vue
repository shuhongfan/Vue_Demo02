<template>
  <div>
    <Student name="李四" sex="女" v-bind:age="89"/>
    <Student name="张山" sex="男" :age="99"/>
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

    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
