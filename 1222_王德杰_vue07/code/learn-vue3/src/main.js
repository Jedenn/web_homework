import { createApp } from "vue";
import App from "./App.vue";
// 函数式方式 -》

// vue 的实例

createApp(App).mount("#app");

// 从来没有使用到的
// 并不希望打包到最终的文件
// 会让打包之后的文件体积变大
// tree - shaking
// esm -> 静态 原理
// cjs -> nodejs -> 动态的
// 对于用户来讲 -》 不需要的 vue 功能不用打包进去了，会优化最终的文件体积
// 对于框架开发者来讲 -> 我可以提供更多的功能，但是也不太需要担心会导致用户的文件体积变大（在用户不使用该功能的情况下）
// function test1() {}



// vue
// A,B,C,D
// A,B,C
// vue2

// function test2() {}

// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
