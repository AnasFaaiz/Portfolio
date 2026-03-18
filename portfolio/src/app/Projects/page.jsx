'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Star, GitBranch, ExternalLink, Search, Filter, AppWindow, Code2 } from 'lucide-react';
import Navbar from "@/app/components/layout/Navbar";

/* =========================
   STYLE / DATA HELPERS
========================= */

const languageColors = {
  JavaScript: 'bg-yellow-400/20 text-yellow-500 border-yellow-400/30',
  TypeScript: 'bg-blue-400/20 text-blue-500 border-blue-400/30',
  Python: 'bg-green-400/20 text-green-500 border-green-400/30',
  HTML: 'bg-orange-400/20 text-orange-500 border-orange-400/30',
  CSS: 'bg-sky-400/20 text-sky-500 border-sky-400/30',
  Java: 'bg-red-400/20 text-red-500 border-red-400/30',
  Shell: 'bg-indigo-400/20 text-indigo-500 border-indigo-400/30',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

/* =========================
   COMPONENTS
========================= */

const SkeletonCard = () => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 rounded-[2.5rem] p-8 space-y-6 animate-pulse">
    <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800" />
    <div className="space-y-3">
      <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-full w-3/4" />
      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-full" />
      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-5/6" />
    </div>
    <div className="flex gap-4">
      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-12" />
      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-12" />
    </div>
  </div>
);

const ProjectCard = ({ repo }) => (
  <motion.li
    variants={fadeUp}
    whileHover={{ y: -8 }}
    className="group relative flex flex-col justify-between p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_30px_60px_rgba(59,130,246,0.1)] transition-all duration-500 overflow-hidden"
  >
    {/* Decorative Background Blob */}
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />

    <div className="space-y-5">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
          <Github size={24} strokeWidth={2.5} />
        </div>
        {repo.homepage && (
          <a 
            href={repo.homepage} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-400 hover:text-blue-600 transition-all"
            title="Live Demo"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-black text-slate-800 dark:text-white tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {repo.name}
        </h3>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
          {repo.description || 'Elevating digital experiences through clean architecture and innovative problem-solving.'}
        </p>
      </div>
    </div>

    <div className="pt-8 mt-auto flex items-center justify-between border-t border-slate-100 dark:border-white/5">
      <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
        <div className="flex items-center gap-1.5 text-xs font-bold tabular-nums">
          <Star size={14} className="text-blue-500" />
          {repo.stargazers_count}
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold tabular-nums">
          <GitBranch size={14} className="text-indigo-500" />
          {repo.forks_count}
        </div>
      </div>

      {repo.language && (
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${languageColors[repo.language] || 'bg-slate-100/50 text-slate-500 border-slate-200 dark:bg-white/5 dark:text-slate-400 dark:border-white/10'}`}>
          {repo.language}
        </span>
      )}
    </div>

    {/* View Project Button (Mobile/Tablet accessibility) */}
    <a 
      href={repo.html_url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="absolute inset-0 z-0"
    >
      <span className="sr-only">View {repo.name} on GitHub</span>
    </a>
  </motion.li>
);

/* =========================
   MAIN PAGE
========================= */

const ProjectsPage = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [languageFilter, setLanguageFilter] = useState('All');
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/AnasFaaiz/repos?sort=pushed&per_page=100');
        if (!res.ok) throw new Error(`Failed to fetch repos: ${res.statusText}`);
        const data = await res.json();
        
        const featured = data.filter(repo => repo.topics?.includes('portfolio-featured'));
        const others = data.filter(repo => !repo.topics?.includes('portfolio-featured'));

        setFeaturedProjects(featured);
        setAllProjects(others);
        setFilteredProjects(others);

        const langs = Array.from(new Set(others.map(repo => repo.language).filter(Boolean)));
        setLanguages(['All', ...langs]);
      } catch (err) {
        console.error(err);
        setError('Unable to reach the GitHub API. Please check back shortly.');
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  useEffect(() => {
    let filtered = [...allProjects];
    if (languageFilter !== 'All') filtered = filtered.filter(repo => repo.language === languageFilter);
    if (search.trim() !== '') {
      filtered = filtered.filter(repo =>
        repo.name.toLowerCase().includes(search.toLowerCase()) ||
        repo.description?.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredProjects(filtered);
  }, [search, languageFilter, allProjects]);

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      <main className="relative px-4 pt-32 pb-24 overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute top-[10%] right-[-10%] w-[50rem] h-[50rem] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto space-y-20">
          
          {/* Header Section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 text-left px-4"
          >
            <h1 className="text-4xl md:text-6xl font-extralight tracking-[0.15em] uppercase text-slate-800 dark:text-white leading-none">
              Explore <span className="font-black tracking-tighter lowercase italic text-blue-600 dark:text-blue-400">Projects</span>
            </h1>
          </motion.div>

          {/* Control Bar: Search & Filter */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="sticky top-24 z-50 mx-4"
          >
            <div className="flex flex-col md:flex-row gap-4 p-4 md:p-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-2xl">
              <div className="relative flex-1 group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-blue-600 transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="Search by name or keyword..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl py-3.5 pl-14 pr-6 text-sm font-bold text-slate-800 dark:text-white placeholder:text-slate-400 placeholder:font-medium focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div className="relative md:w-64 group">
                <Filter className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-indigo-600 transition-colors" size={18} />
                <select
                  value={languageFilter}
                  onChange={(e) => setLanguageFilter(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl py-3.5 pl-14 pr-10 text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 appearance-none focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">{lang}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 transition-transform group-hover:translate-y-0.5">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Projects (if any) */}
          {featuredProjects.length > 0 && !search && languageFilter === 'All' && (
            <div className="space-y-10 px-4">
              <motion.ul 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {featuredProjects.map(repo => <ProjectCard key={repo.id} repo={repo} />)}
              </motion.ul>
            </div>
          )}

          {/* All Projects List */}
          <div className="space-y-10 px-4">

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
              </div>
            ) : error ? (
              <div className="p-12 text-center rounded-[3rem] bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/10">
                <p className="text-red-600 dark:text-red-400 font-bold mb-4">{error}</p>
                <button onClick={() => window.location.reload()} className="px-6 py-2 bg-red-600 text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all">Retry</button>
              </div>
            ) : (
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((repo) => <ProjectCard key={repo.id} repo={repo} />)
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-full py-20 text-center space-y-4"
                    >
                      <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto text-slate-400">
                        <Search size={32} />
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 font-bold">No projects found matching your criteria.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;

