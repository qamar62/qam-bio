import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce App',
      description: 'React JS Application',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Portfolio Website',
      description: 'React JS Application',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Crypto Dashboard',
      description: 'React JS Application',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Social Media App',
      description: 'React JS Application',
      image: 'https://via.placeholder.com/400x200',
    },
  ]

  return (
    <div name="projects" className="w-full py-16">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ff5e62] text-gray-800 dark:text-white">Projects</p>
          <p className="py-6 text-gray-600 dark:text-gray-400">Check out some of my recent projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">{project.description}</p>
                <div className="flex justify-center mt-4 space-x-2">
                  <a href="#" className="px-4 py-2 bg-gradient-to-r from-[#ff9966] to-[#ff5e62] text-white rounded-full text-sm font-medium hover:from-[#ff8a5b] hover:to-[#ff4b4b] transition-all duration-300">Demo</a>
                  <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
