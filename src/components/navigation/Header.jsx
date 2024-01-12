import { BrowserRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import "./Header.css"

export const Header = () => {
    const location = useLocation();
    return (
        <header>
            <div className="titleDiv">
                <h1>API in React</h1>
                <h3>Posts and comments</h3>
            </div>
            <div className="buttonBox">
                <Link to="/" className={location.pathname === '/' ? 'linkVisited' : 'linkStyle'}>Home</Link>
                <Link to="/subPageOne" className={location.pathname === '/subPageOne' ? 'linkVisited' : 'linkStyle'}>Posts</Link>
                <Link to="/subPageTwo" className={location.pathname === '/subPageTwo' ? 'linkVisited' : 'linkStyle'}>Comments</Link>
            </div>
        </header>
    )
};