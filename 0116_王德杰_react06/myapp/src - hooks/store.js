import { createStore } from "redux";
/*
函数式编程
高阶组件：
接收一个组件，返回一个新的组件
高阶函数：
在数学和计算机科学中，高阶函数是至少满足下列一个条件的函数:
  接受一个或多个函数作为输入
  输出一个函数
纯函数：
  1. 相同的输入永远返回相同的输出
  2. 不修改函数的输入值
  3. 不依赖外部环境状态(纯函数永远只依赖自己的参数，而不依赖外部的数据)
  4. 无任何副作用
*/
const store = createStore((state = { count: 1,name:"开课吧" }, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1
      }
    case "MINS":
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
});

export default store;