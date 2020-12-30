<template>
  <el-input type="text" v-model="newTodo" @keyup.enter="addTodo"></el-input>
  <li>
    <todo-item
      v-for="(item, index) in todoList"
      :key="index"
      :item="item"
    ></todo-item>
  </li>
  <el-button @click="currentTodoFilter = 'all'">all</el-button>
  <el-button @click="currentTodoFilter = 'active'">active</el-button>
  <el-button @click="currentTodoFilter = 'complete'">completed</el-button>
</template>

<script>
import TodoItem from "./TodoItem";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    TodoItem
  },

  setup() {
    const store = useStore();
    const newTodoTitle = ref("");
    const currentTodoFilter = ref("all");
    const todoList = computed(() => {
      if (currentTodoFilter.value === "all") {
        return store.state.todoList;
      }
      if (currentTodoFilter.value === "active") {
        return store.getters.getTodoByState("active");
      }
      if (currentTodoFilter.value === "complete") {
        return store.getters.getTodoByState("complete");
      }
    });

    const addTodo = () => {
      const id = todoList.value.length + 1;
      const title = newTodoTitle.value;
      store.commit("addTodo", {
        id: id,
        title: title,
        state: "active"
      });
    };

    return {
      newTodo: newTodoTitle,
      todoList,
      currentTodoFilter,
      addTodo
    };
  }
};
</script>

<style scoped></style>
