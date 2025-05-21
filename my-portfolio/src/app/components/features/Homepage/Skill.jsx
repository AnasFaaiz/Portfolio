"use client"
import Image from 'next/image';
import { useState } from 'react'; 
import EditSkillsOverlay from './EditSkills';

const skillCategories = [
    {
        category: "Programming Languages",
        skills: [
            { name: 'JavaScript', image: '/skills/javascript.svg' },
            { name: 'TypeScript', image: '/skills/typescript.svg' },
            { name: 'Python', image: '/skills/python.svg' },
        ]
    },
    {
        category: "Frontend",
        skills: [
            { name: 'React', image: '/skills/react.svg' },
            { name: 'Next.js', image: '/skills/nextdotjs.svg' },
            { name: 'TailwindCSS', image: '/skills/tailwind.svg' },
            { name: 'HTML5', image: '/skills/html5.svg' },
            { name: 'CSS3', image: '/skills/css3.svg' },
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: 'Node.js', image: '/skills/nodejs.svg' },
            { name: 'Express.js', image: '/skills/express.svg' },
            { name: 'REST API', image: '/skills/api.svg' },
        ]
    },
    {
        category: "Database",
        skills: [
            { name: 'MongoDB', image: '/skills/mongodb.svg' },
            { name: 'MySQL', image: '/skills/mysql.svg' },
            { name: 'PostgreSQL', image: '/skills/postgresql.svg' },
        ]
    },
    {
        category: "DevOps",
        skills: [
            { name: 'Docker', image: '/skills/docker.svg' },
            { name: 'AWS', image: '/skills/aws.svg' },
            { name: 'CI/CD', image: '/skills/cicd.svg' },
        ]
    },
    {
        category: "Tools & IDE",
        skills: [
            { name: 'VS Code', image: '/skills/vscode.svg' },
            { name: 'Postman', image: '/skills/postman.svg' },
            { name: 'npm', image: '/skills/npm.svg' },
        ]
    },
    {
        category: "Version Control",
        skills: [
            { name: 'Git', image: '/skills/git.svg' },
            { name: 'GitHub', image: '/skills/github.svg' },
        ]
    },
    {
        category: "Testing",
        skills: [
            { name: 'Jest', image: '/skills/jest.svg' },
            { name: 'React Testing Library', image: '/skills/testing-library.svg' },
        ]
    },
    {
        category: "Content Management",
        skills: [
            { name: 'WordPress', image: '/skills/wordpress.svg' },
            { name: 'Strapi', image: '/skills/strapi.svg' },
        ]
    },
    {
        category: "Others",
        skills: [
            { name: 'Figma', image: '/skills/figma.svg' },
            { name: 'Markdown', image: '/skills/markdown.svg' },
        ]
    },
];

const SkillCard = ({ name, image }) => (
    <div className="flex flex-col items-center group">
        <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-[#1E2330] rounded-lg border border-gray-700/50 group-hover:border-blue-500/50 transition-colors duration-300">
                <div className="relative w-full h-full p-2 transform group-hover:scale-110 transition-transform duration-300">
                    <Image
                        src={image}
                        alt={`${name} logo`}
                        fill
                        className="object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] p-1"
                        sizes="48px"
                    />
                </div>
            </div>
        </div>
        <p className="mt-1 text-xs font-medium text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
            {name}
        </p>
    </div>
);

const SkillSection = () => {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [categories, setCategories] = useState(skillCategories);

    const handleUpdateSkills = (newCategories) => {
        setCategories(newCategories);
    };

    return (
        <section className="py-8 relative">
            <button 
                onClick={() => setIsEditOpen(true)}
                className="absolute top-4 right-4 p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors shadow-lg group"
            >
                <svg 
                    className="w-5 h-5 text-white transform group-hover:rotate-45 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" 
                    />
                </svg>
            </button>

            <EditSkillsOverlay 
                isOpen={isEditOpen} 
                onClose={() => setIsEditOpen(false)} 
                categories={categories}
                onUpdate={handleUpdateSkills}
            />

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
                    Skills & Technologies
                </span>
            </h2>
            
            <div className="max-w-6xl mx-auto">
                <div className="p-6 rounded-xl border border-gray-800 bg-[#1A1F2A]/90 backdrop-blur-sm shadow-2xl">
                    {categories.map((category, categoryIndex) => {
                        const selectedSkills = category.skills.filter(skill => skill.selected);
                        if (selectedSkills.length === 0) return null;

                        return (
                            <div key={categoryIndex} className="mb-6 last:mb-0">
                                <h3 className="text-base font-semibold text-gray-200 mb-4 flex items-center">
                                    <span className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-700 to-transparent mr-3" />
                                    <span className="px-3 py-0.5 rounded-full bg-gray-800/50 border border-gray-700/50">
                                        {category.category}
                                    </span>
                                    <span className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-700 to-transparent ml-3" />
                                </h3>
                                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 py-2">
                                    {selectedSkills.map((skill, skillIndex) => (
                                        <SkillCard key={skillIndex} {...skill} />
                                    ))}
                                </div>
                                {categoryIndex < categories.length - 1 && (
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-6" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillSection;