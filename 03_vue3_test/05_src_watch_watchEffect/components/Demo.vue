<template>
  <h2>当前求和为： {{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>

  <h2>当前的信息为：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>

  <h2>姓名： {{person.name}}</h2>
  <h2>年龄： {{person.age}}</h2>
  <h2>薪资： {{person.job.j1.salary}}</h2>
  <button @click="person.name+='!'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import {computed, reactive, ref, watch, watchEffect} from "vue";

export default {
  name: "Demo",
  setup(props,context){
    let sum = ref(0)
    let msg = ref("你好啊")

    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // watch(sum,(newValue,oldValue)=>{
    //   console.log("sum变了",newValue,oldValue)
    // })
    // watch(msg,(newValue,oldValue)=>{
    //   console.log("msg变了",newValue,oldValue)
    // })
    watch([msg,sum],(newValue,oldValue)=>{
      console.log("msg变了",newValue,oldValue)
    },{immediate:true,deep:true})

    watch(person,(newValue,oldValue)=>{
      console.log("person变化了",newValue,oldValue)
    },{immediate:true})

    // watch(()=>person.age,(newValue,oldValue)=>{
    //   console.log("person.age变化了",newValue,oldValue)
    // })
    //
    watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
      console.log("person.age/name变化了",newValue,oldValue)
    })

    watch(()=>person.job,(newValue,oldValue)=>{
      console.log("person.job变化了",newValue,oldValue)
    },{immediate:true})

    watchEffect(()=>{
      const x1 = sum.value
      const x2=person.job.j1.salary
      console.log("watchEffect所指定的回调执行了")
    })
    return{
      sum,
      msg,
      person
    }
  }
}
</script>

<style scoped>

</style>
