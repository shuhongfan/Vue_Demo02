<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>

import {customRef} from "vue";

export default {
  name: 'App',
  components:{

  },
  setup(){
    // 自定义Ref
    function myRef(value) {
      console.log(value)
      return customRef((track, trigger)=>{
        let timer
        return{
          get(){
            console.log(`有人从myRef这个容器读取数据了，我把${value}给它了`)
            track() // 通知Vue追踪value的变化
            return value
          },
          set(v){
            console.log(`有人把myRef这个容器中数据改了，${v}`)
            clearTimeout(timer)

            timer=setTimeout(()=>{
              value=v
              trigger() // 通知vue去重新解析模板
            },500)

          }
        }
      });
    }

    let keyWord = myRef("hello")
    return {keyWord}
  }
}
</script>

<style>

</style>
