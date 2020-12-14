import Vue from "vue";
import App from "./App.vue";
// App 组件

// 配置项
Vue.config.productionTip = false;

// new Vue
// template
// render
// template -> render 函数
// 1. 我们可以直接template
// 2. 我们也可以直接去写 render
// 3. h -> 创建虚拟节点的函数
// 4. 学习 vue3
new Vue({
  render: h => h(App)
}).$mount("#app");
// mount
// el ->
// $mount("#app")

// 好多种写法
// vue api 太多了
