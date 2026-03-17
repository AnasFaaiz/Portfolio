'use client';

import { skillMatrix } from '../../../data/skills';

const CategoryCard = ({ title, skills }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-7 space-y-5 hover:border-blue-500/30 transition">
      {/* Category Title */}
      <h3 className="text-xl font-semibold text-white text-center tracking-wide">
        {title}
      </h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-1 text-center"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-9 h-9 object-contain"
            />
            <span className="text-xs text-gray-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SkillMatrix() {
  // Group skills by category
  const groupedSkills = skillMatrix.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className="px-4 py-14">
      <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-{2.5rem} p-12 space-y-14">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          My Developer Toolkit
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <CategoryCard
              key={category}
              title={category}
              skills={skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

