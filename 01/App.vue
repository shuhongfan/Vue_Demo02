<template>
  <div>
    <School></School>
    <hr>
    <Student></Student>
  </div>
</template>

<script>
import School from "./School";
import Student from "./Student";

export default {
  name: "App",
  components:{
    School,
    Student
  }
}
</script>

<style scoped>

</style>
