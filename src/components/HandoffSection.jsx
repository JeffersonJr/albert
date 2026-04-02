import React from 'react';
import { motion } from 'framer-motion';

const HandoffSection = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center py-12 ${className}`}>
      {/* Three overlapping circles with different colors/glows */}
      <div className="relative flex -space-x-4">
        {/* Circle 1 - Purple */}
        <motion.div
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 shadow-[0_0_20px_rgba(168,85,247,0.4)] z-10"
        />
        
        {/* Circle 2 - Blue with Icon */}
        <motion.div
          animate={{ y: [0, 10, 0], scale: [1.1, 1.15, 1.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.6)] z-20 flex items-center justify-center border-2 border-white/20"
        >
          <div className="w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm" />
        </motion.div>
        
        {/* Circle 3 - Orange */}
        <motion.div
          animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.4)] z-10"
        />
      </div>
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-accent-neon/5 blur-[80px] -z-10" />
    </div>
  );
};

export default HandoffSection;
