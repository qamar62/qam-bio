import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full py-16">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ff5e62]">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="text-gray-800 dark:text-white">Hi. I'm Qamar Ibrahim, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">
              Python Django Developer and DevOps Engineer with extensive experience in AI chat integration, automation workflows, and cloud computing. Proficient in digital marketing, Google API integration, and containerized application deployment using Docker. Strong understanding of front-end technologies (React) with hands-on experience in troubleshooting and optimizing workflows. Passionate about delivering high-impact solutions that streamline operations and drive user engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
