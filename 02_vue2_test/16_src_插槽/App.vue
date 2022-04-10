<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://avatars.githubusercontent.com/u/22501693?v=4" alt=""></Category>
      <a slot="footer" href="">aaaa</a>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video slot="center" src=""></video>
      <template v-slot:footer>
        <div>
          <a href="">经典</a>
          <a href="">热门</a>
          <a href="">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>

import Category from "@/components/Category";

export default {
  name: "App",
  components:{
    Category
  },
  data() {
    return {
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
}
</style>
