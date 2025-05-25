"use client"
import Image from 'next/image';

const skillCategories = [
    {
        category: "Programming Languages",
        icon: "💻",
        skills: [
            { name: 'JavaScript', image: '/skills/javascript.svg' },
            { name: 'TypeScript', image: '/skills/typescript.svg' },
            { name: 'Python', image: '/skills/python.svg' },
        ]
    },
    {
        category: "Frontend",
        icon: "🎨",
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
        icon: "⚙️",
        skills: [
            { name: 'Node.js', image: '/skills/nodejs.svg' },
            { name: 'Express.js', image: '/skills/express.svg' },
            { name: 'REST API', image: '/skills/api.svg' },
        ]
    },
    {
        category: "Database",
        icon: "🗄️",
        skills: [
            { name: 'MongoDB', image: '/skills/mongodb.svg' },
            { name: 'MySQL', image: '/skills/mysql.svg' },
            { name: 'PostgreSQL', image: '/skills/postgresql.svg' },
        ]
    },
    {
        category: "DevOps",
        icon: "🚀",
        skills: [
            { name: 'Docker', image: '/skills/docker.svg' },
            { name: 'AWS', image: '/skills/aws.svg' },
            { name: 'CI/CD', image: '/skills/cicd.svg' },
        ]
    },
    {
        category: "Testing",
        icon: "🧪",
        skills: [
            { name: 'Jest', image: '/skills/jest.svg' },
            { name: 'React Testing Library', image: '/skills/testing-library.svg' },
        ]
    },
    {
        category: "Others",
        icon: "✨",
        skills: [
            // Tools & IDE
            { name: 'VS Code', image: '/skills/vscode.svg' },
            { name: 'Postman', image: '/skills/postman.svg' },
            { name: 'npm', image: '/skills/npm.svg' },
            // Version Control
            { name: 'Git', image: '/skills/git.svg' },
            { name: 'GitHub', image: '/skills/github.svg' },
            // Content Management
            { name: 'WordPress', image: '/skills/wordpress.svg' },
            { name: 'Strapi', image: '/skills/strapi.svg' },
            // Others
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
    return (
        <section className="py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
                    Skills & Technologies
                </span>
            </h2>
            
            <div className="max-w-6xl mx-auto">
                <div className="p-6 rounded-xl border border-gray-800 bg-[#1A1F2A]/90 backdrop-blur-sm shadow-2xl">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-6 last:mb-0">
                            <h3 className="text-base font-semibold text-gray-200 mb-4 flex items-center">
                                <span className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-700 to-transparent mr-3" />
                                <span className="px-3 py-0.5 rounded-full bg-gray-800/50 border border-gray-700/50">
                                    {category.category}
                                </span>
                                <span className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-700 to-transparent ml-3" />
                            </h3>
                            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 py-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillCard key={skillIndex} {...skill} />
                                ))}
                            </div>
                            {categoryIndex < skillCategories.length - 1 && (
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-6" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillSection;