'use client';

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects as projects } from "../../../data/projects.jsx";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Github, ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Projects() {
  const scrollRef = useRef(null);
  const featured = projects.filter((p) => p.featured);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, children } = scrollRef.current;
      if (children.length > 0) {
        const itemWidth = children[0].offsetWidth;
        const gap = 32; // This matches the 'gap-8' (8 * 4px)
        const step = itemWidth + gap;
        
        const scrollTo = direction === 'left' 
          ? scrollLeft - step 
          : scrollLeft + step;
        
        scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative px-4 py-8 bg-transparent overflow-hidden group/projects">
      {/* Background Decorative Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-[1400px] mx-auto space-y-8"
      >
        {/* Header Area... */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
          <div className="space-y-3 text-left">
            <motion.div 
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5"
            >
              <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <span className="text-slate-500 dark:text-slate-400 text-[9px] font-bold uppercase tracking-[0.25em]">Works</span>
            </motion.div>
            <motion.h2 
              variants={fadeUp}
              className="text-3xl md:text-5xl font-extralight tracking-[0.15em] uppercase text-slate-800 dark:text-white leading-none"
            >
              Featured <span className="font-bold tracking-tight lowercase italic text-blue-600 dark:text-blue-400">Projects</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp}>
            <Link
              href="/projects"
              className="group/link flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 hover:border-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-all"
            >
              All projects
              <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Carousel Viewport */}
        <div className="relative overflow-hidden sm:overflow-visible">
          {/* Edge Fades - Left */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 z-20 bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none" />
          
          {/* Edge Fades - Right */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 z-20 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none" />

          {/* Side Navigation Arrows - Left */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 shadow-xl transition-all opacity-0 sm:opacity-70 group-hover/projects:opacity-100 hidden sm:flex active:scale-90"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>

          {/* Side Navigation Arrows - Right */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 shadow-xl transition-all opacity-0 sm:opacity-70 group-hover/projects:opacity-100 hidden sm:flex active:scale-90"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>

          <motion.ul
            ref={scrollRef}
            className="relative z-10 flex gap-8 overflow-x-auto pb-12 pt-4 px-12 sm:px-24 snap-x snap-mandatory no-scrollbar list-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featured.map((project) => (
              <motion.li
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group relative flex-shrink-0 w-[85vw] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[450px] bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl snap-center cursor-default border border-slate-200/50 dark:border-white/5 z-10"
              >
                {/* Project Image - Background */}
                <div className="absolute inset-0 z-0 scale-100 group-hover:scale-110 transition-transform duration-1000">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top filter brightness-[0.8] group-hover:brightness-[0.35]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                  {/* Text Content */}
                  <div className="space-y-4 translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tech Stack Bubbles - Now below title & inside hover overlay */}
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <div key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                          <span className="text-[9px] font-bold text-white uppercase tracking-widest leading-none">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-sm text-slate-300 line-clamp-2 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-400 transition-colors"
                        >
                          <Play size={14} fill="currentColor" />
                          Live Demo
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-400 transition-colors"
                        >
                          <Github size={14} />
                          Source
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}

