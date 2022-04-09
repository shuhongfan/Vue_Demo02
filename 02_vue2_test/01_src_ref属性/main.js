/**
 * 该文件是整个项目的入口文件
 */

import Vue from 'vue'  // 引入VUE
// import Vue from 'vue/dist/vue'  // 引入完整版VUE
import App from './App.vue' // 引入App组件，它是所有组件的父组件

Vue.config.productionTip = false // 关闭Vue的生产提示

// 创建Vue实例对象
new Vue({
    // el:"#app",
  render: h => h(App),
}).$mount('#app')


// new Vue({
//     el:"#app",
//     template:`<h1>hello</h1>`
// })

// new Vue({
//     el:"#app",
//     render(createElement){
//         return createElement("h1",'你好啊')
//     }
// })
