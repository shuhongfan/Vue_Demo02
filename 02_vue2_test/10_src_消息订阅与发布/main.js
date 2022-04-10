/**
 * 该文件是整个项目的入口文件
 */

import Vue from 'vue'  // 引入VUE
import App from './App.vue' // 引入App组件，它是所有组件的父组件

// 创建vc 傀儡
// const demo = Vue.extend({})
// const d = new demo();
// Vue.prototype.bus=d

// 创建Vue实例对象
new Vue({
  render: h => h(App),
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus=this
  }
}).$mount('#app')
