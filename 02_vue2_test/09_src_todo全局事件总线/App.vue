<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo"></Header>
      <List :todos="todos"></List>
      <Footer :todos="todos" @checkAllToDo="checkAllToDo" @clearAllToDo="clearAllToDo"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import List from "@/components/List";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components:{
    Header,
    List,
    Footer
  },
  data(){
    return{
      todos:JSON.parse(localStorage.getItem('todos'))||[]
    }
  },
  methods:{
    // 添加TODO
    addTodo(todoObj){
      console.log("我是app组件，我收到了数据：",todoObj)
      this.todos.unshift(todoObj)
    },
    // 勾选or取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if (todo.id===id)
          todo.done=!todo.done
      })
    },
    deleteToDo(id){
      this.todos = this.todos.filter(todo=>todo.id!=id)
    },
    checkAllToDo(done){
      this.todos.forEach((todo)=>todo.done=done)
    },
    clearAllToDo(){
      this.todos=this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(newValue,oldValue){
        localStorage.setItem('todos',JSON.stringify(newValue))
      }
    }
  },
  mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('deleteTodo',this.deleteToDo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('deleteTodo')
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
