'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

/* =========================
   CERT DATA (OPTION A)
========================= */

const certifications = [
  {
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB',
    date: '2025',
    imageUrl: '/certificates/mongodb_developer.png',
    credentialUrl:
      'https://www.credly.com/badges/1396cd97-3132-4da4-b27c-36989191fbf2/public_url',
  },
  {
    title: 'AWS Academy Graduate – Data Engineering',
    issuer: 'AWS',
    date: '7 August 2024',
    imageUrl: '/certificates/aws_DE.png',
    credentialUrl:
      'https://www.credly.com/badges/101f56b5-9d66-4b13-b3ed-81d299f55f12/public_url',
  },
  {
    title: 'Advanced Automation Certification (RPA)',
    issuer: 'Automation Anywhere',
    date: '12 July 2025',
    imageUrl: '/certificates/RPA_advanced_certificate.png',
    credentialUrl:
      'https://certificates.automationanywhere.com/dc4840a2-3703-48bb-871a-fcd3e080ac00',
  },
];

/* =========================
   MAIN COMPONENT
========================= */

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section className="relative px-6 py-20">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center
                     text-transparent bg-clip-text
                     bg-gradient-to-r from-blue-400 to-purple-500 mb-14">
        Certifications
      </h2>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="group cursor-pointer"
            onClick={() => setActiveCert(cert)}
          >
            {/* IMAGE */}
            <div
              className="relative w-full aspect-[16/10]
                         rounded-2xl overflow-hidden
                         bg-black shadow-xl"
            >
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                fill
                className="object-contain p-4
                           transition-transform duration-300
                           group-hover:scale-[1.02]"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0
                           bg-gradient-to-t from-black/80 via-black/20 to-transparent
                           opacity-90"
              />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-base">
                  {cert.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
                       flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="relative bg-black rounded-2xl
                         max-w-5xl w-full p-4"
            >
              {/* Close */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 z-100 text-gray-300 hover:text-white"
              >
                <X size={22} />
              </button>

              {/* Full Certificate */}
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={activeCert.imageUrl}
                  alt={activeCert.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-4 px-2">
                <div>
                  <h4 className="text-white font-semibold">
                    {activeCert.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {activeCert.issuer} • {activeCert.date}
                  </p>
                </div>

                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             text-blue-400 hover:text-blue-300"
                >
                  View Credential
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

