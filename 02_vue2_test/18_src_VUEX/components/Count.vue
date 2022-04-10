<template>
  <div>
    <h1>当前求和为： {{ sum }}</h1>
    <h3>当前求和放大10倍的值： {{bigSum}}</h3>
    <h3>我在{{school}}学习，{{subject}}</h3>
    <h3>Person组件的总人数是:{{personList.length}}</h3>

    <select v-model="n">
      <option :value=1>1</option>
      <option :value=2>2</option>
      <option :value=3>3</option>
    </select>

    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @clic="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "Count",
  computed:{
    // sum(){
    //   return this.$store.state.sum
    // },
    // bigSum(){
    //   return this.$store.getters.bigSum
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    // },

    // 借助mapState生成计算属性，从state中读取数据  对象方式
    // ...mapState({sum:'sum',school:'school',subject:'subject'}),
    ...mapState('countAbout',['sum','school','subject']),
    ...mapState('personAbout',['personList']),

    ...mapGetters('countAbout',['bigSum']),
  },
  data(){
    return{
      n:1
    }
  },
  methods:{
    // increment(){
    //   // this.$store.dispatch('jia',this.n)
    //   this.$store.commit("JIA",this.n)
    // },
    // decrement(){
    //   // this.$store.dispatch('jian',this.n)
    //   this.$store.commit("JIAN",this.n)
    // },
    ...mapMutations('countAbout',{increment:"JIA",decrement:"JIAN"}),
    // ...mapMutations(["JIA","JIAN"]),

    // incrementOdd(){
    //   this.$store.dispatch('jiaOdd',this.n)
    // },
    // incrementWait(){
    //   this.$store.dispatch('jiaWait',this.n)
    // },

    ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    // ...mapActions(['jiaOdd','jiaWait']),
  },
  mounted() {
    // const x = mapState({he:'sum',bigSum:'bigSum',xuexiao:'school',xueke:'subject'})
    // console.log(x)
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>
