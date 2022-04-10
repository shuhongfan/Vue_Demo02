<template>
  <h2>姓名： {{person.name}}</h2>
  <h2>年龄： {{person.age}}</h2>
  <button @click="test">测试触发一个Demo组件的Hello事件</button>
  <br>


  姓: <input type="text" v-model="person.firstName"> <br>
  名: <input type="text" v-model="person.lastName"> <br>

  全名： <input type="text" v-model="fullName">
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: "Demo",
  props:['msg','name'],
  emits:['hello'],
  beforeCreate() {
    console.log("beforeCreate")
  },
  setup(props,context){
    console.log(props,context)
    let person = reactive({
      name:'张三',
      age:18,
      firstName:'张',
      lastName:'三'
    })

    function test() {
      context.emit("hello",666)
    }

    // let fullName = computed(()=>{
    //   return person.firstName+"-"+person.lastName
    // })

    let fullName = computed({
      get(){
        return person.firstName+"-"+person.lastName
      },
      set(v){
        const nameArr = v.split('-')
        person.firstName=nameArr[0]
        person.lastName=nameArr[1]
      }
    })

    return{
      person,
      test,
      fullName
    }
  }
}
</script>

<style scoped>

</style>
