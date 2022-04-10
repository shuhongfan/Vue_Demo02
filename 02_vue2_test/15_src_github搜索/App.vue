<template>
  <div id="app">
    <div class="container">
      <search></search>
      <List></List>
    </div>
  </div>
</template>

<script>

import List from "@/components/List";
import search from "@/components/Search";

export default {
  name: "App",
  components:{
    List,
    search
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style>


</style>
