<template>
  <div class="demo">
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>

    <button @click="sendStudentName">把学生名给APP</button>

    <button @click="unbind">解绑shf事件</button>

    <button @click="add">{{number}} 点我number++</button>
    <button @click="death">销毁当前Student组件的实例</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  props:[''],
  data(){
    return{
      name:'张三',
      sex:'男',
      number:0
    }
  },
  methods:{
    sendStudentName(){
      // 触发Student组件身上的shf事件
      this.$emit('shf',this.name)
      this.$emit('demo')
    },
    unbind(){
      // this.$off('shf')
      // this.$off(['shf','demo'])
      this.$off()
    },
    death(){
      // 销毁了当前Student的组件实例
      this.$destroy()
    },
    add(){
      console.log(this.number)
      this.number++
    }
  }
}
</script>

<style scoped>
.demo{
  background-color: orange;
}
</style>
