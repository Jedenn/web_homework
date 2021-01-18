import { createStore } from "redux";
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