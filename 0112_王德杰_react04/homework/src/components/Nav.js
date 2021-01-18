import {Link} from 'react-router-dom';


function Nav() {
    return <nav className="nav">
        <Link to="/">首页</Link>
        <Link to="/about">关于我们</Link>
        <Link to="/joinUs">加入我们</Link>
    </nav>
}


export default Nav;