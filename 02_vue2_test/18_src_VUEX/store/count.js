const countOptions={
    namespaced:true,
    actions:{
        jia:function (context,value) {
            console.log("actions jia",context,value)
            context.commit("JIA",value)
        },
        jian(context,value){
            console.log("actions jian",context,value)
            context.commit("JIAN",value)
        },
        jiaOdd(context,value){
            console.log("actions jiaOdd",context,value)
            if (context.state.sum%2){
                context.commit('JIA',value)
            }
        },
        jiaWait(context,value){
            console.log("actions jiaWait",context,value)
            setTimeout(()=>{
                context.commit('JIA',value)
            })
        }
    },
    mutations:{
        JIA(state,value){
            console.log("mutations JIA",state,value)
            state.sum += value
        },
        JIAN(state,value){
            console.log("mutations JIAN",state,value)
            state.sum -= value
        },
    },
    state:{
        sum:0,
        school: '尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}

export default countOptions
