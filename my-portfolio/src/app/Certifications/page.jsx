'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certificationsData = [
  {
	title: "Artificial Intelligence Fundamentals",
	issuer: "IBM SkillsBuild",
	date: "13 November 2024",
	imageUrl: "/certificates/IBM_AIML.png",
	credentialUrl: "https://www.credly.com/badges/da1c8193-6b27-4a1e-9530-e28e582d798a/public_url"
  },
  {
	title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
	issuer: "AWS",
	date: "19 July 2025",
	imageUrl: "/certificates/aws_ML.png",
	credentialUrl: "https://www.credly.com/badges/fb20d0cd-9a6f-48ad-beb4-94766892d09b/public_url"
  },
  {
	title: "GitHub Foundations",
	issuer: "GitHub",
	date: "11 May 2025",
	imageUrl: "/certificates/GitHub_Foundations.png",
	credentialUrl: "https://www.credly.com/badges/2ec59f92-4680-496b-ae44-5703ca0d2bf9/public_url"
  },
  {
	title: "2024 Red Hat Academy - Program Learner",
	issuer: "RedHat",
	date: "31 December 2024",
	imageUrl: "/certificates/redhat_learner.png",
	credentialUrl: "https://www.credly.com/badges/d28b2393-4670-48c9-a076-caa2948b2d66/public_url",
  },
  {
	title: "AWS Academy Graduate - AWS Academy Data Engineering",
	issuer: "AWS",
	date: "7 August 2024",
	imageUrl: "/certificates/aws_DE.png",
	credentialUrl: "https://www.credly.com/badges/101f56b5-9d66-4b13-b3ed-81d299f55f12/public_url",
  },
  {
	title: "Advanced Automation Certification",
	issuer: "Automation Anywhere",
	date: "12 July 2025",
	imageUrl: "/certificates/RPA_advanced_certificate.png",
	credentialUrl: "https://certificates.automationanywhere.com/dc4840a2-3703-48bb-871a-fcd3e080ac00#acc.Z39XMNYu",
  },
  {
	title: "Essentials Automation Certification",
	issuer: "Automation Anywhere",
	date: "3 March 2025",
	imageUrl: "/certificates/essentials_rpa.png",
	credentialUrl: "https://certificates.automationanywhere.com/916e9a6e-1cc8-488c-b125-c853e68175f4#acc.5dQB4VuC",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 12,
    },
  },
};

const CertificationsPage = () => {
  return (
    <main className="container mx-auto px-4 pt-28 pb-16">
      {/* Page Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
          My Certifications
        </h1>
        <p className="text-lg text-gray-400">
          A collection of my professional credentials and achievements.
        </p>
      </motion.div>

      {/* Certifications Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            className="group relative
                       bg-gradient-to-br from-gray-900/60 to-black/60 // Dark gradient background
                       border border-transparent // Start with transparent border
                       rounded-xl p-6 shadow-xl // More rounded, stronger shadow
                       hover:border-blue-500/80 // Blue border on hover
                       hover:shadow-blue-500/20 // Blue shadow on hover
                       transition-all duration-300 ease-in-out // Smooth transitions
                       transform hover:-translate-y-1 // Slight lift on hover
                       "
            variants={cardVariants}
          >
            <div className="flex items-center gap-5">
              {/* Image Container with a glowing border on hover */}
              <div className="relative w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center p-2
                          border-2 border-transparent // Default transparent border
                          group-hover:border-blue-500 // Blue border on hover
                          group-hover:shadow-md group-hover:shadow-blue-500/40 // Shadow on hover
                          transition-all duration-300">
                <Image
                  src={cert.imageUrl}
                  alt={`${cert.issuer} logo`}
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-white">{cert.title}</h3>
                <p className="text-sm text-gray-400">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </div>
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 p-1 rounded-full text-gray-500
                         bg-gray-800/50 // Slightly darker background for the icon
                         group-hover:text-blue-400
                         group-hover:bg-blue-600/20 // Blue background on hover
                         transition-all duration-300"
              aria-label={`View credential for ${cert.title}`}
            >
              <ExternalLink size={20} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default CertificationsPage;

