<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
<!--        跳转路由并携带query参数 to的写法-->
<!--        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>-->

        <router-link :to="{
              path:'/home/message/detail',
              query:{
                id:m.id,
                title:m.title
              }
           }">
          {{m.title}}
        </router-link>

<!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>-->
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view/>


  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return{
      messageList:[
        {id:"001",title:"消息001"},
        {id:"002",title:"消息002"},
        {id:"003",title:"消息003"},
      ]
    }
  },
  methods:{
    pushShow(m){
      console.log(this.$router)
      this.$router.push({
        path:'/home/message/detail',
        query:{
          id:m.id,
          title:m.title
        }
      })
    },
    replaceShow(m){

    }
  }
}
</script>

<style scoped>

</style>
