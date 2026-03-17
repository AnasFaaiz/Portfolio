'use client';

import Image from "next/image";
import Link from "next/link";
import { featuredProjects as projects } from "../../../data/projects.jsx";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="relative px-4 py-8 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden flex items-center justify-center rounded-3xl">

{/* Decorative background glow blobs */}
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
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <motion.ul
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featured.map((project, idx) => (
            <motion.li
              key={project.id}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-blue-400/30 transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-full space-y-2">
                <h3 className="text-lg font-semibold text-white truncate" title={project.title}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="text-sm text-blue-400 hover:text-blue-500 transition-all"
                    >
                      Live Demo →
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="text-sm text-gray-400 hover:text-gray-200 transition-all"
                    >
                      Code →
                    </Link>
                  )}
                </div>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full">
                    Featured
                  </span>
                </div>
              )}
            </motion.li>
          ))}
        </motion.ul>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/Projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

