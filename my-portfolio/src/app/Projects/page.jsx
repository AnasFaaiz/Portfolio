'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper Data & SVG Icon Components ---

// SVGs are now included directly to remove the 'react-icons' dependency.
const FaGithub = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>;
const FaStar = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path></svg>;
const FaCodeBranch = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm-5-1a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm6.207 3.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM4.5 9.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm6.207 3.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM.5 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0zm11 11a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0z"></path></svg>;
const FaExternalLinkAlt = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path><path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path></svg>;


const languageColors = {
  JavaScript: 'bg-yellow-400/10 text-yellow-300 ring-yellow-400/20',
  TypeScript: 'bg-blue-400/10 text-blue-300 ring-blue-400/20',
  Python: 'bg-green-400/10 text-green-300 ring-green-400/20',
  HTML: 'bg-orange-400/10 text-orange-300 ring-orange-400/20',
  CSS: 'bg-sky-400/10 text-sky-300 ring-sky-400/20',
  Java: 'bg-red-400/10 text-red-300 ring-red-400/20',
  Shell: 'bg-indigo-400/10 text-indigo-300 ring-indigo-400/20',
};

// Skeleton loader component for a better loading experience
const SkeletonCard = () => (
  <div className="border border-white/10 bg-white/5 rounded-lg p-5 animate-pulse">
    <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
    <div className="h-4 bg-gray-700 rounded w-full mb-1"></div>
    <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
    <div className="flex items-center gap-4">
      <div className="h-4 bg-gray-700 rounded w-1/4"></div>
      <div className="h-4 bg-gray-700 rounded w-1/4"></div>
    </div>
  </div>
);

// Card for a standard project
const ProjectCard = ({ repo }) => (
    <motion.li
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="border border-white/10 bg-white/5 rounded-lg p-5 hover:border-blue-400 hover:shadow-lg hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
    >
        <div>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group">
                <h2 className="text-xl font-semibold text-blue-400 flex items-center gap-2 mb-2 group-hover:underline">
                    <FaGithub /> {repo.name}
                </h2>
            </a>
            <p className="text-gray-300 text-sm mb-4 min-h-[40px]">{repo.description || 'No description provided.'}</p>
        </div>
        <div className="text-gray-400 text-xs mt-1 flex items-center gap-4 flex-wrap">
            {repo.language && (
                <span className={`px-2 py-1 rounded-full text-xs ring-1 ring-inset ${languageColors[repo.language] || 'bg-gray-400/10 text-gray-300 ring-gray-400/20'}`}>
                    {repo.language}
                </span>
            )}
            <span className="flex items-center gap-1"><FaStar /> {repo.stargazers_count}</span>
            <span className="flex items-center gap-1"><FaCodeBranch /> {repo.forks_count}</span>
            {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-300">
                    <FaExternalLinkAlt /> Live Demo
                </a>
            )}
        </div>
    </motion.li>
);

// --- Main Page Component ---

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
        // Use a personal access token if you have one to avoid rate limiting
        // const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        // const headers = token ? { Authorization: `token ${token}` } : {};
        const res = await fetch('https://api.github.com/users/AnasFaaiz/repos?sort=pushed&per_page=100');

        if (!res.ok) {
            throw new Error(`Failed to fetch repos: ${res.statusText}`);
        }

        const data = await res.json();
        
        // Separate featured projects from the rest
        const featured = data.filter(repo => repo.topics.includes('portfolio-featured'));
        const others = data.filter(repo => !repo.topics.includes('portfolio-featured'));

        setFeaturedProjects(featured);
        setAllProjects(others);
        setFilteredProjects(others);

        // Get list of unique languages from all non-featured projects
        const langs = Array.from(new Set(others.map(repo => repo.language).filter(Boolean)));
        setLanguages(['All', ...langs]);

      } catch (err) {
        console.error(err);
        setError('Could not load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    let filtered = [...allProjects];

    if (languageFilter !== 'All') {
      filtered = filtered.filter(repo => repo.language === languageFilter);
    }

    if (search.trim() !== '') {
      filtered = filtered.filter(repo =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [search, languageFilter, allProjects]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-20 text-white">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Projects
      </motion.h1>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
          <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-200">Featured Projects</h2>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredProjects.map(repo => <ProjectCard key={repo.id} repo={repo} />)}
              </ul>
          </section>
      )}

      {/* All Other Projects Section */}
      <section>
        {/* <h2 className="text-3xl font-bold mb-6 text-gray-200">All Projects</h2> */}
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center mb-8 sticky top-4 z-10 bg-gray-950/50 backdrop-blur-sm p-4 rounded-lg border border-white/10">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 w-full md:w-1/2 rounded-md bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="px-4 py-2 rounded-md bg-white/10 text-white outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        {/* Project List */}
        {loading ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
          </ul>
        ) : error ? (
            <p className="text-center text-red-400 bg-red-500/10 p-4 rounded-lg">{error}</p>
        ) : (
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((repo) => <ProjectCard key={repo.id} repo={repo} />)}
                </ul>
            ) : (
                <p className="text-center text-gray-500 mt-10">No projects found matching your criteria.</p>
            )}
          </AnimatePresence>
        )}
      </section>
    </main>
  );
};

export default ProjectsPage;

