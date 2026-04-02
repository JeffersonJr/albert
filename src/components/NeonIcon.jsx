import React from 'react';

const NeonIcon = ({ icon: Icon, color = 'accent-neon', size = 24, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Glow */}
      <div className={`absolute inset-0 blur-lg opacity-40 bg-${color}`} />
      
      {/* Icon */}
      <Icon 
        size={size} 
        className={`relative z-10 text-${color} drop-shadow-[0_0_8px_rgba(0,245,225,0.8)]`} 
      />
    </div>
  );
};

export default NeonIcon;
