<template>
  <div class="demo">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>

  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data(){
    return{
      schoolName:'尚硅谷',
      address:"武汉"
    }
  },
  methods:{
    demo(msgName,data){
      console.log('hello消息收到了：',data,this)
    }
  },
  mounted() {
    // console.log(this.$bus)
    // this.$bus.$on('hello',(data)=>{
    //   console.log("我是school组件，收到了数据：",data)
    // })

    this.pubId = pubsub.subscribe("hello", (messageName,data)=> {
      console.log(this)
      console.log("有人发布了hello消息，hello消息的回调执行成功",this.demo(messageName,data))
    })
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped>
.demo{
  background-color: orange;
}
</style>
