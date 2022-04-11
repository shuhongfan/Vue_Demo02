<template>
  <h5>当前的X值是：{{x.y}}</h5>
  <button @click="x[y]++">点我+1</button>

  <hr>
  <h2>姓名： {{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}</h2>

  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import {
  reactive, readonly,
  ref, shallowRef, toRaw, toRef, toRefs,
} from "vue";

export default {
  name: "Demo",
  setup(props,context){
    let person=reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    let x = shallowRef({
      y:0
    })
    console.log(x)

    // person = readonly(person)

    function showRawPerson() {
      const p = toRaw(person)
      p.age++
      console.log(p)

      const sum = toRaw(sum)
    }

    return{
      x,
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>
