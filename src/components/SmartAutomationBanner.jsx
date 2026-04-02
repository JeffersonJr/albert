import React from 'react';
import { motion } from 'framer-motion';

const SmartAutomationBanner = ({ title, description, badgeText = "Começar agora" }) => {
  return (
    <div className="relative w-full rounded-3xl bg-rich-black border border-white/10 p-12 md:p-20 overflow-hidden mt-20 group">
      {/* Background Graphic - Circular Globe pattern */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-white/20 fill-none">
          <circle cx="50" cy="50" r="48" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="40" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="30" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="20" />
          
          {/* Pulsing dots */}
          <circle cx="30" cy="30" r="1.5" fill="#00F5E1">
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="60" r="1" fill="#00F5E1">
            <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="20" r="2" fill="white">
             <animate attributeName="r" values="1;2.5;1" dur="5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-lg">
          {description}
        </p>
        
        <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-accent-neon hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,245,225,0.4)]">
          {badgeText}
        </button>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-rich-black via-rich-black to-transparent z-0" />
    </div>
  );
};

export default SmartAutomationBanner;
