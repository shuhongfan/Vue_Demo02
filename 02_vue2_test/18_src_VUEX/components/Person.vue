<template>
  <div>
    <h1>Person</h1>
    <h3>Count组件求和为： {{sum}}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加随机姓名的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
import {nanoid} from "nanoid";

export default {
  name: "Person",
  data(){
    return{
      name:''
    }
  },
  methods:{
    add(){
      const personObj = {id:nanoid(),name:this.name}
      console.log(personObj)
      this.$store.commit("personAbout/ADD_PERSON",personObj)
    },
    addWang(){
      const personObj = {id:nanoid(),name:this.name}
      console.log(personObj)
      this.$store.dispatch("personAbout/addPersonWang",personObj)
    },
    addPersonServer(){
      this.$store.dispatch("personAbout/addPersonServer")
    }
  },
  computed:{
    personList(){
      return this.$store.state.personAbout.personList
    },
    sum(){
      return this.$store.state.sum
    },
    firstPersonName(){
      return this.$store.getters["personAbout/firstPersonName"]
    }
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>

</style>
