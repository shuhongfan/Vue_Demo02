<template>
  <div class="demo">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>

  </div>
</template>

<script>
export default {
  name: "School",
  data(){
    return{
      schoolName:'尚硅谷',
      address:"武汉"
    }
  },
  methods:{

  },
  mounted() {
    console.log(this.$bus)
    this.$bus.$on('hello',(data)=>{
      console.log("我是school组件，收到了数据：",data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}
</script>

<style scoped>
.demo{
  background-color: orange;
}
</style>
