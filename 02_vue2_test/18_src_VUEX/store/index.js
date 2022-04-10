// 该文件用于创建Vuex中最为核心的store

// 准备actions  用于响应响应组件中的动作
import Vue from "vue";
import Vuex from "vuex";

// 求和功能相关的配置
import countOptions from './count'

// 人员管理相关的配置
import personOptions from './person'

// 准备actions  用于响应组件中的动作
// const actions = {}

// 准备mutations 用于操作数据（state）
// const mutations = {}

// 准备state  用于存储数据
// const state = {}

// 准备 getters  用于将state中的数据进行加工
// const getters = {}

Vue.use(Vuex)

// 创建store
export default new Vuex.Store({
    // actions,
    // mutations,
    // state,
    // getters,
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

