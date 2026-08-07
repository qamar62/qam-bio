import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaAddressCard } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Projects from './Projects';
import Skills from './Skills';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Home() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bioCardVisible, setBioCardVisible] = useState(false);

  // Contact form state
  const CONTACT_WEBHOOK = 'https://wflow.qaam.work/webhook/deb1ee16-9d1e-43c1-b1fb-e0096a493218';
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error
  const [formError, setFormError] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (formStatus === 'error') { setFormStatus('idle'); setFormError(''); }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setFormStatus('error');
      setFormError('Please fill in your name, email and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus('error');
      setFormError('Please enter a valid email address.');
      return;
    }

    try {
      setFormStatus('sending');
      setFormError('');
      const res = await fetch(CONTACT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: form.subject.trim() || 'Portfolio contact',
          message,
          source: 'qaam.work portfolio',
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setFormStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setFormStatus('error');
      setFormError('Could not send right now. Please try again or email qam600@gmail.com.');
    }
  };

  const handleNavClick = (id) => {
    sectionRefs[id].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex min-h-screen" style={{ background: darkMode ? 'var(--deep)' : '#ffffff', color: darkMode ? 'var(--text)' : '#000000' }}>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-6 right-6 z-50 p-3 md:hidden"
        style={{ background: 'var(--surface)', color: 'var(--gold)' }}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar - desktop */}
      <div className="fixed left-0 top-0 h-full w-20 flex-col items-center justify-center py-12 z-30 hidden md:flex" style={{ background: 'var(--surface)' }}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-20 left-1/2 -translate-x-1/2 opacity-30" style={{ background: 'linear-gradient(180deg, transparent, var(--gold), transparent)', animation: 'scanline 8s linear infinite' }}></div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-12 w-3 h-3 rounded-full transition-all duration-300"
          style={{ background: darkMode ? 'var(--gold)' : 'var(--text-dim)', boxShadow: darkMode ? '0 0 12px var(--gold)' : 'none' }}
          aria-label="Toggle dark mode"
        ></button>

        <div className="flex flex-col items-center space-y-8">
          {sections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className="relative group"
              aria-label={section.label}
            >
              <div className="w-1 transition-all duration-300" style={{
                height: activeSection === section.id ? '32px' : '12px',
                background: activeSection === section.id ? 'var(--gold)' : 'var(--text-dim)',
                opacity: activeSection === section.id ? 1 : 0.4
              }}></div>
              <span className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs tracking-wider" style={{ color: 'var(--gold)', fontFamily: "'DM Mono', monospace" }}>
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-80 z-40 md:hidden transition-opacity ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`fixed top-0 right-0 h-full w-64 z-40 transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ background: 'var(--surface)' }}>
        <div className="flex flex-col p-8 space-y-6">
          <button onClick={() => setDarkMode(!darkMode)} className="self-end w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--surface-2)', color: 'var(--gold)' }}>
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => { handleNavClick(section.id); setMobileMenuOpen(false); }}
              className="text-left py-2 text-lg tracking-wider transition-colors"
              style={{
                color: activeSection === section.id ? 'var(--gold)' : 'var(--text-dim)',
                fontFamily: "'Syne', sans-serif",
                fontWeight: activeSection === section.id ? 700 : 400
              }}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bio Avatar Button */}
      <button
        onClick={() => setBioCardVisible(!bioCardVisible)}
        className="fixed left-6 bottom-6 z-50 w-12 h-12 rounded-full overflow-hidden transition-all duration-300 hover:scale-110"
        style={{ border: '2px solid var(--gold)', boxShadow: '0 0 20px rgba(245,197,24,0.3)' }}
        aria-label="Toggle bio"
      >
        <img src="/qam.jpg" alt="Qamar Ibrahim" className="w-full h-full object-cover" />
      </button>

      {/* Bio Card - Glass Morphism Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${bioCardVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ background: 'rgba(0,0,0,0.92)' }} onClick={() => setBioCardVisible(false)}>
        <div
          className="max-w-lg w-full overflow-hidden transition-all duration-700 relative"
          style={{
            background: 'rgba(17,24,32,0.98)',
            backdropFilter: 'blur(30px)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            transform: bioCardVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,197,24,0.1)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none" style={{
            background: 'linear-gradient(135deg, transparent 0%, var(--gold-dim) 50%, transparent 100%)',
            filter: 'blur(20px)',
            animation: bioCardVisible ? 'shimmerSweep 3s ease-in-out infinite' : 'none'
          }}></div>

          {/* Image Section with Gradient Overlay */}
          <div className="relative h-72 overflow-hidden">
            <img src="/qam.jpg" alt="Qamar Ibrahim" className="w-full h-full object-cover" style={{ filter: 'brightness(0.9) contrast(1.1)' }} />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(10,15,20,0.4) 60%, rgba(10,15,20,0.95) 100%)'
            }}></div>

            {/* Floating Name Tag */}
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-4xl font-bold mb-1 tracking-tight" style={{
                fontFamily: "'Syne', sans-serif",
                color: 'var(--text)',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>Qamar Ibrahim</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--gold)', boxShadow: '0 0 10px var(--gold)' }}></div>
                <p className="text-sm tracking-wider uppercase" style={{
                  color: 'var(--gold)',
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: '0.1em'
                }}>Available for Work</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 relative">
            {/* Role & Expertise */}
            <div className="mb-8">
              <p className="text-lg mb-3" style={{
                color: 'var(--text)',
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600
              }}>Senior Python / Django Backend Engineer</p>
              <div className="flex flex-wrap gap-2">
                {['AI Automation', 'DevOps', 'DRF', 'Proxmox'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs tracking-wide"
                    style={{
                      background: 'var(--gold-dim)',
                      color: 'var(--gold)',
                      fontFamily: "'DM Mono', monospace",
                      border: '1px solid var(--border)',
                      borderRadius: '4px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px mb-8" style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }}></div>

            {/* Social Links with Staggered Animation */}
            <div className="flex justify-center gap-4 mb-8">
              {[
                { href: 'https://github.com/qamar62', icon: <FaGithub size={22} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/iamqam/', icon: <FaLinkedin size={22} />, label: 'LinkedIn' },
                { href: 'https://x.com/qamar62', icon: <FaTwitter size={22} />, label: 'Twitter' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 relative group"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    borderRadius: '12px',
                    opacity: bioCardVisible ? 1 : 0,
                    transform: bioCardVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.3 + idx * 0.1}s`
                  }}
                  aria-label={social.label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gold)';
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.color = 'var(--deep)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text)';
                  }}
                >
                  {social.icon}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap" style={{ color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}>
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Button with Gradient Border */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: 'linear-gradient(135deg, var(--gold), var(--gold-dim))',
                filter: 'blur(8px)'
              }}></div>
              <a
                href="/QAMcv.pdf"
                download
                className="relative w-full py-4 flex items-center justify-center font-bold text-lg tracking-widest transition-all duration-300 overflow-hidden"
                style={{
                  background: 'var(--gold)',
                  color: 'var(--deep)',
                  fontFamily: "'Syne', sans-serif",
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(245,197,24,0.3)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span className="relative z-10">DOWNLOAD CV</span>
                <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-y-1 relative z-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            {/* Footer Note */}
            <p className="text-center mt-6 text-xs" style={{ color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}>
              © 2026 Qamar Ibrahim · All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-20 overflow-y-auto">
        {/* Hero Section */}
        <section ref={sectionRefs.home} id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 rounded-full pointer-events-none"
              style={{
                background: 'var(--gold)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                '--float-x': `${(Math.random() - 0.5) * 60}px`,
                '--float-y': `${(Math.random() - 0.5) * 60}px`,
                animation: `floatParticle ${4 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></span>
          ))}

          <div className="max-w-5xl w-full relative z-10">
            <h1 className="font-bold mb-6 leading-none group cursor-default" style={{ fontFamily: "'Syne', sans-serif" }}>
              <div className="text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-2" style={{ color: 'var(--text)', fontWeight: 800, letterSpacing: '-0.05em' }}>
                QAMAR
              </div>
              <div className="text-5xl md:text-7xl lg:text-8xl tracking-tight relative inline-block" style={{ color: 'var(--text)', fontWeight: 800 }}>
                IBRAHIM
                <div className="absolute bottom-0 left-0 h-px origin-left" style={{ background: 'var(--gold)', animation: 'lineExpand 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}></div>
              </div>
            </h1>

            {/* Save Contact / Digital Card link */}
            <Link
              to="/qam-bio"
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm tracking-wide transition-all duration-300"
              style={{
                border: '1px solid var(--gold)',
                color: 'var(--gold)',
                borderRadius: '999px',
                fontFamily: "'DM Mono', monospace",
                animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s both'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--deep)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
            >
              <FaAddressCard />
              Save Contact
            </Link>

            <div className="flex flex-wrap gap-3 mb-8 text-sm md:text-base" style={{ fontFamily: "'DM Mono', monospace", color: 'var(--text-dim)' }}>
              {['Senior Python / Django Engineer', 'AI Automation', 'DevOps'].map((word, idx, arr) => (
                <span
                  key={idx}
                  className="opacity-0"
                  style={{
                    animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) both',
                    animationDelay: `${0.8 + idx * 0.15}s`
                  }}
                >
                  {word}
                  {idx < arr.length - 1 && <span style={{ color: 'var(--gold)' }}> · </span>}
                </span>
              ))}
            </div>

            <div className="h-px w-48 mb-12 origin-center" style={{ background: 'var(--gold)', animation: 'lineExpand 1s cubic-bezier(0.16,1,0.3,1) 1.2s both' }}></div>

            {/* Rotating Badge */}
            <div className="absolute bottom-12 right-0 md:bottom-24 md:right-12 w-24 h-24 md:w-32 md:h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full" style={{ animation: 'rotateCircle 20s linear infinite' }}>
                <defs>
                  <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text style={{ fill: 'var(--gold)', fontSize: '10px', fontFamily: "'DM Mono', monospace", letterSpacing: '2px' }}>
                  <textPath href="#circlePath">AVAILABLE FOR WORK · 2026 · </textPath>
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={sectionRefs.about} id="about" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20 relative">
          <div className="max-w-4xl w-full">
            <div className="relative mb-8">
              <span className="absolute -left-4 md:-left-12 top-0 text-8xl md:text-9xl font-bold opacity-15" style={{ color: 'var(--gold)', fontFamily: "'Syne', sans-serif" }}>02</span>
              <h2 className="text-4xl md:text-6xl font-bold relative z-10" style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}>ABOUT</h2>
            </div>

            <p className="mb-12 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-dim)' }}>
              Senior Python / Django backend engineer with 10+ years designing, building and operating production systems. I specialize in REST API development, relational data modeling and scalable backend architecture with Django, DRF, PostgreSQL, Redis and Celery — and I've independently delivered full-stack platforms across travel, B2B commerce, sports and property management. Increasingly focused on AI automation and LLM integration, I build self-hosted, production-grade systems: a multilingual voice assistant (ElevenLabs + LLM APIs), n8n workflow automation and Claude / ChatGPT tool-calling that connect internal systems and booking engines to cut manual work. Backed by a strong DevOps foundation across Proxmox, Docker and CI/CD.
            </p>

            {/* Skills Pills */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'n8n', 'Proxmox'].map((skill, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 text-center text-sm font-medium transition-all duration-300 cursor-default group overflow-hidden relative"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--gold)',
                    fontFamily: "'DM Mono', monospace",
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(90deg, var(--gold-dim) 0%, transparent 100%)';
                    e.currentTarget.style.backgroundSize = '200% 100%';
                    e.currentTarget.style.animation = 'shimmerSweep 1.5s ease-in-out';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.animation = 'none';
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Career Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}>Career Highlights</h3>
              {[
                { year: '2025', role: 'Backend Engineer — AI Automation & DevOps' },
                { year: '2012', role: 'Backend Developer / Technical Ops Engineer' },
                { year: '2008', role: 'Web & Online Operations Executive' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-6 group">
                  <span className="text-2xl font-bold w-20" style={{ color: 'var(--gold)', fontFamily: "'Syne', sans-serif" }}>{item.year}</span>
                  <div className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150" style={{ background: 'var(--gold)' }}></div>
                  <div className="flex-1 h-px" style={{ background: 'var(--border)' }}></div>
                  <span className="text-sm md:text-base" style={{ color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}>{item.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={sectionRefs.skills} id="skills" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-5xl w-full">
            <div className="relative mb-12">
              <span className="absolute -left-4 md:-left-12 top-0 text-8xl md:text-9xl font-bold opacity-15" style={{ color: 'var(--gold)', fontFamily: "'Syne', sans-serif" }}>03</span>
              <h2 className="text-4xl md:text-6xl font-bold relative z-10 mb-4" style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}>SKILLS</h2>
              <p className="text-base md:text-lg" style={{ color: 'var(--text-dim)' }}>The stack I design, build and operate with</p>
            </div>
            <Skills />
          </div>
        </section>

        {/* Projects Section */}
        <section ref={sectionRefs.projects} id="projects" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-6xl w-full">
            <div className="relative mb-12">
              <span className="absolute -left-4 md:-left-12 top-0 text-8xl md:text-9xl font-bold opacity-15" style={{ color: 'var(--gold)', fontFamily: "'Syne', sans-serif" }}>04</span>
              <h2 className="text-4xl md:text-6xl font-bold relative z-10 mb-4" style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}>PROJECTS</h2>
              <p className="text-base md:text-lg" style={{ color: 'var(--text-dim)' }}>Selected work that ships real value</p>
            </div>
            <Projects />
          </div>
        </section>

        {/* Contact Section */}
        <section ref={sectionRefs.contact} id="contact" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-2xl w-full">
            <div className="relative mb-12">
              <span className="absolute -left-4 md:-left-12 top-0 text-8xl md:text-9xl font-bold opacity-15" style={{ color: 'var(--gold)', fontFamily: "'Syne', sans-serif" }}>05</span>
              <h2 className="text-4xl md:text-6xl font-bold relative z-10 mb-4" style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}>CONTACT</h2>
              <p className="text-base md:text-lg" style={{ color: 'var(--text-dim)' }}>Let's build something together</p>
            </div>

            <form className="space-y-8" onSubmit={handleFormSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
                  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
                ].map((field) => (
                  <div key={field.name} className="relative group">
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleFormChange}
                      placeholder={field.label}
                      autoComplete={field.autoComplete}
                      disabled={formStatus === 'sending'}
                      className="w-full bg-transparent pb-3 outline-none transition-all duration-300 disabled:opacity-50"
                      style={{
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text)',
                        fontFamily: "'DM Mono', monospace"
                      }}
                      onFocus={(e) => e.target.style.borderBottom = '1px solid var(--gold)'}
                      onBlur={(e) => e.target.style.borderBottom = '1px solid var(--border)'}
                    />
                  </div>
                ))}
              </div>
              <div className="relative group">
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleFormChange}
                  placeholder="Subject (optional)"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-transparent pb-3 outline-none transition-all duration-300 disabled:opacity-50"
                  style={{
                    borderBottom: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: "'DM Mono', monospace"
                  }}
                  onFocus={(e) => e.target.style.borderBottom = '1px solid var(--gold)'}
                  onBlur={(e) => e.target.style.borderBottom = '1px solid var(--border)'}
                />
              </div>
              <div className="relative group">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleFormChange}
                  placeholder="Message"
                  rows={4}
                  disabled={formStatus === 'sending'}
                  className="w-full bg-transparent pb-3 outline-none resize-none transition-all duration-300 disabled:opacity-50"
                  style={{
                    borderBottom: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: "'DM Mono', monospace"
                  }}
                  onFocus={(e) => e.target.style.borderBottom = '1px solid var(--gold)'}
                  onBlur={(e) => e.target.style.borderBottom = '1px solid var(--border)'}
                ></textarea>
              </div>

              {/* Status messages */}
              {formStatus === 'error' && (
                <p className="text-sm" style={{ color: '#ff6b6b', fontFamily: "'DM Mono', monospace" }}>
                  {formError}
                </p>
              )}
              {formStatus === 'success' && (
                <p className="text-sm" style={{ color: 'var(--gold)', fontFamily: "'DM Mono', monospace" }}>
                  ✓ Thanks — your message is on its way. I'll get back to you soon.
                </p>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="px-12 py-4 font-bold text-lg tracking-wide transition-all duration-300 relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  border: '2px solid var(--gold)',
                  color: 'var(--gold)',
                  background: 'transparent',
                  fontFamily: "'Syne', sans-serif"
                }}
                onMouseEnter={(e) => {
                  if (formStatus === 'sending') return;
                  e.currentTarget.style.background = 'var(--gold)';
                  e.currentTarget.style.color = 'var(--deep)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--gold)';
                }}
              >
                {formStatus === 'sending' ? 'SENDING…' : 'SEND MESSAGE'}
              </button>
            </form>

            <div className="mt-16 flex space-x-6">
              {[
                { href: 'https://github.com/qamar62', icon: <FaGithub size={24} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/iamqam/', icon: <FaLinkedin size={24} />, label: 'LinkedIn' },
                { href: 'https://x.com/qamar62', icon: <FaTwitter size={24} />, label: 'Twitter' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                  style={{ color: 'var(--text-dim)' }}
                  aria-label={social.label}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home
