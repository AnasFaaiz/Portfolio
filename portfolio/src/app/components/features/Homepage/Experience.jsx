'use client';

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { experiences } from "@/app/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.0, ease: 'easeOut' } } // Increased duration
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4 // Slowed down stagger
    }
  }
};

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 40, // Reduced stiffness for slower movement
    damping: 40,   // Increased damping for more "weight"
    restDelta: 0.001
  });

  // Beam Glow opacity transform
  const beamOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative px-4 py-8 bg-transparent overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-[10%] right-[-5%] w-[35rem] h-[35rem] bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1400px] mx-auto space-y-12"
      >
        {/* Header Area... */}
        <div className="space-y-3 text-left px-4">
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5"
          >
            <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <span className="text-slate-500 dark:text-slate-400 text-[9px] font-bold uppercase tracking-[0.25em]">Career</span>
          </motion.div>
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-5xl font-extralight tracking-[0.15em] uppercase text-slate-800 dark:text-white leading-none"
          >
            Professional <span className="font-bold tracking-tight lowercase italic text-blue-600 dark:text-blue-400">Experience</span>
          </motion.h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto px-4">
          
          {/* Timeline Animation Container (Desktop/Tablet) */}
          <div className="absolute left-[21px] sm:left-1/2 top-4 bottom-4 -translate-x-1/2 hidden md:block w-1.5 z-0">
            {/* Background Base Line */}
            <div className="absolute inset-0 w-px left-1/2 -translate-x-1/2 bg-slate-200 dark:bg-white/5" />
            
            {/* The Beam (Kamehameha Style) */}
            <motion.div 
              style={{ scaleY, originY: 0, opacity: beamOpacity }}
              className="absolute inset-0 w-px left-1/2 -translate-x-1/2 bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-600 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            />
            
            {/* Flying Orb / Head of the Beam */}
            <motion.div
              style={{ top: useTransform(scaleY, [0, 1], ["0%", "100%"]), opacity: beamOpacity }}
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_#60a5fa,0_0_40px_#3b82f6] z-10"
            >
              <div className="absolute inset-0 rounded-full animate-ping bg-blue-400/50 scale-150" />
            </motion.div>
          </div>

          {/* Mobile Specific Timeline */}
          <div className="absolute left-[21px] top-4 bottom-4 w-px bg-slate-200 dark:bg-white/5 md:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot (Center on Desktop) */}
                <div className="absolute left-0 sm:left-1/2 top-8 md:top-1/2 -translate-x-[7.5px] sm:-translate-x-1/2 sm:-translate-y-1/2 z-10">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ delay: 0.3 }}
                    className="w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                  />
                </div>

                {/* Date/Duration */}
                <div className={`w-full md:w-1/2 flex ${
                  idx % 2 === 0 ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12"
                } relative z-20`}>
                  <div className="flex flex-col gap-1 items-start md:items-end pl-8 md:pl-0">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-[10px]">
                      <Calendar size={12} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-medium uppercase tracking-wider">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${
                  idx % 2 === 0 ? "md:pl-12" : "md:pr-12"
                } relative z-20`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none backdrop-blur-sm group ml-8 md:ml-0"
                  >
                    {/* Decorative Corner Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-blue-500 dark:text-blue-400">
                          <Briefcase size={16} strokeWidth={2.5} />
                          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {exp.role}
                          </h3>
                        </div>
                        <p className="text-sm font-bold uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">
                          {exp.orgs}
                        </p>
                      </div>

                      <ul className="space-y-3">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/30 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

