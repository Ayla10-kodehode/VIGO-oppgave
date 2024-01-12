import "./NavButton.css";
import {useState} from "react";

export const NavButton = ({children}) => {
    const [state, setState] = useState("active");

    return <button style={{color: state === "active" ? "#F18404" : "white"}}>{children}</button>;
}

