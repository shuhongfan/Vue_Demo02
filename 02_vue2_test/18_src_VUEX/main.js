import Vue from 'vue'  // 引入VUE
import App from './App.vue' // 引入App组件，它是所有组件的父组件
import Vuex from "vuex";
import store from './store/index'


// 创建Vue实例对象
const vm = new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus=this
  }
}).$mount('#app')
