import React from 'react'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Trello-like task management application using React and Firebase',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A weather forecast application using React and OpenWeatherMap API',
    image: 'https://via.placeholder.com/300x200',
  },
]

function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
