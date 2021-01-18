import { useDispatch, useSelector} from "react-redux";
function Count() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.count);
  return <div>
  <p>{count}</p>
  <button onClick={() => {
    dispatch({
      type: "COUNT_ADD"
    })
  }}>+</button>
  <button onClick={() => {
    dispatch({
      type: "COUNT_MINS"
    })
  }}>-</button>
</div>
}
export default Count;