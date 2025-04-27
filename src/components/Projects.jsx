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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]"
            >
              {/* Image area with overlay */}
              <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center rounded-t-3xl transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              </div>
              {/* Info */}
              <div className="flex-1 px-6 py-5 flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-2 group-hover:text-[#ff5e62] transition-colors">{project.title}</h3>
                <p className="text-base text-gray-500 dark:text-gray-300 text-center mb-4">{project.description}</p>
                <div className="flex justify-center mt-auto space-x-3 w-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center px-5 py-2 bg-gradient-to-r from-[#ff9966] to-[#ff5e62] text-white rounded-full text-base font-semibold shadow-md hover:from-[#ff8a5b] hover:to-[#ff4b4b] transition-all duration-300 ${!project.link ? 'pointer-events-none opacity-50' : ''}`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" /></svg>
                    Demo
                  </a>
                  <a
                    href={project.code || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center px-5 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full text-base font-semibold shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 ${!project.code ? 'pointer-events-none opacity-50' : ''}`}
                    tabIndex={!project.code ? -1 : 0}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                    Code
                  </a>
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
