import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link to="/" className="text-gray-800 hover:text-blue-600 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-gray-800 hover:text-blue-600 transition duration-300">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
