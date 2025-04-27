import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Travel and Tour Booking App ( WEB )',
      description: 'Travel System with payment gateway integration, Backend CRM',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      link: 'https://www.arabianknightstours.com',
    },
    {
      title: 'Car Rental System',
      description: 'Car rental booking system with Backend',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      link: 'https://www.justdrivecar.me',
    },
    {
      title: 'E Commerce Website',
      description: 'React JS Application',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
      link: 'https://www.camsfix.com',
    },
    {
      title: 'DashBoard Using Django',
      description: 'Dashboard with React and Django',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      link: '',
    },
    {
      title: 'B2B Travel Portal',
      description: 'B2B Travel Portal with agent and admin dashboards (frontend & backend).',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      link: 'https://b2b.qamdm.xyz',
    },
    {
      title: 'Laptop Ecommerce Store',
      description: 'Laptop ecommerce store with frontend and backend.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
      link: 'https://laptop.qamdm.xyz',
    },
    {
      title: 'Single Activity Travel and Tourism Webapp',
      description: 'Travel and tourism webapp for single activity booking.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
      link: 'https://gtravel-six.vercel.app/',
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
                  <a href={project.link} className="px-4 py-2 bg-gradient-to-r from-[#ff9966] to-[#ff5e62] text-white rounded-full text-sm font-medium hover:from-[#ff8a5b] hover:to-[#ff4b4b] transition-all duration-300">Demo</a>
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
