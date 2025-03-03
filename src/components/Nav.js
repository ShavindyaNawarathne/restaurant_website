import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="nav-bar highlight-text" role="navigation">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to  ="/about">About</Link></li>
                <li><Link to = "/menu">Menur</Link> </li>
                <li><Link to ="/booking">Reservation</Link></li>
                <li><Link to = "/login">Login</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;