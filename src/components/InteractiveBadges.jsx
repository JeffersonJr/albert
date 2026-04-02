import React from 'react';
import { motion } from 'framer-motion';

const InteractiveBadges = ({ badges = [] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-12">
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent-neon/50 hover:bg-accent-neon/5 transition-all duration-300 cursor-default group"
        >
          <div className="w-2 h-2 rounded-full bg-accent-neon shadow-[0_0_8px_rgba(0,245,225,0.8)] group-hover:scale-125 transition-transform" />
          <span className="text-white/80 font-medium group-hover:text-white transition-colors">
            {badge}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveBadges;
