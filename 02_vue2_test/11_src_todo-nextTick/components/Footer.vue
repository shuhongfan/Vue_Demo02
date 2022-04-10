<template>
  <div class="todo-footer">
    <label>
<!--      <input @change="checkAll" :checked="isAll" type="checkbox"/>-->
      <input v-model="isAll" type="checkbox"/>
    </label>
    <span>
          <span>已完成 {{doneTotal}}</span> / 全部 {{total}}
        </span>
    <button @click="clearAllToDo" class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props:['todos'],
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      // return this.todos.filter(todo=>todo.done==true).length

      // return  this.todos.reduce((pre,current)=>{
      //   console.log("@",pre,current)
      //   return pre+(current.done?1:0)
      // },0)
      return  this.todos.reduce((pre,current)=>pre+(current.done?1:0),0)
    },
    isAll:{
      get(){
        return this.doneTotal==this.total
      },
      set(value){
        // this.checkAllToDo(value)
        this.$emit("checkAllToDo",value)
      }
    }
  },
  methods:{
    checkAll(e){
      // console.log(e.target.checked)
      this.checkAllToDo(e.target.checked)
    },
    clearAllToDo(){
      this.$emit("clearAllToDo")
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
