"use client"
import Image from 'next/image';
import Link from 'next/link';
import { featuredProjects as projects } from '../../../data/projects.jsx';
const ProjectCard = ({ project }) => (

    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
            
            {/* Overlay with links */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4">
                    <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 flex items-center space-x-2"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Live Demo</span>
                    </Link>
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 flex items-center space-x-2"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Code</span>
                    </Link>
                </div>
            </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
            <div className="absolute top-4 right-4">
                <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full">
                    Featured
                </span>
            </div>
        )}
    </div>
);

const ProjectSection = () => {
    const featuredProjects = projects.filter((project) => project.featured);
	return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills in web development, 
                        design, and problem-solving.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                    >
                        <span>View All Projects</span>
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
