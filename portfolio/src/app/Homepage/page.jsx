'use client';
import { Download, ArrowRight } from "lucide-react";

import Navbar from "@/app/components/layout/Navbar";
import Image from "next/image";
import ProjectSection from "../components/features/Homepage/Projects";
// import BlogsLatest from "../components/features/Homepage/blogs.jsx";
import Certifications from "../components/features/Homepage/certifications.jsx";
import ContactPage from "../Contact/page.jsx";
import { motion } from "framer-motion";
import CosmicSkillTree from "../components/features/Homepage/Skill.jsx";
import { SocialIcon } from "../Contact/page";
import ExperienceSection from "../components/features/Homepage/Experience";

const Homepage = () => {

  const SocialLink = ({ label, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        px-4 py-2
        text-sm font-medium
        text-gray-300
        border border-white/10
        rounded-full
        hover:text-white
        hover:border-blue-400/60
        hover:bg-blue-500/10
        transition-all
      "
    >
      {label}
    </a>
  );

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Soft Decorative Glows */}
      <div className="absolute top-[-5rem] left-[-5rem] w-[25rem] h-[25rem] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[-5rem] right-[-5rem] w-[30rem] h-[30rem] bg-purple-600/20 dark:bg-purple-600/10 rounded-full blur-[100px] z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 pt-24 space-y-4">
          {/* Hero Section */}
          <section className="py-2 flex flex-col md:flex-row items-center gap-10">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
            >
              <Image
                src="/profile.jpeg"
                alt="Anas Faaiz"
                fill
                className="object-cover object-[50%_30%] scale-160"
                priority
              />
            </motion.div>

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 text-center md:text-left space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
                Syed Anas Faaiz
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold text-zinc-600 dark:text-gray-300">
                <strong>Software Engineer · Full Stack & Automation </strong>
              </h2>

              <p className="text-zinc-600 dark:text-gray-400 leading-relaxed">
                <strong>Software Engineer</strong> focused on building scalable full-stack applications and automation-driven systems.
                Passionate about solving real-world problems, designing clean architectures, and turning ideas into usable products.
              </p>

              <p className="text-zinc-600 dark:text-gray-400 leading-relaxed">
                Currently exploring <strong>cloud fundamentals</strong> and learning how modern applications
                scale in production environments.
              </p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {[
                  "Automation",
                  "Open Source Contributor",
                  "Cloud Learner",
                  "Problem Solver",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-600 dark:text-gray-300 hover:border-blue-500 transition">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-500">
                Actively seeking internships / junior roles · Open to remote opportunities
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
                {/* Primary Actions */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <motion.a 
                    href="/Anas_Faaiz_Resume.pdf" 
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm sm:text-base whitespace-nowrap shadow-lg shadow-blue-500/25 transition-all">
                      <Download size={18} className="shrink-0" />
                      Download Resume
                    </button>
                  </motion.a>

                  <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="group flex items-center gap-2 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all px-6 py-2.5 rounded-full font-bold text-sm sm:text-base whitespace-nowrap">
                      Contact Me
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
                    </button>
                  </motion.a>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 sm:ml-6">
                  <SocialIcon
                    imgSrc="https://cdn.simpleicons.org/discord"
                    alt="Discord"
                    link="https://discord.com/users/anasfaaiz"
                  />
                  <SocialIcon
                    imgSrc="https://cdn.simpleicons.org/linkedin"
                    alt="LinkedIn"
                    link="https://linkedin.com/in/anasfaaiz"
                  />
                  <SocialIcon
                    imgSrc="https://cdn.simpleicons.org/x"
                    alt="X (Twitter)"
                    link="https://twitter.com/anasfaaiz"
                  />
                  <SocialIcon
                    imgSrc="https://cdn.simpleicons.org/github"
                    alt="GitHub"
                    link="https://github.com/anasfaaiz"
                  />

                </div>
              </div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section className="scroll-mt-20" id="skills">
            <CosmicSkillTree />
          </section>

          {/* Projects Section */}
          <section className="scroll-mt-20" id="projects">
            <ProjectSection />
          </section>

          {/* Experience Section */}
          <section className="scroll-mt-20" id="experience">
            <ExperienceSection />
          </section>


          {/* Blogs Section */}
          {/*<section className="scroll-mt-20" id="blogs">
            <BlogsLatest />
          </section> */}

          {/* Certifications Section */}
          <section className="scroll-mt-5 mb-2" id="certifications">
            <Certifications />
          </section>

          {/* Contact Section */}
          <section className="scroll-mt-20" id="contact">
            <ContactPage />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Homepage;

