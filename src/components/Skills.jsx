import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase, FaPython } from 'react-icons/fa'

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'MongoDB', icon: <FaDatabase /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'React Native', icon: <FaReact /> },
  ]

  return (
    <div name="skills" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#ff5e62] text-gray-800 dark:text-white">Skills</p>
          <p className="py-4 text-gray-600 dark:text-gray-400">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <div key={index} className="shadow-md hover:scale-105 duration-500 py-2 rounded-3xl bg-gradient-to-r from-[#ff9966] to-[#ff5e62] flex flex-col items-center justify-center">
              <div className="text-4xl text-white mb-2">{skill.icon}</div>
              <p className="text-white font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
