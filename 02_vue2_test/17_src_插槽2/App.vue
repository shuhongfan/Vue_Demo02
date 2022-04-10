<template>
  <div class="container">
    <Category title="游戏">
      <template scope="shf">
        <ul>
          <li v-for="(item,index) in shf.games" :key="index">
            {{item}}
          </li>
        </ul>
      </template>

    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li style="color:#33ff32;" v-for="(item,index) in games" :key="index">
            {{item}}
          </li>
        </ol>
      </template>

    </Category>

    <Category title="游戏">
      <template slot-scope="{games}">
        <ul>
          <li style="color: yellow" v-for="(item,index) in games" :key="index">
            {{item}}
          </li>
        </ul>
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
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
}
</style>
