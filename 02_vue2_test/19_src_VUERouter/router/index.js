import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

// 创建一个路由器
const router = new VueRouter({
    mode:"history",
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{
                isAuth:true,
                title:'关于'
            }
        },
        {
            path:'/home',
            component:Home,
            meta:{
                isAuth:false
            },
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            // path:'detail/:id/:title',
                            path:'detail',
                            component:Detail,
                            // props:{a:1,b:'hello'}
                            // props: true
                            // props($route}){
                            props({query:{id,title}}){
                                // return {id:$route.query.id,title:$route.query.title}
                                return {id,title}
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

// 全局前置路由守卫  初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
    console.log(to,from)
    if (to.meta.isAuth){
        if (localStorage.getItem("school")=='shf'){
            next()
        } else {
            alert("学校名称不正确，无权查看")
        }
    } else {
        alert("无权限")
    }

})

router.afterEach((to,from)=>{
    console.log(to,from)
    document.title = to.meta.title||'shf'
})

export default router
