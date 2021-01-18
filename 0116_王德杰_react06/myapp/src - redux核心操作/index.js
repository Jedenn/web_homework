import { createStore } from "redux";
const reducer = (state={count:1},action)=>{ // 具体的状态管理者
  switch (action.type) {
    case "ADD":
      return {
        count: state.count + 1,
        name: "newState"
      }
  }
  return state;
};
/*
store: 仓库
  dispatch: ƒ dispatch(action)
    调用 dispatch 方法时，我们必须传入一个 action 对象，action 中描述了要对 state 做出什么样的修改。store 会接收 action 并调用 reducer 函数，将当前 state  和 action 传入 reducer 函数，reducer 中会根据 action 对 state 进行修改，并返回修改后 state 
  getState: ƒ getState() 获取状态
    - 获取当前store存储的状态
  replaceReducer: ƒ replaceReducer(nextReducer)
  subscribe
reducer 纯函数
  reducer 会接收两个参数，state 和 action
  state 当前 store 中管理的状态
  action 描述状态要做出什么样的修改  
    - action 是一个对象
    - action 中必须包含一个 type 属性，type 属性描述 要对 state 做出什么样的修改
*/
const store = createStore(reducer);
console.log(store.getState());
store.dispatch({
  type: "ADD"
});
/*
  调用 dispatch，发起 action 修改，store 会调用 reducer 函数，并将当前的 state 和 传入 reducer，reducer 根据 action 和 state，返回新的 state 
*/
console.log(store.getState());