import React, { useRef } from "react";
import QRCode from "react-qr-code";

// Use Inter or Poppins font via Google Fonts in your main index.html or CSS
// Example props: {
//   avatar: "url",
//   name: "Qamar Ibrahim",
//   title: "Python Django Developer",
//   bio: "Passionate developer...",
//   socials: { linkedin: "", github: "", website: "", instagram: "" },
//   phone: "+971...",
//   email: "...",
//   website: "..."
// }

const BioCard = ({
  avatar,
  name,
  title,
  bio,
  socials = {},
  phone,
  email,
  website,
  cardUrl = window.location.href,
}) => {
  const vCardRef = useRef(null);

  // Generate vCard string
  const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTITLE:${title}\nTEL;TYPE=CELL:${phone || ""}\nEMAIL:${email || ""}\nURL:${website || cardUrl}\nEND:VCARD`;

  // Download vCard
  const downloadVCard = () => {
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.replace(/\s+/g, "_") || "contact"}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Social icons (SVG inline for customization)
  const icons = {
    linkedin: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#0A66C2" d="M4.98 3.5C3.33 3.5 2 4.82 2 6.48c0 1.65 1.32 2.97 2.98 2.97 1.66 0 2.98-1.32 2.98-2.97C7.96 4.82 6.64 3.5 4.98 3.5ZM2.4 21h5.16V9.88H2.4V21zM9.34 9.88V21H14.5v-5.5c0-1.32.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94V21h5.16V9.88h-5.16z"/></svg>
    ),
    github: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#181717" d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.98.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.39-3.87-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.26 5.69.42.36.79 1.09.79 2.2v3.26c0 .31.21.67.8.56C20.71 21.46 24 17.13 24 12.02 24 5.74 18.27.5 12 .5Z"/></svg>
    ),
    website: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4F8EF7" strokeWidth="2"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" stroke="#4F8EF7" strokeWidth="2"/></svg>
    ),
    instagram: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6" stroke="#E1306C" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#E1306C" strokeWidth="2"/><circle cx="17" cy="7" r="1" fill="#E1306C"/></svg>
    ),
  };

  // Share card (WhatsApp/Email)
  const shareCard = () => {
    if (navigator.share) {
      navigator.share({
        title: name,
        text: `Check out this digital card for ${name}!`,
        url: cardUrl,
      });
    } else {
      // fallback: copy to clipboard
      navigator.clipboard.writeText(cardUrl);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-8"
      style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
    >
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center animate-fade-in">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-28 h-28 rounded-full shadow-lg object-cover mb-4 border-4 border-blue-100"
          />
        )}
        <h1 className="text-2xl font-bold text-gray-800 mb-1 text-center">{name}</h1>
        <h2 className="text-lg font-medium text-blue-600 mb-2 text-center">{title}</h2>
        <p className="text-gray-600 text-center mb-4">{bio}</p>
        <div className="flex flex-row gap-3 mb-4 justify-center items-center">
          {/* Social icons */}
          {Object.entries(socials).map(([key, url]) =>
            url ? (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-50 p-3 shadow hover:bg-blue-100 transition-colors flex items-center justify-center"
                aria-label={key}
                title={key.charAt(0).toUpperCase() + key.slice(1)}
              >
                {icons[key]}
              </a>
            ) : null
          )}
          {/* Call icon */}
          {phone && (
            <a
              href={`tel:${phone}`}
              className="rounded-full bg-blue-50 p-3 shadow hover:bg-blue-100 transition-colors flex items-center justify-center"
              aria-label="Call"
              title="Call"
            >
              {/* Enhanced Phone icon */}
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="22" height="22" rx="11" fill="#2563eb"/><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.21.2 2.39.57 3.58a1 1 0 0 1-.24 1l-2.2 2.21Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          )}
          {/* Email icon */}
          {email && (
            <a
              href={`mailto:${email}`}
              className="rounded-full bg-blue-50 p-3 shadow hover:bg-blue-100 transition-colors flex items-center justify-center"
              aria-label="Email"
              title="Email"
            >
              {/* Enhanced Email icon */}
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="22" height="22" rx="11" fill="#2563eb"/><rect x="5" y="7" width="12" height="10" rx="3" stroke="#fff" strokeWidth="2"/><path d="m5 9 7 5 7-5" stroke="#fff" strokeWidth="2"/></svg>
            </a>
          )}
        </div>
        <div className="mb-4">
          <div style={{ background: '#fff', padding: 8, borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <QRCode value="https://qamdm.xyz/qam-io" size={96} bgColor="#fff" fgColor="#2563eb" />
</div>
        </div>

        <button
          onClick={downloadVCard}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-xl shadow transition-all duration-200 mb-2"
        >
          <span>Save Contact</span>
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 3v10m0 0l-3.5-3.5M10 13l3.5-3.5M4 17h12" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          onClick={shareCard}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 transition-all duration-200 z-50 animate-float"
          aria-label="Share Card"
          style={{ boxShadow: "0 4px 16px rgba(37,99,235,0.15)" }}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 8.5V6a3 3 0 0 0-6 0v2.5" stroke="#fff" strokeWidth="2"/><rect x="5" y="8.5" width="14" height="11" rx="3" stroke="#fff" strokeWidth="2"/></svg>
        </button>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.7s ease; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 2.5s ease-in-out infinite; }
      `}</style>
      <footer className="mt-8 text-xs text-gray-400 text-center">© {new Date().getFullYear()} {name}. All Rights Reserved.</footer>
    </div>
  );
};

export default BioCard;
