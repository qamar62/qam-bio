import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="w-full flex justify-center">
      <nav className="fixed max-w-[1000px] w-full mx-4 mt-4 h-16 flex justify-between items-center px-4 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 text-gray-800 dark:text-gray-300 z-10 transition-colors duration-300 backdrop-filter backdrop-blur-lg rounded-full">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#ff9966] to-[#ff5e62] text-transparent bg-clip-text">QAM</h1>
        </div>

        {/* menu */}
        <ul className="hidden md:flex">
          {['home', 'about', 'skills', 'projects', 'timeline', 'contact'].map((item) => (
            <li key={item}>
              <Link to={item} smooth={true} duration={500} className="px-3 cursor-pointer capitalize font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff9966] hover:to-[#ff5e62] hover:bg-clip-text">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark mode toggle */}
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center"}>
          {['home', 'about', 'skills', 'projects', 'timeline', 'contact'].map((item) => (
            <li key={item} className="py-6 text-4xl">
              <Link onClick={handleClick} to={item} smooth={true} duration={500}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
