import React from 'react';
import BioCard from '../components/BioCard';
import '../styles/animations.css';

const DigitalCard = () => {
  // Enhanced data for the digital card
  const cardData = {
    avatar: '/qam.jpg',
    name: 'Qamar Ibrahim',
    title: 'Python Django Developer & DevOps Engineer',
    bio: {
      tagline: '🚀 Full-Stack Developer & DevOps Expert',
      highlights: [
        '🐍 Python & Django Specialist',
        '🤖 AI Integration & Automation',
        '☁️ Cloud Computing & DevOps',
        '⚛️ React & Modern Frontend',
        '🐳 Docker & Containerization',
        '📊 Digital Marketing Solutions'
      ],
      experience: '5+ Years Experience',
      mission: '💡 Delivering high-impact digital solutions'
    },
    socials: {
      linkedin: 'https://linkedin.com/in/iamqam',
      github: 'https://github.com/qamar62',
      website: 'https://qaam.work',
      instagram: 'https://instagram.com/qam600'
    },
    phone: '+971-529733130',
    email: 'qam600@gmail.com',
    website: 'https://qaam.work',
    cardUrl: window.location.href,
    qrCodeUrl: 'https://qaam.work/qam-bio',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <BioCard {...cardData} />
      </div>
    </div>
  );
};

export default DigitalCard;
