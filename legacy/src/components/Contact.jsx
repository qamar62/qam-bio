import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-[80vh] py-10 flex items-center justify-center bg-gradient-to-br from-[#f7f7f7] via-white to-[#fffbf7] dark:from-[#18222e] dark:via-[#233647] dark:to-[#1a1c1e]">
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-10 bg-white dark:bg-[#233647] border border-gray-100 dark:border-gray-700">
        {/* Heading and subtitle always on top for mobile */}
        <div className="block md:hidden mb-6">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Let's Connect</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">Ready to start your project or have questions? Reach out and I'll get back to you promptly.</p>
        </div>
        {/* Responsive layout: On mobile, form first, then details below */}
        <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
          <form method="POST" action="https://getform.io/f/bejjreoa" className="flex flex-col gap-6 bg-[#fafafa] dark:bg-[#1a1c1e] p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <input 
              className="bg-white dark:bg-gray-800 p-4 text-gray-800 dark:text-white rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff5e62] dark:focus:ring-[#ff9966] text-lg" 
              type="text" 
              placeholder="Name" 
              name="name" 
              required
            />
            <input 
              className="p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff5e62] dark:focus:ring-[#ff9966] text-lg" 
              type="email" 
              placeholder="Email" 
              name="email" 
              required
            />
            <textarea 
              className="bg-white dark:bg-gray-800 p-4 text-gray-800 dark:text-white rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff5e62] dark:focus:ring-[#ff9966] text-lg min-h-[180px]" 
              name="message" 
              rows="8" 
              placeholder="Message"
              required
            ></textarea>
            <button className="text-white bg-gradient-to-r from-[#ff9966] to-[#ff5e62] px-8 py-4 mt-4 mx-auto flex items-center rounded-full text-xl font-bold shadow-lg hover:from-[#ff8a5b] hover:to-[#ff4b4b] transition-all duration-300">
              Let's Collaborate
            </button>
          </form>
          {/* Contact details for mobile, show below form */}
          <div className="block md:hidden mt-8 space-y-4 text-base">
            <div className="flex items-center gap-3 text-gray-700 dark:text-yellow-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /></svg>
              Qamar Ibrahim
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-yellow-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0z" /></svg>
              Karachi, Pakistan
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-yellow-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0z" /></svg>
              <a href="mailto:qam600@gmail.com" className="underline hover:text-[#ff5e62]">qam600@gmail.com</a>
            </div>
          </div>
        </div>
        {/* Left Side: Info for desktop */}
        <div className="flex-1 flex-col justify-center hidden md:flex order-1 md:order-2">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">Ready to start your project or have questions? Reach out and I'll get back to you promptly.</p>
          <div className="space-y-5 text-lg">
            <div className="flex items-center gap-3 text-gray-700 dark:text-yellow-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /></svg>
              Qamar Ibrahim
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-yellow-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0z" /></svg>
              Karachi, Pakistan
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-yellow-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0z" /></svg>
              <a href="mailto:qam600@gmail.com" className="underline hover:text-[#ff5e62]">qam600@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
