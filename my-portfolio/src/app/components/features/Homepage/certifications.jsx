'use client';

import Image from "next/image";
import { certifications } from "../../../data/certifications.jsx";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Certifications() {
  return (
    <main className="relative px-4 py-8 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden flex justify-center rounded-3xl">

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
          Certifications
        </h2>

        {/* Certifications Grid */}
        <motion.ul
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, idx) => (
            <motion.li
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-blue-400/30 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-full space-y-2">
                <h3 className="text-lg font-semibold text-white truncate" title={cert.title}>
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {cert.issuer} — {cert.date}
                </p>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm hover:underline inline-flex items-center gap-1 mt-2 transition-all"
                  >
                    View Credential{" "}
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </main>
  );
}

