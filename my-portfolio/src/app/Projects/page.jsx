'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [languageFilter, setLanguageFilter] = useState('All');
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/AnasFaaiz/repos');
        const data = await res.json();

        // Sort by most recently updated
        const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setProjects(sorted);
        setFilteredProjects(sorted);

        // Get list of unique languages
        const langs = Array.from(new Set(sorted.map(repo => repo.language).filter(Boolean)));
        setLanguages(['All', ...langs]);

        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch repos:', err);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    let filtered = [...projects];

    if (languageFilter !== 'All') {
      filtered = filtered.filter(repo => repo.language === languageFilter);
    }

    if (search.trim() !== '') {
      filtered = filtered.filter(repo =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [search, languageFilter, projects]);

  if (loading) return <div className="text-center text-gray-400 py-10">Loading projects...</div>;

  return (
    <main className="max-w-6xl mx-auto px-4 py-20 text-white">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Projects
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center mb-6">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 w-full md:w-1/2 rounded-md bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
          className="px-4 py-2 rounded-md bg-white/10 text-white outline-none focus:ring-2 focus:ring-blue-500"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      {/* Project List */}
      <ul className="space-y-4">
        {filteredProjects.map((repo) => (
          <li key={repo.id} className="border border-white/10 bg-white/5 rounded-lg p-5 hover:border-blue-400 hover:shadow-lg transition-all">
            <Link href={`/Projects/${repo.name}`}>
              <div className="flex flex-col gap-1 cursor-pointer">
                <h2 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                  <FaGithub className="inline" /> {repo.name}
                </h2>
                <p className="text-gray-300 text-sm">{repo.description || 'No description provided.'}</p>
                <div className="text-gray-400 text-xs mt-1 flex items-center gap-4 flex-wrap">
                  <span>Last updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                  {repo.language && <span className="px-2 py-0.5 bg-blue-900 rounded">{repo.language}</span>}
                  <span className="flex items-center gap-1"><FaStar /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><FaCodeBranch /> {repo.forks_count}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No projects found.</p>
      )}
    </main>
  );
};

export default ProjectsPage;

