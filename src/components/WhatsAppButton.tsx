import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Powershine Tech, I would like to inquire about industrial card repairs / spare parts.'
  )}`;

  return (
    <div 
      className="fixed bottom-24 right-7 z-40 flex items-center justify-end select-none pointer-events-none"
      style={{ right: '1.75rem' }}
    >
      <div className="relative flex items-center justify-end pointer-events-auto">
        {/* Tooltip */}
        <div 
          className={`absolute right-14 bg-slate-900 text-white text-[11px] font-bold py-2 px-3.5 rounded-xl shadow-xl whitespace-nowrap transition-all duration-300 transform origin-right ${
            showTooltip ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-2 scale-75 pointer-events-none'
          }`}
        >
          Chat with us on WhatsApp
          {/* Arrow tail */}
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
        </div>

        {/* Floating Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-12.5 h-12.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
          aria-label="Chat with Powershine Tech on WhatsApp"
        >
          <svg 
            className="w-6 h-6 fill-current text-white" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.936 9.936 0 0 0 4.777 1.224h.005c5.505 0 9.988-4.478 9.99-9.985A9.97 9.97 0 0 0 12.012 2zm5.835 14.165c-.32.9-1.845 1.748-2.54 1.815-.635.06-1.277.282-4.086-.827-3.37-1.332-5.49-4.818-5.657-5.043-.168-.224-1.344-1.787-1.344-3.407S5.07 6.6 5.34 6.326c.27-.272.593-.34.79-.34.197 0 .393.003.565.012.18.01.42.003.653.564.24.58.825 2.012.898 2.158.073.146.12.316.023.511-.097.195-.145.316-.29.488-.148.17-.312.383-.443.513-.146.143-.3.3-.13.593.17.292.753 1.242 1.62 2.013.91 1.092 1.68 1.43 1.977 1.577.293.146.465.122.635-.073.17-.195.735-.853.93-1.146.195-.292.39-.244.655-.146.265.097 1.68.792 1.97.939.29.146.484.22.556.34.072.122.072.705-.247 1.605z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
