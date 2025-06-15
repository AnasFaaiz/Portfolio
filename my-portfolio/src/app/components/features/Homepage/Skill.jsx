'use client';

import { useState } from 'react';
import Image from 'next/image';
import skills from '../../../data/skills.jsx';
import { motion } from 'framer-motion';

const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'DevOps', 'Testing', 'Others'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const SkillCard = ({ name, image }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center group transition-all"
  >
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
      <div className="absolute inset-0 bg-[#1E2330] rounded-md border border-white/10 group-hover:border-blue-500/50 transition duration-300">
        <div className="relative w-full h-full p-1.5">
          <Image
            src={image}
            alt={`${name} logo`}
            fill
            sizes="40px"
            className="object-contain p-0.5"
          />
        </div>
      </div>
    </div>
    <p className="mt-1 text-[10px] text-gray-400 group-hover:text-blue-400 transition-colors duration-300 text-center">
      {name}
    </p>
  </motion.div>
);

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  return (
    <main className="relative px-4 py-8 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden flex justify-center rounded-3xl">

{/* Glow blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse z-0" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 w-full max-w-7xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 md:p-14 space-y-12 text-white"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
          Skills & Technologies
        </h2>

        {/* Category Filters */}
        <motion.div
          variants={fadeUp}
          className="flex gap-2 overflow-x-auto scrollbar-hide mb-8 justify-center"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap text-sm px-4 py-1 rounded-full border transition ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
};

export default SkillSection;

