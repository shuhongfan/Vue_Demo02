<template>
  <Demo/>
</template>

<script>
import {h, reactive, ref} from 'vue'
import Demo from "@/components/Demo";
export default {
  name: 'App',
  components:{
    Demo
  },
  setup(){
    function showHelloMsg(){
      alert("你好啊，你触发hello事件")
    }
    return{
      showHelloMsg
    }
  }
}
</script>

<style>

</style>
