/**
 * 该文件是整个项目的入口文件
 */

import Vue from 'vue'  // 引入VUE
import App from './App.vue' // 引入App组件，它是所有组件的父组件

Vue.config.productionTip = false // 关闭Vue的生产提示

// 全局引入混合
import {minxin,minxin2} from "@/minxin";
Vue.mixin(minxin)
Vue.mixin(minxin2)


// 创建Vue实例对象
new Vue({
    // el:"#app",
  render: h => h(App),
}).$mount('#app')
