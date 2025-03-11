import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <button className="hamburger-menu" onClick={()=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faBars}/></button>
            <nav className={`nav-bar highlight-text ${isOpen ? "open" : ""}`} role="navigation">
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to  ="/about">About</Link></li>
                    <li><Link to = "/menu">Menu</Link> </li>
                    <li><Link to ="/booking">Reservation</Link></li>
                    <li><Link to = "/login">Log in</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;