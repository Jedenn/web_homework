import './App.css';
import FriendList from './FriendList';
import friendList from './friendlist.json';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <FriendList friendList={friendList}/>
            </header>
        </div>
    );
}

export default App;
