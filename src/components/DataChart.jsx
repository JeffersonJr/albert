import React from 'react';
import { motion } from 'framer-motion';

const DataChart = ({ type = 'bar', data = [], className = '' }) => {
  if (type === 'bar') {
    return (
      <div className={`flex items-end gap-2 h-32 ${className}`}>
        {data.map((val, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${val}%` }}
            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
            className="w-4 bg-white/10 rounded-t-sm group-hover:bg-accent-neon/50 transition-colors duration-500 relative"
          >
            {/* Glow for high values */}
            {val > 70 && (
              <div className="absolute inset-0 bg-accent-neon/20 blur-md -z-10" />
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === 'line') {
    const points = data.map((val, i) => `${(i / (data.length - 1)) * 100},${100 - val}`).join(' ');
    
    return (
      <div className={`relative h-40 w-full ${className}`}>
        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="25" x2="100" y2="25" stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
          <line x1="0" y1="75" x2="100" y2="75" stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
          
          {/* The line */}
          <motion.polyline
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 245, 225, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 245, 225, 1)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* End point dot */}
          <motion.circle
            cx={(data.length - 1) * (100 / (data.length - 1))}
            cy={100 - data[data.length - 1]}
            r="3"
            fill="#00F5E1"
            filter="url(#glow)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2 }}
          />
        </svg>
      </div>
    );
  }

  return null;
};

export default DataChart;
