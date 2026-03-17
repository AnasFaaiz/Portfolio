'use client';
import { motion } from 'framer-motion';
import { experiences } from '@/app/data/experience';

export default function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      <h2 className="text-5xl font-extrabold text-center text-transparent
                       bg-clip-text bg-gradient-to-r
                       from-blue-400 to-purple-500">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex gap-6">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500 mt-2 shadow-md" />
              {idx !== experiences.length - 1 && (
                <div className="w-px flex-1 bg-white/10 mt-1" />
              )}
            </div>

            {/* Content card */}
            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-400">
                  {exp.duration} · {exp.location}
                </span>
              </div>

              <p className="text-sm text-gray-400">
                {exp.orgs}
              </p>

              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

