import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
/*
    使用 thunk 中间件后，action可以支持两种形式： "函数" 和 "对象"
      - 参数是对象，直接调用 reducer 修改我们的 state
      - 参数是函数，调用该函数，并且把 dispatch 和 getState 传递我们的函数，可以在函数中，进行异步操作 
*/
/*
  reducer 的拆分与合并:
  action.type 在项目中时唯一的
*/
const count = (count=1,action)=>{
  switch (action.type) {
    case "COUNT_ADD":
      return count + 1;
    case "COUNT_MINS":
      return count - 1;
    default:
      return count;
  }
}
const list = (list={
  type: "all",
  data: [],
  loading: true
},action)=>{
  switch (action.type) {
    case "LIST_LOADING":
      return {
        ...list,
        data: [],
        loading: true
      }
    case "LIST_LOAD":
      return {
        ...list,
        data: action.data,
        loading: false
      }
    case "LIST_TYPECHANGE":
      return {
        ...list,
        type: action.dataType,
      }
    default:
      return list;
  }
}
const reducer = combineReducers({
  count,
  list
});
const store = createStore(reducer,applyMiddleware(thunk));

export default store;