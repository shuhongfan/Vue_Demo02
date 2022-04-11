<template>
  <h2>当前求和为： {{sum}}</h2>
  <button @click="sum++">点我+1</button>

</template>

<script>
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";

export default {
  name: "Demo",
  setup(props,context){
    let sum = ref(0)

    onBeforeMount(()=>{
      console.log("onBeforeMount")
    })

    onMounted(()=>{
      console.log("onMounted")
    })

    onBeforeUpdate(()=>{
      console.log("onbeforeunload")
    })

    onUpdated(()=>{
      console.log("onUpdated")
    })

    onBeforeUnmount(()=>{
      console.log("onBeforeUnmount")
    })

    onUnmounted(()=>{
      console.log("onUnmounted")
    })

    return{
      sum
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
  beforeUnmount() {
    console.log("beforeUnmount")
  },
  unmounted() {
    console.log("unmounted")
  }
}
</script>

<style scoped>

</style>
