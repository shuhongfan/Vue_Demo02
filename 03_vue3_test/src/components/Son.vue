<template>
  <div class="son">
    <h1>我是Son组件,{{car.name}}----{{car.price}}</h1>
    <Dialog></Dialog>
  </div>
</template>

<script>
import {inject} from "vue";
import Dialog from "@/components/Dialog";

export default {
  name: "Son",
  components:{
    Dialog
  },
  setup: function () {
    let car = inject('car');
    console.log(car)

    return{
      car
    }
  }
}
</script>

<style scoped>
.son{
  background-color: orange;
  padding: 10px;
}
</style>
