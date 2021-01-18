import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getListData } from "./actions";
// ask share job good
function List() {
  const list = useSelector(state => state.list);
  const {type,data,loading} = list;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getListData);
  },[type]);
  return <div>
    <button onClick={()=>{
      dispatch({
        type: "LIST_TYPECHANGE",
        dataType: "all"
      })
    }}>all</button>
    <button onClick={()=>{
      dispatch({
        type: "LIST_TYPECHANGE",
        dataType: "ask"
      })
    }}>ask</button>
    <button onClick={()=>{
      dispatch({
        type: "LIST_TYPECHANGE",
        dataType: "share"
      })
    }}>share</button>
    {loading?<div>数据更新中</div>:<ul>{
      data.map(item=><li key={item.id}>{item.title}</li>)
    }</ul>}
    
  </div>
}

export default List;