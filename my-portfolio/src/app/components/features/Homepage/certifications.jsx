'use client';

import Image from "next/image";
import { certifications } from "../../../data/certifications.jsx";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Certifications() {
  return (
    <section className="relative py-16 px-4 sm:px-8">
      {/* Background Glow / Decorative Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full -z-10" />

      {/* Outer Glassy Container */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-7xl mx-auto bg-[#1A1F2A]/70 backdrop-blur-lg border border-blue-400/10 rounded-3xl shadow-[0_0_40px_#00000020] ring-1 ring-blue-500/10 transition-all duration-300"
      >
        <div className="py-12 px-6 sm:px-10">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
              Certifications
            </span>
          </h2>

          {/* Cards Grid */}
          <motion.ul
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((cert, idx) => (
              <motion.li
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="relative group bg-[#212936]/80 border border-gray-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-400/30 transition-all duration-300"
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

                {/* Card Content */}
                <div className="p-5 flex flex-col justify-between h-full">
                  <h3
                    className="text-lg sm:text-xl font-semibold text-white truncate"
                    title={cert.title}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {cert.issuer} — {cert.date}
                  </p>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 text-sm hover:underline mt-3 inline-flex items-center gap-1 transition-all"
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
        </div>
      </motion.div>
    </section>
  );
}

