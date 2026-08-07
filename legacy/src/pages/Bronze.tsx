import React from 'react';
import { 
  Globe, 
  Code, 
  Shield, 
  Zap, 
  Calendar,
  Target,
  Award,
  CheckCircle,
  Rocket,
  Brain,
  Clock,
  Database
} from 'lucide-react';
import { 
  SiNextdotjs, 
  SiDjango, 
  SiPostgresql, 
  SiRedis, 
  SiDocker,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';

const ProjectOverview: React.FC = () => {
  const techStack = [
    { name: 'Next.js', category: 'Frontend', color: 'bg-black', icon: SiNextdotjs },
    { name: 'Django', category: 'Backend', color: 'bg-green-600', icon: SiDjango },
    { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-600', icon: SiPostgresql },
    { name: 'Redis', category: 'Cache', color: 'bg-red-600', icon: SiRedis },
    { name: 'Docker', category: 'DevOps', color: 'bg-blue-500', icon: SiDocker },
  ];

  const aiWorkflows = [
    'Smart Recommendations',
    'Social Media Integration',
    'Customer Support Bot',
    'Fraud Detection'
  ];

  const timeline = [
    { days: 'Days 1-2', task: 'Project setup, Docker configuration, database design' },
    { days: 'Days 3-4', task: 'Backend API development, authentication system' },
    { days: 'Days 5-6', task: 'Frontend development, UI/UX implementation' },
    { days: 'Days 7-8', task: 'Booking system, payment integration, testing' },
    { days: 'Day 9', task: 'AI workflow integration, performance optimization' },
    { days: 'Day 10', task: 'DevOps deployment, final testing, go-live' },
  ];

  const successMetrics = [
    'Page load speed <2 seconds',
    'Mobile PageSpeed score >90',
    'Zero security vulnerabilities',
    '99.9% uptime post-deployment',
    'Seamless booking flow with <3% abandonment'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-cyan-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Bronze Tourism Web App ( B2C)
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A modern, SEO-optimized travel platform with robust booking capabilities, 
            anti-fraud measures, and AI-powered features to enhance user experience.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Code className="w-8 h-8 text-purple-400" />
            Architecture Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-12 h-12 ${tech.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.category}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Rocket className="w-8 h-8 text-cyan-400" />
            Core Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-semibold">Frontend (Next.js)</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Modern UI/UX with responsive design
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Home Page, Things-to-do, Activities, Transfer, 
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  SEO optimization with SSR/SSG
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Performance optimized
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Complete page architecture
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold">Backend (Django)</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Advanced booking engine
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Flexible discount system
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Secure user management
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  RESTful API architecture
                </li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold">Security & Auth</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  OTP email verification
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Anti-fraud protection
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  GDPR compliance
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Secure payment processing
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Workflows */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-400" />
            AI Workflow Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiWorkflows.map((workflow, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-purple-200">{workflow}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Clock className="w-8 h-8 text-cyan-400" />
            Development Timeline (10 Days)
          </h2>
          <div className="space-y-4">
            {timeline.map((phase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0">
                    {phase.days}
                  </div>
                  <p className="text-gray-300 flex-1">{phase.task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-green-400" />
            Success Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-green-200">{metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-12 border border-purple-500/30">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Travel Experience
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            This project combines modern web technologies with intelligent automation to create 
            a competitive travel platform that's both user-friendly and business-efficient.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            <Rocket className="w-5 h-5" />
            Let's Build the Future of Travel
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;