<template>
  <div>
    <input type="text" @keyup.enter="addTodo" v-model="newTodo" />

    <div>
      <ul>
        <li>
          <todo-item
            v-for="(item, index) in todoList"
            :key="index"
            :item="item"
            @remove="removeTodo"
            @complete="completeTodo"
          >
          </todo-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
console.log(TodoItem)
export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodo: "",
      todoList: [],
    };
  },
  methods: {
    // 通过 v-model -> 改变
    // sync
    // 下节课我会讲
    completeTodo(id) {
      const todoItem = this.todoList.find((todoItem) => todoItem.id === id);
      if (todoItem) {
        todoItem.state = "completed";
      }
    },
    removeTodo(id) {
      this.todoList = this.todoList.filter((todoItem) => todoItem.id !== id);
    },

    addTodo() {
      this.todoList.push({
        id: this.createId(),
        title: this.newTodo,
        state: "active",
      });

      // reset newTodo
      this.newTodo = "";
    },

    createId() {
      return new Date().getTime();
    },
  },
};
</script>

<style></style>
