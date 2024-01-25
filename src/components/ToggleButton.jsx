import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

const ToggleButton = () => {
    const getdarkMode = () => {
        const value = localStorage.getItem('dark-mode')
        return JSON.parse(value) || false;
    }
    const [darkMode, setDarkMode] = useState(getdarkMode)
    useEffect(() => {
        const navbar = document.getElementById('navbar')
        const col = document.querySelector('.col')
        const col2 = document.getElementById('col')
        const navLinks = document.querySelector('.nav-links')
        if (darkMode) {
            document.body.classList.add('dark')
            navbar.classList.add('dark')
            col.classList.add('dark')
            col2.classList.add('dark')
            navLinks.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
            navbar.classList.remove('dark')
            col.classList.remove('dark')
            col2.classList.remove('dark')
            navLinks.classList.remove('dark')
        }
        const json = JSON.stringify(darkMode)
        localStorage.setItem('dark-mode', json)
    }, [darkMode]);
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
  return (
    <div className="toggle-button">
        <button onClick={toggleDarkMode}>
            {!darkMode ? <FaSun style={{ fontSize: '1.5em' }}/> :  <FaMoon style={{ color:'white', fontSize:'1.5em'}}/> }
        </button>
    </div>
  )
}

export default ToggleButton