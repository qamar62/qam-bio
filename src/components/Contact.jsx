import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full py-16">
      <div className="max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ff5e62] text-gray-800 dark:text-white">Contact</p>
          <p className="py-4 text-gray-600 dark:text-gray-400">Submit the form below or shoot me an email - qam600@gmail.com</p>
        </div>
        <form method="POST" action="https://getform.io/f/bejjreoa" className="flex flex-col">
          <input 
            className="bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-white rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff5e62] dark:focus:ring-[#ff9966]" 
            type="text" 
            placeholder="Name" 
            name="name" 
          />
          <input 
            className="my-4 p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff5e62] dark:focus:ring-[#ff9966]" 
            type="email" 
            placeholder="Email" 
            name="email" 
          />
          <textarea 
            className="bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-white rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff5e62] dark:focus:ring-[#ff9966]" 
            name="message" 
            rows="10" 
            placeholder="Message"
          ></textarea>
          <button className="text-white bg-gradient-to-r from-[#ff9966] to-[#ff5e62] px-4 py-3 my-8 mx-auto flex items-center rounded-full hover:from-[#ff8a5b] hover:to-[#ff4b4b] transition-all duration-300">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
