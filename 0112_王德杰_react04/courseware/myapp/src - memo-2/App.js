import { useState } from "react";
import Stats from "./stats";
import Todos from "./todos";

// 组件更新，是将函数重新执行了一遍
function App() {
  const [todo,setTodo] = useState({
    todos:[
      {
        id: 1,
        todo: "这是第一条todo",
        done: false
      }
    ],
    index: 1
  });
  const {todos,index} = todo;
  function addTodo() {
    todos.push(
      {
        id:index + 1,
        todo:"这是新加项 - " + index,
        done: false
      }
    );
    setTodo({
      todos:todos,
      index: index + 1
    });
  }
  function changeDone(id,done) {
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === id){
          todos[i] = {
            ...todos[i],
            done
          }
          break;
        }
    }
    setTodo({
      todos:todos,
      index: index
    });
  }
  return <div>
      <Todos 
          data={todos}
          changeDone={changeDone}
      />
      <button onClick={addTodo}>添加todo</button>
      <Stats 
        data={todos}
      />
  </div>;
}

export default App;
