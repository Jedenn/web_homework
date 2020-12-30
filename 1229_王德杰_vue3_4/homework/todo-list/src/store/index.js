import { createStore } from "vuex";

export default createStore({
  state: {
    todoList: [
      { id: 1, title: "第1条待办", state: "active" },
      { id: 2, title: "第2条待办", state: "active" },
      { id: 3, title: "第3条待办", state: "active" },
      { id: 4, title: "第4条待办", state: "complete" }
    ]
  },
  getters: {
    activeTodo: state => {
      return state.todoList.filter(todo => todo.state === "active");
    },
    completeTodo: state => {
      return state.todoList.filter(todo => todo.state === "complete");
    },

    getTodoByState: state => todoState => {
      return state.todoList.filter(todo => todo.state === todoState);
    }
  },
  mutations: {
    markTodoState: (state, payload) => {
      const { id, todoState } = payload;
      state.todoList.find(todo => todo.id === id).state = todoState;
    },

    addTodo: (state, payload) => {
      state.todoList.push(payload);
    },
    removeTodoById: (state, payload) => {
      const { id } = payload;
      state.todoList.splice(
        state.todoList.findIndex(todo => todo.id === id),
        1
      );
    }
  },
  actions: {},
  modules: {}
});
