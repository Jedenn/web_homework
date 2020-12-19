// rukou
import Vuex from "vuex";
import Vue from "vue";

// 小步走
console.log(Vuex);
Vue.use(Vuex);

// input  output

// input
// const result = storeOptions.getters.tenYearsOld({ user: { age: 10 } });
// console.log(result === 20);

export const storeOptions = {
  // 全局的计算属性
  // 缓存的效果的
  getters: {
    tenYearsOld(state) {
      return state.user.age + 10;
    },
  },
  mutations: {
    changeUserName(state, payload) {
      // 数据
      //   console.log(state,payload)
      // 不可以在 commit 里面出现异步
      // why？ 没法记录顺序
      //   setTimeout(() => {
      //     state.user.name = payload.name;
      //   }, 1000);
      // 要保证这里是同步的
      state.user.name = payload.name;
    },

    changeUserAge(state, payload) {
      // 数据
      //   console.log(state,payload)
      state.user.age = payload.age;
    },
  },
  actions: {
    // 存放所有异步的操作
    login({ commit }, payload) {
      // 处理异步
      const { name } = payload;
      setTimeout(() => {
        commit("changeUserName", { name });
      }, 1000);
    },
  },
  state: {
    user: {
      name: "xiaohong",
      age: 18,
    },
  },
};

const store = new Vuex.Store({
  // 全局的计算属性
  // 缓存的效果的
  getters: {
    tenYearsOld(state) {
      return state.user.age + 10;
    },
  },
  mutations: {
    changeUserName(state, payload) {
      // 数据
      //   console.log(state,payload)
      // 不可以在 commit 里面出现异步
      // why？ 没法记录顺序
      //   setTimeout(() => {
      //     state.user.name = payload.name;
      //   }, 1000);
      // 要保证这里是同步的
      state.user.name = payload.name;
    },

    changeUserAge(state, payload) {
      // 数据
      //   console.log(state,payload)
      state.user.age = payload.age;
    },
  },
  actions: {
    // 存放所有异步的操作
    login({ commit }, payload) {
      // 处理异步
      const { name } = payload;
      setTimeout(() => {
        commit("changeUserName", { name });
      }, 1000);
    },
  },
  state: {
    user: {
      name: "xiaohong",
      age: 18,
    },
  },

  modules: {
    a: {
      state: {
        name: "a",
      },
    },
    b: {
      state: {
        name: "b",
      },
    },
  },
});


// 加了一个获取哪个  module 的过程
console.log(store.state)

export default store;
