import "./Navbar.css"
import React from 'react'
import { Link } from "react-scroll"

const Navbar = () => {
return (
    <div className="Nav" id="Navbar">
        <Link to="/">
            <h1>Anuj Rajput</h1>
        </Link>
        <ul className="Nav-menu">
            <Link spy={true} to='Hero' smooth={true} >
                <li>Home</li>
            </Link>
            <Link spy={true} to='Skills' smooth={true} >
                <li>Skills</li>
            </Link>
            <Link spy={true} to='Projects' smooth={true} >
                <li>Projects</li>
            </Link>
            <Link spy={true} to='Contact' smooth={true} >
                <li>Contact</li>
            </Link>
        </ul>
      

    </div>
)
}

export default Navbar
