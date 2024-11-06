import React from 'react'

const TimelineItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-gray-300 dark:border-gray-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-[#ff5e62] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-gradient-to-r from-[#ff9966] to-[#ff5e62] rounded-md">{year}</span>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
          <div className="my-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{duration}</div>
        </p>
        <p className="my-2 text-base font-normal text-gray-600 dark:text-gray-300">{details}</p>
      </li>
    </ol>
  )
}

const Timeline = () => {
  return (
    <div name="timeline" className="w-full md:h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ff5e62] text-gray-800 dark:text-white">Timeline</p>
          <p className="py-6 text-gray-600 dark:text-gray-400">Check out my experience and education</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <p className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Experience</p>
            <TimelineItem 
              year="2021"
              title="Senior Web Developer at Tech Corp"
              duration="2 years"
              details="Led a team of developers in creating responsive web applications using React and Node.js. Implemented CI/CD pipelines and improved overall code quality."
            />
            <TimelineItem 
              year="2019"
              title="Full Stack Developer at StartUp Inc"
              duration="2 years"
              details="Developed and maintained multiple web applications using the MERN stack. Collaborated with UX designers to implement user-friendly interfaces."
            />
          </div>
          <div>
            <p className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Education</p>
            <TimelineItem 
              year="2019"
              title="Master's in Computer Science"
              duration="2 years"
              details="University of Technology - Specialized in Web Technologies and Cloud Computing"
            />
            <TimelineItem 
              year="2017"
              title="Bachelor's in Software Engineering"
              duration="4 years"
              details="State University - Graduated with honors, participated in multiple hackathons"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
