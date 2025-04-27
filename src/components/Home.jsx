import React, { useRef, useState, useEffect } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaSun, FaMoon } from 'react-icons/fa';
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
      {/* Sidebar - fixed */}
      <div className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-8 px-2 bg-[#1A2D3A] z-30 shadow-lg">
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

      {/* Bio Card - fixed next to sidebar at top */}
      <div className="fixed left-20 top-0 w-[420px] max-w-[94vw] z-20 flex flex-col items-center pt-8">
        <div className="bg-[#f7f7f7] dark:bg-[#233647] rounded-3xl shadow-xl flex flex-col items-center w-full overflow-hidden p-0 border border-gray-200 dark:border-gray-700">
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
              <a href="https://instagram.com/qamar62" className="rounded-full border border-gray-300 dark:border-gray-500 p-2 hover:bg-yellow-400 hover:text-black transition-colors text-gray-700 dark:text-gray-200" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg></a>
              <a href="https://facebook.com/qamar62" className="rounded-full border border-gray-300 dark:border-gray-500 p-2 hover:bg-yellow-400 hover:text-black transition-colors text-gray-700 dark:text-gray-200" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
              <a href="https://linkedin.com/in/qamar62" className="rounded-full border border-gray-300 dark:border-gray-500 p-2 hover:bg-yellow-400 hover:text-black transition-colors text-gray-700 dark:text-gray-200" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
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
      <div className="flex-1 flex flex-col pl-6 pr-4 py-8 space-y-16 overflow-y-auto" style={{ marginLeft: 500 }}>
        <section ref={sectionRefs.home} id="home" className="min-h-screen flex items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Frontend to Backend Development <span className="text-yellow-400 italic">Digital Solutions</span></h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-2xl max-w-2xl mb-2">
              I handle every aspect of your web project—from initial planning and design to development, deployment, and ongoing support.
            </p>
          </div>
        </section>
        <section ref={sectionRefs.about} id="about" className="min-h-screen flex items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-2xl text-lg md:text-xl">
              Python Django Developer and DevOps Engineer with extensive experience in AI chat integration, automation workflows, and cloud computing. Proficient in digital marketing, Google API integration, and containerized application deployment using Docker. Strong understanding of front-end technologies (React) with hands-on experience in troubleshooting and optimizing workflows. Passionate about delivering high-impact solutions that streamline operations and drive user engagement.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-700 rounded p-2 text-center text-yellow-400">Python</div>
              <div className="bg-gray-700 rounded p-2 text-center text-yellow-400">Django</div>
              <div className="bg-gray-700 rounded p-2 text-center text-yellow-400">DevOps</div>
              <div className="bg-gray-700 rounded p-2 text-center text-yellow-400">React</div>
              <div className="bg-gray-700 rounded p-2 text-center text-yellow-400">Docker</div>
              <div className="bg-gray-700 rounded p-2 text-center text-yellow-400">Cloud</div>
            </div>
          </div>
        </section>
        <section ref={sectionRefs.projects} id="projects" className="min-h-screen flex items-center">
          <div className="w-full">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">Portfolio</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg md:text-xl">Check out some of my recent projects below.</p>
            <Projects />
          </div>
        </section>
        <section ref={sectionRefs.contact} id="contact" className="min-h-screen flex items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg md:text-xl">Feel free to reach out for collaboration or just a friendly hello!</p>
            <form className="space-y-4 max-w-md">
              <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded bg-gray-700 text-white" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-gray-700 text-white" />
              <textarea placeholder="Message" className="w-full px-4 py-2 rounded bg-gray-700 text-white" rows={4}></textarea>
              <button type="submit" className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all">Send</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home
