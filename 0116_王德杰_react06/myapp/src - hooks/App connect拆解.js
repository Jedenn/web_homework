import { connect } from "react-redux";
/*
  接收 react-redux 传递下来的信息（接收store中的信息）
  1. connect 高阶函数
       const withConnect = connect(()=>{})
       const 包装后的新组建 = withConnect(组件);
  2. hooks
      
*/
function App(props) {
  console.log(props);
  return <div>
  <p>count</p>
  <button onClick={() => {
    // store.dispatch({
    //   type: "ADD"
    // })
  }}>+</button>
  <button onClick={() => {
    // store.dispatch({
    //   type: "MINS"
    // })
  }}>-</button>
</div>
}
const withConnect = connect((state,props)=>{
  //console.log(state,props);
  const {count} = state;
  return {
    count
  };//state 中要传递给组件的数据，该返回值必须是一个对象
});
export default withConnect(App);