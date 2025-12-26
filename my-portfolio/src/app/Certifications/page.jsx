'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certifications = {
  professional: [
    {
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB',
      date: '22 December 2025',
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
      title: 'AWS Academy Graduate – Machine Learning Foundations',
      issuer: 'AWS',
      date: '19 July 2025',
      imageUrl: '/certificates/aws_ML.png',
      credentialUrl:
        'https://www.credly.com/badges/fb20d0cd-9a6f-48ad-beb4-94766892d09b/public_url',
    },
    {
      title: 'GitHub Foundations',
      issuer: 'GitHub',
      date: '11 May 2025',
      imageUrl: '/certificates/GitHub_Foundations.png',
      credentialUrl:
        'https://www.credly.com/badges/2ec59f92-4680-496b-ae44-5703ca0d2bf9/public_url',
    },
    {
      title: 'Advanced Automation Certification (RPA)',
      issuer: 'Automation Anywhere',
      date: '12 July 2025',
      imageUrl: '/certificates/RPA_advanced_certificate.png',
      credentialUrl:
        'https://certificates.automationanywhere.com/dc4840a2-3703-48bb-871a-fcd3e080ac00',
    },
  ],

  learning: [
    {
      title: 'NVIDIA – LLMs & Prompt Engineering (Foundations)',
      issuer: 'NVIDIA',
      date: '2025',
      imageUrl: '/certificates/nvidia_building_llm.jpeg',
      credentialUrl: '#',
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: '13 November 2024',
      imageUrl: '/certificates/IBM_AIML.png',
      credentialUrl:
        'https://www.credly.com/badges/da1c8193-6b27-4a1e-9530-e28e582d798a/public_url',
    },
    {
      title: 'Essentials Automation Certification',
      issuer: 'Automation Anywhere',
      date: '3 March 2025',
      imageUrl: '/certificates/essentials_rpa.png',
      credentialUrl:
        'https://certificates.automationanywhere.com/916e9a6e-1cc8-488c-b125-c853e68175f4',
    },
    {
      title: 'Red Hat Academy – Program Learner',
      issuer: 'Red Hat',
      date: '31 December 2024',
      imageUrl: '/certificates/redhat_learner.png',
      credentialUrl:
        'https://www.credly.com/badges/d28b2393-4670-48c9-a076-caa2948b2d66/public_url',
    },
  ],
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 90, damping: 14 },
  },
};


const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md
                 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-3xl w-full bg-gradient-to-br
                   from-gray-900 to-black rounded-2xl
                   border border-white/10 p-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
            <p className="text-gray-400 mt-1">
              {cert.issuer} • {cert.date}
            </p>
          </div>

          <div className="relative w-full h-[420px] rounded-xl
                          bg-black border border-white/10 overflow-hidden">
            <Image
              src={cert.imageUrl}
              alt={cert.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex justify-center gap-4">
            {cert.credentialUrl !== '#' && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg
                           bg-gradient-to-r from-blue-500 to-purple-500
                           text-white hover:opacity-90 transition"
              >
                View Credential
              </a>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-gray-600
                         text-gray-300 hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


const CertificationSection = ({ title, subtitle, items, onSelect }) => (
  <section className="mb-20">
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="text-gray-400 mt-1">{subtitle}</p>
    </div>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((cert, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          onClick={() => onSelect(cert)}
          className="group cursor-pointer relative
                     bg-gradient-to-br from-gray-900/70 to-black/70
                     rounded-xl p-6 border border-transparent
                     hover:border-blue-500/80 hover:shadow-blue-500/20
                     transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-800
                            flex items-center justify-center p-2">
              <Image
                src={cert.imageUrl}
                alt={cert.issuer}
                width={42}
                height={42}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-white">{cert.title}</h3>
              <p className="text-sm text-gray-400">
                {cert.issuer} • {cert.date}
              </p>
            </div>
          </div>

          {cert.credentialUrl !== '#' && (
            <a
              onClick={(e) => e.stopPropagation()}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4
                         text-gray-400 hover:text-blue-400 transition"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </motion.div>
      ))}
    </motion.div>
  </section>
);


export default function CertificationsPage() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <main className="container mx-auto px-4 pt-28 pb-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent
                       bg-clip-text bg-gradient-to-r
                       from-blue-400 to-purple-500">
          Certifications
        </h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Industry-recognized credentials and continuous learning that support my
          growth as a full-stack, automation, and cloud-focused developer.
        </p>
      </div>

      <CertificationSection
        title="Industry-Recognized Certifications"
        subtitle="Credentials that demonstrate job-ready technical skills"
        items={certifications.professional}
        onSelect={setActiveCert}
      />

      <CertificationSection
        title="Learning & Foundations"
        subtitle="Exploration, fundamentals, and continuous upskilling"
        items={certifications.learning}
        onSelect={setActiveCert}
      />

      <AnimatePresence>
        {activeCert && (
          <CertificateModal
            cert={activeCert}
            onClose={() => setActiveCert(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

