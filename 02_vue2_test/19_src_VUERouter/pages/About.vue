<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log("About组件即将销毁")
  },
  mounted() {
    console.log("About组件即将挂载",this)
  },
  beforeRouteEnter(to,from,next){
    console.log("beforeRouteEnter")
  },
  beforeRouteLeave(to,from,next){
    console.log("beforeRouteLeave")
  }
}
</script>

<style scoped>

</style>
