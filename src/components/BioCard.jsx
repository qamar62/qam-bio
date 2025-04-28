import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";

const BioCard = ({
  avatar = "https://avatars.githubusercontent.com/u/17507675?v=4",
  name = "Qamar Ibrahim",
  title = "Python Django Developer",
  bio = "Passionate developer with expertise in Python, Django, and modern web technologies. Let's connect and collaborate!",
  socials = {
    linkedin: "https://linkedin.com/in/iamqam",
    github: "https://github.com/qamar62",
    website: "https://qamdm.xyz",
    instagram: "https://instagram.com/qam600"
  },
  phone = "+971529733130",
  email = "qam600@gmail.com",
  website = "https://qamdm.xyz",
  cardUrl = window.location.href,
  qrCodeUrl = "https://qamdm.xyz/qam-io",
}) => {
  const vCardRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [isHovering, setIsHovering] = useState(null);

  // Generate vCard string using ONLY the provided props
  const vCardData = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${name}`,
    `EMAIL;TYPE=INTERNET:qam600@gmail.com`,
    `TITLE:${title}`,
    `TEL;TYPE=CELL,VOICE,WORK:+971529733130`,
    `URL;TYPE=WORK:https://qamdm.xyz`,
    `NOTE:${bio}`,
    "END:VCARD"
  ].join("\n");

  // Download vCard
  const downloadVCard = () => {
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.replace(/\s+/g, "_")}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Share card
  const shareCard = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: name,
          text: `Check out this digital card for ${name}!`,
          url: cardUrl,
        });
      } else {
        await navigator.clipboard.writeText(cardUrl);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
      await navigator.clipboard.writeText(cardUrl);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  // Enhanced social icons - they will ONLY use the socials prop provided
  const icons = {
    linkedin: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path 
          d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" 
          fill={isHovering === 'linkedin' ? "#0A66C2" : "currentColor"}
        />
      </svg>
    ),
    github: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path 
          d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" 
          fill={isHovering === 'github' ? "#181717" : "currentColor"}
        />
      </svg>
    ),
    website: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path 
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" 
          fill={isHovering === 'website' ? "#4285F4" : "currentColor"}
        />
      </svg>
    ),
    instagram: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </linearGradient>
        <path 
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" 
          fill={isHovering === 'instagram' ? "url(#ig-gradient)" : "currentColor"}
        />
      </svg>
    ),
    phone: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path 
          d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.074 15.074 0 0 1-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" 
          fill={isHovering === 'phone' ? "#34B7F1" : "currentColor"}
        />
      </svg>
    ),
    email: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path 
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
          fill={isHovering === 'email' ? "#EA4335" : "currentColor"}
        />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-8">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Top color band */}
        <div className="h-8 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        
        <div className="p-6 pb-4 flex flex-col items-center">
          {/* Avatar */}
          <div className="relative -mt-12 mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur-sm transform scale-110"></div>
            <img
              src={avatar}
              alt={name}
              className="relative w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
          
          {/* Name, title, and bio */}
          <h1 className="text-2xl font-bold text-gray-800 mb-1 text-center">{name}</h1>
          <h2 className="text-lg font-medium text-blue-600 mb-3 text-center">{title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-full mb-4"></div>
          <p className="text-gray-600 text-center text-sm leading-relaxed mb-6 max-w-xs">{bio}</p>
          
          {/* Social icons - now strictly using the socials prop */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center items-center">
            {Object.entries(socials).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full p-3 shadow-md transition-all duration-300 ${isHovering === key ? 'scale-110' : ''}`}
                style={{
                  backgroundColor: isHovering === key ? 
                    (key === 'linkedin' ? '#E8F4FC' : 
                     key === 'github' ? '#F0F0F0' : 
                     key === 'instagram' ? '#FDF3F8' : 
                     key === 'website' ? '#E8F0FE' : '#F5F5F5') : '#F5F5F5',
                  color: isHovering === key ? 
                    (key === 'linkedin' ? '#0A66C2' : 
                     key === 'github' ? '#181717' : 
                     key === 'instagram' ? '#E1306C' : 
                     key === 'website' ? '#4285F4' : '#333') : '#333'
                }}
                aria-label={key}
                title={key.charAt(0).toUpperCase() + key.slice(1)}
                onMouseEnter={() => setIsHovering(key)}
                onMouseLeave={() => setIsHovering(null)}
              >
                {icons[key]}
              </a>
            ))}
            
            {/* Contact buttons - using the exact phone and email from props */}
            <a
              href={`tel:${phone}`}
              className={`rounded-full p-3 shadow-md transition-all duration-300 ${isHovering === 'phone' ? 'scale-110' : ''}`}
              style={{
                backgroundColor: isHovering === 'phone' ? '#E3F2FD' : '#F5F5F5',
                color: isHovering === 'phone' ? '#34B7F1' : '#333'
              }}
              aria-label="Call"
              title="Call"
              onMouseEnter={() => setIsHovering('phone')}
              onMouseLeave={() => setIsHovering(null)}
            >
              {icons.phone}
            </a>
            
            <a
              href={`mailto:${email}`}
              className={`rounded-full p-3 shadow-md transition-all duration-300 ${isHovering === 'email' ? 'scale-110' : ''}`}
              style={{
                backgroundColor: isHovering === 'email' ? '#FDECEC' : '#F5F5F5',
                color: isHovering === 'email' ? '#EA4335' : '#333'
              }}
              aria-label="Email"
              title="Email"
              onMouseEnter={() => setIsHovering('email')}
              onMouseLeave={() => setIsHovering(null)}
            >
              {icons.email}
            </a>
          </div>
          
          {/* QR Code */}
          <div className="mb-6 p-2 bg-white rounded-2xl shadow-md">
            <div className="p-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl">
              <QRCode 
                value={qrCodeUrl} 
                size={140} 
                bgColor="#ffffff" 
                fgColor="#3b82f6" 
                level="H"
                className="rounded-lg"
              />
            </div>
            <p className="text-xs text-center mt-2 text-gray-500">Scan to connect</p>
          </div>
          
          {/* Save contact button */}
          <button
            onClick={downloadVCard}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
          >
            <span>Save Contact</span>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} {name}. All Rights Reserved.
          </p>
        </div>
      </div>
      
      {/* Share button */}
      <button
        onClick={shareCard}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full shadow-lg p-4 transition-all duration-300 z-50 animate-float"
        aria-label="Share Card"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
      
      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in flex items-center gap-2">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Link copied to clipboard!</span>
        </div>
      )}
    </div>
  );
};

export default BioCard;