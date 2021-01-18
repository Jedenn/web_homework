import './App.css';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import TodoStat from './components/todoStat';

function App() {



    return <div id="todoapp">
        <div className="title">
            <h1>{"todo"}</h1>
        </div>

        <div className="content">
            <AddTodo/>
            <TodoList/>
            <TodoStat/>
        </div>
    </div>
}

export default App;
