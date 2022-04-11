<template>
	<div class="child">
		<h3>我是Child组件</h3>
		<Son/>
    <h3>sum</h3>
	</div>
</template>

<script>
	import Son from './Son'
  import {ref} from "vue";
	export default {
		name:'Child',
		components:{Son},
    setup(){
      let sum = ref(0)
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve({sum})
        },1000)
      })
    }
	}
</script>

<style>
	.child{
		background-color: skyblue;
		padding: 10px;
	}
</style>
