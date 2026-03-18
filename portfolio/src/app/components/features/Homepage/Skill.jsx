'use client';

import React, { useState, useEffect } from 'react';
import { skillMatrix } from '../../../data/skills';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 12,
    },
  },
};

const skillIconVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  },
};

const CategoryCard = ({ title, skills }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      className="group relative bg-white/[0.6] dark:bg-slate-900/[0.4] backdrop-blur-2xl border border-black/[0.05] dark:border-white/[0.08] rounded-[2.5rem] p-8 hover:border-blue-500/40 dark:hover:border-blue-400/20 transition-all duration-500 shadow-2xl shadow-black/[0.02] dark:shadow-none overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
          ),
        }}
      />

      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Category Title */}
      <div className="relative mb-10">
        <h3 className="text-2xl font-black text-slate-800 dark:text-white text-center tracking-tight flex items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          {title}
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        </h3>
        <div className="mt-2 h-1 w-12 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-30" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 gap-y-12 gap-x-6 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex flex-col items-center gap-4 text-center cursor-default group/skill"
          >
            <motion.div
              variants={skillIconVariants}
              whileHover="hover"
              className="relative w-16 h-16 flex items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 shadow-sm group-hover/skill:shadow-xl group-hover/skill:shadow-blue-500/10 group-hover/skill:border-blue-500/20 transition-all duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain filter grayscale-[0.2] group-hover/skill:grayscale-0 group-hover/skill:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover/skill:bg-blue-500/5 transition-colors" />
            </motion.div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-300 leading-none">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function SkillMatrix() {
  const groupedSkills = skillMatrix.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className="px-4 py-10 relative overflow-hidden bg-white/50 dark:bg-transparent">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto space-y-2"
      >
        {/* Section Header */}
        <div className="space-y-4 text-left px-2">
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5"
          >
            <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <span className="text-slate-500 dark:text-slate-400 text-[9px] font-bold uppercase tracking-[0.25em]">Expertise</span>
          </motion.div>
          
          <div className="space-y-2">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-5xl font-extralight tracking-[0.15em] uppercase text-slate-800 dark:text-white leading-none"
            >
              Developer <span className="font-bold tracking-tight lowercase italic text-blue-600 dark:text-blue-400">Toolkit</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-slate-400 dark:text-slate-500 max-w-lg text-xs sm:text-sm font-medium tracking-wide"
            >
              Industry-standard tools I leverage to build scalable digital solutions.
            </motion.p>
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <CategoryCard
              key={category}
              title={category}
              skills={skills}
            />
          ))}
        </div>

        {/* Floating background noise for texture */}
        <div className="absolute inset-0 z-[-1] opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </motion.div>
    </section>
  );
}

