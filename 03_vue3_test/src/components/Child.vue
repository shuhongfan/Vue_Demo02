<template>
  <div class="child">
    <h1>我是Child组件</h1>
    <Son></Son>
  </div>
</template>

<script>
import Son from "@/components/Son";

export default {
  name: "Child",
  components:{
    Son
  }
}
</script>

<style scoped>
.child{
  background-color: skyblue;
  padding: 10px;
}
</style>
