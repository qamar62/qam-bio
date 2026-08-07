import React from 'react'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Trello-like task management application using React and Firebase',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A weather forecast application using React and OpenWeatherMap API',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    id: 4,
    title: 'B2B Travel Portal',
    description: 'B2B Travel Portal with agent and admin dashboards (frontend & backend).',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    link: 'https://b2b.qamdm.xyz',
  },
  {
    id: 5,
    title: 'Laptop Ecommerce Store',
    description: 'Laptop ecommerce store with frontend and backend.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    link: 'https://laptop.qamdm.xyz',
  },
  {
    id: 6,
    title: 'Single Activity Travel and Tourism Webapp',
    description: 'Travel and tourism webapp for single activity booking.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
    link: 'https://gtravel-six.vercel.app/',
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
