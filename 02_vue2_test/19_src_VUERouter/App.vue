<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
<!--          <router-link active-class="active" class="list-group-item" to="/about">About</router-link>-->
          <router-link active-class="active" class="list-group-item" :to="{name:'guanyu'}">About</router-link>
          <router-link active-class="active" class="list-group-item" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import Home from "@/pages/Home";
import About from "@/pages/About";
import Banner from "@/components/Banner";

export default {
  name: "App",
  components:{
    Home,
    About,
    Banner
  }
}
</script>

<style scoped>

</style>
