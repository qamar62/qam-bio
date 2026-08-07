import React from 'react';
import BioCard from '../components/BioCard';

const DigitalCard = () => {
  const cardData = {
    avatar: '/qam.jpg',
    name: 'Qamar Ibrahim',
    title: 'Senior Python / Django Backend Engineer',
    bio: {
      tagline: 'Backend · AI Automation · DevOps',
      highlights: [
        'Python, Django & DRF Specialist',
        'REST APIs, PostgreSQL, Redis & Celery',
        'AI Automation — LLM, Voice AI & n8n',
        'Self-Hosted Infra — Proxmox & Docker',
        'CI/CD — Jenkins, SonarQube & Nexus',
        'Full-Stack Delivery with Next.js'
      ],
      experience: '10+ Years Experience',
      mission: 'Building production systems that cut manual work'
    },
    socials: {
      linkedin: 'https://linkedin.com/in/iamqam',
      github: 'https://github.com/qamar62',
      website: 'https://qaam.work',
      x: 'https://x.com/qamar62'
    },
    phone: '+971529733130',
    email: 'qam600@gmail.com',
    website: 'https://qaam.work',
    org: 'Five Vertex Tourism',
    location: 'Dubai, UAE',
    cardUrl: typeof window !== 'undefined' ? window.location.href : 'https://qaam.work/qam-bio',
    qrCodeUrl: 'https://qaam.work/qam-bio',
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--deep)' }}>
      <BioCard {...cardData} />
    </div>
  );
};

export default DigitalCard;
