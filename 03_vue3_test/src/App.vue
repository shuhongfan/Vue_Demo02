<template>
  <div class="app">
    <h1>我是APP组件,{{name}}---{{price}}</h1>
    <suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <h3>加载中！！！</h3>
      </template>
    </suspense>

  </div>
</template>

<script>

// import Child from "@/components/Child";
const Child = defineAsyncComponent(()=>import('./components/Child')) // 异步引入
import {
  defineAsyncComponent,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  provide,
  reactive,
  readonly,
  ref,
  toRefs
} from "vue";

export default {
  name: 'App',
  components:{
    Child
  },
  setup(){
    let car = reactive({
      name:'奔驰',
      price:'40W'
    })

    let sum = ref(0)

    let car2 = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))
    console.log(isProxy(car2))

    // 给自己的后代组件传递数据
    provide('car',car)

    return{
      ...toRefs(car),
    }
  }
}
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>
