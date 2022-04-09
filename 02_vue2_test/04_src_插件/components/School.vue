<template>
  <div class="demo">
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="test">点我测试hello方法</button>
  </div>
</template>

<script>

export default {
  name: "School",
  data(){
    return{
      name:'尚硅谷shuhongfan',
      address:"武汉"
    }
  },
  methods:{
    test(){
      this.hello()
    }
  }
}
</script>

<style scoped>
.demo{
  background-color: orange;
}
</style>
