import './App.css';
import {Route} from 'react-router-dom';
import Nav from './components/Nav';
import AboutPage from './components/about';
import IndexPage from './components/index';
import JoinUsPage from './components/joinUs';

function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="wrap">
                    <h1 id="logo">KaiKeBa</h1>
                    <Nav/>
                </div>
            </header>

            <Route path="/" exact strict component={IndexPage}/>
            <Route path="/about" exact strict component={AboutPage}/>
            <Route path="/joinUs" exact strict component={JoinUsPage}/>
        </div>
    );
}

export default App;
