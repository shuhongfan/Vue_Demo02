<template>
  <li>
    <label>
      <input @change="handleCheck(todo.id)" type="checkbox" :checked="todo.done"/>
      <span>{{todo.title}}</span>
    </label>
    <button @click="deleteById(todo.id)" class="btn btn-danger">删除</button>
  </li>

</template>

<script>
export default {
  name: "Item",
  props:['todo'],
  // props:['todo'],
  methods:{
    handleCheck(id){
      console.log(id)
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo')
    },
    // 删除
    deleteById(id){
      if (confirm("确定删除吗？")){
        console.log(id)
        // this.deleteToDo(id)
        this.$bus.$emit('deleteTodo')
      }
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
