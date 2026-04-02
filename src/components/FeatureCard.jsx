import React from 'react';

const FeatureCard = ({ title, description, children, className = '', highlight = false }) => {
  return (
    <div className={`relative group p-8 rounded-3xl bg-rich-black border border-white/5 hover:border-accent-neon/30 transition-all duration-500 overflow-hidden ${className}`}>
      {/* Background glow effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 flex-shrink-0">
          {children}
        </div>
        
        <div className="mt-auto">
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-accent-neon transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
