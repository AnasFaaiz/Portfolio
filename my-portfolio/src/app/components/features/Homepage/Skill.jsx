'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {skillMatrix} from '../../../data/skills';

// Map categories to specific Tailwind CSS classes for consistent styling
const categoryStyles = {
  Frontend: 'border-blue-500/80 bg-blue-900/20',
  Backend: 'border-green-500/80 bg-green-900/20',
  Database: 'border-purple-500/80 bg-purple-900/20',
  DevOps: 'border-orange-500/80 bg-orange-900/20',
  Testing: 'border-yellow-500/80 bg-yellow-900/20',
};

// --- Sub-Components ---

// The info panel that displays details of the hovered skill
const InfoPanel = ({ skill }) => {
  if (!skill) {
    return (
      <div className="flex items-center justify-center h-full text-center text-gray-400 p-8">
        <p>Hover over a skill to see details</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12">
            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-white">{skill.name}</h3>
            <p className="text-sm text-gray-400">{skill.category}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{skill.description}</p>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-400">Proficiency:</span>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
            style={{ width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '65%' : '40%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};


// --- Main Component ---

export default function SkillMatrix() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const tileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <main className="relative px-4 py-8 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden flex justify-center rounded-3xl">
      <div className="relative z-10 w-full max-w-7xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 space-y-8">
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
        >
          My Developer Toolkit
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8">
            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4"
              onMouseLeave={() => setHoveredSkill(null)}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillMatrix.map((skill) => (
                <motion.div
                  key={skill.name}
                  className={`aspect-square p-3 rounded-lg border flex items-center justify-center transition-all duration-300 cursor-pointer group ${categoryStyles[skill.category] || 'border-gray-600'}`}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  variants={tileVariants}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 0px 20px rgba(100, 150, 255, 0.3)',
                    zIndex: 10,
                  }}
                >
                    <div className="relative w-full h-full">
                        <img src={skill.icon} alt={`${skill.name} logo`} className="w-full h-full object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
                    </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Information Panel */}
            <div className="relative min-h-[250px] bg-gray-900/40 rounded-lg border border-gray-700/50 shadow-inner">
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={hoveredSkill ? hoveredSkill.name : 'empty'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0"
                    >
                        <InfoPanel skill={hoveredSkill} />
                    </motion.div>
                 </AnimatePresence>
            </div>
        </div>
      </div>
    </main>
  );
}
