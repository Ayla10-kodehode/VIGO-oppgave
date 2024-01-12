import "./NavButton.css";
import {Link} from 'react-router-dom';

export const NavButton = ({to, children, ...props}) => (
    <button className="button" {...props}>
        <Link to={to} className="link">
            {children}
        </Link>
    </button>
);


