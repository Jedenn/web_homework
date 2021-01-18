import ReactDOM from "react-dom";
import { createStore } from "redux";
/*
store: 仓库
  dispatch: ƒ dispatch(action)
    调用 dispatch 方法时，我们必须传入一个 action 对象，action 中描述了要对 state 做出什么样的修改。store 会接收 action 并调用 reducer 函数，将当前 state  和 action 传入 reducer 函数，reducer 中会根据 action 对 state 进行修改，并返回修改后 state 
  getState: ƒ getState() 获取状态
    - 获取当前store存储的状态
  replaceReducer: ƒ replaceReducer(nextReducer)
  subscribe 监听 state 发生改变
reducer 纯函数
  reducer 会接收两个参数，state 和 action
  state 当前 store 中管理的状态
  action 描述状态要做出什么样的修改  
    - action 是一个对象
    - action 中必须包含一个 type 属性，type 属性描述 要对 state 做出什么样的修改
*/
const store = createStore((state = { count: 1 }, action) => {
  switch (action.type) {
    case "ADD":
      return {
        count: state.count + 1
      }
    case "MINS":
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
});
const unSubscrobe = store.subscribe(() => {
  console.log("state 发生改变了");
  render();
});
render();

function render() {
  const { count } = store.getState();
  ReactDOM.render(
    <div>
      <p>{count}</p>
      <button onClick={() => {
        store.dispatch({
          type: "ADD"
        })
      }}>+</button>
      <button onClick={() => {
        store.dispatch({
          type: "MINS"
        })
      }}>-</button>
      <button onClick={() => {
        unSubscrobe();
      }}>取消监听</button>
      <button onClick={() => {
        store.replaceReducer((state = { count: 1 }, action) => {
          switch (action.type) {
            case "ADD":
              return {
                count: state.count + 2
              }
            case "MINS":
              return {
                count: state.count - 2
              }
            default:
              return state;
          }
        });
      }}>替换reducer</button>
    </div>,
    document.querySelector("#root")
  );
}