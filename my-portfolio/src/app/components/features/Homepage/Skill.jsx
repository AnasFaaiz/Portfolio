"use client";
import { useState } from 'react';
import Image from 'next/image';
import skills from '../../../data/skills.jsx';

const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'DevOps', 'Testing', 'Others'];

const SkillCard = ({ name, image }) => (
  <div className="flex flex-col items-center group">
    <div className="relative w-10 h-10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
      <div className="absolute inset-0 bg-[#1E2330] rounded-md border border-gray-700/50 group-hover:border-blue-500/50 transition duration-300">
        <div className="relative w-full h-full p-1.5 group-hover:scale-110 transition-transform duration-300">
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
  </div>
);

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
          Skills & Technologies
        </span>
      </h2>

      <div className="max-w-6xl mx-auto p-4 sm:p-6 rounded-xl border border-gray-800 bg-[#1A1F2A]/90 backdrop-blur-sm shadow-xl">
        
        {/* Filters now inside the container */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 justify-center">
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
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;

