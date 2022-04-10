<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="keyword" type="text" placeholder="enter the name you search"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data(){
    return{
      keyword:''
    }
  },
  methods:{
    searchUsers(){
      // 请求前更新List的数据
      this.$bus.$emit('updateListData',{
        isFirst: false,
        isLoading: true,
        errMag:'',
        users:[]
      })

      axios.get(`https://api.github.com/search/users?q=${this.keyword}`)
      .then(
          response=>{
            console.log("请求成功",response)
            this.$bus.$emit('updateListData',{
              isLoading: false,
              errMag:'',
              users:response.data.items
            })
          },
          error=>{
            console.log("请求失败",error)
            this.$bus.$emit('updateListData',{
              isLoading: false,
              errMag:error.message,
              users:[]
            })
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
