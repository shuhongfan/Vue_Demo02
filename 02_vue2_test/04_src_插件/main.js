/**
 * 该文件是整个项目的入口文件
 */

import Vue from 'vue'  // 引入VUE
import App from './App.vue' // 引入App组件，它是所有组件的父组件
import plugins from "@/plugins";

Vue.config.productionTip = false // 关闭Vue的生产提示

Vue.use(plugins,1,2,3)

// 创建Vue实例对象
new Vue({
  render: h => h(App),
}).$mount('#app')
