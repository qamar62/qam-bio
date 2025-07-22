import React, { useRef, useState, useEffect } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import Projects from './Projects';

const sections = [
  { id: 'home', icon: <FaHome size={24} />, label: 'Home' },
  { id: 'about', icon: <FaUser size={24} />, label: 'About' },
  { id: 'projects', icon: <FaProjectDiagram size={24} />, label: 'Projects' },
  { id: 'contact', icon: <FaEnvelope size={24} />, label: 'Contact' },
];

function Home() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bioCardVisible, setBioCardVisible] = useState(false);

  // Scroll to section
  const handleNavClick = (id) => {
    sectionRefs[id].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offsets = Object.entries(sectionRefs).map(([id, ref]) => ({
        id,
        offset: ref.current ? ref.current.getBoundingClientRect().top : 9999,
      }));
      const active = offsets.reduce((closest, curr) =>
        Math.abs(curr.offset) < Math.abs(closest.offset) ? curr : closest
      );
      setActiveSection(active.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark/light mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`flex min-h-screen ${darkMode ? 'bg-[#11202A] dark' : 'bg-white'}`}>
      {/* Mobile menu button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-[#1A2D3A] text-white md:hidden"
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      {/* Bio toggle button - all devices */}
      <div
        onClick={() => setBioCardVisible(!bioCardVisible)}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer"
        aria-label="Toggle bio card"
      >
        <div className="bg-gray-800 dark:bg-gray-900 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center overflow-hidden">
          <div className="bg-yellow-400 p-3 m-2 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="px-4 py-3 pr-6">
            <span className="font-semibold text-sm md:text-base whitespace-nowrap">
              {bioCardVisible ? 'Close Bio' : 'Show Bio'}
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar - desktop */}
      <div className="fixed left-0 top-0 h-full w-16 md:w-20 flex-col items-center py-8 px-2 bg-[#1A2D3A] z-30 shadow-lg hidden md:flex">
        {/* Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-8 p-2 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-black text-gray-200 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
        </button>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={`my-2 p-3 rounded-xl transition-colors duration-200 ${activeSection === section.id ? 'bg-yellow-400 text-black' : 'text-gray-300 hover:bg-gray-700'}`}
            aria-label={section.label}
          >
            {section.icon}
          </button>
        ))}
      </div>
      
      {/* Mobile menu - overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} onClick={() => setMobileMenuOpen(false)}></div>
      
      {/* Mobile menu - content */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#1A2D3A] z-40 transition-transform duration-300 transform md:hidden ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex flex-col items-center py-6 px-4">
          <div className="flex justify-between w-full mb-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-black text-gray-200 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-full bg-gray-700 text-white"
              aria-label="Close menu"
            >
              <FaTimes size={22} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  handleNavClick(section.id);
                  setMobileMenuOpen(false);
                }}
                className={`p-4 rounded-xl flex flex-col items-center justify-center transition-colors duration-200 ${activeSection === section.id ? 'bg-yellow-400 text-black' : 'text-gray-300 bg-gray-700'}`}
              >
                {section.icon}
                <span className="mt-2 text-sm">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bio Card - fullscreen overlay when toggled on all devices */}
      <div className={`fixed ${bioCardVisible ? 'inset-0 bg-black bg-opacity-75 flex' : 'hidden'} flex-col items-center justify-center z-40 px-4`}>
        <div className="bg-[#f7f7f7] dark:bg-[#233647] rounded-3xl shadow-xl flex flex-col items-center overflow-hidden p-0 border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-y-auto w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px] my-auto">
          {/* Image area styled like OVRO */}
          <div className="w-full h-90 bg-white flex items-center justify-center rounded-t-3xl overflow-hidden">
            <img
              src="/qam.jpg"
              alt="Qamar Ibrahim"
              className="object-cover w-full h-full"
              style={{ objectPosition: 'center top' }}
            />
          </div>
          {/* Info area */}
          <div className="flex flex-col items-center px-8 pt-6 pb-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-1 text-gray-900 dark:text-white text-center">Qamar Ibrahim</h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-yellow-300 mb-4 text-center">Python Django Developer</p>
            {/* Social icons row */}
            <div className="flex space-x-4 mb-6">
              <a href="https://x.com/qamar62" className="rounded-full border border-gray-300 dark:border-gray-500 p-2 hover:bg-yellow-400 hover:text-black transition-colors text-gray-700 dark:text-gray-200" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.53 6.47L6.47 17.53M6.47 6.47l11.06 11.06" /></svg></a>
              <a href="https://instagram.com/qam600" className="rounded-full border border-gray-300 dark:border-gray-500 p-2 hover:bg-yellow-400 hover:text-black transition-colors text-gray-700 dark:text-gray-200" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg></a>
              <a href="https://facebook.com/qam600" className="rounded-full border border-gray-300 dark:border-gray-500 p-2 hover:bg-yellow-400 hover:text-black transition-colors text-gray-700 dark:text-gray-200" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
              <a href="https://www.linkedin.com/in/iamqam/" className="rounded-full border border-gray-300 dark:border-gray-500 p-2 hover:bg-yellow-400 hover:text-black transition-colors text-gray-700 dark:text-gray-200" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
              <a href="https://dribbble.com/qamar62" className="rounded-full border border-gray-300 dark:border-gray-500 p-2 hover:bg-yellow-400 hover:text-black transition-colors text-gray-700 dark:text-gray-200" target="_blank" rel="noopener noreferrer" aria-label="Dribbble"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12a10 10 0 0 1 20 0" /><path d="M12 2a10 10 0 0 1 0 20" /><path d="M2 12a10 10 0 0 0 20 0" /></svg></a>
            </div>
            <a href="/QAMcv.pdf" download className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all text-lg shadow-md flex items-center justify-center w-full mb-2">
              DOWNLOAD CV
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12" /></svg>
            </a>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">© 2024 Qamar Ibrahim. All Rights Reserved.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-4 md:px-8 lg:px-12 py-4 md:py-6 space-y-6 md:space-y-8 overflow-y-auto ml-0 md:ml-20 lg:ml-20">
        <section ref={sectionRefs.home} id="home" className="min-h-[60vh] md:min-h-[70vh] flex items-center pt-4 md:pt-8">
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">Frontend to Backend <span className="block sm:inline">Development</span> <span className="text-yellow-400 italic block sm:inline">Digital Solutions</span></h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mb-4 leading-relaxed">
              I handle every aspect of your web project—from initial planning and design to development, deployment, and ongoing support.
            </p>
          </div>
        </section>
        <section ref={sectionRefs.about} id="about" className="min-h-[50vh] md:min-h-[60vh] flex items-center pt-4 md:pt-0">
          <div className="w-full max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed">
              Python Django Developer and DevOps Engineer with extensive experience in AI chat integration, automation workflows, and cloud computing. Proficient in digital marketing, Google API integration, and containerized application deployment using Docker. Strong understanding of front-end technologies (React) with hands-on experience in troubleshooting and optimizing workflows. Passionate about delivering high-impact solutions that streamline operations and drive user engagement.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 max-w-3xl">
              <div className="bg-gray-700 dark:bg-gray-600 rounded-lg p-3 text-center text-yellow-400 text-xs sm:text-sm font-medium transition-all hover:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105">Python</div>
              <div className="bg-gray-700 dark:bg-gray-600 rounded-lg p-3 text-center text-yellow-400 text-xs sm:text-sm font-medium transition-all hover:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105">Django</div>
              <div className="bg-gray-700 dark:bg-gray-600 rounded-lg p-3 text-center text-yellow-400 text-xs sm:text-sm font-medium transition-all hover:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105">DevOps</div>
              <div className="bg-gray-700 dark:bg-gray-600 rounded-lg p-3 text-center text-yellow-400 text-xs sm:text-sm font-medium transition-all hover:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105">React</div>
              <div className="bg-gray-700 dark:bg-gray-600 rounded-lg p-3 text-center text-yellow-400 text-xs sm:text-sm font-medium transition-all hover:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105">Docker</div>
              <div className="bg-gray-700 dark:bg-gray-600 rounded-lg p-3 text-center text-yellow-400 text-xs sm:text-sm font-medium transition-all hover:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105">Proxmox</div>
              <div className="bg-gray-700 dark:bg-gray-600 rounded-lg p-3 text-center text-yellow-400 text-xs sm:text-sm font-medium transition-all hover:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105">Ai Workflow</div>
              <div className="bg-gray-700 dark:bg-gray-600 rounded-lg p-3 text-center text-yellow-400 text-xs sm:text-sm font-medium transition-all hover:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105">SelfHosting</div>
              <div className="bg-gray-700 dark:bg-gray-600 rounded-lg p-3 text-center text-yellow-400 text-xs sm:text-sm font-medium transition-all hover:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105">Digital Complete Solutions</div>
            </div>
          </div>
        </section>
        <section ref={sectionRefs.projects} id="projects" className="min-h-[60vh] md:min-h-[70vh] flex items-center pt-4 md:pt-0">
          <div className="w-full max-w-6xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base md:text-lg">Check out some of my recent projects below.</p>
            <Projects />
          </div>
        </section>
        <section ref={sectionRefs.contact} id="contact" className="min-h-[50vh] md:min-h-[60vh] flex items-center pt-4 md:pt-0">
          <div className="w-full max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base md:text-lg">Feel free to reach out for collaboration or just a friendly hello!</p>
            <form className="space-y-4 w-full max-w-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-gray-700 dark:bg-gray-600 text-white text-sm sm:text-base border border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-gray-700 dark:bg-gray-600 text-white text-sm sm:text-base border border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors" />
              </div>
              <textarea placeholder="Message" className="w-full px-4 py-3 rounded-lg bg-gray-700 dark:bg-gray-600 text-white text-sm sm:text-base border border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors resize-none" rows={4}></textarea>
              <button type="submit" className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home
