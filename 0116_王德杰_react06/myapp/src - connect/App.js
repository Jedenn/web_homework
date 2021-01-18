import { connect } from "react-redux";
/*
  接收 react-redux 传递下来的信息（接收store中的信息）
  1. connect 高阶函数
       const withConnect = connect(()=>{})
       const 包装后的新组建 = withConnect(组件);
  2. hooks
*/
function App(props) {
  //console.log(props);
  const {count,dispatch} = props;
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
export default connect(state=>({count:state.count}))(App);