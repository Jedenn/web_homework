import { createStore, combineReducers} from "redux";
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
  nub: 1
},action)=>{
  switch (action.type) {
    case "LIST_ADD":
      return {
        ...list,
        nub: list.nub + 1
      }
    case "LIST_MINS":
      return {
        ...list,
        nub: list.nub - 1
      };
    default:
      return list;
  }
}
// reducer 的拆分
// const reducer = (state = {
//   count: 1,
//   list: {}
// }, action) => {
//   return {
//     count:count(state.count,action),
//     list: list(state.list,action)
//   }
// }
// reducer 的合并
// const reducer = combineReducers({
//   count:count,
//   list:list
// });
const reducer = combineReducers({
  count,
  list
});
console.log(reducer);
const store = createStore(reducer);

export default store;