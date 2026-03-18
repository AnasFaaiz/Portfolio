'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, ChevronLeft, ChevronRight, Play } from 'lucide-react';

/* =========================
   CERT DATA
========================= */

const certifications = [
  {
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB',
    date: '2025',
    imageUrl: '/certificates/mongodb_developer.png',
    credentialUrl: 'https://www.credly.com/badges/1396cd97-3132-4da4-b27c-36989191fbf2/public_url',
  },
  {
    title: 'AWS Academy Graduate – Data Engineering',
    issuer: 'AWS',
    date: '7 August 2024',
    imageUrl: '/certificates/aws_DE.png',
    credentialUrl: 'https://www.credly.com/badges/101f56b5-9d66-4b13-b3ed-81d299f55f12/public_url',
  },
  {
    title: 'Advanced Automation Certification (RPA)',
    issuer: 'Automation Anywhere',
    date: '12 July 2025',
    imageUrl: '/certificates/RPA_advanced_certificate.png',
    credentialUrl: 'https://certificates.automationanywhere.com/dc4840a2-3703-48bb-871a-fcd3e080ac00',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

/* =========================
   MAIN COMPONENT
========================= */

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, children } = scrollRef.current;
      if (children.length > 0) {
        const itemWidth = children[0].offsetWidth;
        const gap = 32;
        const step = itemWidth + gap;

        const scrollTo = direction === 'left' ? scrollLeft - step : scrollLeft + step;
        scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative px-4 py-8 bg-transparent overflow-hidden group/certs">
      {/* Background Decorative Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-[1400px] mx-auto space-y-12"
      >
        {/* Header Area: Same style as Projects */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4 text-left">
          <div className="space-y-3">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5"
            >
              <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <span className="text-slate-500 dark:text-slate-400 text-[9px] font-bold uppercase tracking-[0.25em]">Credentials</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-extralight tracking-[0.15em] uppercase text-slate-800 dark:text-white leading-none"
            >
              Honors & <span className="font-bold tracking-tight lowercase italic text-blue-600 dark:text-blue-400">Certifications</span>
            </motion.h2>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative overflow-hidden sm:overflow-visible">
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 z-20 bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 z-20 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none" />

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 shadow-xl transition-all opacity-0 sm:opacity-70 group-hover/certs:opacity-100 hidden sm:flex active:scale-90"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 shadow-xl transition-all opacity-0 sm:opacity-70 group-hover/certs:opacity-100 hidden sm:flex active:scale-90"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>

          <motion.ul
            ref={scrollRef}
            className="relative z-10 flex gap-8 overflow-x-auto pb-12 pt-4 px-12 sm:px-24 snap-x snap-mandatory no-scrollbar list-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certifications.map((cert, idx) => (
              <motion.li
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group relative flex-shrink-0 w-[85vw] sm:w-[450px] lg:w-[550px] h-[350px] sm:h-[400px] bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl snap-center cursor-pointer border border-slate-200/50 dark:border-white/5 z-10"
                onClick={() => setActiveCert(cert)}
              >
                {/* Certificate Image - Background */}
                <div className="absolute inset-0 z-0 scale-100 group-hover:scale-110 transition-transform duration-1000">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    fill
                    className="object-contain p-4 filter group-hover:brightness-[0.35] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                  <div className="space-y-4 translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <div className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Award size={18} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{cert.issuer}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>

                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {cert.date}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-white hover:text-blue-400 transition-colors">
                          <ExternalLink size={14} />
                          Details
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="fixed inset-0 z-[110] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center px-4 py-12 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-slate-900 rounded-[3rem] max-w-5xl w-full p-6 sm:p-12 border border-slate-200/50 dark:border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden my-auto"
            >
              {/* Premium Glow Background for Modal */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Close Icon - Moved for better accessibility and to avoid navbar overlap */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800/50 backdrop-blur-md text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-slate-200 dark:border-white/10 hover:scale-110 active:scale-95"
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              <div className="relative z-10 space-y-10">
                {/* Certificate Header Tag */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                    <Award size={24} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">{activeCert.issuer}</p>
                    <h4 className="text-xl sm:text-3xl font-black tracking-tight text-slate-800 dark:text-white line-clamp-1">
                      {activeCert.title}
                    </h4>
                  </div>
                </div>

                {/* Certificate Image Viewport */}
                <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-100 dark:border-white/5 group/cert">
                  <Image
                    src={activeCert.imageUrl}
                    alt={activeCert.title}
                    fill
                    className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  
                  {/* Image Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
                </div>

                {/* Modal Footer / Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-4">
                  <div className="flex flex-col items-center sm:items-start gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Issued On</span>
                    <span className="text-lg font-black text-slate-800 dark:text-white tabular-nums tracking-tight">
                      {activeCert.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <a
                      href={activeCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-[0.2em] transition-all shadow-[0_15px_30px_rgba(37,99,235,0.25)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:translate-y-0"
                    >
                      VERIFY CREDENTIAL
                      <ExternalLink size={16} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


