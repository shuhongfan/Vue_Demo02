<template>
  <li>
    <label>
      <input @change="handleCheck(todo.id)" type="checkbox" :checked="todo.done"/>
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input ref="inputTitle" @blur="handleBlur(todo,$event)" v-show="todo.isEdit" type="text" v-model="todo.title">
    </label>
    <button @click="handleDelete(todo.id)" class="btn btn-danger">删除</button>
    <button v-show="!todo.isEdit" @click="handleEdit(todo)" class="btn btn-edit">修改</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Item",
  props:['todo'],
  methods:{
    handleCheck(id){
      console.log(id)
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    // 删除
    handleDelete(id){
      if (confirm("确定删除吗？")){
        console.log(id)
        // this.deleteToDo(id)
        // this.$bus.$emit('deleteTodo')
        pubsub.publish('deleteToDo',id)
      }
    },
    handleEdit(todo){
      if (todo.hasOwnProperty("isEdit")){
        todo.isEdit=true
      } else {
        this.$set(todo,"isEdit",true)
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    // 失去焦点回调
    handleBlur(todo,e){
      todo.isEdit=false
      if (!e.target.value.trim()){
        return alert("输入不能为空！")
      }
      this.$bus.$emit("updateTodo",todo.id,e.target.value)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #dddddd;
}

li:hover button{
  display: block;
}
</style>
