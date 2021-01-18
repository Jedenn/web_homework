import { useSelector,useDispatch } from "react-redux";

// ask share job good
function List() {
  const list = useSelector(state => state.list);
  const { nub } = list;
  const dispatch = useDispatch();
  return <div>
    <button>all</button>
    <button>ask</button>
    <button>share</button>
    <button>job</button>
    <button>good</button>
    <ul></ul>
    <p>{nub}</p>
    <button onClick={() => {
      dispatch({
        type: "LIST_ADD"
      })
    }}>+</button>
    <button onClick={() => {
      dispatch({
        type: "LIST_MINS"
      })
    }}>-</button>
  </div>
}

export default List;