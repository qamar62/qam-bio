import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
        />
        <h1 className="text-4xl font-bold mb-2">John Doe</h1>
        <p className="text-xl text-gray-600">Full Stack Developer</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          I'm a passionate full stack developer with experience in React, Node.js, and cloud technologies. I love creating efficient, scalable, and user-friendly web applications.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600"><FaGithub size={24} /></a>
          <a href="#" className="text-gray-600 hover:text-blue-600"><FaLinkedin size={24} /></a>
          <a href="#" className="text-gray-600 hover:text-blue-600"><FaTwitter size={24} /></a>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 rounded p-2 text-center">React</div>
          <div className="bg-gray-100 rounded p-2 text-center">Node.js</div>
          <div className="bg-gray-100 rounded p-2 text-center">JavaScript</div>
          <div className="bg-gray-100 rounded p-2 text-center">TypeScript</div>
          <div className="bg-gray-100 rounded p-2 text-center">AWS</div>
          <div className="bg-gray-100 rounded p-2 text-center">Docker</div>
        </div>
      </div>
    </div>
  )
}

export default Home
