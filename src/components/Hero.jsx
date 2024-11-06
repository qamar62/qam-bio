import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen flex items-center">
      <div className="max-w-[1000px] mx-auto px-8 flex justify-between items-center">
        <div>
          <p className="text-[#ff5e62]">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-gray-800 dark:text-white">Qamar Ibrahim</h1>
          <h2 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-[#ff9966] to-[#ff5e62] text-transparent bg-clip-text">Full Stack Developer</h2>
          <p className="text-gray-600 dark:text-gray-400 py-4 max-w-[700px]">
            I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r hover:from-[#ff9966] hover:to-[#ff5e62] hover:border-transparent transition-all duration-300">
              View Work
            </a>
            <a href="#" className="text-[#ff5e62] text-3xl hover:text-[#ff9966] transition-colors duration-300"><FaGithub /></a>
            <a href="#" className="text-[#ff5e62] text-3xl hover:text-[#ff9966] transition-colors duration-300"><FaLinkedin /></a>
          </div>
        </div>
        <div className="hidden md:block">
          <img src="https://example.com/well-dressed-man.png" alt="Well-dressed man" className="w-64 h-64 object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Hero
