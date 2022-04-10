<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot name="center">我是默认值</slot>
    <slot name="footer">我是默认值</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['listData','title']
}
</script>

<style scoped>
.category{
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3{
  text-align: center;
  background-color: orange;
}
video{
  width: 100%;
}
img{
  width: 100%;
}
</style>
