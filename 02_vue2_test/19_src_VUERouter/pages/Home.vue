<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <div>
          <h2>Home组件内容</h2>
          <div>
            <ul class="nav nav-tabs">
              <li>
                <router-link class="list-group-item" to="/home/message">Message</router-link>
              </li>
              <li>
                <router-link class="list-group-item" to="/home/news">News</router-link>
              </li>
            </ul>
            <keep-alive include="News">
              <router-view/>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "@/pages/Message";
import News from "@/pages/News";

export default {
  name: "Home",
  components:{
    Message,
    News
  },
  beforeDestroy() {
    console.log("Home组件即将销毁")
  },
  mounted() {
    console.log("Home组件即将挂载",this)
  }
}
</script>

<style scoped>

</style>
