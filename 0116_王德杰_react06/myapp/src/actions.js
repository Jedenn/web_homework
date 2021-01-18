import axios from "axios";
function getListData(dispatch, getState) {
  dispatch({
    type: "LIST_LOADING"
  });
  axios.get(`https://cnodejs.org/api/v1/topics?page=1&tab=${getState().list.type}&limit=10`).then(res => {
    dispatch({
      type: "LIST_LOAD",
      data:res.data.data
    })
  })
}
export { getListData };