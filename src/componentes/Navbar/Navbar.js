import "./Navbar.css"
import { useEffect } from "react"
import React from 'react'
import { Link } from "react-scroll"

const Navbar = () => {

    const changeColor = () => {
        var NavBarElement = document.getElementById("Navbar");
        if(window.scrollY >= 70){
            NavBarElement.classList.add("transparency-removed");
        }
        else{
            NavBarElement.classList.remove("transparency-removed")
        }
    } 

    useEffect(()=>{
        window.addEventListener("scroll", changeColor)
    },[])
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
