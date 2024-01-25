import { useState } from "react"
import Hamburger from "./Hamburger"
import Title from "./Title"
import { Link } from "react-scroll"
import { useLocation } from "react-router-dom"
import ToggleButton from "./ToggleButton"


const Navbar = () => {
const [showNavbar, setShowNavbar] = useState(false)

const toggleNavbar = () => {
    setShowNavbar(!showNavbar)
}
const location = useLocation();
if (location.pathname === '/blogs' || location.pathname === '/terms') {
    document.body.style.overflow = 'hidden'
    return null;
} 

  return (
    <nav className='navbar' id="navbar">
        <div className="title">
            <Title/>
        </div>
        <div className="menu-icons">
            <Hamburger onClick={toggleNavbar} onShow={showNavbar}/>
        </div>
        <div className={`nav-links ${showNavbar && 'active'}`} >
            <ul>
                <li className="nav-item">
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About Me</Link>
                </li>
                <li className="nav-item">
                    <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
                </li>
                <li className="nav-item">
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
                </li>
            </ul>
        </div>
        <div>
            <ToggleButton/>
        </div>
    </nav>
  )
}

export default Navbar