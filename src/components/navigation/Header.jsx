import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavButton } from "../Elements/NavButton";
import "./Header.css"

export const Header = () => {

    return (
        <header>
            <div className="titleDiv">
                <h1>API in React</h1>
                <h3>Posts and comments</h3>
            </div>
            <div className="buttonBox">
                <NavButton><Link to="/">Home</Link></NavButton>
                <NavButton><Link to="/subPageOne">Posts</Link></NavButton>
                <NavButton><Link to="/subPageTwo">Comments</Link></NavButton>
            </div>
        </header>
    )
};