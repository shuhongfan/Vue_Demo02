import Vue from 'vue'  // 引入VUE
import App from './App.vue'// 引入App组件，它是所有组件的父组件
// import store from './store/index'

import router from "@/router";

// 创建Vue实例对象
const vm = new Vue({
  render: h => h(App),
  router,
  // store,
  // beforeCreate() {
  //   // 安装全局事件总线
  //   Vue.prototype.$bus=this
  // }
}).$mount('#app')
