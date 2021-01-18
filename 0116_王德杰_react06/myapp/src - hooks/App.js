import { useDispatch, useSelector, useStore } from "react-redux";
/*
  接收 react-redux 传递下来的信息（接收store中的信息）
  1. connect 高阶函数
       const withConnect = connect(()=>{})
       const 包装后的新组建 = withConnect(组件);
  2. hooks
      - useDispatch 获取 dispatch
      - useStore 获取 store
      - useSelector 获取 state
*/
function App(props) {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.count);
  //console.log(useStore());
  
  return <div>
  <p>{count}</p>
  <button onClick={() => {
    dispatch({
      type: "ADD"
    })
  }}>+</button>
  <button onClick={() => {
    dispatch({
      type: "MINS"
    })
  }}>-</button>
</div>
}
export default App;