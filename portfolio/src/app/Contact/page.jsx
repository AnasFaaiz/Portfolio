"use client";

import React from "react";
import { Mail, User, Phone, Send, ArrowRight, Github, Linkedin, Twitter, MessageSquare, X as XIcon } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function ContactPage() {
  return (
    <section className="relative px-4 py-16 bg-transparent overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[45rem] h-[45rem] bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[35rem] h-[35rem] bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1400px] mx-auto space-y-16"
      >
        {/* Header Area: Left Aligned Title */}
        <div className="space-y-3 text-left px-4">
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5"
          >
            <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <span className="text-slate-500 dark:text-slate-400 text-[9px] font-bold uppercase tracking-[0.25em]">Connect</span>
          </motion.div>
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-5xl font-extralight tracking-[0.15em] uppercase text-slate-800 dark:text-white leading-none"
          >
            Let's Start a <span className="font-bold tracking-tight lowercase italic text-blue-600 dark:text-blue-400">Conversation</span>
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-slate-500 dark:text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed font-medium"
          >
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to connect, I'll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-4">
          {/* Main Contact Form / Info Side */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none transition-all hover:border-blue-500/30">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    <Mail size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Email Me</p>
                    <a href="mailto:syed.anasfaaiz@gmail.com" className="text-lg font-black text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words">
                      syed.anasfaaiz@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none transition-all hover:border-blue-500/30">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <MessageSquare size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Text Me</p>
                    <p className="text-lg font-black text-slate-800 dark:text-white tabular-nums">
                      Discord: anasfaaiz
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative p-10 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl shadow-blue-500/30 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 scale-150">
                <Send size={120} />
              </div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-black text-white tracking-tight leading-tight">
                  Have a specific project <br /> in mind?
                </h3>
                <p className="text-blue-100 font-medium max-w-md">
                  I'm always excited to collaborate on innovative ideas or help bring your digital vision to life.
                </p>
                <div className="pt-4">
                  <a href="mailto:syed.anasfaaiz@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl active:scale-95">
                    Say Hello <ArrowRight size={16} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links Side */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={fadeUp} className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-8 px-2">Follow my Work</h3>
              <div className="grid grid-cols-2 gap-4">
                <SocialCard 
                  icon={<Github size={20} />} 
                  name="GitHub"
                  label="Open Source"
                  link="https://github.com/anasfaaiz"
                  color="hover:bg-slate-900 group-hover:text-white"
                />
                <SocialCard 
                  icon={<Linkedin size={20} />} 
                  name="LinkedIn"
                  label="Professional"
                  link="https://linkedin.com/in/anasfaaiz"
                  color="hover:bg-[#0077B5] group-hover:text-white"
                />
                <SocialCard 
                  icon={<XIcon size={20} />} 
                  name="X"
                  label="Thoughts"
                  link="https://twitter.com/anasfaaiz"
                  color="hover:bg-black group-hover:text-white"
                />
                <SocialCard 
                  icon={<MessageSquare size={20} />} 
                  name="Discord"
                  label="Chat"
                  link="https://discord.com/users/anasfaaiz"
                  color="hover:bg-[#5865F2] group-hover:text-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SocialCard({ icon, name, label, link, color }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`group block p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 shadow-sm transition-all duration-300 ${color}`}>
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-white/20 group-hover:!text-white transition-all">
          {icon}
        </div>
        <div>
          <p className="text-sm font-black text-slate-800 dark:text-white group-hover:!text-white transition-colors">{name}</p>
          <p className="text-[10px] font-bold text-slate-400 group-hover:!text-white transition-colors uppercase tracking-widest">{label}</p>
        </div>
      </div>
    </a>
  );
}

export function SocialIcon({ imgSrc, alt, link, size = 20 }) {
  return (
    <motion.a
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm group"
    >
      <img
        src={imgSrc}
        alt={alt}
        width={size}
        height={size}
        className="object-contain transition-all duration-300 brightness-0 dark:invert group-hover:brightness-0 group-hover:invert"
      />
    </motion.a>
  );
}

